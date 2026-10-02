import { cn } from "@/lib/cn";

/**
 * Oddělovač sekcí: uzel, krátká linka, zlom 45° a linka do konce řádku.
 * SVG nemá viewBox, souřadnice jsou v px a poslední úsek sahá na 100 % šířky.
 * Barva linky se bere z currentColor.
 */
export function SectionDivider({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" height="24" className={cn("block w-full overflow-visible", className)}>
      <path d="M11 6 H44 L61 23 H72" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="72" y1="23" x2="100%" y2="23" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6" cy="6" r="5" fill="var(--color-accent)" stroke="var(--color-graphite)" strokeWidth="1.5" />
    </svg>
  );
}
