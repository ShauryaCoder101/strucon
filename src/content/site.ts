import type { NavItem, Office } from "@/types";

/**
 * Global site configuration — the single place to edit company-wide facts.
 * All values below are client-confirmed (content update form, Sept 2026).
 *
 * NOTE ON CERTIFICATION: the client left the ISO certification question BLANK, so no ISO
 * claim is published anywhere on this site. Design/detailing STANDARDS the client confirmed
 * they work to live in src/content/about.ts → `standards`. Do not reintroduce a
 * `certification` field here without a written, current certificate from the client.
 */
export const site = {
  name: "STRUCON",
  legalName: "STRUCON Consulting Private Limited",
  tagline:
    "Innovative Structural Engineering • BIM • Steel Detailing • Project Engineering for Industrial & Infrastructure Projects Worldwide",
  // Marketing headline — client-approved positioning line.
  positioning: "Engineering Structures. Detailed with Precision.",
  url: "https://www.strucon.net",
  // The company story (about.ts) states establishment in 2003; the CIN is a later 2008
  // incorporation of the private limited entity. 2003 is the date used publicly.
  founded: "2003",
  // Corporate Identity Number — shown in the footer for statutory transparency.
  cin: "U24319HR2008PTC037858",
  email: "info@strucon.net",
  emailSecondary: "owais@strucon.net",
  emailSales: "aly@strucon.net",
  emailCareers: "careers@strucon.net",
  phone: "+91-120-4740796",
  phoneHref: "tel:+911204740796",
  mobile: "+91 98100 89862",
  mobileHref: "tel:+919810089862",
  whatsapp: "+919810089862",
  whatsappHref: "https://wa.me/919810089862",
  linkedin: "https://www.linkedin.com/company/strucon-consulting-private-limited/",
  businessHours: "6:00 – 23:00",
  description:
    "STRUCON Consulting Private Limited delivers structural engineering, BIM, steel detailing, and project engineering for industrial and infrastructure projects in India and international markets.",
};

export const offices: Office[] = [
  {
    name: "Corporate Office — Noida",
    lines: [
      "801–802, 8th Floor, Astralis Tower",
      "Supertech Supernova, Sector 94",
      "Noida, Uttar Pradesh 201301, India",
    ],
    map: { x: 70, y: 43 },
  },
  {
    name: "Registered Office — Gurugram",
    lines: [
      "B-Wing, 1st Floor, A55/12",
      "DLF Phase-1",
      "Gurugram, Haryana 122002, India",
    ],
    map: { x: 69.5, y: 43.5 },
  },
];

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Company", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Clients", href: "/clients" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Structural Engineering", href: "/services/structural-engineering" },
      { label: "Steel Detailing", href: "/services/steel-detailing" },
      { label: "BIM", href: "/services/bim" },
      { label: "Civil Engineering", href: "/services/civil-engineering" },
      { label: "Mechanical", href: "/services/mechanical" },
      { label: "Process", href: "/services/process" },
      { label: "Electrical", href: "/services/electrical" },
      { label: "Project Management", href: "/services/project-management" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/** Lead-generation CTAs reused across the site (see FORMS section of the brief). */
export const ctas = {
  consultation: { label: "Request Consultation", href: "/contact?intent=consultation" },
  services: { label: "Explore Services", href: "/services" },
  proposal: { label: "Request Proposal", href: "/contact?intent=proposal" },
  profile: { label: "Download Company Profile", href: "/contact?intent=profile" },
  tender: { label: "Upload Tender Documents", href: "/contact?intent=tender" },
  review: { label: "Book Engineering Review", href: "/contact?intent=review" },
};
