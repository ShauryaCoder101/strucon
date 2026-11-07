import type { Stat, ValueProp } from "@/types";

/**
 * Headline stats — client-confirmed figures.
 *
 * YEARS: the client answered this explicitly in round 2 (row 10: "incorporated in 2008,
 * 18years"), so we publish their figure with their incorporation year alongside it. Note that
 * the client's own story copy (src/content/about.ts) still opens "Since 2003"; see the
 * founding-year note in src/content/site.ts before changing either value.
 */
export const stats: Stat[] = [
  { value: "18+", label: "Years of Engineering", note: "Incorporated 2008" },
  { value: "500+", label: "Projects Delivered" },
  { value: "100+", label: "Engineers & Detailers" },
  { value: "12", label: "Countries Served" },
];

/**
 * "Why Choose Strucon" differentiators. Order is not a sequence (no numbering).
 * Every claim here traces back to the client's own content: the only certification named
 * anywhere is the client-confirmed ISO 9001:2015, and only the standards and software the
 * client confirmed are named.
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
