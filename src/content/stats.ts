import type { Stat, ValueProp } from "@/types";

/**
 * Headline stats — client-confirmed figures.
 *
 * YEARS: the client's form said "26+", but their own company story dates establishment to 2003,
 * which is 23 years as of 2026. "20+" is the largest claim the client's own facts support, so
 * that is what we publish, with the founding year shown alongside it.
 */
export const stats: Stat[] = [
  { value: "20+", label: "Years of Engineering", note: "Since 2003" },
  { value: "500+", label: "Projects Delivered" },
  { value: "100+", label: "Engineers & Detailers" },
  { value: "12", label: "Countries Served" },
];

/**
 * "Why Choose Strucon" differentiators. Order is not a sequence (no numbering).
 * Every claim here traces back to the client's own content: no certification claim is made,
 * and only the standards and software the client confirmed are named.
 */
export const whyChoose: ValueProp[] = [
  {
    title: "Experienced Engineers",
    description:
      "Engineers, designers, checkers and detailers who combine engineering knowledge with practical detailing experience.",
  },
  {
    title: "Proven Delivery",
    description:
      "Detailing packages of up to 19,000 MT delivered on large industrial plants, coordinated across multiple structural areas.",
  },
  {
    title: "Checking Discipline",
    description:
      "Independent checkers review calculations and drawings before issue, so what reaches the shop is buildable.",
  },
  {
    title: "Global Standards",
    description:
      "Experience across IS, AISC, ASCE, Eurocodes, British Standards, AWS, ASTM and EN — in both metric and imperial systems.",
  },
  {
    title: "International Exposure",
    description:
      "Projects delivered in India, UAE, Indonesia and Nigeria for Indian and international EPC contractors.",
  },
  {
    title: "3D Modelling",
    description:
      "Tekla Structures modelling and 3D coordination that resolve interfaces before fabrication begins.",
  },
];
