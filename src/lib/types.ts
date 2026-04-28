// ----- Profile from intake -----------------------------------------------

export type CtcBand = "3-5" | "5-8" | "8-12" | "12-20" | "20+" | "skip";
export type Living = "alone" | "shared" | "parents";

export type Profile = {
  joiningMonth: string; // YYYY-MM
  ctcBand: CtcBand;
  city: string;
  living: Living;
};

export const EMPTY_PROFILE: Profile = {
  joiningMonth: "",
  ctcBand: "skip",
  city: "",
  living: "alone",
};

// ----- Items -------------------------------------------------------------

export type Urgency = "this-week" | "this-month" | "this-year" | "situational";
export type Category =
  | "tax"
  | "pf"
  | "insurance"
  | "investment"
  | "docs"
  | "state"
  | "employment";

export type Item = {
  slug: string;
  title: string;
  category: Category;
  urgency: Urgency;
  whyShort: string;
  whyLong: string;
  steps: string[];
  documents: string[];
  deadline: string;
  sourceTitle: string;
  sourceUrl: string;
  verifiedAt: string; // ISO date
  premium?: boolean;
  /**
   * If returns false, this item is NOT shown to the user.
   * If absent, item shows for everyone.
   */
  appliesIf?: (p: Profile) => boolean;
  /**
   * Used to nudge ordering inside an urgency bucket. Lower = earlier.
   */
  weight?: number;
};

// ----- Stored user state -------------------------------------------------

export type UserState = {
  profile: Profile;
  doneSlugs: string[];
  isPremium: boolean;
  startedAt: string;
};

export const EMPTY_USER_STATE: UserState = {
  profile: EMPTY_PROFILE,
  doneSlugs: [],
  isPremium: false,
  startedAt: "",
};
