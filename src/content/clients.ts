import type { Client } from "@/types";

/**
 * Named clients. Every name below is corroborated by a real case study in
 * src/content/projects.ts — i.e. the client told us the project AND the client it was for.
 *
 * DELIBERATELY EXCLUDED: the content update form also listed Samsung Engineering, Technip,
 * Siemens, Engineers India Limited, Holtec, Alstom, Lanco and Holcim, but hedged them as
 * organisations "potentially appearing in existing STRUCON public information". None of them
 * appears in a supplied case study, so none is published here. Add a name only when the client
 * confirms it in writing and a project can be pointed at.
 *
 * `logo` is intentionally unset — no rights-cleared logo files have been supplied, so the
 * strip renders names as text.
 */
export const clients: Client[] = [
  { name: "Larsen & Toubro" },
  { name: "Reliance Energy" },
  { name: "Jaypee Ventures" },
  { name: "Punj Lloyd" },
  { name: "Paul Wurth" },
  { name: "JSW Steel" },
  { name: "Enexco Technologies" },
];
