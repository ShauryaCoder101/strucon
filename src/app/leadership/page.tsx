import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { TbdNote } from "@/components/shared/Tbd";

import { getTeam } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Leadership Team — STRUCON Consulting",
  description:
    "Meet the leadership team behind STRUCON Consulting — experienced engineers directing structural design, steel detailing, and BIM delivery for EPC projects.",
  path: "/leadership",
  keywords: ["STRUCON leadership", "Structural Engineering Consultant"],
});

export default function LeadershipPage() {
  const team = getTeam();
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Leadership", path: "/leadership" }])} />

      <PageHeader
        eyebrow="Leadership"
        title="Experienced engineers, hands-on leaders"
        intro="The directors and engineering leadership behind STRUCON Consulting."
        trail={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Leadership", path: "/leadership" }]}
      />

      <Section tone="white">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 4) * 60}>
              <article className="group">
                <MediaFrame src={undefined} alt={m.name} prompt={m.photoPrompt} className="aspect-[4/5] w-full" />
                <h2 className="mt-4 font-display text-lg font-semibold text-ink">{m.name}</h2>
                <p className="font-mono text-xs uppercase tracking-label text-steel">{m.role}</p>
                {/* Bios are only published where the individual supplied one;
                    the rest are flagged as outstanding rather than silently blank. */}
                {m.bio ? (
                  <p className="mt-3 text-sm leading-relaxed text-slate">{m.bio}</p>
                ) : (
                  <TbdNote className="mt-3">Biography to be supplied.</TbdNote>
                )}
                {m.linkedin && (
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-ink underline hover:text-accent">LinkedIn</a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
        <TbdNote className="mt-10">
          Headshots to be supplied for all four directors — photography is still to be arranged.
        </TbdNote>
      </Section>

      <CtaBanner title="Want to join this team?" primary={{ label: "View open roles", href: "/careers" }} secondary={null} />
    </>
  );
}
