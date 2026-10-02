import { cn } from "@/lib/cn";

/**
 * Linka v hero, která se při načtení „vykreslí“ zleva doprava:
 * uzel → zlom 45° dolů → linka přes celou šířku → zlom 45° nahoru → uzel.
 * Animace je jen v CSS (globals.css) a při prefers-reduced-motion se nespustí.
 */
export function HeroLine({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("flex h-6 w-full text-graphite", className)}>
      <svg width="72" height="24" className="shrink-0 overflow-visible">
        <path className="hero-draw" d="M11 6 H44 L61 23 H72" pathLength={1} fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="6" cy="6" r="5" fill="var(--color-accent)" stroke="var(--color-graphite)" strokeWidth="1.5" />
      </svg>
      <svg height="24" className="min-w-0 flex-1 overflow-visible">
        <line className="hero-grow" x1="0" y1="23" x2="100%" y2="23" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg width="72" height="24" className="shrink-0 overflow-visible">
        <path className="hero-draw hero-draw--end" d="M0 23 H11 L28 6 H61" pathLength={1} fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle className="hero-pop" cx="66" cy="6" r="5" fill="var(--color-accent)" stroke="var(--color-graphite)" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
