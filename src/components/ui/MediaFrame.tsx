import Image from "next/image";
import { cn } from "@/lib/utils";
import { REVIEW_MODE } from "@/content/review";

/**
 * MediaFrame renders a real image when `src` is provided; otherwise it renders an
 * on-brand blueprint placeholder that DISPLAYS the AI-generation prompt / art direction,
 * so every image slot documents exactly what asset to source (per the brief's imagery direction).
 *
 * During client review (REVIEW_MODE) an empty slot is labelled "TBD" and the caption is
 * prefixed so the client reads it as an outstanding deliverable rather than as a design
 * flourish. With REVIEW_MODE off the placeholder reverts to its original wording exactly.
 * Slots with a real `src` are never annotated.
 */
export function MediaFrame({
  src,
  alt,
  prompt,
  className,
  priority = false,
  rounded = true,
}: {
  src?: string;
  alt: string;
  prompt: string;
  className?: string;
  priority?: boolean;
  rounded?: boolean;
}) {
  const shape = rounded ? "rounded-sm" : "";

  if (src) {
    return (
      <div className={cn("relative overflow-hidden bg-ink", shape, className)}>
        <Image src={src} alt={alt} fill priority={priority} className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${REVIEW_MODE ? "Image to be supplied (TBD)" : "Placeholder image"}: ${alt}`}
      className={cn(
        "blueprint relative flex items-end overflow-hidden border border-line bg-steel/5",
        shape,
        className
      )}
    >
      {/* corner ticks — drawing frame */}
      <Corner className="left-2 top-2" />
      <Corner className="right-2 top-2 rotate-90" />
      <Corner className="bottom-2 left-2 -rotate-90" />
      <Corner className="bottom-2 right-2 rotate-180" />

      <div className="relative z-10 w-full p-4">
        <span className="inline-block bg-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-label text-white">
          {REVIEW_MODE ? "TBD" : "Placeholder"}
        </span>
        <p className="mt-2 max-w-md font-mono text-[11px] leading-relaxed text-steel">
          {REVIEW_MODE && <span className="text-ink">Image to be supplied — </span>}
          {prompt}
        </p>
      </div>
    </div>
  );
}

function Corner({ className }: { className?: string }) {
  return (
    <span className={cn("absolute h-4 w-4 border-l border-t border-steel/40", className)} aria-hidden="true" />
  );
}
