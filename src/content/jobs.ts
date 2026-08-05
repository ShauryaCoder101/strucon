import type { Job } from "@/types";

/**
 * PLACEHOLDER openings — replace with real vacancies before go-live, or wire this list to
 * your ATS (see REQUIREMENTS.md §3.7). `department` powers the careers filter.
 */
export const culture = [
  { title: "Learn every day", description: "Complex EPC projects across power, oil & gas, and steel — real engineering, not repetition." },
  { title: "Global standards", description: "Work to AISC, Eurocode, IS, and BS — and grow fluent across international codes." },
  { title: "Latest technology", description: "Tekla-led BIM and a modern toolset, kept current." },
  { title: "Grow with us", description: "Clear progression from detailer to checker to lead, backed by mentoring." },
];

export const benefits = [
  "Competitive compensation",
  "Structured training & upskilling",
  "Exposure to international projects",
  "Health & wellbeing support",
  "Supportive, engineering-led culture",
  "Modern tools & infrastructure",
];

export const jobs: Job[] = [
  {
    slug: "senior-steel-detailer-tekla",
    title: "Senior Steel Detailer (Tekla)",
    department: "Steel Detailing",
    location: "Noida, India",
    type: "Full-time",
    experience: "5+ years",
    summary: "Produce and check fabrication and erection drawings in Tekla Structures for heavy industrial projects.",
    responsibilities: [
      "Model and detail steel structures in Tekla Structures",
      "Design and model connections to project standards",
      "Prepare fabrication/erection drawings, BOMs, and CNC data",
      "Support checking and resolve site RFIs",
    ],
    requirements: [
      "5+ years of steel detailing in Tekla Structures",
      "Experience with AISC / BS / IS detailing standards",
      "Strong understanding of connections and fabrication",
      "Good communication and coordination skills",
    ],
  },
  {
    slug: "structural-design-engineer",
    title: "Structural Design Engineer",
    department: "Structural Engineering",
    location: "Noida, India",
    type: "Full-time",
    experience: "3+ years",
    summary: "Analyse and design steel and RCC structures for industrial and EPC projects.",
    responsibilities: [
      "Perform structural analysis and design in STAAD.Pro / ETABS",
      "Develop GA drawings and design calculations",
      "Coordinate with detailing and other disciplines",
      "Support independent design checks",
    ],
    requirements: [
      "B.E./M.E. in Civil/Structural Engineering",
      "3+ years designing industrial structures",
      "Proficiency in STAAD.Pro or ETABS",
      "Knowledge of IS / AISC / Eurocode",
    ],
  },
  {
    slug: "bim-coordinator",
    title: "BIM Coordinator",
    department: "BIM",
    location: "Noida, India",
    type: "Full-time",
    experience: "4+ years",
    summary: "Own federated models and clash detection across disciplines for EPC projects.",
    responsibilities: [
      "Federate and coordinate multi-discipline models in Navisworks",
      "Run clash detection and manage resolution",
      "Maintain BIM standards and the BIM execution plan",
      "Support quantity take-offs and coordination reporting",
    ],
    requirements: [
      "4+ years in BIM coordination for industrial projects",
      "Proficiency in Navisworks, Revit, and/or Tekla",
      "Understanding of LOD and constructible modelling",
      "Strong coordination and reporting skills",
    ],
  },
  {
    slug: "graduate-engineer-trainee",
    title: "Graduate Engineer Trainee",
    department: "Structural Engineering",
    location: "Noida, India",
    type: "Full-time",
    experience: "0–1 years",
    summary: "Start your engineering career with structured training across design and detailing.",
    responsibilities: [
      "Learn structural design and detailing workflows",
      "Support senior engineers on live projects",
      "Build proficiency in industry software",
    ],
    requirements: [
      "B.E./B.Tech in Civil/Structural Engineering",
      "Strong fundamentals and eagerness to learn",
      "Good analytical and communication skills",
    ],
  },
];

export const jobDepartments = () => Array.from(new Set(jobs.map((j) => j.department)));
