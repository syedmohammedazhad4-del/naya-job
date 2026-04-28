"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/roadmap/", label: "Roadmap" },
  { href: "/chat/", label: "Search" },
  { href: "/sources/", label: "Sources" },
  { href: "/changelog/", label: "Changelog" },
  { href: "/about/", label: "About" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  // Close menu on Escape; lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/80 border-b border-border">
      <nav className="mx-auto max-w-wide px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          aria-label="NayaJob — home"
          className="font-display text-2xl tracking-tighter leading-none"
          onClick={() => setOpen(false)}
        >
          NayaJob<span className="text-ochre">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7 text-[13px] text-ink-2">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/start/"
            className="rounded-full bg-ink text-bg px-4 py-2 hover:bg-ochre transition-colors text-[13px] font-medium"
          >
            Start free →
          </Link>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-bg hover:border-ink/30 transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <BurgerIcon />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 top-[60px] z-30 bg-bg/95 backdrop-blur-md">
          <div className="px-6 py-8 flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 border-b border-border font-display text-[26px] tracking-tightish text-ink"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/start/"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-ink text-bg px-6 py-4 text-[15px] font-medium"
            >
              Start free →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function BurgerIcon() {
  return (
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
      <path d="M0 1H16M0 7H16M0 13H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
