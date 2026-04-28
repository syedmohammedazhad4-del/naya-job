import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Privacy — NayaJob",
  description: "Plain-English privacy policy. No data sale, ever.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="text-[12px] uppercase tracking-[0.18em] text-ochre font-medium">
          Privacy, in plain English
        </div>
        <h1 className="mt-3 font-display font-light text-h1 text-ink leading-tight">
          What we collect, what we don&rsquo;t, and what we never will.
        </h1>

        <div className="mt-12 space-y-10 text-[16px] leading-[1.75] text-ink-2 max-w-prose">
          <section>
            <h2 className="font-display text-h2 text-ink mb-3 leading-tight">
              v0.2 — current state
            </h2>
            <p>
              Right now, NayaJob is a static web app. <strong>Your intake answers stay in your browser.</strong>{" "}
              They&rsquo;re saved to <code className="font-mono text-[14px]">localStorage</code>{" "}
              under the key <code className="font-mono text-[14px]">nayajob.userstate.v1</code>.
              We do not transmit them to a server. There is no server.
            </p>
            <p className="mt-4">
              That includes: your joining month, CTC band, city, living
              situation, and which items you&rsquo;ve marked done.
            </p>
            <p className="mt-4">
              The only thing we collect outside your browser is anonymized
              page-view analytics via standard tooling &mdash; no PII, no
              cross-site tracking, no behavioural ad pixels.
            </p>
          </section>

          <section>
            <h2 className="font-display text-h2 text-ink mb-3 leading-tight">
              When we add accounts (v0.5)
            </h2>
            <p>
              When we ship payments + WhatsApp reminders, we&rsquo;ll need
              your email and (optionally) phone. At that point this policy
              gets a real update with a clear changelog entry.
            </p>
            <p className="mt-4">Even then, we will:</p>
            <ul className="mt-3 space-y-2">
              <li>Store data only on Indian/EU servers (Supabase ap-south-1).</li>
              <li>Encrypt at rest + in transit.</li>
              <li>Let you export everything as JSON in one click.</li>
              <li>Let you delete your account in one click — fully wipes within 7 days.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-h2 text-ink mb-3 leading-tight">
              What we will never do
            </h2>
            <ul className="space-y-3">
              <li>
                <span className="text-ink">Sell your data.</span> Ever. Not to
                insurers, banks, MF distributors, or lead aggregators.
              </li>
              <li>
                <span className="text-ink">Share with affiliates for commissions.</span>{" "}
                When we recommend a product category (e.g. health insurance),
                we&rsquo;ll never take a kickback for naming a specific
                provider.
              </li>
              <li>
                <span className="text-ink">Use your data to train AI.</span>{" "}
                Your roadmap, marks-done, and questions don&rsquo;t feed
                anyone&rsquo;s model.
              </li>
              <li>
                <span className="text-ink">Send marketing spam.</span>{" "}
                Reminder emails are tied to YOUR roadmap deadlines. Nothing
                else.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-h2 text-ink mb-3 leading-tight">
              Your rights
            </h2>
            <ul className="space-y-2">
              <li>Request access to all data we hold on you (DPDPA, IT Rules 2011).</li>
              <li>Correct anything that&rsquo;s wrong.</li>
              <li>Delete it permanently.</li>
              <li>Take it elsewhere &mdash; we provide a JSON export.</li>
            </ul>
            <p className="mt-4">
              For any of these, email{" "}
              <span className="text-ink">privacy@nayajob.in</span>. We
              respond within 7 days.
            </p>
          </section>

          <section>
            <h2 className="font-display text-h2 text-ink mb-3 leading-tight">
              Reset your local data right now
            </h2>
            <p>
              Open your browser dev tools &rarr;{" "}
              <code className="font-mono text-[14px]">localStorage.clear()</code>{" "}
              on this domain. Your roadmap, mark-done state, and intake
              answers vanish.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
