"use client";

import Link from "next/link";
import type { Item } from "@/lib/types";

export function ItemRow({
  item,
  done = false,
  onToggle,
}: {
  item: Item;
  done?: boolean;
  onToggle?: () => void;
}) {
  return (
    <div
      className={`group flex items-start gap-3 px-3 py-3 rounded-lg border border-border hover:border-ink/30 hover:bg-paper/60 transition-colors ${
        done ? "opacity-50" : ""
      }`}
    >
      <button
        type="button"
        aria-label={done ? "Mark not done" : "Mark done"}
        onClick={(e) => {
          e.preventDefault();
          onToggle?.();
        }}
        className={`mt-0.5 w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors ${
          done
            ? "bg-forest border-forest text-bg"
            : "border-border-strong hover:border-ochre"
        }`}
      >
        {done && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 6.5L4.7 9L10 3.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <Link href={`/item/${item.slug}/`} className="flex-1 min-w-0 block">
        <div
          className={`text-[14.5px] leading-snug text-ink ${
            done ? "line-through" : ""
          }`}
        >
          {item.title}
          {item.premium && (
            <span className="ml-2 inline-block text-[10px] uppercase tracking-wider text-ochre font-mono">
              Premium
            </span>
          )}
        </div>
        <div className="text-[12px] text-ink-3 mt-0.5">{item.deadline}</div>
      </Link>

      <Link
        href={`/item/${item.slug}/`}
        className="text-ink-4 group-hover:text-ochre transition-colors mt-0.5"
        aria-label={`Open ${item.title}`}
      >
        →
      </Link>
    </div>
  );
}
