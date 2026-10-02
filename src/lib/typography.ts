const NBSP = " ";

/**
 * Česká typografie: jednopísmenné předložky a spojky (v, s, z, k, o, u, a, i)
 * nezůstanou na konci řádku – mezeru za nimi nahradí nezlomitelnou.
 * Totéž mezi číslem a jednotkou („20 minut“).
 */
export function cz(text: string): string {
  return text
    .replace(/(?<=^|[\s („])([vszkouaiVSZKOUAI]) /g, `$1${NBSP}`)
    .replace(/(\d) (?=minut)/g, `$1${NBSP}`);
}
