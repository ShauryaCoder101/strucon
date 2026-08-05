import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all duration-200 ease-engineered focus-visible:outline-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // Accent is spent here — the single loud element on the page.
  primary: "bg-accent text-white hover:bg-accent-600 shadow-sm hover:shadow-md",
  secondary: "bg-ink text-white hover:bg-ink-700",
  outline: "border border-current text-ink hover:bg-ink hover:text-white",
  ghost: "text-ink hover:text-accent",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm rounded-sm",
  lg: "h-14 px-7 text-base rounded-sm",
};

type ButtonProps = {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/** Link when `href` is present, otherwise a native button. */
export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

/** Small right-arrow used on links/buttons — moves on hover. */
export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-4 w-4 transition-transform duration-200 group-hover:translate-x-1", className)}
    >
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
