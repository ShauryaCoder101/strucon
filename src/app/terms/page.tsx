import type { Metadata } from "next";
import { LegalLayout } from "@/components/shared/LegalLayout";
import { terms } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: "The terms governing your access to and use of the STRUCON website.",
  path: "/terms",
});

export default function TermsPage() {
  return <LegalLayout title="Terms of Use" doc={terms} trailName="Terms of Use" />;
}
