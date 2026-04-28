"use client";

import { useEffect, useState } from "react";
import { loadUserState, toggleDone } from "@/lib/storage";

export function MarkDoneButton({ slug }: { slug: string }) {
  const [done, setDone] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const s = loadUserState();
    setDone(s.doneSlugs.includes(slug));
    setHydrated(true);
  }, [slug]);

  function handleClick() {
    const s = toggleDone(slug);
    setDone(s.doneSlugs.includes(slug));
  }

  if (!hydrated) {
    return (
      <button
        disabled
        className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-[14px] text-ink-3"
      >
        Mark as done
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-medium transition-colors ${
        done
          ? "bg-forest text-bg hover:bg-forest/85"
          : "border border-border-strong text-ink hover:bg-paper"
      }`}
    >
      {done ? (
        <>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
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
          Done — undo
        </>
      ) : (
        <>Mark as done</>
      )}
    </button>
  );
}
