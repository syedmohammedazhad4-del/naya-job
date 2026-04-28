import type { Urgency } from "@/lib/types";
import { urgencyColor, urgencyLabel } from "@/lib/format";

export function UrgencyBadge({ urgency }: { urgency: Urgency }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-ink-3">
      <span className={`w-1.5 h-1.5 rounded-full ${urgencyColor(urgency)}`} />
      {urgencyLabel(urgency)}
    </span>
  );
}

export function UrgencyDot({ urgency }: { urgency: Urgency }) {
  return <span className={`w-2 h-2 rounded-full ${urgencyColor(urgency)}`} />;
}
