import type { Project } from "@/types";

/**
 * The client's 10 real case studies, as supplied in the content update form (Sept 2026).
 * Client names, locations, capacities, tonnages and scope lists are reproduced as given.
 *
 * Where the client supplied no challenge / solution / outcome for a project, those fields are
 * simply omitted — the case study renders shorter rather than carrying invented narrative.
 * Likewise `software` is omitted throughout: the client confirmed the software the practice
 * uses, but not which package was used on which project.
 *
 * `industry` must match an Industry `title` in src/content/industries.ts — that string is the
 * join used to surface a case study on its sector page.
 */
export const projects: Project[] = [
  {
    slug: "bakreswar-thermal-power-station",
    title: "Bakreswar Thermal Power Station — Main Plant & Bunker Bay",
    client: "Not disclosed",
    industry: "Power & Energy",
    location: "West Bengal, India",
    thumbnail: "/images/tekla-model.jpg",
    imagePrompt:
      "Main plant building and bunker bay steel structure of a thermal power station under erection, dense framing, cranes, dusk light, photoreal, no people.",
    scope: [
      "Main plant building",
      "Bunker bay",
      "Turbine-generator bay",
      "Miscellaneous steel structures",
    ],
    challenge:
      "Large-scale industrial structures required coordinated detailing capable of supporting fabrication and erection while maintaining consistency across multiple structural areas.",
    solution:
      "STRUCON provided detailed structural steel modelling and drawing packages with a focus on coordination, fabrication requirements and project execution.",
    results:
      "A coordinated structural detailing package supporting fabrication and erection of major power plant structures.",
    metrics: [
      { label: "Capacity", value: "2 × 210 MW" },
      { label: "Approx. Steel", value: "19,000 MT" },
      { label: "Location", value: "West Bengal" },
    ],
    seo: {
      title: "Case Study — Bakreswar Thermal Power Station Steel Detailing",
      description:
        "STRUCON detailed approximately 19,000 MT of main plant, bunker bay and turbine-generator bay steel for the 2 × 210 MW Bakreswar Thermal Power Station.",
      keywords: ["Thermal Power Plant Steel Detailing", "Bunker Bay Detailing", "Power Plant Structural Design"],
    },
    featured: true,
  },
  {
    slug: "sasan-thermal-power-project",
    title: "Sasan Thermal Power Project — Main Plant & TG Bay",
    client: "Reliance Energy Limited",
    industry: "Power & Energy",
    location: "Madhya Pradesh, India",
    thumbnail: "/images/tekla-model.jpg",
    imagePrompt:
      "Ultra mega thermal power project under construction, main plant building steel frame and turbine-generator bay, wide shot, photoreal, no people.",
    scope: [
      "Main plant building",
      "Bunker bay",
      "Turbine-generator bay",
      "Structural steel detailing",
    ],
    results:
      "The project demonstrates STRUCON's ability to support high-volume structural steel detailing for large thermal power facilities.",
    metrics: [
      { label: "Capacity", value: "6 × 600 MW" },
      { label: "Approx. Steel", value: "15,000 MT" },
      { label: "Client", value: "Reliance Energy" },
    ],
    seo: {
      title: "Case Study — Sasan Thermal Power Project Steel Detailing",
      description:
        "Structural steel detailing of main plant, bunker bay and turbine-generator bay structures for the 6 × 600 MW Sasan Thermal Power Project for Reliance Energy Limited.",
      keywords: ["Sasan Power Project", "Thermal Power Steel Detailing", "Turbine Building Detailing"],
    },
    featured: true,
  },
  {
    slug: "paradip-refinery-project",
    title: "Paradip Refinery Project — TSS, FSS & Hopper Structures",
    client: "Larsen & Toubro",
    industry: "Oil, Gas & Petrochemical",
    location: "Paradip, Odisha, India",
    thumbnail: "/images/refinery-dusk.jpg",
    imagePrompt:
      "Refinery under construction at dusk, structural steel hopper and transfer structures with piping, photoreal, no people.",
    scope: [
      "TSS structures",
      "FSS structures",
      "Hopper structures",
      "JB structures",
      "Structural steel detailing",
    ],
    results:
      "The project demonstrates STRUCON's experience in refinery and process-industry structural detailing.",
    metrics: [
      { label: "Approx. Steel", value: "5,000 MT" },
      { label: "Client", value: "Larsen & Toubro" },
      { label: "Location", value: "Paradip, Odisha" },
    ],
    seo: {
      title: "Case Study — Paradip Refinery Structural Steel Detailing",
      description:
        "STRUCON detailed approximately 5,000 MT of TSS, FSS, hopper and JB structures for the Paradip Refinery Project for Larsen & Toubro.",
      keywords: ["Refinery Structural Detailing", "Paradip Refinery", "Process Industry Steel Detailing"],
    },
    featured: true,
  },
  {
    slug: "kochi-refinery-project",
    title: "Kochi Refinery Project — Pipe Racks & Transfer Towers",
    client: "Larsen & Toubro",
    industry: "Oil, Gas & Petrochemical",
    location: "Kochi, Kerala, India",
    thumbnail: "/images/refinery-dusk.jpg",
    imagePrompt:
      "Refinery pipe racks and a steel transfer tower at dusk, multi-tier racks carrying piping, photoreal, no people.",
    scope: ["Pipe racks", "Transfer towers", "Structural steel detailing"],
    metrics: [
      { label: "Approx. Steel", value: "1,500 MT" },
      { label: "Client", value: "Larsen & Toubro" },
      { label: "Location", value: "Kochi, Kerala" },
    ],
    seo: {
      title: "Case Study — Kochi Refinery Pipe Rack & Transfer Tower Detailing",
      description:
        "Structural steel detailing of pipe racks and transfer towers — approximately 1,500 MT — for the Kochi Refinery Project for Larsen & Toubro.",
      keywords: ["Pipe Rack Detailing", "Kochi Refinery", "Transfer Tower Detailing"],
    },
  },
  {
    slug: "nagarjuna-oil-refinery",
    title: "Nagarjuna Oil Refinery — Pipe Racks & Platforms",
    client: "Punj Lloyd",
    industry: "Oil, Gas & Petrochemical",
    location: "India",
    thumbnail: "/images/refinery-dusk.jpg",
    imagePrompt:
      "Main and branch pipe racks at an oil refinery with access platforms, blue-hour industrial photography, photoreal, no people.",
    scope: [
      "Main pipe racks",
      "Branch pipe racks",
      "Platforms",
      "Miscellaneous buildings",
      "Structural steel detailing",
    ],
    metrics: [
      { label: "Approx. Steel", value: "2,500 MT" },
      { label: "Client", value: "Punj Lloyd" },
      { label: "Location", value: "India" },
    ],
    seo: {
      title: "Case Study — Nagarjuna Oil Refinery Pipe Rack Detailing",
      description:
        "STRUCON detailed approximately 2,500 MT of main and branch pipe racks, platforms and miscellaneous buildings for the Nagarjuna Oil Refinery for Punj Lloyd.",
      keywords: ["Pipe Rack Design", "Nagarjuna Oil Refinery", "Refinery Steel Detailing"],
    },
  },
  {
    slug: "baga-cement-plant",
    title: "Baga Cement Plant — 135 m Preheater Tower",
    client: "Jaypee Ventures",
    industry: "Cement & Minerals",
    location: "Himachal Pradesh, India",
    thumbnail: "/images/bim-model.jpg",
    imagePrompt:
      "Very tall cement plant preheater tower in a Himalayan foothill setting, steel and concrete process structure, photoreal, no people.",
    scope: ["Preheater tower", "Structural steel", "Industrial plant structures"],
    challenge:
      "The preheater tower reached approximately 135 metres and required detailed coordination of a complex industrial structure.",
    metrics: [
      { label: "Approx. Steel", value: "7,000 MT" },
      { label: "Tower Height", value: "~135 m" },
      { label: "Client", value: "Jaypee Ventures" },
    ],
    seo: {
      title: "Case Study — Baga Cement Plant 135 m Preheater Tower",
      description:
        "Structural steel detailing of a ~135 m preheater tower and associated plant structures — approximately 7,000 MT — at the Baga Cement Plant for Jaypee Ventures.",
      keywords: ["Preheater Tower Detailing", "Cement Plant Structural Design", "Baga Cement Plant"],
    },
  },
  {
    slug: "semen-andalas-indonesia",
    title: "Semen Andalas — Conveyor Galleries & Packing Plant",
    client: "Enexco Technologies India",
    industry: "Cement & Minerals",
    location: "Indonesia",
    imagePrompt:
      "Cement plant conveyor galleries and packing plant under reconstruction in a tropical coastal setting, steel galleries on trestles, photoreal, no people.",
    scope: ["Conveyor galleries", "Air slides", "Packing plant reconstruction"],
    results: "Demonstrates STRUCON's international cement-industry detailing experience.",
    metrics: [
      { label: "Approx. Steel", value: "1,000 MT" },
      { label: "Client", value: "Enexco Technologies" },
      { label: "Location", value: "Indonesia" },
    ],
    seo: {
      title: "Case Study — Semen Andalas Conveyor Galleries & Packing Plant",
      description:
        "Structural steel detailing of conveyor galleries, air slides and packing plant reconstruction — approximately 1,000 MT — at Semen Andalas, Indonesia for Enexco Technologies India.",
      keywords: ["Conveyor Gallery Detailing", "Packing Plant Structures", "International Steel Detailing"],
    },
  },
  {
    slug: "sharjah-cement",
    title: "Sharjah Cement — 10,000 t Cement Silo & Packing Plant",
    client: "Enexco Technologies India",
    industry: "Cement & Minerals",
    location: "UAE",
    imagePrompt:
      "Large cement silo with bucket elevator and packing plant at a Middle Eastern cement works, desert light, photoreal, no people.",
    scope: ["Cement silo", "Air slide", "Bucket elevator", "Packing plant"],
    metrics: [
      { label: "Key Element", value: "10,000 t silo" },
      { label: "Client", value: "Enexco Technologies" },
      { label: "Location", value: "UAE" },
    ],
    seo: {
      title: "Case Study — Sharjah Cement 10,000 Tonne Silo & Packing Plant",
      description:
        "Structural detailing of a 10,000-tonne cement silo, air slide, bucket elevator and packing plant at Sharjah Cement, UAE, for Enexco Technologies India.",
      keywords: ["Cement Silo Detailing", "Sharjah Cement", "Packing Plant Structures"],
    },
  },
  {
    slug: "nom-cement-terminal",
    title: "NOM Cement Terminal — Packing & Loading Systems",
    client: "Not disclosed",
    industry: "Material Handling",
    location: "Nigeria",
    imagePrompt:
      "Cement terminal packing plant with truck and wagon loading bays, steel structures and silos, West African industrial setting, photoreal, no people.",
    scope: [
      "Packing plant",
      "Truck loading systems",
      "Wagon loading systems",
      "Structural steel detailing",
    ],
    metrics: [
      { label: "Approx. Steel", value: "2,500 MT" },
      { label: "Location", value: "Nigeria" },
      { label: "Scope", value: "Packing & loading" },
    ],
    seo: {
      title: "Case Study — NOM Cement Terminal Packing & Loading Structures",
      description:
        "STRUCON detailed approximately 2,500 MT of packing plant, truck loading and wagon loading structures for the NOM Cement Terminal in Nigeria.",
      keywords: ["Cement Terminal Structures", "Truck Loading Structures", "Material Handling Detailing"],
    },
  },
  {
    slug: "jsw-steel-blast-furnace-upgradation",
    title: "JSW Steel — Blast Furnace Upgradation",
    client: "JSW Steel / Paul Wurth",
    industry: "Steel & Metals",
    location: "Toranagallu, Karnataka, India",
    thumbnail: "/images/detailing-drawing.jpg",
    imagePrompt:
      "Blast furnace upgradation works at an integrated steel plant, tapping structure and gas cleaning plant steelwork, industrial haze, photoreal, no people.",
    scope: [
      "Tapping structure",
      "PCI structures",
      "GCP structures",
      "Structural steel detailing",
      "Industrial steel structures",
    ],
    metrics: [
      { label: "Client", value: "JSW / Paul Wurth" },
      { label: "Location", value: "Toranagallu" },
      { label: "Scope", value: "Blast furnace" },
    ],
    seo: {
      title: "Case Study — JSW Steel Blast Furnace Upgradation Detailing",
      description:
        "Structural steel detailing of tapping, PCI and GCP structures for the JSW Steel blast furnace upgradation at Toranagallu, Karnataka, with Paul Wurth.",
      keywords: ["Blast Furnace Structural Detailing", "JSW Steel", "Steel Plant Structures"],
    },
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectSlugs = () => projects.map((p) => p.slug);
