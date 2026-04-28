"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ItemRow } from "@/components/ItemRow";
import { ProgressBar } from "@/components/ProgressBar";
import { groupByUrgency, personalize, describeProfile } from "@/lib/personalize";
import { loadUserState, toggleDone } from "@/lib/storage";
import { urgencyColor, urgencyLabel } from "@/lib/format";
import type { UserState, Urgency } from "@/lib/types";
import { EMPTY_USER_STATE } from "@/lib/types";

const URGENCY_ORDER: Urgency[] = [
  "this-week",
  "this-month",
  "this-year",
  "situational",
];

export default function RoadmapPage() {
  const [state, setState] = useState<UserState>(EMPTY_USER_STATE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(loadUserState());
    setHydrated(true);
  }, []);

  const items = useMemo(
    () => personalize(state.profile),
    [state.profile],
  );
  const groups = useMemo(() => groupByUrgency(items), [items]);
  const doneCount = items.filter((i) =>
    state.doneSlugs.includes(i.slug),
  ).length;

  function handleToggle(slug: string) {
    const next = toggleDone(slug);
    setState(next);
  }

  if (!hydrated) {
    return (
      <>
        <Nav />
        <main className="mx-auto max-w-wide px-6 py-20">
          <div className="text-ink-3 text-[14px]">Loading your roadmap…</div>
        </main>
        <Footer />
      </>
    );
  }

  // No profile yet → bounce them to /start with friendly UI
  if (!state.profile.joiningMonth && !state.profile.city) {
    return (
      <>
        <Nav />
        <main className="mx-auto max-w-2xl px-6 py-24 text-center">
          <div className="text-[12px] uppercase tracking-[0.18em] text-ochre font-medium">
            No roadmap yet
          </div>
          <h1 className="mt-3 font-display font-light text-h1 text-ink">
            Let&rsquo;s get your 4 answers first.
          </h1>
          <p className="mt-4 text-ink-2">
            Sixty seconds. Four questions. Your roadmap is generated instantly.
          </p>
          <div className="mt-8">
            <Link
              href="/start/"
              className="inline-flex rounded-full bg-ink text-bg px-6 py-3 text-[14px] font-medium hover:bg-ochre transition-colors"
            >
              Start →
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-wide px-6 py-12 md:py-16">
        {/* Header card */}
        <div className="rounded-2xl border border-border bg-bg p-6 md:p-8 shadow-[0_1px_0_rgba(0,0,0,0.02),0_30px_60px_-30px_rgba(15,15,15,0.12)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-7">
              <div className="text-[12px] uppercase tracking-[0.18em] text-ochre font-medium">
                Your roadmap
              </div>
              <h1 className="mt-2 font-display font-light text-h1 text-ink leading-tight">
                {items.length} actions, sorted for you.
              </h1>
              <p className="mt-3 text-[14px] text-ink-2 font-mono">
                {describeProfile(state.profile) || "—"}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link
                  href="/start/"
                  className="text-[12px] text-ink-3 hover:text-ink underline-offset-2 hover:underline"
                >
                  Edit answers
                </Link>
                <span className="text-ink-4">·</span>
                <Link
                  href="/chat/"
                  className="text-[12px] text-ink-3 hover:text-ink underline-offset-2 hover:underline"
                >
                  Ask a question
                </Link>
                <span className="text-ink-4">·</span>
                <Link
                  href="/sources/"
                  className="text-[12px] text-ink-3 hover:text-ink underline-offset-2 hover:underline"
                >
                  Sources
                </Link>
              </div>
            </div>
            <div className="md:col-span-5">
              <ProgressBar done={doneCount} total={items.length} />
              <div className="mt-4 grid grid-cols-4 gap-1.5">
                {URGENCY_ORDER.map((u) => (
                  <div
                    key={u}
                    className="rounded-md border border-border bg-paper/50 p-2"
                    title={urgencyLabel(u)}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${urgencyColor(u)}`} />
                      <span className="font-mono text-[10px] text-ink-3 uppercase tracking-widest">
                        {groups[u].length}
                      </span>
                    </div>
                    <div className="mt-1 text-[11px] text-ink leading-tight">
                      {urgencyLabel(u)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Groups */}
        <div className="mt-12 space-y-12">
          {URGENCY_ORDER.map((u) => {
            const list = groups[u];
            if (list.length === 0) return null;
            return (
              <section key={u}>
                <header className="flex items-baseline justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`w-2.5 h-2.5 rounded-full ${urgencyColor(u)}`} />
                    <h2 className="font-display text-[24px] tracking-tightish text-ink">
                      {urgencyLabel(u)}
                    </h2>
                  </div>
                  <div className="font-mono text-[12px] text-ink-3">
                    {list.filter((i) => state.doneSlugs.includes(i.slug)).length} /{" "}
                    {list.length}
                  </div>
                </header>
                <div className="space-y-2">
                  {list.map((item) => (
                    <ItemRow
                      key={item.slug}
                      item={item}
                      done={state.doneSlugs.includes(item.slug)}
                      onToggle={() => handleToggle(item.slug)}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Footer CTAs */}
        <div className="mt-20 rounded-2xl border border-border bg-paper/60 p-8 md:p-10 text-center">
          <h3 className="font-display text-[28px] tracking-tightish text-ink leading-tight">
            Stuck on one of these?
          </h3>
          <p className="mt-3 text-[14.5px] text-ink-2 max-w-prose mx-auto">
            Search our verified content for any question — like{" "}
            <em>&ldquo;how to activate UAN if mobile is not seeded&rdquo;</em> or{" "}
            <em>&ldquo;HRA receipt format&rdquo;</em>.
          </p>
          <div className="mt-6">
            <Link
              href="/chat/"
              className="inline-flex rounded-full bg-ink text-bg px-6 py-3 text-[14px] font-medium hover:bg-ochre transition-colors"
            >
              Ask a question →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
