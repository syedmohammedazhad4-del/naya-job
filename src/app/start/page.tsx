"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { setProfile, loadUserState } from "@/lib/storage";
import type { CtcBand, Living, Profile } from "@/lib/types";

const CITIES = [
  "Hyderabad",
  "Bangalore",
  "Pune",
  "Chennai",
  "Mumbai",
  "Delhi NCR",
  "Kolkata",
  "Ahmedabad",
  "Other",
];
const CTC_BANDS: { value: CtcBand; label: string }[] = [
  { value: "3-5", label: "₹3 – 5 LPA" },
  { value: "5-8", label: "₹5 – 8 LPA" },
  { value: "8-12", label: "₹8 – 12 LPA" },
  { value: "12-20", label: "₹12 – 20 LPA" },
  { value: "20+", label: "₹20 LPA +" },
  { value: "skip", label: "Prefer not to say" },
];
const LIVING: { value: Living; label: string }[] = [
  { value: "alone", label: "Alone, in a rented flat" },
  { value: "shared", label: "Shared flat with friends" },
  { value: "parents", label: "With parents" },
];

export default function StartPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [profile, setLocalProfile] = useState<Profile>({
    joiningMonth: "",
    ctcBand: "skip",
    city: "",
    living: "alone",
  });

  // Hydrate from existing storage so a returning user can edit, not redo.
  useEffect(() => {
    const s = loadUserState();
    if (s.profile.joiningMonth || s.profile.city) {
      setLocalProfile(s.profile);
    }
  }, []);

  function next() {
    setStep((s) => Math.min(4, s + 1));
  }
  function prev() {
    setStep((s) => Math.max(1, s - 1));
  }
  function submit() {
    setProfile(profile);
    router.push("/roadmap/");
  }

  const canAdvance =
    (step === 1 && profile.joiningMonth.length > 0) ||
    (step === 2 && profile.ctcBand !== undefined) ||
    (step === 3 && profile.city.length > 0) ||
    step === 4;

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <Stepper step={step} total={4} />

        <div className="mt-10">
          {step === 1 && (
            <Step
              eyebrow="Step 1 of 4 · Joining month"
              title="When are you joining (or did you join) your first job?"
              hint="Approximate is fine. We use it to set deadlines for things like Form 12BB and ITR."
            >
              <input
                type="month"
                value={profile.joiningMonth}
                onChange={(e) =>
                  setLocalProfile((p) => ({ ...p, joiningMonth: e.target.value }))
                }
                className="block w-full rounded-lg border border-border bg-bg px-4 py-3 text-[15px] text-ink focus:border-ochre focus:outline-none focus:ring-2 focus:ring-ochre/20"
              />
            </Step>
          )}

          {step === 2 && (
            <Step
              eyebrow="Step 2 of 4 · CTC band"
              title="What's your annual CTC band?"
              hint="We use this to gauge tax-saving headroom. We never store this server-side — it stays in your browser."
            >
              <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-0 border-0 m-0">
                <legend className="sr-only">Annual CTC band</legend>
                {CTC_BANDS.map((opt) => (
                  <Choice
                    key={opt.value}
                    name="ctc"
                    value={opt.value}
                    selected={profile.ctcBand === opt.value}
                    onClick={() =>
                      setLocalProfile((p) => ({ ...p, ctcBand: opt.value }))
                    }
                  >
                    {opt.label}
                  </Choice>
                ))}
              </fieldset>
            </Step>
          )}

          {step === 3 && (
            <Step
              eyebrow="Step 3 of 4 · City"
              title="Which city are you working in?"
              hint="State-specific items like Professional Tax and Police Verification depend on this."
            >
              <fieldset className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-0 border-0 m-0">
                <legend className="sr-only">Working city</legend>
                {CITIES.map((c) => (
                  <Choice
                    key={c}
                    name="city"
                    value={c}
                    selected={profile.city === c}
                    onClick={() => setLocalProfile((p) => ({ ...p, city: c }))}
                  >
                    {c}
                  </Choice>
                ))}
              </fieldset>
            </Step>
          )}

          {step === 4 && (
            <Step
              eyebrow="Step 4 of 4 · Living"
              title="Where are you living?"
              hint="HRA, rent agreement, voter ID transfer — these only apply if you're not with parents."
            >
              <fieldset className="grid grid-cols-1 gap-2 p-0 border-0 m-0">
                <legend className="sr-only">Living situation</legend>
                {LIVING.map((l) => (
                  <Choice
                    key={l.value}
                    name="living"
                    value={l.value}
                    selected={profile.living === l.value}
                    onClick={() =>
                      setLocalProfile((p) => ({ ...p, living: l.value }))
                    }
                  >
                    {l.label}
                  </Choice>
                ))}
              </fieldset>
            </Step>
          )}
        </div>

        <div className="mt-12 flex items-center justify-between">
          <button
            type="button"
            onClick={prev}
            className={`text-[14px] text-ink-2 hover:text-ink ${
              step === 1 ? "invisible" : ""
            }`}
          >
            ← Back
          </button>

          {step < 4 ? (
            <button
              type="button"
              onClick={next}
              disabled={!canAdvance}
              className="rounded-full bg-ink text-bg px-7 py-3 text-[14px] font-medium hover:bg-ochre transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          ) : (
            <button
              type="button"
              onClick={submit}
              className="rounded-full bg-ink text-bg px-7 py-3 text-[14px] font-medium hover:bg-ochre transition-colors"
            >
              Generate my roadmap →
            </button>
          )}
        </div>

        <p className="mt-10 text-center text-[12px] text-ink-3">
          Your answers stay in your browser (localStorage). No login. No
          server-side storage in this version.{" "}
          <Link href="/privacy/" className="underline hover:text-ink">
            Privacy details →
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}

function Stepper({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`flex-1 h-1 rounded-full transition-colors ${
            i + 1 <= step ? "bg-ochre" : "bg-border"
          }`}
        />
      ))}
    </div>
  );
}

function Step({
  eyebrow,
  title,
  hint,
  children,
}: {
  eyebrow: string;
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-[12px] uppercase tracking-[0.18em] text-ochre font-medium">
        {eyebrow}
      </div>
      <h1 className="mt-3 font-display font-light text-h1 text-ink leading-tight">
        {title}
      </h1>
      {hint && (
        <p className="mt-3 text-[15px] text-ink-2 leading-relaxed">{hint}</p>
      )}
      <div className="mt-8">{children}</div>
    </div>
  );
}

function Choice({
  selected,
  onClick,
  children,
  name,
  value,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  name?: string;
  value?: string;
}) {
  return (
    <button
      type="button"
      role={name ? "radio" : undefined}
      aria-checked={name ? selected : undefined}
      data-name={name}
      data-value={value}
      onClick={onClick}
      className={`text-left rounded-lg border px-4 py-3 text-[14.5px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ochre/40 focus-visible:border-ochre ${
        selected
          ? "border-ochre bg-ochre-soft/40 text-ink"
          : "border-border bg-bg text-ink-2 hover:border-ink/30 hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
