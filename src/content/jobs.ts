import type { Job } from "@/types";
import { applicationEmails } from "@/content/site";

/**
 * Careers content.
 *
 * The client supplied five live role titles in round 2 (Oct 2026, row 51) and nothing else
 * — no department, location, employment type, experience level, summary, responsibilities
 * or requirements. Those roles are published below exactly as given. Nothing about them is
 * inferred: the `Job` type itself was narrowed to title-only so there is no empty field to
 * fill in (see src/types/index.ts), and the careers page renders a titled list with an apply
 * action rather than a job-detail accordion.
 *
 * The client's round-1 instruction still stands: do not publish inactive or fictional
 * vacancies, and do not pad these entries with drafted copy.
 */

/** The client's own careers copy, verbatim. */
export const careersIntro = [
  "At STRUCON, we bring together engineers, designers, detailers and project professionals who enjoy solving complex engineering problems.",
  "We are interested in professionals who want to work on challenging industrial and structural engineering projects serving clients in India and international markets.",
];

/**
 * Where job applications go — client-specified (round 2, row 53). This replaces the former
 * careers@strucon.net address, which the client did not confirm.
 */
export const applicationsEmails = applicationEmails;

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

/** The client's five live openings, titles verbatim and in their order (round 2, row 51). */
export const jobs: Job[] = [
  { slug: "structural-design-engineers", title: "Structural Design Engineers" },
  { slug: "structural-steel-detailers-tekla", title: "Structural Steel Detailers – Tekla" },
  { slug: "structural-checkers", title: "Structural Checkers" },
  { slug: "civil-structural-engineers", title: "Civil & Structural Engineers" },
  { slug: "project-engineers-coordinators", title: "Project Engineers / Project Coordinators" },
];
