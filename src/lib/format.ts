import type { Urgency } from "./types";

export function urgencyLabel(u: Urgency): string {
  switch (u) {
    case "this-week": return "This week";
    case "this-month": return "This month";
    case "this-year": return "This year";
    case "situational": return "Situational";
  }
}

export function urgencyColor(u: Urgency): string {
  switch (u) {
    case "this-week": return "bg-ochre";
    case "this-month": return "bg-amber";
    case "this-year": return "bg-forest";
    case "situational": return "bg-ink-3";
  }
}

export function urgencyTextColor(u: Urgency): string {
  switch (u) {
    case "this-week": return "text-ochre";
    case "this-month": return "text-amber";
    case "this-year": return "text-forest";
    case "situational": return "text-ink-3";
  }
}

export function formatVerified(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString("en-IN", { month: "short", year: "numeric" });
}

export function categoryLabel(c: string): string {
  switch (c) {
    case "tax": return "Tax";
    case "pf": return "Provident Fund";
    case "insurance": return "Insurance";
    case "investment": return "Investments";
    case "docs": return "Documents";
    case "state": return "State / Local";
    case "employment": return "Employment";
    default: return c;
  }
}
