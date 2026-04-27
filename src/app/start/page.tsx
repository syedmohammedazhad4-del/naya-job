import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Start free — NayaJob",
  description: "Tell us 4 things, get your personalized 12-month roadmap.",
};

export default function StartPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-6 py-20 md:py-28">
        <div className="text-[12px] uppercase tracking-[0.18em] text-ochre font-medium">
          Step 1 of 4
        </div>
        <h1 className="mt-3 font-display font-light text-h1 text-ink">
          Let&rsquo;s personalize your roadmap.
        </h1>
        <p className="mt-4 text-[16px] text-ink-2 max-w-prose leading-relaxed">
          Sixty seconds. Four questions. We don&rsquo;t need your name, your
          phone, or your password. Just enough to know what&rsquo;s
          actually relevant for <em>you</em>.
        </p>

        <form className="mt-12 space-y-10">
          <Field
            label="When did you (or will you) join your first job?"
            hint="Approximate is fine."
          >
            <input
              type="month"
              className="block w-full rounded-lg border border-border bg-bg px-4 py-3 text-[15px] text-ink focus:border-ochre focus:outline-none focus:ring-2 focus:ring-ochre/20"
              placeholder="May 2026"
            />
          </Field>

          <Field label="What's your annual CTC band?">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {["₹3–5 LPA", "₹5–8 LPA", "₹8–12 LPA", "₹12–20 LPA", "₹20L+", "Prefer not to say"].map(
                (opt) => (
                  <label
                    key={opt}
                    className="cursor-pointer rounded-lg border border-border bg-bg px-3 py-2.5 text-[14px] text-ink-2 hover:border-ochre hover:text-ink transition-colors text-center"
                  >
                    <input type="radio" name="ctc" value={opt} className="hidden peer" />
                    <span className="peer-checked:text-ochre">{opt}</span>
                  </label>
                ),
              )}
            </div>
          </Field>

          <Field label="Which city are you working in?">
            <select
              className="block w-full rounded-lg border border-border bg-bg px-4 py-3 text-[15px] text-ink focus:border-ochre focus:outline-none focus:ring-2 focus:ring-ochre/20"
              defaultValue=""
            >
              <option value="" disabled>
                Pick your city
              </option>
              <option>Hyderabad</option>
              <option>Bangalore</option>
              <option>Pune</option>
              <option>Chennai</option>
              <option>Mumbai</option>
              <option>Delhi NCR</option>
              <option>Other</option>
            </select>
          </Field>

          <Field label="Living situation?">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {[
                { v: "alone", l: "Alone, in a rented flat" },
                { v: "shared", l: "Shared flat with friends" },
                { v: "parents", l: "With parents" },
              ].map((opt) => (
                <label
                  key={opt.v}
                  className="cursor-pointer rounded-lg border border-border bg-bg px-3 py-3 text-[14px] text-ink-2 hover:border-ochre hover:text-ink transition-colors text-center"
                >
                  <input type="radio" name="living" value={opt.v} className="hidden peer" />
                  <span className="peer-checked:text-ochre">{opt.l}</span>
                </label>
              ))}
            </div>
          </Field>

          <button
            type="submit"
            disabled
            className="w-full rounded-full bg-ink text-bg py-4 text-[15px] font-medium opacity-60 cursor-not-allowed"
          >
            Generate my roadmap → coming in v0.2
          </button>

          <p className="text-center text-[13px] text-ink-3">
            Roadmap engine ships in v0.2. For now, drop a note at{" "}
            <Link href="/" className="text-ochre underline">
              hi@nayajob.in
            </Link>{" "}
            to be one of the first 100.
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-[14.5px] font-medium text-ink">{label}</div>
      {hint && (
        <div className="mt-1 text-[13px] text-ink-3">{hint}</div>
      )}
      <div className="mt-3">{children}</div>
    </div>
  );
}
