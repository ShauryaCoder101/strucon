import type { Job } from "@/types";

/**
 * Careers content.
 *
 * IMPORTANT — the client instructed, in writing: "Do not publish inactive or fictional
 * vacancies." `jobs` is therefore EMPTY and must stay empty until HR supplies live, dated
 * vacancies. The careers page detects the empty array and renders a speculative-application
 * state built around `hiringAreas` instead of an openings list. Do not seed example roles.
 */

/** The client's own careers copy, verbatim. */
export const careersIntro = [
  "At STRUCON, we bring together engineers, designers, detailers and project professionals who enjoy solving complex engineering problems.",
  "We are interested in professionals who want to work on challenging industrial and structural engineering projects serving clients in India and international markets.",
];

/** Where speculative applications go — client-specified. */
export const applicationsEmail = "careers@strucon.net";

/** "Areas We Hire For" — the client's list, in their order. */
export const hiringAreas = [
  "Structural Engineers",
  "Civil Engineers",
  "Steel Detailers",
  "Tekla Detailers",
  "BIM Modelers",
  "AutoCAD Detailers",
  "Project Engineers",
  "Design Engineers",
  "Checkers",
  "Project Coordinators",
  "Business Development Professionals",
];

export const culture = [
  {
    title: "Complex problems",
    description:
      "Engineers, designers, detailers and project professionals who enjoy solving complex engineering problems.",
  },
  {
    title: "Industrial projects",
    description:
      "Challenging industrial and structural engineering work across power, cement, steel, refinery and material handling plants.",
  },
  {
    title: "International exposure",
    description:
      "Projects serving clients in India and international markets, in both metric and imperial systems.",
  },
  {
    title: "Technical training",
    description:
      "Software and technical training with clear career progression from detailer to checker to lead.",
  },
];

/** Employee benefits — the client's real list. Only actual benefits are published. */
export const benefits = [
  "Competitive compensation",
  "Performance incentives",
  "Professional development",
  "Technical training",
  "Software training",
  "Career progression",
  "Employee recognition",
  "Health insurance",
  "Paid leave",
  "Provident Fund",
  "Learning and development",
];

/** No live vacancies published — see the note at the top of this file. */
export const jobs: Job[] = [];

export const jobDepartments = () => Array.from(new Set(jobs.map((j) => j.department)));
