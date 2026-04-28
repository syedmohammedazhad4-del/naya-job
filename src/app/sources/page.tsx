import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ITEMS } from "@/data/items";
import { categoryLabel, formatVerified } from "@/lib/format";

export const metadata = {
  title: "Sources — NayaJob",
  description:
    "Every claim on NayaJob links back to an official source. Here's the full list.",
};

export default function SourcesPage() {
  // Group items by category for readability
  const byCategory = ITEMS.reduce<Record<string, typeof ITEMS>>(
    (acc, item) => {
      (acc[item.category] ||= []).push(item);
      return acc;
    },
    {},
  );

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="text-[12px] uppercase tracking-[0.18em] text-ochre font-medium">
          Sources
        </div>
        <h1 className="mt-3 font-display font-light text-h1 text-ink">
          Every claim, linked to its official source.
        </h1>
        <p className="mt-4 text-[16px] text-ink-2 max-w-prose leading-relaxed">
          We cite EPFO, Income Tax Dept, UIDAI, RBI, IRDAI, AMFI, ECI, and
          state govt portals. Every item below carries a verified date.
          Items get a fresh review on the 1st of each month, with major
          changes triggered same-day.
        </p>

        <div className="mt-12 space-y-12">
          {Object.entries(byCategory).map(([cat, items]) => (
            <section key={cat}>
              <h2 className="font-display text-h2 text-ink">
                {categoryLabel(cat)}
              </h2>
              <div className="mt-4 space-y-3">
                {items.map((item) => (
                  <div
                    key={item.slug}
                    className="rounded-lg border border-border bg-bg p-4 flex items-start justify-between gap-4 flex-wrap"
                  >
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/item/${item.slug}/`}
                        className="text-[14.5px] text-ink hover:text-ochre transition-colors"
                      >
                        {item.title}
                      </Link>
                      <div className="mt-1 text-[12px] text-ink-3">
                        Source:{" "}
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-ink underline-offset-2 hover:underline"
                        >
                          {item.sourceTitle} ↗
                        </a>
                      </div>
                    </div>
                    <span className="stamp shrink-0">
                      Verified {formatVerified(item.verifiedAt)}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
