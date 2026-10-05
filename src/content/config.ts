/**
 * Podklady webu na jednom místě (brief, sekce 3).
 *
 * Hodnota v hranatých závorkách je placeholder. Na webu se zobrazí tak, jak je,
 * bez odkazu, a nedostane se do strukturovaných dat pro vyhledávače.
 * Klíče označené „BRÁNA“ musí být vyplněné před spuštěním (brief, sekce 2).
 */
export const config = {
  /**
   * BRÁNA. Telefon ZAKÓDOVANÝ proti sběru čísel (repozitář je veřejný):
   * npm run telefon -- "+420 777 123 456" a výstup vložit sem. Na webu se ukáže až po kliknutí.
   */
  TELEFON: "NDk5IDE2MyA0MDYgMDI0Kw==",
  /** BRÁNA. Kdy beru telefon, např. „Po–Pá 7–9 a 15–18“. */
  CASY_TELEFON: "[CASY_TELEFON]",
  /** BRÁNA. E-mail na doméně stepansynek.com. */
  EMAIL: "contact@stepansynek.com",
  /** URL profilu na LinkedInu. */
  LINKEDIN: "[LINKEDIN]",
  /** Odkaz na 20min událost v Cal.com. Prázdný řetězec = tlačítka vedou na #kontakt. */
  CAL_LINK: "",
  /** ID formuláře z Formspree (část URL za https://formspree.io/f/). */
  FORMSPREE_ID: "[FORMSPREE_ID]",
  /** BRÁNA. IČO. */
  ICO: "[ICO]",
  /** BRÁNA. Sídlo podle živnostenského rejstříku. */
  SIDLO: "[SIDLO]",
  /** BRÁNA. Co obsahuje web za 15 000 Kč, např. „až 5 sekcí, texty, poptávkový formulář, česká verze“. */
  ROZSAH_ZAKLAD: "jednostránkový web do 6 sekcí, texty po rozhovoru, poptávkový formulář, základní SEO a 2 kola připomínek",
  /** BRÁNA. Měsíční paušál za péči (nejnižší cena, upravuje se podle rozsahu), jen číslo, např. „1 500“. */
  CENA_PECE: "1 500",
  /** Do kolika pracovních dnů udělám úpravu, např. „2“. */
  ODEZVA_PECE: "[ODEZVA_PECE]",
  /** Obvyklá délka projektu v týdnech, např. „4–6“. */
  DELKA_PROJEKTU: "[DELKA_PROJEKTU]",
  /** Platební podmínky, např. „záloha 50 %, doplatek po spuštění“. */
  PLATBY: "[PLATBY]",
  /** BRÁNA. Věta o DPH, např. „Nejsem plátce DPH, ceny jsou konečné.“ */
  DPH_VETA: "[DPH_VETA]",
  /** Rok, od kdy dělám B2B marketing. */
  ROK_OD: "[ROK_OD]",
  /** Zobrazit nabídku zakládající ceny pro první tři firmy. */
  ZAKLADAJICI_NABIDKA: false,
  /** Zásady ochrany osobních údajů: jak dlouho uchovávám údaje z poptávek. */
  DOBA_UCHOVANI: "[DOBA_UCHOVANI]",
  /** Zásady ochrany osobních údajů: právní základ předání údajů do USA (ověřit). */
  PRAVNI_ZAKLAD_PREDANI: "[PRAVNI_ZAKLAD_PREDANI — ověřit]",
};

export type ConfigKey = keyof typeof config;

export const site = {
  name: "Štěpán Synek",
  url: "https://stepansynek.com",
  locations: ["Brno", "Vyškov", "Rousínov"],
  privacyPath: "/zasady-ochrany-osobnich-udaju/",
} as const;
