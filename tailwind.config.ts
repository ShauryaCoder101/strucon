import type { Config } from "tailwindcss";

/**
 * STRUCON design system — "Engineering Drawing" identity.
 * Palette sampled to complement the steel/industrial logo; refine once hi-res logo is supplied.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1F33", // deep steel navy
          700: "#12293F",
          600: "#173350",
        },
        steel: {
          DEFAULT: "#1B4B77", // structural blue
          400: "#4E7CA6",
          200: "#9FBAD1",
        },
        accent: {
          DEFAULT: "#F26419", // molten / safety orange — CTAs only
          600: "#D8500F",
        },
        paper: "#F4F6F9", // light steel background
        line: "#D9E0E8", // blueprint line / borders
        slate: {
          DEFAULT: "#5A6B7E", // muted body text
          soft: "#7B8A9B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        label: "0.18em",
      },
      maxWidth: {
        prose: "68ch",
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(to right, rgba(27,75,119,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(27,75,119,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        "reveal-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        engineered: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
