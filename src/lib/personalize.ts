import type { Item, Profile, Urgency } from "./types";
import { ITEMS } from "@/data/items";

const URGENCY_RANK: Record<Urgency, number> = {
  "this-week": 1,
  "this-month": 2,
  "this-year": 3,
  situational: 4,
};

/**
 * Filter the global item set down to what THIS profile should see, then
 * sort within each urgency bucket using item.weight.
 */
export function personalize(profile: Profile): Item[] {
  return ITEMS.filter((item) => !item.appliesIf || item.appliesIf(profile)).sort(
    (a, b) => {
      const u = URGENCY_RANK[a.urgency] - URGENCY_RANK[b.urgency];
      if (u !== 0) return u;
      return (a.weight ?? 999) - (b.weight ?? 999);
    },
  );
}

/**
 * Group items by urgency for the dashboard. Empty groups are kept so
 * the UI can render headers consistently.
 */
export function groupByUrgency(items: Item[]): Record<Urgency, Item[]> {
  const groups: Record<Urgency, Item[]> = {
    "this-week": [],
    "this-month": [],
    "this-year": [],
    situational: [],
  };
  for (const item of items) groups[item.urgency].push(item);
  return groups;
}

/**
 * Display-friendly profile summary for the roadmap header.
 */
export function describeProfile(p: Profile): string {
  const parts: string[] = [];
  if (p.joiningMonth) {
    const [y, m] = p.joiningMonth.split("-");
    const month = new Date(Number(y), Number(m) - 1, 1).toLocaleString(
      "en-IN",
      { month: "short" },
    );
    parts.push(`Joining ${month} ${y}`);
  }
  if (p.ctcBand && p.ctcBand !== "skip") {
    parts.push(`₹${p.ctcBand} LPA`);
  }
  if (p.city) parts.push(p.city);
  if (p.living === "alone") parts.push("Living alone");
  else if (p.living === "shared") parts.push("Shared flat");
  else if (p.living === "parents") parts.push("With parents");
  return parts.join(" · ");
}
