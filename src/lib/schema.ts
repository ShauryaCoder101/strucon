import { site, offices } from "@/content/site";
import type { FAQ } from "@/types";

/**
 * JSON-LD structured data. Rendered in the document head so Google can surface
 * Organization + LocalBusiness rich results. Article schema is added per blog post in Stage 5.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    logo: `${site.url}/logo.png`,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    foundingDate: site.founded,
    sameAs: [site.linkedin],
  };
}

export function localBusinessSchema() {
  const hq = offices[0];
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#business`,
    name: site.legalName,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/og/strucon-og.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: hq.lines.slice(0, 2).join(", "),
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
    areaServed: "Worldwide",
    knowsAbout: [
      "Structural Engineering",
      "Steel Detailing",
      "Tekla Modeling",
      "BIM",
      "EPC Engineering Design",
    ],
  };
}

/** Service schema for a /services/[slug] page. */
export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    serviceType: name,
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: "Worldwide",
  };
}

/** FAQPage schema — eligible for FAQ rich results. */
export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Article schema for a blog post. */
export function articleSchema({
  title,
  description,
  path,
  date,
  author,
}: {
  title: string;
  description: string;
  path: string;
  date: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: { "@type": "Organization", name: author },
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      logo: { "@type": "ImageObject", url: `${site.url}/logo.png` },
    },
    mainEntityOfPage: `${site.url}${path}`,
  };
}

/** BreadcrumbList schema from an ordered [label, path] trail. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
