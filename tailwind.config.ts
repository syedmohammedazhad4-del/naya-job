import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Warm cream background — not stark white. Feels like paper.
        bg: "#FAF7F2",
        paper: "#F5F0E6",
        // Ink for type
        ink: "#0F0F0F",
        "ink-2": "#3D3D3D",
        "ink-3": "#6B6B6B",
        "ink-4": "#9A9A9A",
        // One restrained accent — warm Indian ochre
        ochre: "#B5651D",
        "ochre-dark": "#8E4F12",
        "ochre-soft": "#E9D6BD",
        // Verification / success
        forest: "#1F5C44",
        "forest-soft": "#D7E5DD",
        // Subtle borders
        border: "#E5DDD0",
        "border-strong": "#C9BFAA",
        // Alert tints
        amber: "#A66A00",
        "amber-soft": "#F2E6CC",
      },
      fontFamily: {
        display: ['var(--font-display)', "Georgia", "serif"],
        sans: ['var(--font-sans)', "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        tightish: "-0.015em",
        tight: "-0.025em",
        tighter: "-0.04em",
      },
      fontSize: {
        // Editorial display sizes
        display: ["clamp(2.5rem, 7vw, 5.25rem)", { lineHeight: "1.02", letterSpacing: "-0.04em" }],
        h1: ["clamp(2rem, 4.5vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        h2: ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        prose: "62ch",
        wide: "76rem",
      },
    },
  },
  plugins: [],
};

export default config;
