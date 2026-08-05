import type { Industry } from "@/types";

/**
 * 8 industries per brief. `imagePrompt` is art direction for sourcing/generating the final
 * image (no generic office stock). Drop a real path into `image` to replace the placeholder.
 */
export const industries: Industry[] = [
  {
    slug: "power",
    title: "Power",
    summary: "Structural design and detailing for thermal, hydro, and renewable power plants.",
    imagePrompt:
      "Wide shot of a coal/thermal power plant steel structure under construction at dusk, boiler framing and pipe racks, cranes, dramatic industrial lighting, no people, photoreal.",
    overview: [
      "Power projects demand heavy, closely-coordinated steel — boiler structures, turbine buildings, ESPs, chimneys, and dense pipe racks — delivered to tight EPC schedules.",
      "STRUCON has detailed steel for power plants across capacities and standards, coordinating structural design and detailing so fabrication and erection stay ahead of the programme.",
    ],
    applications: ["Boiler & TG structures", "Pipe racks & trestles", "ESP & ducting supports", "Chimney & silo structures", "Coal & ash handling structures"],
    relatedServices: ["structural-engineering", "steel-detailing", "bim"],
    seo: {
      title: "Power Plant Structural Design & Steel Detailing",
      description: "Structural design and steel detailing for thermal, hydro, and renewable power plants — boiler structures, pipe racks, and material handling, to EPC schedules.",
      keywords: ["Power Plant Structural Design", "Boiler Structure Detailing", "Power Plant Steel Detailing"],
    },
  },
  {
    slug: "steel",
    title: "Steel Plants",
    summary: "Heavy structures for integrated steel plants, mills, and material handling.",
    imagePrompt:
      "Interior of an integrated steel plant rolling mill, molten-orange glow, massive steel gantry structures and overhead cranes, sparks, photoreal, cinematic.",
    overview: [
      "Integrated steel plants involve some of the heaviest structures in industry — mill buildings, crane gantries, and material handling running at high duty cycles.",
      "We detail these structures for strength and fabricability, coordinating heavy connections and crane loads with the mechanical equipment they support.",
    ],
    applications: ["Mill & shop buildings", "Heavy crane gantry girders", "Furnace & caster structures", "Conveyor & material handling", "Stockyard structures"],
    relatedServices: ["structural-engineering", "steel-detailing", "mechanical"],
    seo: {
      title: "Steel Plant Structures — Heavy Industrial Steel Detailing",
      description: "Structural design and detailing for integrated steel plants: mill buildings, crane gantries, and material handling structures engineered for heavy duty cycles.",
      keywords: ["Steel Plant Structures", "Crane Gantry Girder Design", "Industrial Steel Structures"],
    },
  },
  {
    slug: "oil-gas",
    title: "Oil & Gas",
    summary: "Onshore and offshore structures, pipe racks, and equipment supports.",
    imagePrompt:
      "Oil & gas onshore facility with dense steel pipe racks and process modules against a blue sky, no people, industrial photography.",
    overview: [
      "Oil & gas facilities are defined by their pipe racks, modules, and equipment supports — where structural, piping, and process disciplines must resolve together.",
      "We deliver coordinated structures and pipe racks that carry the plant cleanly, using BIM to clear interferences before anything reaches the fabrication shop.",
    ],
    applications: ["Multi-tier pipe racks", "Equipment & vessel supports", "Technological & access structures", "Modules & skids", "Flare & stack supports"],
    relatedServices: ["structural-engineering", "steel-detailing", "process"],
    seo: {
      title: "Oil & Gas Structures — Pipe Rack Design & Detailing",
      description: "Structural engineering and detailing for oil & gas: multi-tier pipe racks, equipment supports, modules, and technological structures — BIM-coordinated.",
      keywords: ["Pipe Rack Design", "Oil and Gas Structural Engineering", "Equipment Support Design"],
    },
  },
  {
    slug: "petrochemical",
    title: "Petrochemical",
    summary: "Structural and process support for refineries and petrochemical complexes.",
    imagePrompt:
      "Refinery / petrochemical complex at blue hour, distillation columns, pipe racks and steel platforms lit up, wide industrial landscape, photoreal.",
    overview: [
      "Refineries and petrochemical complexes combine dense piping, large equipment, and demanding process requirements across sprawling sites.",
      "STRUCON supports these projects with coordinated structural and process engineering — pipe racks, platforms, and supports detailed for constructability and access.",
    ],
    applications: ["Pipe racks & sleepers", "Column & vessel access platforms", "Heater & furnace structures", "Process P&IDs & documentation", "Tie-in & revamp structures"],
    relatedServices: ["structural-engineering", "process", "steel-detailing"],
    seo: {
      title: "Petrochemical & Refinery Structural Engineering",
      description: "Structural and process engineering for refineries and petrochemical plants: pipe racks, access platforms, heater structures, and P&ID support.",
      keywords: ["Refinery Structural Design", "Petrochemical Engineering Consultants", "Pipe Rack Design"],
    },
  },
  {
    slug: "mining",
    title: "Mining",
    summary: "Conveyor galleries, transfer towers, and ore-handling steel structures.",
    imagePrompt:
      "Long steel conveyor gallery and transfer tower at a mining site crossing rugged terrain, golden hour, industrial engineering photography, no people.",
    overview: [
      "Mining and mineral handling rely on long conveyor galleries, transfer towers, and stockyard structures — often over difficult terrain and live operations.",
      "We detail these long-span structures for staged erection, keeping installation possible without halting the plant.",
    ],
    applications: ["Conveyor galleries", "Transfer towers", "Stackers & reclaimers structures", "Crushing & screening structures", "Stockyard & silo structures"],
    relatedServices: ["structural-engineering", "steel-detailing", "mechanical"],
    seo: {
      title: "Mining Structures — Conveyor Gallery & Transfer Tower Design",
      description: "Structural design and detailing for mining and material handling: conveyor galleries, transfer towers, and ore-handling structures built for staged erection.",
      keywords: ["Conveyor Gallery Design", "Transfer Tower Design", "Material Handling Structures"],
    },
  },
  {
    slug: "infrastructure",
    title: "Infrastructure",
    summary: "Bridges, industrial buildings, and large-span structural systems.",
    imagePrompt:
      "Large-span steel truss bridge or infrastructure structure under construction, engineers-eye view of connections, clean sky, photoreal.",
    overview: [
      "Infrastructure work spans bridges, large-span roofs, and industrial buildings where geometry and connections drive the engineering.",
      "We bring structural design and detailing together to deliver efficient, buildable large-span systems.",
    ],
    applications: ["Steel & composite bridges", "Large-span roofs & trusses", "Industrial & commercial buildings", "Airport & station structures", "Pedestrian structures"],
    relatedServices: ["structural-engineering", "steel-detailing", "civil-engineering"],
    seo: {
      title: "Infrastructure Structural Engineering & Steel Detailing",
      description: "Structural engineering and steel detailing for infrastructure: bridges, large-span roofs, and industrial buildings — efficient, buildable systems.",
      keywords: ["Infrastructure Steel Detailing", "Bridge Structural Design", "Large Span Steel Structures"],
    },
  },
  {
    slug: "warehousing",
    title: "Warehousing",
    summary: "Pre-engineered buildings and long-span warehouse structures.",
    imagePrompt:
      "Interior of a vast pre-engineered steel warehouse, repeating portal frames and purlins, skylights, clean and modern, wide angle, no people.",
    overview: [
      "Warehousing and logistics buildings reward efficient, repeatable structural systems — portal frames, purlins, and cladding support optimised for cost.",
      "We design and detail PEB and long-span warehouse structures that are fast to fabricate and erect.",
    ],
    applications: ["Pre-engineered buildings (PEB)", "Long-span portal frames", "Mezzanine structures", "Crane-supporting warehouses", "Cladding & purlin systems"],
    relatedServices: ["structural-engineering", "steel-detailing", "civil-engineering"],
    seo: {
      title: "Warehouse & PEB Structural Design & Detailing",
      description: "Structural design and detailing for warehouses and pre-engineered buildings (PEB): portal frames, mezzanines, and long-span systems optimised for cost.",
      keywords: ["PEB Structural Design", "Warehouse Steel Structures", "Pre-Engineered Building Design"],
    },
  },
  {
    slug: "industrial-buildings",
    title: "Industrial Buildings",
    summary: "Cement, lime, fertilizer, and chemical plant structures.",
    imagePrompt:
      "Cement plant with preheater tower and steel structures against a dramatic sky, conveyor lines, industrial photography, photoreal.",
    overview: [
      "Cement, lime, fertilizer, and chemical plants combine tall process structures, silos, and heavy material handling.",
      "STRUCON has deep experience across these plants — detailing preheater towers, silos, and process structures to demanding schedules.",
    ],
    applications: ["Preheater & process towers", "Silos & bunkers", "Kiln & mill structures", "Packing & dispatch structures", "Conveyor & handling structures"],
    relatedServices: ["structural-engineering", "steel-detailing", "civil-engineering"],
    seo: {
      title: "Cement & Industrial Plant Structural Design",
      description: "Structural design and steel detailing for cement, lime, fertilizer, and chemical plants: preheater towers, silos, and process structures.",
      keywords: ["Cement Plant Structural Design", "Industrial Building Design", "Process Structure Detailing"],
    },
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
export const industrySlugs = () => industries.map((i) => i.slug);
