import { z } from "zod";

/** Shared lead schema. Only name + email are required; other fields vary per intent. */
export const leadSchema = z.object({
  intent: z.string(),
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional().or(z.literal("")),
  company: z.string().optional().or(z.literal("")),
  service: z.string().optional().or(z.literal("")),
  industry: z.string().optional().or(z.literal("")),
  projectType: z.string().optional().or(z.literal("")),
  timeline: z.string().optional().or(z.literal("")),
  budget: z.string().optional().or(z.literal("")),
  role: z.string().optional().or(z.literal("")),
  preferredDate: z.string().optional().or(z.literal("")),
  message: z.string().optional().or(z.literal("")),
});

export type LeadValues = z.infer<typeof leadSchema>;
