"use client";

import type { Profile, UserState } from "./types";
import { EMPTY_USER_STATE } from "./types";

const STORAGE_KEY = "nayajob.userstate.v1";

const isBrowser = () =>
  typeof window !== "undefined" && typeof localStorage !== "undefined";

export function loadUserState(): UserState {
  if (!isBrowser()) return EMPTY_USER_STATE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_USER_STATE;
    const parsed = JSON.parse(raw) as UserState;
    return { ...EMPTY_USER_STATE, ...parsed };
  } catch {
    return EMPTY_USER_STATE;
  }
}

export function saveUserState(state: UserState): void {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* quota exceeded — ignore in v0.2 */
  }
}

export function setProfile(profile: Profile): UserState {
  const current = loadUserState();
  const next: UserState = {
    ...current,
    profile,
    startedAt: current.startedAt || new Date().toISOString(),
  };
  saveUserState(next);
  return next;
}

export function toggleDone(slug: string): UserState {
  const current = loadUserState();
  const has = current.doneSlugs.includes(slug);
  const next: UserState = {
    ...current,
    doneSlugs: has
      ? current.doneSlugs.filter((s) => s !== slug)
      : [...current.doneSlugs, slug],
  };
  saveUserState(next);
  return next;
}

export function setPremium(value: boolean): UserState {
  const current = loadUserState();
  const next: UserState = { ...current, isPremium: value };
  saveUserState(next);
  return next;
}

export function resetUserState(): UserState {
  if (isBrowser()) localStorage.removeItem(STORAGE_KEY);
  return EMPTY_USER_STATE;
}
