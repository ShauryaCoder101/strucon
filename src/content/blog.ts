import type { BlogPost } from "@/types";

/**
 * Seed blog posts. Bylines/technical claims are placeholder — confirm before go-live
 * (see REQUIREMENTS.md §3.6). Add posts by appending to this array.
 */
export const posts: BlogPost[] = [
  {
    slug: "why-bim-is-non-negotiable-for-epc-projects",
    title: "Why BIM Is Non-Negotiable for Modern EPC Projects",
    excerpt:
      "Clash-free construction, reliable quantities, and fewer site surprises — how federated BIM has become the backbone of EPC delivery.",
    category: "BIM",
    author: "STRUCON Engineering Team",
    date: "2026-05-20",
    readingMinutes: 6,
    coverPrompt: "Federated BIM model of an industrial plant with structure, piping, and equipment colour-coded, clash markers, photoreal screen capture.",
    body: [
      { type: "p", text: "On a modern EPC project, the cost of a clash discovered at site dwarfs the cost of finding it in a model. That single economic fact is why Building Information Modelling has moved from a differentiator to a baseline expectation." },
      { type: "h2", text: "One model, every discipline" },
      { type: "p", text: "A federated BIM model brings structural, piping, mechanical, and electrical scopes into a single coordinated environment. Instead of reconciling 2D drawings after the fact, teams coordinate against one source of truth." },
      { type: "h2", text: "Where BIM pays for itself" },
      { type: "ul", items: ["Clash detection resolves interferences before fabrication", "Model-driven quantities improve planning and procurement", "Constructible detail flows straight into fabrication", "Fewer RFIs and less rework at site"] },
      { type: "h2", text: "The constructibility test" },
      { type: "p", text: "Not all models are equal. A visualisation model looks impressive; a constructible model can be built from. The difference is level of detail (LOD) and the discipline of coordinating connections, supports, and interfaces — which is where experienced detailing teams earn their keep." },
      { type: "p", text: "For EPC clients, the takeaway is simple: insist on constructible BIM, agree the LOD up front, and treat clash resolution as a deliverable — not an afterthought." },
    ],
    seo: {
      title: "Why BIM Is Non-Negotiable for Modern EPC Projects",
      description: "How federated BIM and clash detection cut rework and RFIs on EPC projects — and what makes a model genuinely constructible.",
      keywords: ["Structural BIM Services", "BIM Clash Detection", "EPC Engineering Design"],
    },
  },
  {
    slug: "how-tekla-detailing-cuts-site-rfis",
    title: "How Model-Based Tekla Detailing Cuts Site RFIs",
    excerpt:
      "Model-based steel detailing catches errors before they reach the shop. Here's how a disciplined Tekla workflow keeps RFIs low.",
    category: "Tekla",
    author: "STRUCON Steel Detailing Team",
    date: "2026-04-12",
    readingMinutes: 5,
    coverPrompt: "Close-up of a Tekla Structures steel connection model with bolts, plates, and welds beside a fabrication drawing, photoreal.",
    body: [
      { type: "p", text: "Requests for information (RFIs) are the tax a project pays on ambiguity. In steel, most of that ambiguity is designed out in the model — long before a plate is cut." },
      { type: "h2", text: "Why the model matters" },
      { type: "p", text: "When steel is detailed model-first in Tekla Structures, connections, clearances, and interfaces are resolved in 3D. Clashes that would otherwise surface at site show up on screen, where they cost minutes instead of days." },
      { type: "h2", text: "A checking discipline, not a checkbox" },
      { type: "ul", items: ["Independent checking of the model and drawings", "Connection design verified against the design basis", "Consistent standards across every mark", "Revision control that keeps the shop working to the latest issue"] },
      { type: "h2", text: "The payoff" },
      { type: "p", text: "The result is fabrication-ready data — CNC/DSTV files, BOMs, and erection drawings — that the shop and site can trust. Fewer RFIs, less rework, and an erection sequence that holds." },
    ],
    seo: {
      title: "How Model-Based Tekla Detailing Cuts Site RFIs",
      description: "A disciplined Tekla Structures detailing and checking workflow resolves clashes before fabrication — cutting RFIs and rework at site.",
      keywords: ["Tekla Modeling Services", "Steel Detailing Company", "Fabrication Drawing Services"],
    },
  },
  {
    slug: "the-case-for-engineering-outsourcing-in-power-projects",
    title: "The Case for Engineering Outsourcing in Power Projects",
    excerpt:
      "Offshore engineering can absorb schedule spikes and lower cost — if the partner behaves like an in-house team. What to look for.",
    category: "Engineering Outsourcing",
    author: "STRUCON Engineering Team",
    date: "2026-03-03",
    readingMinutes: 7,
    coverPrompt: "Thermal power plant boiler steel structure under construction at dusk with cranes, photoreal, no people.",
    body: [
      { type: "p", text: "Power projects rarely move at a constant pace. Engineering demand spikes around milestones, then eases — a pattern that fixed in-house teams struggle to match economically." },
      { type: "h2", text: "The flex problem" },
      { type: "p", text: "An offshore engineering partner lets an EPC team scale detailing and design capacity up and down without carrying the fixed cost through the troughs. Done well, it also lowers the total design cost per tonne." },
      { type: "h2", text: "What separates a partner from a vendor" },
      { type: "ul", items: ["Fluency across the codes your project uses (AISC, Eurocode, IS)", "A checking discipline built into delivery, not bolted on", "Model-based BIM that produces constructible output", "Change-control that protects the schedule through revisions"] },
      { type: "h2", text: "Getting it right" },
      { type: "p", text: "The failure mode of outsourcing is treating it as a transaction. The success mode is integration: shared standards, daily coordination, and a partner who feels like an extension of your own office. That is what turns offshore engineering from a cost lever into a schedule advantage." },
    ],
    seo: {
      title: "The Case for Engineering Outsourcing in Power Projects",
      description: "How offshore engineering absorbs schedule spikes and lowers cost on power projects — and what to look for in an outsourcing partner.",
      keywords: ["Engineering Outsourcing", "Power Plant Structural Design", "EPC Engineering Design"],
    },
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const postSlugs = () => posts.map((p) => p.slug);
