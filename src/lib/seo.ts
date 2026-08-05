import type { Metadata } from "next";
import { site } from "@/content/site";

const BASE = site.url;

/**
 * Central metadata factory — every page calls this so titles, canonicals,
 * and social cards stay consistent and commercial-intent keyworded.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${BASE}${path}`;
  const fullTitle = path === "/" ? `${title}` : `${title} | ${site.name}`;

  // OG/Twitter images are supplied site-wide by app/opengraph-image.tsx (file convention),
  // so we don't hardcode an image path that might 404.
  return {
    title: fullTitle,
    description,
    keywords,
    metadataBase: new URL(BASE),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: site.legalName,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: { index: true, follow: true },
  };
}

/** Commercial-intent keyword bank (global targeting) — reused across pages. */
export const keywordBank = {
  home: [
    "Structural Engineering Consultant",
    "Steel Detailing Company",
    "Tekla Modeling Services",
    "Industrial Engineering Consultants",
    "EPC Engineering Design",
    "Structural BIM Services",
  ],
  services: [
    "Power Plant Structural Design",
    "Pipe Rack Design",
    "Conveyor Gallery Design",
    "Industrial Steel Structures",
    "Connection Design Services",
    "Fabrication Drawing Services",
  ],
};
