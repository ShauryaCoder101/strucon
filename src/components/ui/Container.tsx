import { cn } from "@/lib/utils";

/** Centered max-width wrapper used by every section. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("container", className)}>{children}</div>;
}
