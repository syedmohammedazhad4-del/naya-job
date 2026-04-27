import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto max-w-wide px-6 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="font-display text-2xl tracking-tighter leading-none">
            NayaJob<span className="text-ochre">.</span>
          </div>
          <p className="mt-4 text-ink-2 max-w-sm leading-relaxed">
            The first-job kit for India. Made by an engineer in Hyderabad —
            for the millions of freshers who deserve better than a 14-page
            HR document.
          </p>

          <div className="mt-6 flex gap-2 flex-wrap">
            <span className="chip">Verified content</span>
            <span className="chip">Sources cited</span>
            <span className="chip">No data sale</span>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="text-[12px] uppercase tracking-[0.12em] text-ink-3">
            Product
          </div>
          <ul className="mt-3 space-y-2 text-[14px] text-ink-2">
            <li><Link href="/#how" className="hover:text-ink">How it works</Link></li>
            <li><Link href="/#sample" className="hover:text-ink">Sample roadmap</Link></li>
            <li><Link href="/#pricing" className="hover:text-ink">Pricing</Link></li>
            <li><Link href="/start" className="hover:text-ink">Start free</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[12px] uppercase tracking-[0.12em] text-ink-3">
            Trust
          </div>
          <ul className="mt-3 space-y-2 text-[14px] text-ink-2">
            <li><Link href="/about" className="hover:text-ink">About the founder</Link></li>
            <li><Link href="/sources" className="hover:text-ink">Our sources</Link></li>
            <li><Link href="/changelog" className="hover:text-ink">Changelog</Link></li>
            <li><Link href="/privacy" className="hover:text-ink">Privacy</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-[12px] uppercase tracking-[0.12em] text-ink-3">
            Get in touch
          </div>
          <ul className="mt-3 space-y-2 text-[14px] text-ink-2">
            <li>WhatsApp: <span className="text-ink">+91 ••••• •••••</span></li>
            <li>Email: <span className="text-ink">hi@nayajob.in</span></li>
            <li>
              <a
                href="https://github.com"
                className="hover:text-ink"
                target="_blank"
                rel="noreferrer"
              >
                Open data on GitHub →
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-wide px-6 py-5 flex flex-col md:flex-row gap-3 justify-between text-[12px] text-ink-3">
          <div>
            © 2026 NayaJob · Made in Hyderabad · Not legal or tax advice.
          </div>
          <div className="font-mono">
            v0.1 · build {new Date().toISOString().slice(0, 10)}
          </div>
        </div>
      </div>
    </footer>
  );
}
