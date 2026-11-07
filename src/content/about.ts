/**
 * About-page content. Story heading, story body, mission and vision are the client's own
 * words, reproduced verbatim from the content update form (round 2, Oct 2026) - do not
 * paraphrase them. The round-1 `objective` pull-quote is gone: it is not part of the
 * round-2 answer the client supplied for this section.
 *
 * NOTE: `certifications` and `standards` are two DIFFERENT things and are labelled
 * separately on the page.
 *   - `certifications` = certifications actually HELD. The client confirmed ISO 9001:2015
 *     (round 2, row 5) and answered "NA" to any others (row 6), so this list has exactly
 *     one entry and must not be extended without a current, dated certificate.
 *   - `standards` = the design/detailing codes the client's engineers WORK TO. Not a
 *     certification claim.
 *
 * NOTE ON "SINCE 2003": the story below is the client's own wording and opens in 2003,
 * while rows 4 and 10 confirm 2008 as the incorporation year used in `site.founded` and
 * the stats bar. The discrepancy is the client's; it is preserved deliberately rather than
 * edited. See the founding-year note in src/content/site.ts.
 */
export const about = {
  /** Section heading - the title line of the client's own story copy. */
  storyHeading: "Engineering Built on Experience. Driven by Precision.",
  story: [
    "Since 2003, STRUCON Consulting Pvt. Ltd. has grown from a small team of engineers and detailers into a multidisciplinary engineering consultancy serving complex industrial and infrastructure projects in India and international markets. Our journey has been shaped by one simple principle: engineering is not just about creating drawings—it is about creating solutions that work in the real world. Over the years, we have built deep expertise across civil and structural engineering, structural steel detailing, 3D modelling and project engineering, supporting clients across power, cement, steel, petrochemical, refinery, material handling, commercial and other industrial sectors.",
    "At Strucon, precision is at the heart of everything we do. Our engineers, checkers and detailers work collaboratively to transform engineering concepts into accurate, constructible and practical solutions. Our experience with international engineering practices, including American and British standards, combined with tools such as Tekla, AutoCAD and STAAD.Pro, enables us to support projects requiring a high degree of technical accuracy, coordination and attention to detail.",
    "Our project experience spans some of the most demanding engineering environments—from power plants, refineries and cement plants to steel facilities, material-handling systems and commercial structures. Our portfolio includes large-scale structural engineering and detailing assignments across India as well as projects associated with markets including the USA, UAE, Nepal, Bangladesh, Indonesia and other international locations.",
    "Today, Strucon stands for engineering expertise, dependable execution and long-term partnerships. We combine experienced people, technology-driven workflows and a quality-focused approach to help our clients move from concept to construction with greater confidence. As we look ahead, our ambition is to continually raise the standards of engineering delivery—bringing together precision, innovation and practical engineering thinking to build the structures and infrastructure of tomorrow.",
  ],
  mission:
    "To deliver precise, innovative and dependable engineering solutions that transform complex project requirements into safe, efficient and constructible outcomes—while creating lasting value for our clients through technical excellence, technology and collaborative execution.",
  vision:
    "To be a globally trusted engineering partner, recognized for technical excellence, innovation and the ability to deliver smarter, stronger and sustainable engineering solutions that shape the infrastructure of tomorrow.",
  pillars: [
    {
      title: "Engineering",
      description:
        "Civil and structural engineering, steel detailing, 3D modelling and multidisciplinary engineering support under one roof.",
    },
    {
      title: "Technology",
      description:
        "STAAD.Pro analysis, Tekla Structures modelling and AutoCAD documentation, plus any further software a project's specification calls for.",
    },
    {
      title: "Delivery",
      description:
        "Disciplined project execution with checking built into every stage — engineers, designers, checkers and detailers working to one programme.",
    },
    {
      title: "People",
      description:
        "Engineers and detailers with practical fabrication experience and exposure to Indian, American and European project requirements.",
    },
  ],
  /**
   * Certifications HELD - client-confirmed (round 2, row 5). Row 6 ("NA") confirms there
   * are no others, so this list stays at one entry.
   */
  certifications: ["ISO 9001:2015"],
  /** Design & detailing standards worked to — client-confirmed list. Not certifications. */
  standards: [
    "Indian Standards (IS)",
    "AISC",
    "ASCE",
    "Eurocodes",
    "British Standards",
    "AWS",
    "ASTM",
    "EN standards",
    "Client-specific standards",
    "Project-specific specifications",
  ],
};
