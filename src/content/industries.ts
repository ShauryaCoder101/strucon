import type { Industry } from "@/types";

/**
 * The 10 sectors the client confirmed in round 2 (Oct 2026, row 34), using their exact
 * sector names and in their order. This list REPLACES the 8 sectors published in round 1:
 * "Cement & Minerals" became "Cement & Building Materials", "Lime & Process Plants" became
 * "Lime & Mineral Processing", "Industrial & Manufacturing" became "Industrial & Heavy
 * Engineering", and two sectors are new ("Chemical & Fertilizer", "Specialized &
 * International Steel Detailing").
 *
 * Each `applications` list is the client's own "Typical Scope" sentence for that sector
 * (row 35), split into bullets with no additions. `summary` and `overview` are written
 * strictly from that same sentence — no capability, tonnage, standard or client is claimed
 * here that the client did not supply.
 *
 * `title` is load-bearing: src/content/projects.ts cross-links each case study to its
 * sector by matching `project.industry === industry.title` (see src/app/industries/[slug]).
 * If a title changes here, remap the affected projects in the same commit.
 *
 * `image` carries a real photo where one exists; slots without a photo keep their
 * `imagePrompt` so MediaFrame renders the art direction for the asset still to be sourced.
 */
export const industries: Industry[] = [
  {
    slug: "power-energy",
    title: "Power & Energy",
    summary: "Main plant, boiler, turbine and switchyard structures for power generation projects.",
    image: "/images/tekla-model.jpg",
    imagePrompt:
      "Wide shot of a thermal power plant steel structure under construction at dusk, boiler framing and bunker bay, cranes, dramatic industrial lighting, no people, photoreal.",
    overview: [
      "Power and captive power projects are built around heavy, closely interlocked steelwork — boiler structures, TG buildings and bunker bays that all have to align with the equipment they carry.",
      "STRUCON works on these structures together with the CHP, pipe racks, switchyard structures and associated infrastructure that serve them.",
    ],
    applications: [
      "Power plants",
      "Captive power plants",
      "TG buildings",
      "Boiler structures",
      "Bunker bays",
      "CHP",
      "Pipe racks",
      "Switchyard structures",
      "Associated infrastructure",
    ],
    relatedServices: ["structural-engineering", "steel-detailing", "bim"],
    seo: {
      title: "Power Plant Structural Engineering & Steel Detailing",
      description:
        "Structural engineering and steel detailing for power and energy projects — boiler structures, TG buildings, bunker bays, CHP, pipe racks and switchyard structures.",
      keywords: ["Power Plant Structural Design", "Boiler Structure Detailing", "TG Building Steel Detailing"],
    },
  },
  {
    slug: "cement-building-materials",
    title: "Cement & Building Materials",
    summary: "Preheater towers, grinding units, silos and packing plants for cement and building materials.",
    image: "/images/bim-model.jpg",
    imagePrompt:
      "Cement plant preheater tower and conveyor galleries at golden hour, tall steel process structure, silos behind, photoreal, no people.",
    overview: [
      "Cement plants and grinding units stack process equipment into tall, tightly framed structures — preheater towers, silos and packing plants.",
      "We work on those structures alongside the clinker handling, conveyors, crushers and associated structures that move material between them.",
    ],
    applications: [
      "Cement plants",
      "Grinding units",
      "Preheater towers",
      "Silos",
      "Packing plants",
      "Clinker handling",
      "Conveyors",
      "Crushers",
      "Associated structures",
    ],
    relatedServices: ["structural-engineering", "steel-detailing", "bim"],
    seo: {
      title: "Cement Plant Structural Detailing — Preheater Towers & Silos",
      description:
        "Steel detailing and structural engineering for cement and building materials plants: preheater towers, grinding units, silos, packing plants, clinker handling and conveyors.",
      keywords: ["Cement Plant Structural Design", "Preheater Tower Detailing", "Silo Structural Detailing"],
    },
  },
  {
    slug: "oil-gas-petrochemicals",
    title: "Oil, Gas & Petrochemicals",
    summary: "Pipe racks, process structures and compressor houses for refineries and petrochemical facilities.",
    image: "/images/refinery-sunset.jpg",
    imagePrompt:
      "Refinery pipe racks and process structures at blue hour, multi-tier racks with piping and steel platforms, wide industrial landscape, photoreal, no people.",
    overview: [
      "Refineries and petrochemical facilities are defined by their pipe racks and the process structures, compressor houses and platforms threaded between them.",
      "STRUCON works on that steelwork together with the technological structures, ducting and supporting steelwork around it.",
    ],
    applications: [
      "Refineries",
      "Petrochemical facilities",
      "Pipe racks",
      "Process structures",
      "Compressor houses",
      "Platforms",
      "Technological structures",
      "Ducting",
      "Supporting steelwork",
    ],
    relatedServices: ["structural-engineering", "steel-detailing", "process"],
    seo: {
      title: "Refinery & Petrochemical Structural Detailing — Pipe Racks",
      description:
        "Structural engineering and steel detailing for oil, gas and petrochemical projects: pipe racks, process structures, compressor houses, platforms, ducting and supporting steelwork.",
      keywords: ["Pipe Rack Design", "Refinery Structural Design", "Petrochemical Steel Detailing"],
    },
  },
  {
    slug: "steel-metals",
    title: "Steel & Metals",
    summary: "Heavy structural systems, platforms and material-handling structures for steel and metals plants.",
    image: "/images/tekla-model.jpg",
    imagePrompt:
      "Blast furnace and coke plant steel structures at an integrated steel works, heavy framing and gas cleaning plant, industrial haze, photoreal, no people.",
    overview: [
      "Steel plants and production facilities carry some of the heaviest structural systems in industry.",
      "We work on those systems with the platforms, material-handling structures and associated industrial infrastructure that run through and around them.",
    ],
    applications: [
      "Steel plants",
      "Production facilities",
      "Heavy structural systems",
      "Platforms",
      "Material-handling structures",
      "Associated industrial infrastructure",
    ],
    relatedServices: ["structural-engineering", "steel-detailing", "mechanical"],
    seo: {
      title: "Steel Plant Structures — Heavy Structural Systems & Detailing",
      description:
        "Structural steel detailing for steel and metals plants: production facilities, heavy structural systems, platforms, material-handling structures and industrial infrastructure.",
      keywords: ["Steel Plant Structures", "Heavy Structural Steel Detailing", "Industrial Steel Structures"],
    },
  },
  {
    slug: "material-handling-bulk-solids",
    title: "Material Handling & Bulk Solids",
    summary: "Conveyor galleries, transfer towers, hoppers and loading systems that move bulk material.",
    imagePrompt:
      "Long steel conveyor gallery spanning between transfer towers at an industrial plant, stockyard behind, golden hour, photoreal, no people.",
    overview: [
      "Bulk-material handling steel runs the length of a plant: conveyor galleries and transfer towers carrying material between process areas.",
      "STRUCON works on those galleries and towers with the hoppers, bunkers, crushers, stockyards, loading systems and other bulk-material handling structures that feed them.",
    ],
    applications: [
      "Conveyor galleries",
      "Transfer towers",
      "Hoppers",
      "Bunkers",
      "Crushers",
      "Stockyards",
      "Loading systems",
      "Other bulk-material handling structures",
    ],
    relatedServices: ["steel-detailing", "structural-engineering", "mechanical"],
    seo: {
      title: "Material Handling Structures — Conveyor Galleries & Transfer Towers",
      description:
        "Steel detailing for material handling and bulk solids: conveyor galleries, transfer towers, hoppers, bunkers, crushers, stockyards and loading systems.",
      keywords: ["Conveyor Gallery Design", "Transfer Tower Detailing", "Bulk Material Handling Structures"],
    },
  },
  {
    slug: "lime-mineral-processing",
    title: "Lime & Mineral Processing",
    summary: "Lime plant and processing structures, silos, conveyors and transfer structures.",
    image: "/images/refinery-dusk.jpg",
    imagePrompt:
      "Lime and hydration plant process structures with silos and conveyors, steel framing around vessels, overcast industrial light, photoreal, no people.",
    overview: [
      "Lime plants and mineral processing facilities combine vessels, silos and conveying equipment inside compact steel frames.",
      "We work on those facilities together with their silos, conveyors, transfer structures and supporting industrial infrastructure.",
    ],
    applications: [
      "Lime plants",
      "Processing facilities",
      "Silos",
      "Conveyors",
      "Transfer structures",
      "Supporting industrial infrastructure",
    ],
    relatedServices: ["structural-engineering", "steel-detailing", "process"],
    seo: {
      title: "Lime & Mineral Processing Structural Engineering",
      description:
        "Structural engineering and steel detailing for lime and mineral processing: lime plants, processing facilities, silos, conveyors and transfer structures.",
      keywords: ["Lime Plant Structural Design", "Mineral Processing Steel Detailing", "Industrial Process Structures"],
    },
  },
  {
    slug: "chemical-fertilizer",
    title: "Chemical & Fertilizer",
    summary: "Process facilities, equipment-support structures, pipe racks and access structures.",
    imagePrompt:
      "Fertilizer plant process structures and pipe racks with steel access platforms around tall vessels, flat industrial daylight, photoreal, no people.",
    overview: [
      "Chemical and fertilizer process facilities are built around their equipment, so the steel has to be shaped by what it supports.",
      "STRUCON works on the equipment-support structures, pipe racks, platforms and access structures, with the associated civil and structural engineering alongside them.",
    ],
    applications: [
      "Process facilities",
      "Equipment-support structures",
      "Pipe racks",
      "Platforms",
      "Access structures",
      "Associated civil and structural engineering",
    ],
    relatedServices: ["structural-engineering", "steel-detailing", "process"],
    seo: {
      title: "Chemical & Fertilizer Plant Structural Engineering",
      description:
        "Civil and structural engineering and steel detailing for chemical and fertilizer plants: process facilities, equipment-support structures, pipe racks, platforms and access structures.",
      keywords: ["Fertilizer Plant Structural Design", "Chemical Plant Steel Detailing", "Equipment Support Structures"],
    },
  },
  {
    slug: "industrial-heavy-engineering",
    title: "Industrial & Heavy Engineering",
    summary: "Complex industrial facilities, equipment supports, access platforms and miscellaneous steelwork.",
    image: "/images/tekla-hangar.jpg",
    imagePrompt:
      "Large steel factory building interior under construction, portal frames and mezzanine floor, roof lights, photoreal, no people.",
    overview: [
      "Complex industrial facilities need process structures and equipment supports that work around the plant inside them rather than the other way round.",
      "We work on those structures with their access platforms, miscellaneous steelwork and the specialized engineering requirements that come with them.",
    ],
    applications: [
      "Complex industrial facilities",
      "Process structures",
      "Equipment supports",
      "Access platforms",
      "Miscellaneous steelwork",
      "Specialized engineering requirements",
    ],
    relatedServices: ["structural-engineering", "steel-detailing", "civil-engineering"],
    seo: {
      title: "Industrial & Heavy Engineering Structures — Detailing & Design",
      description:
        "Structural engineering and steel detailing for complex industrial facilities: process structures, equipment supports, access platforms and miscellaneous steelwork.",
      keywords: ["Industrial Steel Structures", "Heavy Engineering Structural Design", "Equipment Support Detailing"],
    },
  },
  {
    slug: "commercial-institutional-buildings",
    title: "Commercial & Institutional Buildings",
    summary: "Commercial buildings, institutional facilities and pre-engineered structures.",
    image: "/images/tekla-hangar.jpg",
    imagePrompt:
      "Structural steel frame of a commercial building with an architectural canopy and feature staircase, clean daylight, photoreal, no people.",
    overview: [
      "Commercial buildings and institutional facilities put the structure on show, so it has to be as tidy as it is efficient.",
      "We work on those buildings along with pre-engineered structures and other architectural and structural projects.",
    ],
    applications: [
      "Commercial buildings",
      "Institutional facilities",
      "Pre-engineered structures",
      "Other architectural and structural projects",
    ],
    relatedServices: ["structural-engineering", "civil-engineering", "steel-detailing"],
    seo: {
      title: "Commercial & Institutional Building Structural Engineering",
      description:
        "Structural engineering for commercial buildings and institutional facilities, pre-engineered structures and other architectural and structural projects.",
      keywords: ["Commercial Structural Design", "Institutional Building Structures", "Pre-Engineered Buildings"],
    },
  },
  {
    slug: "specialized-international-steel-detailing",
    title: "Specialized & International Steel Detailing",
    summary: "Steel detailing, 3D modelling and fabrication documentation to international standards.",
    image: "/images/detailing-drawing.jpg",
    imagePrompt:
      "Tekla Structures 3D steel model on screen beside a printed fabrication drawing with weld and bolt annotations, close detail, photoreal, no people.",
    overview: [
      "Some packages are defined less by their sector than by the standard they must be detailed to.",
      "STRUCON provides structural steel detailing, 3D modelling and fabrication documentation for projects designed to Indian, American, European and other applicable international standards.",
    ],
    applications: [
      "Structural steel detailing",
      "3D modelling",
      "Fabrication documentation",
      "Projects designed to Indian standards",
      "Projects designed to American standards",
      "Projects designed to European standards",
      "Projects designed to other applicable international standards",
    ],
    relatedServices: ["steel-detailing", "bim", "structural-engineering"],
    seo: {
      title: "International Steel Detailing — Indian, American & European Standards",
      description:
        "Structural steel detailing, 3D modelling and fabrication documentation for projects designed to Indian, American, European and other applicable international standards.",
      keywords: ["International Steel Detailing", "Tekla 3D Modelling", "Fabrication Documentation"],
    },
  },
];
