import { cn } from "@/lib/utils";
import { REVIEW_MODE } from "@/content/review";

/**
 * Client-review "TBD" annotations.
 *
 * These are deliberately NOT site copy. They borrow the drawing-annotation language of the
 * identity (mono chip, dashed rule, blueprint tint) so a reviewer reads them as a redline on
 * top of the design rather than as finished content. Both render `null` when REVIEW_MODE is
 * false, so go-live removes them without touching any surrounding markup.
 *
 * Accessibility: these carry real meaning for the reviewer, so they are NOT aria-hidden. The
 * panel is an <aside role="note"> with a label; the "TBD" chip is readable text, not an icon.
 * No animation or transition is used anywhere in this file, so there is nothing for
 * prefers-reduced-motion to suppress — the annotation is static by construction.
 */

type Tone = "light" | "dark";

/** Panel + chip colours for the two section backgrounds in use (paper/white vs ink). */
const blockTone: Record<Tone, string> = {
  light: "border-accent/55 bg-accent/[0.045]",
  dark: "border-accent/70 bg-white/[0.05]",
};
const titleTone: Record<Tone, string> = {
  light: "text-ink",
  dark: "text-white",
};
const bodyTone: Record<Tone, string> = {
  light: "text-slate",
  dark: "text-white/70",
};
const noteTone: Record<Tone, string> = {
  light: "text-slate",
  dark: "text-white/70",
};

/** The shared mono "TBD" chip — the tell that this is a review annotation. */
function TbdChip({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-block shrink-0 bg-accent px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-label text-white",
        className
      )}
    >
      TBD
    </span>
  );
}

/**
 * Standalone review panel. `children` describes exactly what the client still owes us.
 * Use where a whole section (or its absence) needs explaining.
 */
export function TbdBlock({
  title,
  children,
  tone = "light",
  className,
}: {
  title: string;
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  if (!REVIEW_MODE) return null;

  return (
    <aside
      role="note"
      aria-label={`Client review note: ${title}`}
      className={cn("border border-dashed p-6 md:p-7", blockTone[tone], className)}
    >
      <div className="flex flex-wrap items-center gap-3">
        <TbdChip />
        <p className={cn("font-display text-base font-semibold", titleTone[tone])}>{title}</p>
      </div>
      <div className={cn("mt-3 max-w-prose text-sm leading-relaxed", bodyTone[tone])}>{children}</div>
      <p
        className={cn(
          "mt-4 font-mono text-[10px] uppercase tracking-label",
          tone === "dark" ? "text-white/40" : "text-slate-soft"
        )}
      >
        This section is TBD — client review annotation, not final site content.
      </p>
    </aside>
  );
}

/**
 * One-line inline annotation. Use directly beneath the element it refers to
 * (a missing bio, an unbuilt download, an unconfirmed claim).
 */
export function TbdNote({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  if (!REVIEW_MODE) return null;

  return (
    <p
      role="note"
      className={cn(
        "flex flex-wrap items-start gap-2 border-l border-dashed border-accent/60 py-0.5 pl-3 text-xs leading-relaxed",
        noteTone[tone],
        className
      )}
    >
      <TbdChip className="translate-y-px" />
      <span className="min-w-0">{children}</span>
    </p>
  );
}
