import type { NavItem, Office } from "@/types";

/**
 * Global site configuration — the single place to edit company-wide facts.
 * Values marked PLACEHOLDER are unverified; confirm before go-live (see REQUIREMENTS.md).
 */
export const site = {
  name: "STRUCON",
  legalName: "STRUCON Consulting Pvt. Ltd.",
  tagline: "Design & Detailing of Industrial & Commercial Structures",
  // Marketing headline per brief.
  positioning: "Engineering Tomorrow's Infrastructure",
  // Update once a production domain is confirmed (used for canonical URLs, sitemap, schema).
  url: "https://www.strucon.net",
  founded: "2003",
  certification: "ISO 9001:2008", // PLACEHOLDER: confirm current version (2015?) before publishing.
  email: "info@strucon.net",
  phone: "+91-120-4740796",
  phoneHref: "tel:+911204740796",
  whatsapp: "+911204740796", // PLACEHOLDER: confirm dedicated WhatsApp business number.
  whatsappHref: "https://wa.me/911204740796",
  linkedin: "https://www.linkedin.com/company/28028403",
  description:
    "STRUCON Consulting Pvt. Ltd. delivers multidisciplinary engineering, structural design, BIM, and steel detailing services to global EPC companies — with proven experience across Indian, American, and European standards.",
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
