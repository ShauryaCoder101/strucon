import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getServices, getIndustries, getProjects, getPosts } from "@/lib/content";

/**
 * Auto-generated sitemap. As new content is added to src/content, it flows in here
 * automatically — no manual sitemap maintenance.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url;

  const staticRoutes = [
    "",
    "/about",
    "/leadership",
    "/services",
    "/industries",
    "/projects",
    "/clients",
    "/careers",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const dynamicRoutes = [
    ...getServices().map((s) => `/services/${s.slug}`),
    ...getIndustries().map((i) => `/industries/${i.slug}`),
    ...getProjects().map((p) => `/projects/${p.slug}`),
    ...getPosts().map((p) => `/blog/${p.slug}`),
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
