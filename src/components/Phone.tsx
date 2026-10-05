import { config } from "@/content/config";
import { isFilled, showPlaceholders } from "@/lib/config";
import { PhoneReveal } from "./PhoneReveal";

/**
 * Telefon z config.ts, chráněný proti sběru (viz PhoneReveal).
 * Nevyplněný: ve vývoji viditelný placeholder, v produkci nic.
 */
export function Phone({ className }: { className?: string }) {
  if (!isFilled("TELEFON")) {
    return showPlaceholders ? <span className={className}>{config.TELEFON}</span> : null;
  }
  return <PhoneReveal encoded={config.TELEFON} className={className} />;
}
