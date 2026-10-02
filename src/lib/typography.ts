import { fill } from "./config";

const NBSP = "\u00A0";

/**
 * Česká typografie pro texty z /content:
 * - nezlomitelná mezera po jednopísmenných předložkách a spojkách (k, s, v, z, o, u, a, i),
 * - mezi skupinami číslic („15 000“, „+420 777 123 456“),
 * - mezi číslem a jednotkou nebo slovem („15 000 Kč“, „20 minut“, „2 pracovních dnů“),
 * - před pomlčkou („web – texty“).
 */
export function cs(text: string): string {
  return text
    .replace(/(?<=^|[\s\u00A0(„])([kszvouaiKSZVOUAI]) /g, `$1${NBSP}`)
    .replace(/(?<=\d) (?=\d{3}(?!\d))/g, NBSP)
    .replace(/(?<=\b\d{3}) (?=\d{2}\b)/g, NBSP)
    .replace(/(?<=\d) (?=[\p{L}%])/gu, NBSP)
    .replace(/ (?=–)/g, NBSP);
}

/** Doplní údaje z config.ts a použije českou typografii. Pro všechny texty z /content. */
export function t(text: string): string {
  return cs(fill(text));
}
