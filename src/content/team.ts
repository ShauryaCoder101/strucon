import type { TeamMember } from "@/types";

/**
 * Real leadership, as supplied by the client. Only Mohammad Shaheem's bio was provided;
 * the other three are published as name + title only, and the UI omits an empty bio.
 * Do not write bios for them — they must come from the individuals themselves.
 * No LinkedIn URLs were supplied, so none are shown.
 *
 * `photoPrompt` remains as art direction: no headshots have been supplied yet, so MediaFrame
 * renders the placeholder with the brief for the photograph still to be taken.
 */
export const team: TeamMember[] = [
  {
    slug: "owais-ahmad",
    name: "Owais Ahmad",
    role: "Director",
    bio: "",
    photoPrompt:
      "Professional corporate headshot of a company director, neutral studio background, natural light, photoreal.",
    leadership: true,
  },
  {
    slug: "rukhsada-khatoon",
    name: "Rukhsada Khatoon",
    role: "Director",
    bio: "",
    photoPrompt:
      "Professional corporate headshot of a company director, neutral studio background, natural light, photoreal.",
    leadership: true,
  },
  {
    slug: "yasir-ali",
    name: "Yasir Ali",
    role: "Engineering Leadership",
    bio: "",
    photoPrompt:
      "Professional corporate headshot of an engineering leader, neutral studio background, natural light, photoreal.",
    leadership: true,
  },
  {
    slug: "mohammad-shaheem",
    name: "Mohammad Shaheem",
    role: "Engineering Leadership",
    bio: "Mohammad Shaheem is a structural engineering professional with experience in structural design and engineering projects. His technical background includes structural engineering and project delivery within the engineering services environment.",
    photoPrompt:
      "Professional corporate headshot of a structural engineering leader, neutral studio background, natural light, photoreal.",
    leadership: true,
  },
];

export const leadership = () => team.filter((m) => m.leadership);
