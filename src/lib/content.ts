import "server-only";
import { readCollection } from "./content-store";

import { services as servicesSeed } from "@/content/services";
import { industries as industriesSeed } from "@/content/industries";
import { projects as projectsSeed } from "@/content/projects";
import { clients as clientsSeed } from "@/content/clients";
import { testimonials as testimonialsSeed } from "@/content/testimonials";
import { team as teamSeed } from "@/content/team";
import { jobs as jobsSeed } from "@/content/jobs";
import { posts as postsSeed } from "@/content/blog";

import type { Service, Industry, Project, Client, Testimonial, TeamMember, Job, BlogPost } from "@/types";

/**
 * Live content getters for server components. Each prefers the /admin override JSON,
 * else the code seed. Server-only — client components import seeds from @/content/* directly.
 * The collection keys here MUST match the keys used by the admin editor + save API.
 */
export const getServices = () => readCollection<Service[]>("services", servicesSeed);
export const getService = (slug: string) => getServices().find((s) => s.slug === slug);
export const serviceSlugs = () => getServices().map((s) => s.slug);

export const getIndustries = () => readCollection<Industry[]>("industries", industriesSeed);
export const getIndustry = (slug: string) => getIndustries().find((i) => i.slug === slug);
export const industrySlugs = () => getIndustries().map((i) => i.slug);

export const getProjects = () => readCollection<Project[]>("projects", projectsSeed);
export const getFeaturedProjects = () => getProjects().filter((p) => p.featured);
export const getProject = (slug: string) => getProjects().find((p) => p.slug === slug);
export const projectSlugs = () => getProjects().map((p) => p.slug);

export const getClients = () => readCollection<Client[]>("clients", clientsSeed);
export const getTestimonials = () => readCollection<Testimonial[]>("testimonials", testimonialsSeed);

export const getTeam = () => readCollection<TeamMember[]>("team", teamSeed);
export const getLeadership = () => getTeam().filter((m) => m.leadership);

export const getJobs = () => readCollection<Job[]>("jobs", jobsSeed);
export const getJobDepartments = () => Array.from(new Set(getJobs().map((j) => j.department)));

export const getPosts = () => readCollection<BlogPost[]>("blog", postsSeed);
export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);
export const postSlugs = () => getPosts().map((p) => p.slug);

/** Collections exposed to the admin editor, in display order. */
export const ADMIN_COLLECTIONS = [
  "services",
  "industries",
  "projects",
  "blog",
  "team",
  "clients",
  "testimonials",
  "jobs",
] as const;
export type CollectionName = (typeof ADMIN_COLLECTIONS)[number];

export function getCollection(name: CollectionName): unknown[] {
  switch (name) {
    case "services": return getServices();
    case "industries": return getIndustries();
    case "projects": return getProjects();
    case "blog": return getPosts();
    case "team": return getTeam();
    case "clients": return getClients();
    case "testimonials": return getTestimonials();
    case "jobs": return getJobs();
  }
}
