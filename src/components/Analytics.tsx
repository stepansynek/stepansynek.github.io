import Script from "next/script";
import { PLAUSIBLE } from "@/config/site";

/**
 * Plausible Analytics – statistiky bez cookies a bez osobních údajů.
 * Načte se jen při PLAUSIBLE.enabled = true (src/config/site.ts).
 */
export function Analytics() {
  if (!PLAUSIBLE.enabled) return null;
  return <Script src={PLAUSIBLE.src} data-domain={PLAUSIBLE.domain} strategy="afterInteractive" />;
}
