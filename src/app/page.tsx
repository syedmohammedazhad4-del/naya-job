import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <HowItWorks />
        <SampleRoadmap />
        <WhatYouGet />
        <WhyTrust />
        <Pricing />
        <FAQ />
        <FounderNote />
      </main>
      <Footer />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    HERO                                    */
/* -------------------------------------------------------------------------- */
function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-wide px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="text-[12px] uppercase tracking-[0.18em] text-ochre font-medium mb-6">
              For India&rsquo;s first-time earners
            </div>
            <h1 className="font-display font-light text-display text-ink">
              The govt + money checklist
              <br />
              <span className="italic font-normal">no one told you about</span>
              <br />
              when you started your first job.
            </h1>
            <p className="mt-8 max-w-prose text-[18px] leading-relaxed text-ink-2">
              In 60 seconds we generate a personalized 12-month roadmap of every{" "}
              <span className="text-ink">PAN</span>,{" "}
              <span className="text-ink">UAN</span>,{" "}
              <span className="text-ink">HRA</span>,{" "}
              <span className="text-ink">ITR</span>, insurance and tax decision
              you actually need to make &mdash; sorted by what&rsquo;s urgent
              for <em>you</em>.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/start"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink text-bg px-7 py-4 text-[15px] font-medium hover:bg-ochre transition-colors"
              >
                Get my roadmap &rarr; free
              </Link>
              <Link
                href="#how"
                className="inline-flex items-center gap-2 text-[15px] text-ink-2 hover:text-ink transition-colors"
              >
                How it works
                <span aria-hidden>&darr;</span>
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-ink-3">
              <li className="inline-flex items-center gap-1.5">
                <CheckIcon /> No login, no spam
              </li>
              <li className="inline-flex items-center gap-1.5">
                <CheckIcon /> Verified sources only
              </li>
              <li className="inline-flex items-center gap-1.5">
                <CheckIcon /> 30-day money back on Premium
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <RoadmapPreviewCard compact />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 TRUST STRIP                                */
/* -------------------------------------------------------------------------- */
function TrustStrip() {
  const items = [
    "Built for fresh hires at TCS, Infosys, Wipro, Cognizant, Tech Mahindra, Capgemini",
    "Sources: EPFO, Income Tax Dept, UIDAI, MyScheme, state revenue depts",
    "Cited & dated. Reviewed monthly. Open changelog.",
    "Made in Hyderabad. Not in Bangalore.",
  ];
  return (
    <section className="border-y border-border bg-paper/60">
      <div className="overflow-hidden">
        <div className="flex gap-12 py-4 drift whitespace-nowrap text-[13px] text-ink-2">
          {[...items, ...items, ...items].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-3">
              <span className="text-ochre">&bull;</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  PROBLEM                                   */
/* -------------------------------------------------------------------------- */
function Problem() {
  return (
    <section id="problem" className="mx-auto max-w-wide px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="mt-3 font-display font-light text-h1 text-ink">
            If you joined your first job last year, this probably happened
            to you.
          </h2>
        </div>

        <div className="md:col-span-7 space-y-6 text-[17px] leading-[1.7] text-ink-2 max-w-prose">
          <p>
            You signed your offer letter and 14 pages of HR documents in one
            weekend. You picked &ldquo;New regime&rdquo; because it sounded
            modern. Three months later you discovered your colleague who picked
            &ldquo;Old&rdquo; is paying{" "}
            <span className="text-ink font-medium">&#8377;15,000 less</span> in
            tax than you for the year.
          </p>
          <p>
            You tried to activate your <span className="text-ink">UAN</span>{" "}
            &mdash; turns out your mobile wasn&rsquo;t seeded. You skipped
            independent health insurance because the company had one. Then
            your mom needed surgery and you found out the corporate plan has a
            &#8377;50,000 sub-limit on certain claims. Then July 31 came and
            went, and you forgot to file your ITR, and the email came in
            October.
          </p>
          <p className="text-ink">
            You&rsquo;re not stupid. The system is just badly explained. We
            fixed that.
          </p>

          <div className="grid grid-cols-2 gap-3 mt-8">
            <Fact n="₹15,000+" label="avg lost to wrong tax regime in year 1" />
            <Fact n="73%" label="of freshers don't activate UAN in 6 months" />
            <Fact n="1 in 4" label="first-time filers misses ITR deadline" />
            <Fact n="~150k" label="fresh IT hires in Hyderabad alone, every year" />
          </div>
          <p className="text-[12px] text-ink-3">
            Sources: EPFO Annual Report 2023&ndash;24, IT Dept e-filing
            statistics, NASSCOM Hyderabad chapter.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                HOW IT WORKS                                */
/* -------------------------------------------------------------------------- */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Tell us 4 things",
      body: "When you joined, your CTC band, your city, your living situation. Sixty seconds. No login.",
    },
    {
      n: "02",
      title: "Get your personalized roadmap",
      body: "32 actions out of a possible 40, prioritized by urgency. What's due this week, this month, this year.",
    },
    {
      n: "03",
      title: "Do them, one at a time",
      body: "Each item: why it matters, 5-step how, documents needed, deadline, and the exact official link.",
    },
    {
      n: "04",
      title: "We nudge you on WhatsApp",
      body: "Smart reminders before deadlines. The kind your dad would send if he knew this stuff.",
    },
  ];
  return (
    <section id="how" className="bg-paper/60 border-y border-border">
      <div className="mx-auto max-w-wide px-6 py-24">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="mt-3 font-display font-light text-h1 text-ink max-w-3xl">
          Four steps. No app to download. No HR calls.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-px bg-border-strong rounded-2xl overflow-hidden">
          {steps.map((s) => (
            <div key={s.n} className="bg-bg p-7 md:p-8">
              <div className="font-mono text-[12px] text-ochre">{s.n}</div>
              <div className="mt-3 font-display text-[22px] tracking-tightish leading-tight text-ink">
                {s.title}
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-2">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              SAMPLE ROADMAP                                */
/* -------------------------------------------------------------------------- */
function SampleRoadmap() {
  return (
    <section id="sample" className="mx-auto max-w-wide px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Eyebrow>Sample roadmap</Eyebrow>
          <h2 className="mt-3 font-display font-light text-h1 text-ink">
            What a 22-year-old joining TCS at &#8377;4.5L in Hyderabad sees.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-2 max-w-prose">
            Not a generic article. Not a 3,000-scheme database. A specific,
            ranked, deadline-aware list based on the four things you told us.
            Below is a real preview &mdash; one of thousands of possible
            outputs.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Tag>Joining May 2026</Tag>
            <Tag>₹3–5L CTC</Tag>
            <Tag>Hyderabad</Tag>
            <Tag>Shared flat</Tag>
          </div>
          <p className="mt-8 text-[14px] text-ink-3 max-w-prose">
            Tap any item on the live product to see the full guide,
            documents, official links, and a &ldquo;mark as done&rdquo;
            toggle. Updated April 2026.
          </p>
        </div>

        <div className="lg:col-span-7">
          <RoadmapPreviewCard />
        </div>
      </div>
    </section>
  );
}

function RoadmapPreviewCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="rounded-2xl border border-border bg-bg shadow-[0_1px_0_rgba(0,0,0,0.02),0_30px_60px_-30px_rgba(15,15,15,0.18)] overflow-hidden">
      <div className="px-5 py-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-ochre" />
          <div className="text-[13px] font-medium">
            Ravi&rsquo;s 12-month roadmap
          </div>
        </div>
        <div className="text-[11px] font-mono text-ink-3">32 / 40 items</div>
      </div>

      <div className="p-5 md:p-6 space-y-6">
        <RoadmapGroup
          color="bg-ochre"
          label="Do this week"
          count={5}
          items={[
            { t: "Activate your EPF UAN", due: "Within 30 days of joining" },
            { t: "Link PAN with Aadhaar", due: "Already deadline-passed — ₹1,000 fine to relink" },
            { t: "Submit Form 12BB to TCS HR", due: "By Day 15 of joining" },
            { t: "Choose: Old vs New tax regime", due: "First payroll cycle" },
            ...(compact
              ? []
              : [{ t: "Set up nominee on salary account", due: "This week" }]),
          ]}
        />
        {!compact && (
          <>
            <RoadmapGroup
              color="bg-amber"
              label="Do this month"
              count={9}
              items={[
                { t: "Buy independent health insurance", due: "Before changing jobs ever" },
                { t: "Set up emergency fund (₹50,000)", due: "By Month 3" },
                { t: "Open one ELSS SIP for 80C", due: "Before Jan 2027" },
              ]}
              footer="+6 more"
            />
            <RoadmapGroup
              color="bg-forest"
              label="Do this year"
              count={18}
              items={[
                { t: "File ITR-1 between Jun–Jul 2027", due: "By 31 Jul 2027" },
                { t: "Verify ITR within 30 days of filing", due: "Aug 2027" },
                { t: "PF transfer if you switch jobs", due: "Within 30 days of new joining" },
              ]}
              footer="+15 more"
            />
          </>
        )}
      </div>

      <div className="px-5 py-4 border-t border-border flex items-center justify-between bg-paper/60">
        <span className="stamp">
          <CheckIcon className="text-forest" /> Verified Apr 2026
        </span>
        <span className="text-[11px] text-ink-3 font-mono">
          Sources cited per item
        </span>
      </div>
    </div>
  );
}

function RoadmapGroup({
  color,
  label,
  count,
  items,
  footer,
}: {
  color: string;
  label: string;
  count: number;
  items: { t: string; due: string }[];
  footer?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <span className={`w-2 h-2 rounded-full ${color}`} />
        <div className="text-[12px] uppercase tracking-[0.12em] text-ink-3">
          {label} <span className="text-ink-4">· {count}</span>
        </div>
      </div>
      <ul className="space-y-2">
        {items.map((it) => (
          <li
            key={it.t}
            className="group flex items-start justify-between gap-4 px-3 py-2.5 rounded-lg border border-border hover:border-ink/30 hover:bg-paper/60 transition-colors cursor-pointer"
          >
            <div>
              <div className="text-[14.5px] text-ink leading-tight">
                {it.t}
              </div>
              <div className="text-[12px] text-ink-3 mt-1">{it.due}</div>
            </div>
            <span className="text-ink-4 group-hover:text-ochre transition-colors">
              &rarr;
            </span>
          </li>
        ))}
      </ul>
      {footer && (
        <div className="text-[12px] text-ink-3 ml-5 mt-2">{footer}</div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                WHAT YOU GET                                */
/* -------------------------------------------------------------------------- */
function WhatYouGet() {
  const features = [
    {
      h: "A roadmap that's actually yours",
      p: "Not a generic article. The 30+ items are filtered + reordered for your salary, city, joining month, and living setup.",
    },
    {
      h: "Step-by-step guides written by humans",
      p: "Plain English. Five steps max per item. Document list. Deadline. Official link. Verified monthly with a date stamp.",
    },
    {
      h: "WhatsApp + email reminders",
      p: "We nudge you 7 days before each deadline. Form 12BB, ITR filing, insurance proof submission. The kind your dad would send if he knew.",
    },
    {
      h: "AI that doesn't make stuff up",
      p: "Our chatbot answers strictly from our verified content. No hallucinated scheme names. No fabricated deadlines. Sources every time.",
    },
  ];
  return (
    <section className="mx-auto max-w-wide px-6 py-24">
      <Eyebrow>What you get</Eyebrow>
      <h2 className="mt-3 font-display font-light text-h1 text-ink max-w-3xl">
        Four things, done well. Nothing else.
      </h2>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
        {features.map((f, i) => (
          <div key={f.h} className="bg-bg p-8 md:p-10">
            <div className="font-mono text-[12px] text-ochre mb-4">
              0{i + 1}
            </div>
            <h3 className="font-display text-[26px] tracking-tightish leading-tight text-ink">
              {f.h}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-2 max-w-prose">
              {f.p}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  WHY TRUST                                 */
/* -------------------------------------------------------------------------- */
function WhyTrust() {
  const items = [
    {
      h: "Every claim cited",
      p: "Each guide links to the official EPFO / IT Dept / UIDAI / state revenue page it's based on.",
    },
    {
      h: "Dated & versioned",
      p: "Every item carries a 'verified as of' stamp. Reviewed once a month. Public changelog.",
    },
    {
      h: "Open data layer",
      p: "Our 40-item knowledge base lives in the open on GitHub. Anyone can audit it. Pull requests welcome.",
    },
    {
      h: "No data sale, ever",
      p: "We never sell your information. We don't share with insurers, banks, or marketers. Privacy in plain English.",
    },
    {
      h: "Money-back guarantee",
      p: "30 days, full refund on Premium, no questions. If we don't help you, we don't deserve your money.",
    },
    {
      h: "A real person, by name",
      p: "I'm Syed. I'm 22. I'm an engineer in Hyderabad. My number is on every receipt. This isn't a faceless app.",
    },
  ];
  return (
    <section className="bg-paper/60 border-y border-border">
      <div className="mx-auto max-w-wide px-6 py-24">
        <Eyebrow>Why trust this</Eyebrow>
        <h2 className="mt-3 font-display font-light text-h1 text-ink max-w-3xl">
          Govt + money is sensitive. We earn the trust we ask for.
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
          {items.map((it) => (
            <div key={it.h}>
              <div className="font-display text-[20px] tracking-tightish text-ink leading-tight">
                {it.h}
              </div>
              <p className="mt-2 text-[14.5px] text-ink-2 leading-relaxed">
                {it.p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  PRICING                                   */
/* -------------------------------------------------------------------------- */
function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-wide px-6 py-24">
      <Eyebrow>Pricing</Eyebrow>
      <h2 className="mt-3 font-display font-light text-h1 text-ink max-w-3xl">
        Start free. Upgrade once, if it&rsquo;s worth it.
      </h2>
      <p className="mt-4 max-w-prose text-[16px] text-ink-2">
        ₹399 one-time to avoid even one wrong tax-regime call (~₹15,000 lost
        the first year). Lifetime access for your first job year. No
        recurring charges, no auto-renewal.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <PricingCard
          tier="Free"
          price="₹0"
          subPrice="forever"
          features={[
            "Personalized 12-month roadmap",
            "All 30+ item guides — text",
            "Email reminders for deadlines",
            "5 AI follow-up questions / month",
            "Sources cited per item",
          ]}
          ctaLabel="Start free →"
          ctaHref="/start"
        />
        <PricingCard
          tier="Premium"
          price="₹399"
          subPrice="one-time, lifetime"
          highlight
          features={[
            "Everything in Free",
            "WhatsApp reminders, smart-timed",
            "Unlimited AI chat, on every item",
            "Done-for-you templates: rent agreement, HRA declaration, resignation, ITR walkthrough",
            "Priority email support (24h)",
            "30-day money-back guarantee",
          ]}
          ctaLabel="Get Premium →"
          ctaHref="/start?tier=premium"
        />
      </div>
    </section>
  );
}

function PricingCard({
  tier,
  price,
  subPrice,
  features,
  ctaLabel,
  ctaHref,
  highlight,
}: {
  tier: string;
  price: string;
  subPrice: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-8 md:p-10 ${
        highlight
          ? "border-ink bg-ink text-bg"
          : "border-border bg-bg"
      }`}
    >
      <div className="flex items-baseline justify-between">
        <div
          className={`text-[12px] uppercase tracking-[0.16em] ${
            highlight ? "text-ochre-soft" : "text-ochre"
          }`}
        >
          {tier}
        </div>
        {highlight && (
          <div className="text-[10px] font-mono uppercase tracking-widest text-ochre-soft">
            Most picked
          </div>
        )}
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <div className="font-display text-[44px] tracking-tighter leading-none">
          {price}
        </div>
        <div
          className={`text-[14px] ${
            highlight ? "text-ochre-soft" : "text-ink-3"
          }`}
        >
          {subPrice}
        </div>
      </div>
      <ul className="mt-7 space-y-3">
        {features.map((f) => (
          <li
            key={f}
            className={`flex gap-3 text-[14.5px] leading-relaxed ${
              highlight ? "text-bg/90" : "text-ink-2"
            }`}
          >
            <span className={highlight ? "text-ochre-soft" : "text-ochre"}>
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className={`mt-8 inline-flex w-full justify-center rounded-full px-6 py-3.5 text-[14px] font-medium transition-colors ${
          highlight
            ? "bg-bg text-ink hover:bg-ochre hover:text-bg"
            : "bg-ink text-bg hover:bg-ochre"
        }`}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    FAQ                                     */
/* -------------------------------------------------------------------------- */
function FAQ() {
  const qs = [
    {
      q: "How is this different from ClearTax / myScheme / a Google search?",
      a: "ClearTax helps you file ITR — we help you with the 30 things before, during, and after. myScheme aggregates 3,000 schemes — we curate the ~40 actions a fresh hire actually needs in year one. Google gives you 47 conflicting articles — we give you one ranked, dated, sourced answer.",
    },
    {
      q: "What happens to my data?",
      a: "It stays with us. We never sell it, never share with insurers/banks/marketers. You can export everything and delete your account in one click. Privacy policy in plain English, not legalese.",
    },
    {
      q: "What if a govt rule changes?",
      a: "We review every item monthly and stamp it with the verification date. Major changes (Budget, EPFO circulars) trigger same-day updates and a WhatsApp/email blast to affected users. Public changelog.",
    },
    {
      q: "Why ₹399 one-time and not free?",
      a: "Free attracts noise. ₹399 is the price of one wrong tax-regime call's first month. If we save you that ONE mistake, we've paid for ourselves 30x over. Plus, paid users get our full attention.",
    },
    {
      q: "Who's behind this?",
      a: "Hi, I'm Syed. 22, engineer in Hyderabad. I built this because I'm watching my friends lose money on stuff that's all 100% fixable with 30 minutes of guidance. My phone number is on every receipt and my email is hi@nayajob.in.",
    },
    {
      q: "I'm not in IT. Will this still work?",
      a: "Most items apply to anyone with a salary in India. The roadmap personalizes — if you're a govt employee, freelancer, or in BFSI, some items vanish and others appear. We're optimizing for IT first because that's the largest segment, but the engine is general.",
    },
  ];
  return (
    <section className="mx-auto max-w-wide px-6 py-24">
      <Eyebrow>Honest answers</Eyebrow>
      <h2 className="mt-3 font-display font-light text-h1 text-ink">
        Things people ask before paying.
      </h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {qs.map((it) => (
          <div key={it.q}>
            <div className="font-display text-[20px] tracking-tightish leading-snug text-ink">
              {it.q}
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-2 max-w-prose">
              {it.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                FOUNDER NOTE                                */
/* -------------------------------------------------------------------------- */
function FounderNote() {
  return (
    <section className="mx-auto max-w-wide px-6 pb-24">
      <div className="rounded-2xl border border-border bg-paper/60 p-10 md:p-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-3">
            <div className="aspect-square rounded-full bg-ochre-soft border border-border-strong flex items-center justify-center font-display text-[80px] text-ochre leading-none">
              S
            </div>
            <div className="mt-3 text-[12px] text-ink-3 font-mono">
              Founder, in Hyderabad
            </div>
          </div>
          <div className="md:col-span-9">
            <Eyebrow>A note from me</Eyebrow>
            <p className="mt-3 font-display text-[26px] md:text-[32px] tracking-tightish text-ink leading-snug">
              &ldquo;I&rsquo;m 22 and I&rsquo;m an engineer in Hyderabad.
              I&rsquo;m watching my friends lose money on stuff that&rsquo;s
              all <em>100% fixable</em> with 30 minutes of guidance. So I
              built this. If it helps you, tell a friend. If it
              doesn&rsquo;t, email me &mdash; hi@nayajob.in.&rdquo;
            </p>
            <div className="mt-6 font-display italic text-[20px] text-ochre">
              &mdash; Syed
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/start"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink text-bg px-6 py-3 text-[14px] font-medium hover:bg-ochre transition-colors"
              >
                Get my roadmap →
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-6 py-3 text-[14px] font-medium text-ink hover:bg-bg transition-colors"
              >
                Read the longer story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   ATOMS                                    */
/* -------------------------------------------------------------------------- */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[12px] uppercase tracking-[0.18em] text-ochre font-medium">
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg px-2.5 py-1 text-[12px] text-ink-2 font-mono">
      {children}
    </span>
  );
}

function Fact({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-lg border border-border bg-bg p-4">
      <div className="font-display text-[28px] tracking-tighter text-ink leading-none">
        {n}
      </div>
      <div className="mt-2 text-[13px] leading-snug text-ink-2">{label}</div>
    </div>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={`text-forest ${className}`}
      aria-hidden="true"
    >
      <path
        d="M2 7.5L5.5 11L12 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
