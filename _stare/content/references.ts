export type Reference = {
  /** Název firmy. */
  company: string;
  /** Co firma potřebovala. */
  need: string;
  /** Co vzniklo. */
  result: string;
  /** Volitelná citace – jen skutečná, odsouhlasená klientem. */
  quote?: {
    text: string;
    author: string;
  };
  /** Volitelný odkaz na hotový web. */
  url?: string;
};

/**
 * Případové studie. Dokud je seznam prázdný, zobrazí se text
 * „První případová studie se připravuje.“
 *
 * Příklad položky:
 * {
 *   company: "[FIRMA]",
 *   need: "[CO POTŘEBOVALA]",
 *   result: "[CO VZNIKLO]",
 *   quote: { text: "[CITACE]", author: "[JMÉNO, FUNKCE]" },
 * }
 */
export const references: Reference[] = [];
