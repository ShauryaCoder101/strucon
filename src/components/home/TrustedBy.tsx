import { Container } from "@/components/ui/Container";
import { getClients } from "@/lib/content";

/**
 * Trusted-by strip. Renders real, case-study-corroborated client names as text chips —
 * no rights-cleared logo files have been supplied yet (see src/content/clients.ts).
 */
export function TrustedBy() {
  const clients = getClients();
  return (
    <section className="border-y border-line bg-white py-10">
      <Container>
        <p className="text-center font-mono text-xs uppercase tracking-label text-slate">
          Engineering delivered for leading EPC contractors and plant owners
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clients.map((c) => (
            <span
              key={c.name}
              className="font-display text-base font-semibold text-ink/35 transition-colors hover:text-ink/60"
            >
              {c.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
