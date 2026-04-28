import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { UrgencyBadge } from "@/components/UrgencyBadge";
import { MarkDoneButton } from "@/components/MarkDoneButton";
import { ITEMS, findItem } from "@/data/items";
import { categoryLabel, formatVerified } from "@/lib/format";

// Static export → emit one HTML page per slug at build time.
export async function generateStaticParams() {
  return ITEMS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const item = findItem(params.slug);
  if (!item) return { title: "Not found — NayaJob" };
  return {
    title: `${item.title} — NayaJob`,
    description: item.whyShort,
  };
}

export default function ItemPage({ params }: { params: { slug: string } }) {
  const item = findItem(params.slug);
  if (!item) notFound();

  // Find related items: same category, different slug, top 3.
  const related = ITEMS.filter(
    (i) => i.category === item.category && i.slug !== item.slug,
  ).slice(0, 3);

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <Link
          href="/roadmap/"
          className="inline-flex items-center gap-2 text-[13px] text-ink-2 hover:text-ink transition-colors"
        >
          ← Back to roadmap
        </Link>

        <header className="mt-8">
          <div className="flex items-center gap-3 flex-wrap">
            <UrgencyBadge urgency={item.urgency} />
            <span className="text-ink-4">·</span>
            <span className="text-[11px] uppercase tracking-[0.12em] text-ink-3">
              {categoryLabel(item.category)}
            </span>
            {item.premium && (
              <>
                <span className="text-ink-4">·</span>
                <span className="text-[11px] uppercase tracking-[0.12em] text-ochre font-mono">
                  Premium
                </span>
              </>
            )}
          </div>
          <h1 className="mt-4 font-display font-light text-h1 text-ink leading-tight">
            {item.title}
          </h1>
          <p className="mt-5 text-[18px] leading-[1.6] text-ink-2 max-w-prose">
            {item.whyShort}
          </p>
        </header>

        {/* Quick facts strip */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Fact label="Deadline" value={item.deadline} />
          <Fact label="Documents" value={item.documents.join(", ")} />
        </div>

        {/* Why it matters */}
        <Section title="Why this matters">
          <p>{item.whyLong}</p>
        </Section>

        {/* How to do it */}
        <Section title="How to do it">
          <ol className="space-y-3 list-none pl-0">
            {item.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-[13px] text-ochre shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[16px] leading-relaxed text-ink-2">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </Section>

        {/* Source */}
        <Section title="Official source">
          <a
            href={item.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-3 hover:border-ochre hover:bg-paper/50 transition-colors group"
          >
            <span className="text-[14px] text-ink group-hover:text-ochre">
              {item.sourceTitle}
            </span>
            <span className="text-ink-4 group-hover:text-ochre">↗</span>
          </a>
          <div className="mt-3 stamp">
            <CheckIcon /> Verified {formatVerified(item.verifiedAt)}
          </div>
        </Section>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-3">
          <MarkDoneButton slug={item.slug} />
          <Link
            href={`/chat/?q=${encodeURIComponent(item.title)}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-[14px] font-medium text-ink hover:bg-paper transition-colors"
          >
            Ask a follow-up →
          </Link>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <Section title="Related items">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/item/${r.slug}/`}
                  className="block rounded-lg border border-border p-4 hover:border-ink/30 hover:bg-paper/50 transition-colors"
                >
                  <UrgencyBadge urgency={r.urgency} />
                  <div className="mt-2 text-[14.5px] text-ink leading-snug">
                    {r.title}
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        )}

        {/* Disclaimer */}
        <div className="mt-16 text-[12px] text-ink-3 leading-relaxed border-t border-border pt-6">
          NayaJob is informational. We are not a CA, lawyer, or financial
          advisor. Rules change &mdash; always verify against the official
          source linked above before acting. If you spot a mistake, email{" "}
          <span className="text-ink">hi@nayajob.in</span> and we&rsquo;ll fix
          it within 24 hours.
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <div className="text-[12px] uppercase tracking-[0.16em] text-ochre font-medium">
        {title}
      </div>
      <div className="mt-4 text-[16px] leading-[1.7] text-ink-2 max-w-prose">
        {children}
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-paper/50 px-4 py-3">
      <div className="text-[11px] uppercase tracking-[0.12em] text-ink-3">
        {label}
      </div>
      <div className="mt-1 text-[14px] text-ink leading-snug">{value}</div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 6.5L4.7 9L10 3.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
