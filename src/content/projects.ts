export type Project = {
  slug: string;
  status: "published" | "inProgress" | "placeholder";
  client: string; // zobrazí se jen při consent: true
  anonymous: string; // nadpis karty, např. „Elektromontážní firma z Brna“
  scope: string[]; // např. ['web', 'texty', 'foto', 'video']
  year?: number;
  summary?: string;
  images?: { src: string; alt: string }[];
  quote?: string;
  quoteAuthor?: string;
  consent: boolean; // písemný souhlas se zveřejněním jména, obrázků a citace
};

/**
 * Projekty v sekci Práce.
 * - inProgress: karta „Právě pracuji na…“, jméno klienta jen při consent: true.
 * - published: karta s fotkami, rozsahem, rokem a citací, jen při consent: true.
 * - placeholder: jen ve vývoji, v produkci se nezobrazí.
 * images[].src je název souboru v public/photos/ bez přípony, např. „engas-dilna“.
 */
export const projects: Project[] = [
  {
    slug: "engas",
    // Do spuštění hotového webu se souhlasem klienta je jen ve vývoji. Pak: status "published", consent: true.
    status: "placeholder",
    client: "Engas",
    anonymous: "Elektromontážní firma z Brna",
    scope: ["web", "texty", "foto", "video"],
    consent: false,
  },
];
