import type { Item } from "./types";
import { ITEMS } from "@/data/items";

export type SearchHit = {
  item: Item;
  score: number;
  matchedTerms: string[];
};

const STOPWORDS = new Set([
  "a","an","the","is","it","for","of","to","in","on","and","or","my","your",
  "what","how","do","does","i","me","we","you","with","as","are","be","by",
  "this","that","at","but","if","then","than","so","not","no","yes","can",
  "should","would","could","will","just",
]);

function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOPWORDS.has(t));
}

/**
 * Lightweight keyword search across the 40-item knowledge base. Honest
 * keyword matching — no LLM, no embeddings. v0.5 swaps this for Gemini
 * Flash + pgvector RAG. The function shape stays the same so the caller
 * never has to change.
 */
export function search(query: string, limit = 5): SearchHit[] {
  const terms = tokenize(query);
  if (terms.length === 0) return [];

  const hits: SearchHit[] = [];

  for (const item of ITEMS) {
    const haystack = [
      item.title,
      item.whyShort,
      item.whyLong,
      item.steps.join(" "),
      item.documents.join(" "),
      item.deadline,
      item.category,
    ]
      .join(" ")
      .toLowerCase();

    const matched: string[] = [];
    let score = 0;

    for (const term of terms) {
      const titleHits = (item.title.toLowerCase().match(new RegExp(term, "g")) || []).length;
      const bodyHits = (haystack.match(new RegExp(term, "g")) || []).length;

      if (titleHits > 0 || bodyHits > 0) matched.push(term);

      // Title matches weigh more.
      score += titleHits * 5 + bodyHits * 1;
    }

    if (score > 0) hits.push({ item, score, matchedTerms: matched });
  }

  return hits.sort((a, b) => b.score - a.score).slice(0, limit);
}

/**
 * Trim a string snippet around the first matching term — used to render
 * a one-line preview under each search hit.
 */
export function snippet(text: string, terms: string[], radius = 70): string {
  if (terms.length === 0) return text.slice(0, radius * 2) + "…";
  const lower = text.toLowerCase();
  for (const term of terms) {
    const idx = lower.indexOf(term);
    if (idx >= 0) {
      const start = Math.max(0, idx - radius);
      const end = Math.min(text.length, idx + term.length + radius);
      return (start > 0 ? "…" : "") + text.slice(start, end) + (end < text.length ? "…" : "");
    }
  }
  return text.slice(0, radius * 2) + "…";
}
