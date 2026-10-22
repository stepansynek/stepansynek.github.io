export type Demo = {
  slug: string;
  /** Jméno smyšlené firmy. */
  name: string;
  /** Jedna věta: co je to za firmu. */
  kind: string;
  /** Co web řeší, jednou až dvěma větami. */
  summary: string;
  url: string;
  repo: string;
  /** Řádky tabulky: popisek a hodnota. */
  facts: { label: string; value: string }[];
  /** Snímky celé stránky v public/photos/ (bez přípony): počítač a telefon. */
  shots: { desktop: string; mobile: string };
};

/**
 * Ukázkové weby smyšlených firem. Na webu se vždy označují jako ukázky, nikdy jako klienti.
 * Snímky obnovíte novým screenshotem celé stránky do public/photos/ (šířka 1440 a 390 px).
 */
export const demos: Demo[] = [
  {
    slug: "setina",
    name: "SETINA přesné obrábění",
    kind: "Smyšlená strojírna z Rousínova: CNC soustružení, frézování, broušení a svařování.",
    summary:
      "Na úvodní stránce leží hřídel čerpadla s hodnotami z měřicího protokolu a otočíte jí tažením. Rozměr dílu zadaný jednou web ukáže u každého stroje a výkres jde přetáhnout z úvodu rovnou do poptávky.",
    url: "https://stepansynek.com/setina-web/",
    repo: "https://github.com/stepansynek/setina-web",
    facts: [
      { label: "Stránky", value: "7 a stránka 404" },
      { label: "Na webu", value: "3D díly, měřicí protokol, kontrola rozměru dílu" },
      { label: "Poptávka", value: "3 kroky, výkres jde přetáhnout už na úvodu" },
      { label: "Písma a 3D knihovna", value: "na vlastním serveru, bez cookie lišty" },
    ],
    shots: { desktop: "ukazka-setina", mobile: "ukazka-setina-mobil" },
  },
  {
    slug: "hranol",
    name: "HRANOL s.r.o.",
    kind: "Smyšlená strojírna z Rousínova: obrábění, svařence a montáž podsestav.",
    summary:
      "Web vypadá jako stánek firmy na strojírenském veletrhu. Na úvodní stránce je volná kapacita strojů na osm týdnů dopředu, která se sama posouvá s kalendářem, a pult, na který přetáhnete výkres a ten pak čeká v poptávce. Stránka O firmě ukazuje půdorys haly, vyhledávání najde stroj, materiál i referenci.",
    url: "https://stepansynek.com/ukazka-hranol/",
    repo: "https://github.com/stepansynek/ukazka-hranol",
    facts: [
      { label: "Stránky", value: "6" },
      { label: "Na webu", value: "kapacita na 8 týdnů, 3D příruba, pult na výkresy, půdorys haly" },
      { label: "Hledání", value: "po celém webu, zkratka Ctrl K" },
      { label: "Logo", value: "navržené pro ukázku" },
    ],
    shots: { desktop: "ukazka-hranol", mobile: "ukazka-hranol-mobil" },
  },
];
