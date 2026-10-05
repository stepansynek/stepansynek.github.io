/**
 * Telefon je v repozitáři i ve stránce jen zakódovaný (obrácený řetězec v base64), aby ho nesebraly
 * roboti, kteří hledají čísla v HTML nebo na GitHubu. Zakódování: npm run telefon -- "+420 777 123 456".
 * Bez importů z config.ts, používá se i v prohlížeči.
 */
export function decodePhone(encoded: string): string {
  return [...atob(encoded)].reverse().join("");
}

/** Číslo pro odkaz tel: bez mezer. */
export function phoneHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
