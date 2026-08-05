import { Container } from "@/components/ui/Container";
import { getClients } from "@/lib/content";

/**
 * Trusted-by logo strip. PLACEHOLDER: renders client names as text chips until
 * real, rights-cleared logos are supplied (edit via /admin or src/content/clients.ts).
 */
export function TrustedBy() {
  const clients = getClients();
  return (
    <section className="border-y border-line bg-white py-10">
      <Container>
        <p className="text-center font-mono text-xs uppercase tracking-label text-slate">
          Trusted by EPC leaders across power, oil &amp; gas, and infrastructure
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
