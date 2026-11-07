import type { NavItem, Office } from "@/types";

/**
 * Global site configuration — the single place to edit company-wide facts.
 * All values below are client-confirmed (content update form round 2, Oct 2026).
 *
 * NOTE ON CERTIFICATION: the client has now confirmed ISO 9001:2015 in writing (round 2,
 * row 5) and answered "NA" to any further certifications (row 6), so `certification` below
 * is the ONLY certification claim published anywhere on this site. Design/detailing
 * STANDARDS the client works to are a separate thing and live in
 * src/content/about.ts → `standards`. Do not conflate the two, and do not add further
 * certifications without a written, current certificate from the client.
 *
 * NOTE ON FOUNDING YEAR: the client confirmed 2008 as the founded/incorporation year
 * (rows 4 and 10: "incorporated in 2008, 18years"), so `founded` is 2008 and the stats bar
 * reads "18+ Years of Engineering". Their own story copy (src/content/about.ts → `story`,
 * supplied verbatim) still opens "Since 2003". That discrepancy is THEIRS and is deliberate
 * here — do not silently "fix" either value; raise it with the client instead.
 */
export const site = {
  name: "STRUCON",
  legalName: "STRUCON Consulting Private Limited",
  // Client-approved tagline (round 2, row 3).
  tagline: "Precision. Performance. Progress.",
  // Marketing headline — client-approved positioning line (round 2, row 2).
  positioning: "Engineering Excellence Without Boundaries.",
  url: "https://www.strucon.net",
  // Incorporation year, client-confirmed (round 2, row 4). See the founding-year note above:
  // the client's own story copy still says "Since 2003".
  founded: "2008",
  // Quality certification held — client-confirmed (round 2, row 5). The only one claimed.
  certification: "ISO 9001:2015",
  // Statutory registration numbers — client-supplied (round 2, row 69). The CIN supersedes
  // the value given in round 1 (U24319HR2008PTC037858); both are shown in the footer.
  cin: "U74140HR2008PTC037858",
  gst: "09AAMCS1907R1ZL",
  // General address — client-confirmed unchanged (round 2, row 22).
  email: "info@strucon.net",
  emailSecondary: "owais@strucon.net",
  emailSales: "aly@strucon.net",
  phone: "+91-120-4740796",
  phoneHref: "tel:+911204740796",
  // No additional mobile number, WhatsApp line or published business hours: the client
  // answered "na" to all three (round 2, rows 20, 21, 27). LinkedIn is the only social
  // profile they hold (row 26).
  linkedin: "https://www.linkedin.com/company/strucon-consulting-private-limited/",
  description:
    "STRUCON Consulting Private Limited delivers structural engineering, BIM, steel detailing, and project engineering for industrial and infrastructure projects in India and international markets.",
};

/**
 * Where form submissions and direct emails are routed. Client-specified in round 2:
 * website enquiries to owais@ and aly@ (row 73); job applications to info@ and owais@
 * (row 53, replacing the former careers@ address, which the client did not confirm).
 */
export const enquiryEmails = [site.emailSecondary, site.emailSales];
export const applicationEmails = [site.email, site.emailSecondary];

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
