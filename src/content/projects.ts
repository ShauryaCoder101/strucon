import type { Project } from "@/types";

/**
 * PLACEHOLDER case studies — realistic but fictional until real, NDA-cleared projects are supplied.
 * Replace client names / metrics with verified data before go-live (see REQUIREMENTS.md §3.4).
 */
export const projects: Project[] = [
  {
    slug: "thermal-power-plant-structural-design",
    title: "660 MW Thermal Power Plant — Boiler & TG Structures",
    client: "Confidential EPC Client",
    industry: "Power",
    location: "India",
    imagePrompt:
      "Boiler steel structure of a supercritical thermal power plant under construction, dense framing, cranes, dusk lighting, photoreal, no people.",
    challenge:
      "Compressed detailing schedule across boiler and turbine-generator structures with continuous design revisions.",
    solution:
      "Tekla-led detailing with a dedicated change-control workflow and daily model coordination between structural and mechanical disciplines.",
    results:
      "Delivered fabrication drawings ahead of the erection schedule with zero major RFIs at site, keeping the EPC programme on track.",
    metrics: [
      { label: "Steel Detailed", value: "18,500 MT" },
      { label: "Schedule", value: "-12%" },
      { label: "Standard", value: "AISC" },
    ],
    software: ["Tekla Structures", "STAAD.Pro"],
    gallery: [
      "Boiler support steel structure under erection, wide shot, photoreal.",
      "Tekla model screenshot of boiler framing with connections highlighted.",
      "Turbine-generator deck steel structure with equipment openings, photoreal.",
    ],
    seo: {
      title: "Case Study — 660 MW Thermal Power Plant Steel Detailing",
      description: "How STRUCON detailed 18,500 MT of boiler and TG steel for a 660 MW thermal power plant ahead of schedule with zero major site RFIs.",
      keywords: ["Power Plant Structural Design", "Boiler Structure Detailing", "Steel Detailing Case Study"],
    },
    featured: true,
  },
  {
    slug: "refinery-pipe-rack-design",
    title: "Refinery Expansion — Pipe Racks & Structures",
    client: "Confidential EPC Client",
    industry: "Petrochemical",
    location: "Middle East",
    imagePrompt:
      "Refinery pipe rack steel structure at blue hour, multi-tier racks with piping, industrial photography, photoreal.",
    challenge:
      "Multi-tier pipe racks requiring tight coordination between structural, process, and piping disciplines across a live refinery.",
    solution:
      "Integrated BIM model with clash detection resolving interferences before fabrication, plus staged drawings for a live-site tie-in.",
    results:
      "Clash-free constructible model reduced site rework and accelerated erection within a running facility.",
    metrics: [
      { label: "Pipe Rack", value: "3.2 km" },
      { label: "Clashes Resolved", value: "1,400+" },
      { label: "Standard", value: "Eurocode" },
    ],
    software: ["Tekla Structures", "Navisworks"],
    gallery: [
      "Multi-tier pipe rack with piping and cable trays, photoreal.",
      "Navisworks federated model with clash markers visible.",
      "Pipe rack erection at a live refinery, cranes, photoreal.",
    ],
    seo: {
      title: "Case Study — Refinery Pipe Rack Design & BIM Coordination",
      description: "STRUCON delivered 3.2 km of clash-free refinery pipe racks using BIM coordination, cutting site rework on a live-facility expansion.",
      keywords: ["Pipe Rack Design", "Refinery Structural Design", "BIM Clash Detection"],
    },
    featured: true,
  },
  {
    slug: "cement-plant-conveyor-galleries",
    title: "Cement Plant — Conveyor Galleries & Transfer Towers",
    client: "Confidential EPC Client",
    industry: "Industrial Buildings",
    location: "India",
    imagePrompt:
      "Long steel conveyor gallery and transfer tower at a cement plant, preheater tower behind, golden hour, photoreal, no people.",
    challenge:
      "Long-span conveyor galleries over live plant operations with strict erection sequencing.",
    solution:
      "Modular detailing and staged erection drawings enabling installation without a plant shutdown.",
    results:
      "Sequenced deliverables kept the plant running throughout installation, avoiding costly downtime.",
    metrics: [
      { label: "Gallery Length", value: "2.1 km" },
      { label: "Steel Detailed", value: "7,200 MT" },
      { label: "Standard", value: "IS 800" },
    ],
    software: ["Tekla Structures", "AutoCAD"],
    gallery: [
      "Conveyor gallery spanning between transfer towers, cement plant, photoreal.",
      "Transfer tower steel structure with chutes, photoreal.",
      "Tekla model of conveyor gallery truss with member marks.",
    ],
    seo: {
      title: "Case Study — Cement Plant Conveyor Galleries & Transfer Towers",
      description: "STRUCON detailed 2.1 km of conveyor galleries and transfer towers for a live cement plant using staged erection to avoid shutdown.",
      keywords: ["Conveyor Gallery Design", "Transfer Tower Design", "Cement Plant Structural Design"],
    },
    featured: true,
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectSlugs = () => projects.map((p) => p.slug);
