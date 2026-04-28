export function ProgressBar({
  done,
  total,
}: {
  done: number;
  total: number;
}) {
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <div className="text-[12px] uppercase tracking-[0.14em] text-ink-3">
          Progress
        </div>
        <div className="font-mono text-[13px] text-ink">
          {done} / {total}{" "}
          <span className="text-ink-3">· {pct}%</span>
        </div>
      </div>
      <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
        <div
          className="h-full bg-ochre transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
