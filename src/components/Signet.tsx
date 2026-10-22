import { cn } from "@/lib/cn";

/**
 * Signet: oranžový a modrý čtverec v soutisku, kde se překrývají, je přetisk.
 * Stejný tvar má favicon (src/app/icon.svg) a obrázek pro sdílení (scripts/og.mjs).
 */
export function Signet({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className={cn("shrink-0", className)}>
      <rect x="0" y="8" width="16" height="16" fill="var(--orange)" />
      <rect x="8" y="0" width="16" height="16" fill={onDark ? "#ffffff" : "var(--ink)"} />
      <rect x="8" y="8" width="8" height="8" fill={onDark ? "var(--orange)" : "var(--overprint)"} />
    </svg>
  );
}
