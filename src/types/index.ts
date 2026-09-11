/**
 * Shared content types. These double as the schema for the built-in CMS:
 * every editable content file in src/content conforms to one of these shapes,
 * so a future /admin editor (or a headless-CMS adapter) can read/write the same data.
 */

export type FAQ = { q: string; a: string };
export type ProcessStep = { title: string; description: string };
export type Benefit = { title: string; description: string };

export type Service = {
  slug: string;
  code: string; // discipline code shown as a drawing annotation, e.g. "STR"
  title: string;
  summary: string;
  image?: string; // real hero image path when supplied; otherwise the placeholder renders
  heroPrompt: string; // AI art direction for the service hero image
  overview: string[]; // paragraphs
  benefits: Benefit[];
  process: ProcessStep[]; // an ordered workflow — numbering is meaningful here
  software: string[];
  deliverables: string[];
  faqs: FAQ[];
  seo: { title: string; description: string; keywords: string[] };
  featured?: boolean;
};

export type SEO = { title: string; description: string; keywords: string[] };

export type Industry = {
  slug: string;
  title: string;
  summary: string;
  image?: string; // real image path when supplied; otherwise placeholder is rendered
  imagePrompt: string; // AI-generation prompt / art direction for sourcing the final image
  overview: string[];
  applications: string[]; // typical structures / scopes we handle in this sector
  relatedServices: string[]; // service slugs
  seo: SEO;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  thumbnail?: string;
  imagePrompt: string;
  /** Scope of work as supplied by the client — rendered as a bullet list on the case study. */
  scope?: string[];
  challenge?: string;
  solution?: string;
  results?: string;
  metrics?: { label: string; value: string }[];
  software?: string[];
  gallery?: string[]; // AI prompts / art direction for gallery images
  seo?: SEO;
  featured?: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  photoPrompt: string;
  linkedin?: string;
  leadership?: boolean;
};

export type Job = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string; // Full-time, Contract…
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string; // ISO
  readingMinutes: number;
  coverPrompt: string;
  body: BlogBlock[];
  seo: SEO;
};

export type Stat = {
  value: string;
  label: string;
  note?: string;
};

export type ValueProp = {
  title: string;
  description: string;
};

export type Client = {
  name: string;
  logo?: string; // real logo path when supplied
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export type Office = {
  name: string;
  lines: string[];
  // Percentage coordinates on the stylized world map (0–100 left/top).
  map?: { x: number; y: number };
};
