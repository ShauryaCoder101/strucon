import type { Industry } from "@/types";

/**
 * The 8 sectors the client confirmed, using their exact sector names. Each `applications`
 * list is the client's own "Typical Scope" for that sector, verbatim and in their order.
 * `overview` and `summary` are written strictly from those scope bullets — no capability,
 * tonnage or standard is claimed here that the client did not supply.
 *
 * `image` carries a real photo where one exists; slots without a photo keep their
 * `imagePrompt` so MediaFrame renders the art direction for the asset still to be sourced.
 */
export const industries: Industry[] = [
  {
    slug: "power-energy",
    title: "Power & Energy",
    summary: "Main plant, boiler, turbine and material handling structures for power generation projects.",
    image: "/images/tekla-model.jpg",
    imagePrompt:
      "Wide shot of a thermal power plant steel structure under construction at dusk, boiler framing and bunker bay, cranes, dramatic industrial lighting, no people, photoreal.",
    overview: [
      "Power projects are built around heavy, closely interlocked steelwork — boiler structures, turbine buildings and bunker bays that all have to align with the equipment they carry.",
      "STRUCON details these structures together with the conveyor systems, pipe racks, platforms and access steel that serve them, so a single coordinated package covers the whole plant area.",
    ],
    applications: [
      "Power plant structures",
      "Boiler structures",
      "Turbine buildings",
      "Bunker bays",
      "CHP structures",
      "Conveyor systems",
      "Equipment supports",
      "Pipe racks",
      "Platforms",
      "Access structures",
    ],
    relatedServices: ["structural-engineering", "steel-detailing", "bim"],
    seo: {
      title: "Power Plant Structural Engineering & Steel Detailing",
      description:
        "Structural engineering and steel detailing for power and energy projects — boiler structures, turbine buildings, bunker bays, CHP structures, pipe racks and access steel.",
      keywords: ["Power Plant Structural Design", "Boiler Structure Detailing", "Turbine Building Steel Detailing"],
    },
  },
  {
    slug: "cement-minerals",
    title: "Cement & Minerals",
    summary: "Preheater towers, mills, silos and packing plants detailed for cement and minerals processing.",
    image: "/images/bim-model.jpg",
    imagePrompt:
      "Cement plant preheater tower and conveyor galleries at golden hour, tall steel process structure, silos behind, photoreal, no people.",
    overview: [
      "Cement and minerals plants stack process equipment into tall, tightly framed structures — preheater towers, cement and coal mills, silos and packing plants.",
      "We detail these process structures along with the conveyor galleries, transfer towers, hoppers and crushers that move material between them, including the equipment support steel throughout.",
    ],
    applications: [
      "Preheater towers",
      "Cement mills",
      "Coal mills",
      "Silos",
      "Packing plants",
      "Conveyor galleries",
      "Transfer towers",
      "Hoppers",
      "Crushers",
      "Equipment support structures",
    ],
    relatedServices: ["structural-engineering", "steel-detailing", "bim"],
    seo: {
      title: "Cement Plant Structural Detailing — Preheater Towers & Silos",
      description:
        "Steel detailing and structural engineering for cement and minerals plants: preheater towers, mills, silos, packing plants, conveyor galleries and transfer towers.",
      keywords: ["Cement Plant Structural Design", "Preheater Tower Detailing", "Silo Structural Detailing"],
    },
  },
  {
    slug: "steel-metals",
    title: "Steel & Metals",
    summary: "Blast furnace, coke plant and process structures for integrated steel and metals works.",
    image: "/images/tekla-model.jpg",
    imagePrompt:
      "Blast furnace and coke plant steel structures at an integrated steel works, heavy framing and gas cleaning plant, industrial haze, photoreal, no people.",
    overview: [
      "Integrated steel works carry some of the heaviest and hottest structures in industry, from blast furnace steelwork to coke plant framing.",
      "STRUCON details these process structures with the material handling and conveyor steel, platforms, equipment supports and pipe racks that run through and around them.",
    ],
    applications: [
      "Blast furnace structures",
      "Coke plant structures",
      "Material handling",
      "Conveyor structures",
      "Process structures",
      "Platforms",
      "Equipment supports",
      "Pipe racks",
    ],
    relatedServices: ["structural-engineering", "steel-detailing", "mechanical"],
    seo: {
      title: "Steel Plant Structures — Blast Furnace & Coke Plant Detailing",
      description:
        "Structural steel detailing for steel and metals plants: blast furnace structures, coke plant structures, conveyor and material handling steel, platforms and pipe racks.",
      keywords: ["Blast Furnace Structural Detailing", "Steel Plant Structures", "Industrial Steel Structures"],
    },
  },
  {
    slug: "oil-gas-petrochemical",
    title: "Oil, Gas & Petrochemical",
    summary: "Pipe racks, process structures and equipment supports for refineries and petrochemical plants.",
    image: "/images/refinery-sunset.jpg",
    imagePrompt:
      "Refinery pipe racks and process structures at blue hour, multi-tier racks with piping and steel platforms, wide industrial landscape, photoreal, no people.",
    overview: [
      "Refinery and petrochemical sites are defined by their pipe racks and the process structures, platforms and equipment supports threaded between them.",
      "We detail that steelwork — including compressor and technological structures, access steel and the industrial buildings that sit alongside the process units — as one coordinated package.",
    ],
    applications: [
      "Pipe racks",
      "Process structures",
      "Platforms",
      "Equipment supports",
      "Compressor structures",
      "Technological structures",
      "Access structures",
      "Industrial buildings",
    ],
    relatedServices: ["structural-engineering", "steel-detailing", "process"],
    seo: {
      title: "Refinery & Petrochemical Structural Detailing — Pipe Racks",
      description:
        "Structural engineering and steel detailing for oil, gas and petrochemical projects: pipe racks, process and compressor structures, platforms and equipment supports.",
      keywords: ["Pipe Rack Design", "Refinery Structural Design", "Petrochemical Steel Detailing"],
    },
  },
  {
    slug: "material-handling",
    title: "Material Handling",
    summary: "Conveyor galleries, transfer towers, hoppers and chutes that move bulk material across a plant.",
    imagePrompt:
      "Long steel conveyor gallery spanning between transfer towers at an industrial plant, stockyard behind, golden hour, photoreal, no people.",
    overview: [
      "Material handling steel runs the length of a plant: conveyor galleries and transfer towers carrying bulk material between process areas.",
      "STRUCON details the galleries, hoppers, crushers and chutes together with their support structures and the maintenance platforms crews need to reach them.",
    ],
    applications: [
      "Conveyor galleries",
      "Transfer towers",
      "Hoppers",
      "Crushers",
      "Chutes",
      "Galleries",
      "Support structures",
      "Maintenance platforms",
    ],
    relatedServices: ["steel-detailing", "structural-engineering", "mechanical"],
    seo: {
      title: "Material Handling Structures — Conveyor Galleries & Transfer Towers",
      description:
        "Steel detailing for material handling systems: conveyor galleries, transfer towers, hoppers, crushers, chutes, support structures and maintenance platforms.",
      keywords: ["Conveyor Gallery Design", "Transfer Tower Detailing", "Material Handling Structures"],
    },
  },
  {
    slug: "lime-process",
    title: "Lime & Process Plants",
    summary: "Process and hydration plant structures, silos, conveyors and access steel for lime production.",
    image: "/images/refinery-dusk.jpg",
    imagePrompt:
      "Lime and hydration plant process structures with silos and conveyors, steel framing around vessels, overcast industrial light, photoreal, no people.",
    overview: [
      "Lime and process plants combine vessels, silos and conveying equipment inside compact steel frames that have to stay accessible for operation and maintenance.",
      "We detail the process and hydration plant structures with their silos, conveyors, equipment supports, platforms and access steel.",
    ],
    applications: [
      "Process structures",
      "Lime plants",
      "Hydration plants",
      "Conveyors",
      "Equipment supports",
      "Platforms",
      "Silos",
      "Access structures",
    ],
    relatedServices: ["structural-engineering", "steel-detailing", "process"],
    seo: {
      title: "Lime & Process Plant Structural Engineering",
      description:
        "Structural engineering and steel detailing for lime and process plants: process and hydration plant structures, silos, conveyors, equipment supports and access steel.",
      keywords: ["Lime Plant Structural Design", "Process Plant Steel Detailing", "Industrial Process Structures"],
    },
  },
  {
    slug: "industrial-manufacturing",
    title: "Industrial & Manufacturing",
    summary: "Factory and steel buildings, equipment supports, mezzanines and structural modifications.",
    image: "/images/tekla-hangar.jpg",
    imagePrompt:
      "Large steel factory building interior under construction, portal frames and mezzanine floor, roof lights, photoreal, no people.",
    overview: [
      "Manufacturing facilities need steel buildings that work around the equipment inside them rather than the other way round.",
      "STRUCON details factory and industrial buildings, their equipment supports, platforms, mezzanines and miscellaneous steel, including structural modifications to facilities already in service.",
    ],
    applications: [
      "Factory buildings",
      "Industrial structures",
      "Equipment supports",
      "Steel buildings",
      "Platforms",
      "Mezzanines",
      "Miscellaneous steel",
      "Structural modifications",
    ],
    relatedServices: ["structural-engineering", "steel-detailing", "civil-engineering"],
    seo: {
      title: "Industrial & Manufacturing Steel Buildings — Detailing & Design",
      description:
        "Structural engineering and steel detailing for factory and industrial buildings: equipment supports, platforms, mezzanines, miscellaneous steel and structural modifications.",
      keywords: ["Industrial Steel Buildings", "Factory Building Design", "Mezzanine Structural Detailing"],
    },
  },
  {
    slug: "commercial-institutional",
    title: "Commercial & Institutional",
    summary: "Structural steel and RCC for commercial and institutional buildings, canopies and staircases.",
    image: "/images/tekla-hangar.jpg",
    imagePrompt:
      "Structural steel frame of a commercial building with an architectural canopy and feature staircase, clean daylight, photoreal, no people.",
    overview: [
      "Commercial and institutional buildings put the structure on show, so steel and RCC have to be as tidy as they are efficient.",
      "We handle commercial structures and institutional buildings in both structural steel and RCC, down to canopies, staircases, platforms and modifications to existing buildings.",
    ],
    applications: [
      "Commercial structures",
      "Institutional buildings",
      "Structural steel",
      "RCC structures",
      "Canopies",
      "Staircases",
      "Platforms",
      "Structural modifications",
    ],
    relatedServices: ["structural-engineering", "civil-engineering", "steel-detailing"],
    seo: {
      title: "Commercial & Institutional Structural Engineering",
      description:
        "Structural steel and RCC engineering for commercial and institutional buildings — canopies, staircases, platforms and structural modifications to existing structures.",
      keywords: ["Commercial Structural Design", "Institutional Building Structures", "RCC Structural Design"],
    },
  },
];
