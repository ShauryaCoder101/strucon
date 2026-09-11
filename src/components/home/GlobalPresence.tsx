import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * "Global reach" rendered as an engineering coordinate grid rather than a heavy map library —
 * on-brand (drawing grid) and fast (no JS/tiles). Markers plotted by approximate lon/lat %.
 * Swap for a real interactive map (e.g. react-simple-maps) later if desired.
 */
/**
 * Only regions corroborated by a real, client-supplied case study are plotted — India (HQ and
 * most projects), the UAE (Sharjah Cement), Indonesia (Semen Andalas) and Nigeria (NOM Cement
 * Terminal). Europe, North America and Australia were removed: no supplied project supports them.
 */
const markers = [
  { label: "HQ — Noida, India", x: 70, y: 46, hq: true },
  { label: "UAE — Sharjah", x: 60, y: 49 },
  { label: "Indonesia", x: 78, y: 58 },
  { label: "Nigeria", x: 49, y: 56 },
];

export function GlobalPresence() {
  return (
    <Section
      id="global"
      tone="white"
      eyebrow="Global Presence"
      title="One team, delivering across 12 countries"
      intro="Headquartered in India, engineering for industrial projects in India and international markets — to IS, AISC, ASCE, Eurocode, British Standards, AWS, ASTM and EN."
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-sm border border-line bg-ink">
          {/* coordinate grid */}
          <div className="blueprint absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative aspect-[2/1] w-full">
            {/* connection arcs from HQ */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 50" preserveAspectRatio="none" aria-hidden="true">
              {markers.filter((m) => !m.hq).map((m) => (
                <line
                  key={m.label}
                  x1={70} y1={23}
                  x2={m.x} y2={m.y / 2}
                  stroke="#4E7CA6"
                  strokeWidth="0.15"
                  strokeDasharray="0.6 0.6"
                  opacity="0.6"
                />
              ))}
            </svg>

            {markers.map((m) => (
              <div
                key={m.label}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${m.x}%`, top: `${m.y}%` }}
              >
                <span
                  className={
                    m.hq
                      ? "block h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-accent/25"
                      : "block h-2.5 w-2.5 rounded-full bg-steel-400 ring-4 ring-steel-400/20"
                  }
                />
                <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-white px-2 py-1 font-mono text-[10px] uppercase tracking-label text-ink opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* legend */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 px-6 py-4 font-mono text-[11px] uppercase tracking-label text-white/60">
            <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-accent" /> Headquarters</span>
            <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-steel-400" /> Project regions</span>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
