/**
 * Per-CTA form configuration. Each intent maps to a heading, the fields to show, and the
 * submit label — so one <LeadForm> component serves every call-to-action in the brief.
 */
export type FormIntent = "consultation" | "proposal" | "profile" | "tender" | "review" | "career" | "general";

export type FormFieldKey =
  | "name" | "email" | "phone" | "company"
  | "service" | "industry" | "projectType"
  | "timeline" | "budget" | "role" | "preferredDate" | "message";

type FormDef = {
  heading: string;
  blurb: string;
  submit: string;
  fields: FormFieldKey[];
  file?: { label: string; accept: string; hint: string };
};

export const formConfig: Record<FormIntent, FormDef> = {
  consultation: {
    heading: "Request a consultation",
    blurb: "Tell us about your project and we'll set up a call with the right engineer.",
    submit: "Request Consultation",
    fields: ["name", "company", "email", "phone", "service", "preferredDate", "message"],
  },
  proposal: {
    heading: "Request a proposal",
    blurb: "Share your scope and we'll come back with a plan, timeline, and price.",
    submit: "Request Proposal",
    fields: ["name", "company", "email", "phone", "service", "industry", "projectType", "timeline", "budget", "message"],
  },
  profile: {
    heading: "Download our company profile",
    blurb: "Enter your details and we'll email you the STRUCON company profile.",
    submit: "Send Me the Profile",
    fields: ["name", "company", "email"],
  },
  tender: {
    heading: "Upload tender documents",
    blurb: "Send us your tender or drawing set and we'll review and respond.",
    submit: "Submit Tender",
    fields: ["name", "company", "email", "phone", "timeline", "message"],
    file: { label: "Tender / drawings", accept: ".pdf,.dwg,.zip,.rar,.docx,.xlsx", hint: "PDF, DWG, ZIP, DOCX or XLSX — up to 25 MB." },
  },
  review: {
    heading: "Book an engineering review",
    blurb: "Have a drawing set or model checked by our engineers.",
    submit: "Book Review",
    fields: ["name", "company", "email", "phone", "service", "preferredDate", "message"],
    file: { label: "Drawings / model (optional)", accept: ".pdf,.dwg,.zip,.rar,.ifc", hint: "PDF, DWG, IFC or ZIP — up to 25 MB." },
  },
  career: {
    heading: "Apply now",
    blurb: "Send us your details and resume — we'll be in touch.",
    submit: "Submit Application",
    fields: ["name", "email", "phone", "role", "message"],
    file: { label: "Resume / CV", accept: ".pdf,.doc,.docx", hint: "PDF or Word — up to 10 MB." },
  },
  general: {
    heading: "Send us a message",
    blurb: "How can we help? We usually reply within two working days.",
    submit: "Send Message",
    fields: ["name", "company", "email", "phone", "message"],
  },
};
