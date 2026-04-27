import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/80 border-b border-border">
      <nav className="mx-auto max-w-wide px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          aria-label="NayaJob — home"
          className="font-display text-2xl tracking-tighter leading-none"
        >
          NayaJob<span className="text-ochre">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[13px] text-ink-2">
          <Link href="/#how" className="hover:text-ink transition-colors">
            How it works
          </Link>
          <Link href="/#sample" className="hover:text-ink transition-colors">
            Sample roadmap
          </Link>
          <Link href="/#pricing" className="hover:text-ink transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-ink transition-colors">
            About
          </Link>
          <Link
            href="/start"
            className="rounded-full bg-ink text-bg px-4 py-2 hover:bg-ochre transition-colors text-[13px] font-medium"
          >
            Start free →
          </Link>
        </div>

        <Link
          href="/start"
          className="md:hidden rounded-full bg-ink text-bg px-3 py-1.5 text-xs font-medium"
        >
          Start →
        </Link>
      </nav>
    </header>
  );
}
