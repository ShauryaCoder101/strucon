import type { TeamMember } from "@/types";

/**
 * PLACEHOLDER leadership & team. Replace names, roles, bios, photos, and LinkedIn URLs with
 * real people before go-live (see REQUIREMENTS.md §3.2). Do not present these as real individuals.
 */
export const team: TeamMember[] = [
  {
    slug: "managing-director",
    name: "Placeholder Name",
    role: "Managing Director",
    bio: "Founder-led leadership with two decades in structural engineering and steel detailing for EPC projects.",
    photoPrompt: "Professional corporate headshot of a senior Indian male engineering executive, neutral studio background, confident, photoreal.",
    leadership: true,
  },
  {
    slug: "director-engineering",
    name: "Placeholder Name",
    role: "Director — Engineering",
    bio: "Leads multidisciplinary engineering delivery and quality across structural, civil, and process teams.",
    photoPrompt: "Professional corporate headshot of a senior engineering director, neutral studio background, photoreal.",
    leadership: true,
  },
  {
    slug: "head-detailing",
    name: "Placeholder Name",
    role: "Head — Steel Detailing",
    bio: "Oversees Tekla-led detailing operations and the checking discipline that keeps RFIs low.",
    photoPrompt: "Professional corporate headshot of a steel detailing lead, neutral studio background, photoreal.",
    leadership: true,
  },
  {
    slug: "head-bim",
    name: "Placeholder Name",
    role: "Head — BIM & Technology",
    bio: "Drives BIM standards, clash detection workflows, and technology across the practice.",
    photoPrompt: "Professional corporate headshot of a BIM technology lead, neutral studio background, photoreal.",
    leadership: true,
  },
];

export const leadership = () => team.filter((m) => m.leadership);
