import { cn } from "@/lib/cn";

/** Žlutý kruhový „uzel“ s grafitovým obrysem. Čistě dekorativní. */
export function Node({ size = 12, className }: { size?: number; className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 12 12" className={cn("shrink-0", className)}>
      <circle cx="6" cy="6" r="5" fill="var(--color-accent)" stroke="var(--color-graphite)" strokeWidth="1.5" />
    </svg>
  );
}
