/**
 * Všechny údaje o webu na jednom místě.
 * Hodnoty v hranatých závorkách jsou placeholdery – doplňte je před spuštěním.
 * Dokud hodnota zůstane v závorkách, zobrazuje se na webu jako prostý text
 * (bez odkazu) a nevkládá se do strukturovaných dat pro vyhledávače.
 */
export const site = {
  name: "Štěpán Synek",
  url: "https://stepansynek.com",
  title: "Štěpán Synek – marketing a weby pro průmyslové firmy | Brno",
  description:
    "Marketing a weby pro malé a střední průmyslové firmy na jižní Moravě. Moderní web s poptávkovým formulářem, newsletter a průběžná péče za pevnou cenu předem.",
  jobTitle: "Marketing a weby pro průmyslové firmy",
  email: "[EMAIL]",
  phone: "[TELEFON]",
  ico: "[IČO]",
  seat: "[SÍDLO]",
  linkedin: "[ODKAZ]",
  locations: ["Brno", "Vyškov", "Rousínov"],
} as const;

/** ID formuláře z Formspree (část URL za https://formspree.io/f/). */
export const FORMSPREE_ID = "[FORMSPREE_ID]";

/**
 * Statistiky Plausible (bez cookies). Defaultně vypnuté.
 * Zapnutí: enabled: true a v Plausible přidat web se stejnou doménou.
 */
export const PLAUSIBLE = {
  enabled: false,
  domain: "stepansynek.com",
  src: "https://plausible.io/js/script.js",
} as const;

export const PRIVACY_PATH = "/zasady-ochrany-osobnich-udaju/";

export const nav = [
  { href: "/#sluzby", label: "Služby" },
  { href: "/#jak-pracuji", label: "Jak pracuji" },
  { href: "/#o-mne", label: "O mně" },
  { href: "/#kontakt", label: "Kontakt" },
] as const;

/** true, pokud je hodnota ještě nevyplněný placeholder typu „[EMAIL]“. */
export function isPlaceholder(value: string): boolean {
  return /^\[.*\]$/.test(value.trim());
}
