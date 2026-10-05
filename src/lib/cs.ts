// Bez importů z config.ts: smí ji používat i klientské komponenty, aniž by se údaje dostaly do JavaScriptu.
const NBSP = "\u00A0";

/**
 * Česká typografie pro texty z /content:
 * - nezlomitelná mezera po jednopísmenných předložkách a spojkách (k, s, v, z, o, u, a, i),
 * - mezi skupinami číslic („15 000“, „+420 777 123 456“),
 * - mezi číslem a jednotkou nebo slovem („15 000 Kč“, „20 minut“, „2 pracovních dnů“),
 * - před pomlčkou („web – texty“),
 * - mezi zkratkami z velkých písmen („VUT FEKT“, „MUNI ECON“).
 */
export function cs(text: string): string {
  return text
    .replace(/(?<=^|[\s\u00A0(„])([kszvouaiKSZVOUAI]) /g, `$1${NBSP}`)
    .replace(/(?<=\d) (?=\d{3}(?!\d))/g, NBSP)
    .replace(/(?<=\b\d{3}) (?=\d{2}\b)/g, NBSP)
    .replace(/(?<=\d) (?=[\p{L}%])/gu, NBSP)
    .replace(/ (?=–)/g, NBSP)
    .replace(/(?<=\b\p{Lu}{2,}) (?=\p{Lu}{2,}\b)/gu, NBSP);
}
