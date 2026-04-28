"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { UrgencyBadge } from "@/components/UrgencyBadge";
import { search, snippet } from "@/lib/search";
import { categoryLabel } from "@/lib/format";

const SUGGESTIONS = [
  "How do I activate my UAN?",
  "Old vs new tax regime which is better",
  "HRA receipt format",
  "Form 12BB deadline",
  "Health insurance tips",
  "PF transfer when changing job",
  "Lost PAN card replacement",
  "ITR-1 filing steps",
];

export default function ChatPage() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");

  // Read ?q= from URL on mount (used by item pages' "ask follow-up" link)
  useEffect(() => {
    const url = new URL(window.location.href);
    const q = url.searchParams.get("q");
    if (q) {
      setQuery(q);
      setSubmitted(q);
    }
  }, []);

  const hits = useMemo(() => {
    if (!submitted) return [];
    return search(submitted, 5);
  }, [submitted]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(query.trim());
  }

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <div className="text-[12px] uppercase tracking-[0.18em] text-ochre font-medium">
          Smart search
        </div>
        <h1 className="mt-3 font-display font-light text-h1 text-ink leading-tight">
          Ask anything about your first-job money &amp; govt stuff.
        </h1>
        <p className="mt-4 text-[16px] text-ink-2 max-w-prose leading-relaxed">
          Searches our 40-item verified content. Honest answers, sources cited.
          We deliberately don&rsquo;t use a chatty AI yet &mdash; v0.5 brings
          Gemini Flash with RAG over the same content. For now, keyword
          matching is the boring, accurate floor.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. How do I activate my UAN?"
              className="flex-1 rounded-full border border-border bg-bg px-5 py-3 text-[15px] text-ink focus:border-ochre focus:outline-none focus:ring-2 focus:ring-ochre/20"
            />
            <button
              type="submit"
              className="rounded-full bg-ink text-bg px-6 py-3 text-[14px] font-medium hover:bg-ochre transition-colors"
            >
              Search
            </button>
          </div>
        </form>

        {/* Suggestions */}
        {!submitted && (
          <div className="mt-8">
            <div className="text-[12px] uppercase tracking-[0.14em] text-ink-3">
              Try one of these
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setQuery(s);
                    setSubmitted(s);
                  }}
                  className="rounded-full border border-border bg-bg px-3.5 py-1.5 text-[12.5px] text-ink-2 hover:border-ochre hover:text-ink transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {submitted && (
          <div className="mt-10">
            <div className="text-[12px] uppercase tracking-[0.14em] text-ink-3 mb-4">
              {hits.length === 0
                ? `No matches for "${submitted}"`
                : `${hits.length} match${hits.length > 1 ? "es" : ""} for "${submitted}"`}
            </div>

            {hits.length === 0 ? (
              <div className="rounded-2xl border border-border bg-paper/50 p-6 text-[14.5px] text-ink-2 leading-relaxed">
                <p>
                  We don&rsquo;t have a verified answer for that yet. Two
                  honest options:
                </p>
                <ol className="mt-3 space-y-1 list-decimal list-inside text-ink-2">
                  <li>
                    Try a simpler keyword (e.g. &ldquo;PF&rdquo; instead of
                    &ldquo;provident fund withdrawal procedure&rdquo;).
                  </li>
                  <li>
                    Email{" "}
                    <span className="text-ink">hi@nayajob.in</span> &mdash;
                    we&rsquo;ll add the answer in the next content review.
                  </li>
                </ol>
              </div>
            ) : (
              <div className="space-y-3">
                {hits.map((hit) => (
                  <Link
                    key={hit.item.slug}
                    href={`/item/${hit.item.slug}/`}
                    className="block rounded-xl border border-border bg-bg p-5 hover:border-ink/30 hover:bg-paper/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3 flex-wrap">
                      <UrgencyBadge urgency={hit.item.urgency} />
                      <span className="text-ink-4">·</span>
                      <span className="text-[11px] uppercase tracking-[0.12em] text-ink-3">
                        {categoryLabel(hit.item.category)}
                      </span>
                    </div>
                    <div className="mt-2 font-display text-[20px] tracking-tightish leading-snug text-ink group-hover:text-ochre transition-colors">
                      {hit.item.title}
                    </div>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-2">
                      {snippet(hit.item.whyLong, hit.matchedTerms, 80)}
                    </p>
                    <div className="mt-3 text-[12px] text-ink-3 font-mono">
                      Open guide →{" "}
                      <span className="text-ink-4">
                        score {hit.score} · matched: {hit.matchedTerms.join(", ")}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Honesty footer */}
        <div className="mt-16 rounded-xl border border-dashed border-border-strong bg-paper/40 p-5 text-[13px] text-ink-3 leading-relaxed">
          <span className="text-ink-2">Why no chatbot yet?</span> Because
          plugging in an AI without strict context-grounding causes
          hallucination on tax/govt rules &mdash; the worst possible domain to
          be wrong in. v0.5 ships Gemini Flash with retrieval-augmented
          generation locked to this exact content. Until then, keyword
          search is the boring, correct floor.
        </div>
      </main>
      <Footer />
    </>
  );
}
