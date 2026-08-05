import type { Stat, ValueProp } from "@/types";

/**
 * Stats bar — figures per the brief.
 * PLACEHOLDER: these differ from the live site (founded 2003, 6 lac+ MT detailed, 34+ Tekla users).
 * Confirm the accurate, legally-safe figures before go-live (see REQUIREMENTS.md mismatch table).
 */
export const stats: Stat[] = [
  { value: "26+", label: "Years of Engineering", note: "Since 2003" },
  { value: "500+", label: "Projects Delivered" },
  { value: "100+", label: "Engineers & Detailers" },
  { value: "20", label: "Countries Served" },
];

/** "Why Choose Strucon" — 6 differentiators per brief. Order is not a sequence (no numbering). */
export const whyChoose: ValueProp[] = [
  {
    title: "Experienced Engineers",
    description:
      "A dedicated team of engineers, checkers, and detailers versed in Indian, American, and European standards.",
  },
  {
    title: "Fast Delivery",
    description:
      "Detailing capacity of 1000+ MT per month with change-control workflows that protect EPC schedules.",
  },
  {
    title: "ISO Processes",
    description:
      "Quality-managed delivery under ISO-certified processes, with checking gates at every stage.",
  },
  {
    title: "Global Standards",
    description:
      "Fluency across AISC, Eurocode, IS, BS, and AS/NZS codes for projects on every continent.",
  },
  {
    title: "Cost Efficient",
    description:
      "An offshore engineering model that lowers your total design cost without compromising quality.",
  },
  {
    title: "Latest BIM Technology",
    description:
      "Tekla-led, fully coordinated BIM with clash detection for constructible, buildable models.",
  },
];
