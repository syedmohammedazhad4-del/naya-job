import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-6 py-32 text-center">
        <div className="font-mono text-[12px] tracking-[0.2em] text-ochre">
          404 / NOT FOUND
        </div>
        <h1 className="mt-4 font-display font-light text-h1 text-ink">
          That page doesn&rsquo;t exist (yet).
        </h1>
        <p className="mt-5 text-[16px] text-ink-2 max-w-prose mx-auto">
          We&rsquo;re building this in the open and pages move around. If
          you got here from a link that should work, drop a note at{" "}
          <span className="text-ink">hi@nayajob.in</span> and we&rsquo;ll
          fix it.
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-ink text-bg px-6 py-3 text-[14px] font-medium hover:bg-ochre transition-colors"
          >
            ← Back home
          </Link>
          <Link
            href="/start"
            className="rounded-full border border-border-strong px-6 py-3 text-[14px] font-medium text-ink hover:bg-paper transition-colors"
          >
            Start free
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
