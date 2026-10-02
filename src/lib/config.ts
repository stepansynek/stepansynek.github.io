import { config, type ConfigKey } from "@/content/config";

/** true, pokud je hodnota prázdná nebo ještě nevyplněný placeholder typu „[EMAIL]“. */
export function isPlaceholder(value: string): boolean {
  const trimmed = value.trim();
  return trimmed === "" || /^\[.*\]$/.test(trimmed);
}

/** true, pokud je údaj z config.ts vyplněný. */
export function isFilled(key: ConfigKey): boolean {
  const value = config[key];
  return typeof value === "string" && !isPlaceholder(value);
}

/**
 * Doplní do textu hodnoty z config.ts: „[DPH_VETA]“ → „Nejsem plátce DPH…“.
 * Nevyplněné údaje zůstanou jako viditelný placeholder „[DPH_VETA]“.
 */
export function fill(text: string): string {
  return text.replace(/\[([A-Z_]+)\]/g, (match, key: string) => {
    if (!(key in config)) return match;
    const value = config[key as ConfigKey];
    return typeof value === "string" && !isPlaceholder(value) ? value : match;
  });
}

/** Odkaz na rezervaci v Cal.com, bez něj na kontaktní sekci. */
export const consultationHref = isPlaceholder(config.CAL_LINK) ? "/#kontakt" : config.CAL_LINK;

/** tel: odkaz bez mezer. */
export const telHref = `tel:${config.TELEFON.replace(/[^\d+]/g, "")}`;

export const mailHref = `mailto:${config.EMAIL}`;
