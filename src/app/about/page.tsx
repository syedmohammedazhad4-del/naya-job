import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "About — NayaJob",
  description: "Why we built NayaJob, who's behind it, and what we won't do.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <div className="text-[12px] uppercase tracking-[0.18em] text-ochre font-medium">
          About
        </div>
        <h1 className="mt-3 font-display font-light text-h1 text-ink leading-tight">
          A tiny note from a 22-year-old engineer in Hyderabad.
        </h1>

        <div className="prose-sized mt-10 space-y-6 text-[17px] leading-[1.75] text-ink-2">
          <p>
            I&rsquo;m Syed. I graduated last year. Got my first job in IT
            services. And in the first six months, I watched myself and my
            entire batch fumble through things nobody had taught us &mdash;
            old vs new tax regime, UAN activation, HRA rent receipts, ITR
            filing, independent health insurance.
          </p>
          <p>
            We weren&rsquo;t lazy. We weren&rsquo;t stupid. The information
            was just &mdash; everywhere. In legal-speak. Outdated. Buried in
            14-page HR docs nobody reads. Or scattered across 47 conflicting
            articles on Google.
          </p>
          <p className="text-ink">
            So I started writing it down. The 30-something things every
            fresher actually needs to do, in order, with deadlines, in plain
            English. And then I made it personalized, because not everyone
            needs everything. That&rsquo;s NayaJob.
          </p>
          <p>
            It&rsquo;s built solo, from Hyderabad, in the open. The data is
            on GitHub. The privacy policy is in plain English. My phone
            number is on every receipt. If we make a mistake on a govt rule,
            you can call me out and I&rsquo;ll fix it within 24 hours.
          </p>

          <hr className="border-border my-12" />

          <h2 className="font-display text-h2 text-ink leading-tight">
            What we won&rsquo;t do.
          </h2>
          <ul className="space-y-3">
            <li>
              <span className="text-ink">No data sale.</span> Ever. Not to
              insurers, not to banks, not to lead generators.
            </li>
            <li>
              <span className="text-ink">No AI hallucination.</span> Our
              chatbot answers strictly from our verified content. If it
              doesn&rsquo;t know, it says so &mdash; and links to the
              official source.
            </li>
            <li>
              <span className="text-ink">No fake urgency.</span> No
              countdown timers. No &ldquo;5 spots left.&rdquo; If we have
              to manipulate you to pay, we&rsquo;re not earning it.
            </li>
            <li>
              <span className="text-ink">No financial advice.</span> We
              don&rsquo;t recommend specific stocks, mutual funds, or
              insurance products with commissions. We tell you what
              categories you need; you pick the provider.
            </li>
            <li>
              <span className="text-ink">No legal advice.</span> We
              translate govt processes into plain English. For anything
              that needs a CA, lawyer, or doctor, we say so &mdash; and
              partner you with one.
            </li>
          </ul>

          <hr className="border-border my-12" />

          <h2 className="font-display text-h2 text-ink leading-tight">
            How to reach me.
          </h2>
          <ul className="space-y-2">
            <li>Email: hi@nayajob.in</li>
            <li>WhatsApp: +91 ••••• ••••• (set up after launch)</li>
            <li>Twitter / X: @nayajob</li>
            <li>GitHub: github.com/nayajob</li>
          </ul>

          <p className="mt-12 text-[15px] text-ink-3">
            If you&rsquo;re a fresher reading this and something
            doesn&rsquo;t make sense, that&rsquo;s on me &mdash; not you.
            Email and I&rsquo;ll fix the page.
          </p>
        </div>

        <div className="mt-14">
          <Link
            href="/start"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-bg px-6 py-3 text-[14px] font-medium hover:bg-ochre transition-colors"
          >
            Get my roadmap → free
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
