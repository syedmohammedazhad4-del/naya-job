/**
 * Tiny class-merge helper. We're not pulling clsx/tw-merge in v0.1 to keep
 * the dependency tree minimal. If we add shadcn/ui later, swap this for
 * the standard `cn` from those libraries.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
