import type { Metadata } from "next";
import { LegalLayout } from "@/components/shared/LegalLayout";
import { privacy } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How STRUCON Consulting collects, uses, and protects your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalLayout title="Privacy Policy" doc={privacy} trailName="Privacy Policy" />;
}
