import { config, type ConfigKey } from "@/content/config";

/**
 * Ve vývoji (npm run dev) se nevyplněné údaje ukazují jako „[EMAIL]“, ať je vidět, co chybí.
 * V produkčním buildu se skryjí: návštěvník nikdy neuvidí hranaté závorky.
 */
export const showPlaceholders = process.env.NODE_ENV !== "production";

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

/** true, pokud se má údaj na webu ukázat: je vyplněný, nebo běží vývoj. */
export function isShown(key: ConfigKey): boolean {
  return showPlaceholders || isFilled(key);
}

/** true, pokud text obsahuje klíč z config.ts, který ještě není vyplněný. */
function hasMissing(text: string): boolean {
  return [...text.matchAll(/\[([A-Z_]+)\]/g)].some(([, key]) => key in config && !isFilled(key as ConfigKey));
}

/**
 * Doplní do textu hodnoty z config.ts: „[DPH_VETA]“ → „Nejsem plátce DPH…“.
 *
 * Část textu ve složených závorkách je volitelná: „{Obsahuje: [ROZSAH_ZAKLAD]}“.
 * Když v ní chybí údaj, v produkci se vynechá, nebo nahradí textem za svislítkem:
 * „{Od roku [ROK_OD] dělám|Dělám} B2B marketing“. Ve vývoji se vždy ukáže první varianta
 * s viditelným placeholderem.
 */
export function fill(text: string): string {
  return text
    .replace(/\{([^{}|]*)(?:\|([^{}]*))?\}/g, (_, main: string, fallback = "") =>
      showPlaceholders || !hasMissing(main) ? main : fallback,
    )
    .replace(/\[([A-Z_]+)\]/g, (match, key: string) => {
      if (!(key in config)) return match;
      const value = config[key as ConfigKey];
      return typeof value === "string" && !isPlaceholder(value) ? value : match;
    });
}

/** Odkaz na rezervaci v Cal.com, bez něj na kontaktní sekci. */
export const consultationHref = isPlaceholder(config.CAL_LINK) ? "/#kontakt" : config.CAL_LINK;

export const mailHref = `mailto:${config.EMAIL}`;
