import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Changelog — NayaJob",
  description: "Every public change to NayaJob, in reverse chronological order.",
};

const ENTRIES = [
  {
    date: "2026-04-27",
    version: "v0.2",
    title: "Working roadmap engine + 40 item guides + smart search",
    bullets: [
      "Multi-step intake at /start collects joining month, CTC band, city, living situation.",
      "Rule-based personalization filters items per profile (e.g. no HRA/rent items if living with parents; NPS only at higher CTC bands).",
      "Each of the 40 items has its own static page — title, why, 5-step how, documents, deadline, official source, verified date.",
      "Mark-as-done state persists in localStorage. Progress bar updates everywhere.",
      "Smart search at /chat — keyword match across all 40 items. Honest, fast, no API key.",
      "/sources page lists every cited official source.",
      "All trust pages: /about, /sources, /changelog, /privacy.",
    ],
  },
  {
    date: "2026-04-27",
    version: "v0.1",
    title: "Landing page + scaffolding",
    bullets: [
      "Landing page with hero, problem, sample roadmap, pricing, FAQ, founder note.",
      "Editorial design system: cream paper, Fraunces serif headlines, Inter body, ochre accent.",
      "Static export config + GitHub Actions deploy to GitHub Pages.",
      "Public preview live at the GitHub Pages URL within 4 minutes of first commit.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="text-[12px] uppercase tracking-[0.18em] text-ochre font-medium">
          Changelog
        </div>
        <h1 className="mt-3 font-display font-light text-h1 text-ink leading-tight">
          What we shipped, when, and why.
        </h1>
        <p className="mt-4 text-[16px] text-ink-2 max-w-prose leading-relaxed">
          Built in the open. Every meaningful change lands here. Govt rule
          updates that affect existing items are tagged with{" "}
          <span className="font-mono text-ochre">[content]</span>; product
          changes with <span className="font-mono text-ochre">[product]</span>.
        </p>

        <div className="mt-14 space-y-14">
          {ENTRIES.map((e) => (
            <article key={e.version} className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-3">
                <div className="font-mono text-[12px] text-ink-3">{e.date}</div>
                <div className="font-display text-[28px] tracking-tighter text-ochre mt-1">
                  {e.version}
                </div>
              </div>
              <div className="md:col-span-9">
                <h2 className="font-display text-[24px] tracking-tightish text-ink leading-snug">
                  {e.title}
                </h2>
                <ul className="mt-4 space-y-2 text-[14.5px] leading-relaxed text-ink-2">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-ochre">·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-2xl border border-border bg-paper/60 p-8 text-center">
          <h3 className="font-display text-[22px] tracking-tightish text-ink">
            Want to know when we ship next?
          </h3>
          <p className="mt-2 text-[14px] text-ink-2">
            v0.3 brings WhatsApp reminders. v0.5 brings Gemini Flash AI chat.
            Drop a note at{" "}
            <span className="text-ink">hi@nayajob.in</span>.
          </p>
          <Link
            href="/start/"
            className="mt-6 inline-flex rounded-full bg-ink text-bg px-6 py-3 text-[14px] font-medium hover:bg-ochre transition-colors"
          >
            Get my roadmap → free
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
