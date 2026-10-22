import type { ConfigKey } from "./config";

/**
 * Texty webu. Hranaté závorky jsou klíče z config.ts, doplní se automaticky.
 * České uvozovky „…“ a pomlčky – piš rovnou sem, nezlomitelné mezery doplní cs().
 * {…} je volitelná část: když v ní chybí údaj, na webu se vynechá; {…|jinak} ji nahradí textem za svislítkem.
 */

export const seo = {
  title: "Štěpán Synek | Weby pro technické firmy z Brna a okolí",
  description:
    "Weby pro výrobní, montážní a servisní firmy z Brna, Vyškova a okolí. Texty po jednom rozhovoru, fotky z vašeho provozu, pevná cena do dvou pracovních dnů. Weby od 15 000 Kč.",
};

export const nav = [
  { id: "sluzby", label: "Služby" },
  { id: "ukazky", label: "Ukázky" },
  { id: "prace", label: "Práce" },
  { id: "postup", label: "Postup" },
  { id: "o-mne", label: "O mně" },
  { id: "faq", label: "Otázky" },
  { id: "kontakt", label: "Kontakt" },
] as const;

export const header = {
  cta: "Domluvit konzultaci",
  menu: "Menu",
  close: "Zavřít",
  menuContact: "Přímý kontakt",
  home: "Štěpán Synek, úvodní stránka",
};

export const hero = {
  /** Titulek po řádcích; na webu se zalamuje přesně takhle. */
  titleLines: ["Weby pro firmy,", "které vyrábějí,", "montují a servisují"],
  lead: "Pomáhám technickým firmám ukázat, co opravdu umí, a získávat z webu poptávky. Texty napíšu po jednom rozhovoru s vámi, fotky pořídíme přímo ve vašem provozu. Jednáte přímo se mnou.",
  cta: "Domluvit konzultaci zdarma",
  ctaNote: "Na konzultaci vám ukážu tři konkrétní věci, které bych na vašem webu zlepšil.",
  callPrefix: "Nebo zavolejte",
  photoAlt: "Štěpán Synek",
  photoCaption: "Štěpán Synek, Brno",
  specTitle: "Technické údaje",
  spec: [
    { label: "Web na klíč", value: "od 15 000 Kč" },
    { label: "Nabídka s pevnou cenou", value: "do 2 pracovních dnů" },
    { label: "Úvodní konzultace", value: "20 minut zdarma" },
    { label: "Nové projekty", value: "nejvýš 2 za půl roku" },
  ],
};

export const services = {
  title: "Web, texty a fotky z jedné ruky",
  intro: "Nemusíte shánět grafika, copywritera a fotografa. Cenu i termín znáte předem.",
  extrasTitle: "Na přání",
  extras: [
    {
      title: "Fotky a video z provozu",
      text: "Vaše dílna, stroje a hotové zakázky. Fotíme a natáčíme přímo u vás se spolupracující fotografkou.",
      price: "za příplatek, cena předem",
    },
    {
      title: "Newsletter pro zákazníky",
      text: "Pravidelný e-mail stávajícím zákazníkům: nové zakázky, technologie a volné kapacity. Připomenete se dřív, než zavolají konkurenci.",
      price: "podle rozsahu",
    },
  ],
  ownership: {
    title: "Web patří vám",
    text: "Doména se registruje na vaši firmu a obsah i kód vám na požádání předám. Měsíční péče je volitelná.",
  },
  foundingOffer: "Prvním třem firmám dávám zakládající cenu výměnou za souhlas s uvedením jako reference.",
  vat: "{[DPH_VETA]}",
};

export const demos = {
  title: "Dva ukázkové weby strojíren",
  intro:
    "SETINA a HRANOL jsou smyšlené firmy. Navrhl jsem pro ně weby od textů po kód, ať vidíte, jak může vypadat web technické firmy. Obě ukázky jsou rozsáhlejší než základní web na klíč.",
  label: "Smyšlená firma, ukázkový web",
  live: "Spustit živou ukázku",
  liveNote: "Web se načte přímo tady a můžete ho procházet.",
  close: "Zpět na snímek",
  desktop: "Počítač",
  phone: "Telefon",
  open: "Otevřít celý web",
  repo: "Kód na GitHubu",
  newWindow: "(otevře se v novém okně)",
  frameTitle: (name: string) => `Živá ukázka webu ${name}`,
  shotAlt: (name: string) => `Snímek celé úvodní stránky ukázkového webu ${name}`,
};

export const work = {
  title: "Weby pro klienty",
  inProgress: "Právě pracuji na…",
};

export const process = {
  title: "Jak to probíhá",
  steps: [
    {
      title: "Konzultace",
      text: "20 minut zdarma: telefonicky, online, nebo u vás. Projdeme váš současný web a cíle.",
    },
    {
      title: "Nabídka",
      text: "Do dvou pracovních dnů pošlu pevnou cenu a termín.{ Platby: [PLATBY].}",
    },
    {
      title: "Realizace",
      text: "Rozhovor, texty, fotky, návrh, vaše připomínky a spuštění.{ Obvykle [DELKA_PROJEKTU] týdnů.}",
    },
    {
      title: "Péče o web",
      text: "Volitelně se o web starám i po spuštění: úpravy, hosting a zálohy.",
    },
  ],
};

export const about = {
  title: "Rozumím řeči techniků",
  intro:
    "{Od roku [ROK_OD] dělám|Dělám} marketing pro firmu z průmyslové automatizace a studuji automatizaci na VUT. Když mluvíte o rozvaděčích nebo servisních smlouvách, nemusíte mi nic překládat.",
  facts: [
    "Pro firmu z průmyslové automatizace spravuji weby a připravuji newslettery.",
    "Studuji automatizaci a měřicí techniku na VUT FEKT a ekonomii na MUNI ECON.",
    "Zakázku vedu osobně od prvního rozhovoru po spuštění.",
    "Komunikuji česky i anglicky.",
  ],
  capacity: "Beru nejvýš dva nové projekty za půl roku.",
  capacityText: "Každý vedu osobně, takže na něj mám vyhrazený čas a termín z nabídky platí.",
  cta: "Domluvit konzultaci",
  linkedin: "Profil na LinkedInu",
};

export const faq = {
  title: "Časté otázky",
  intro: "Nenašli jste odpověď? Zavolejte nebo napište, odpovím do 24 hodin v pracovní dny.",
};

export const contact = {
  title: "Pojďme se podívat na váš web",
  phoneLabel: "Telefon",
  emailLabel: "E-mail",
  /** Ukáže se jen s vyplněným telefonem. */
  phoneNote: "{Telefon beru [CASY_TELEFON], jinak|Když hovor nestihnu,} zavolám zpět ještě týž den.",
  note: "Rád za vámi přijedu do firmy, provoz je nejlepší vidět na vlastní oči. Konzultace je zdarma a nezávazná.",
  cta: "Domluvit konzultaci zdarma",
  /** Tlačítko na e-mail s předvyplněným předmětem a osnovou zprávy. */
  emailCta: "Napsat e-mail",
  emailBody: "Dobrý den,\n\nfirma:\nweb:\ns čím potřebujeme pomoct:\n\n",
  mapTitle: "Kde působím",
  mapAlt: "Mapa: Brno, Rousínov a Vyškov na dálnici D1. Za firmami v tomto okolí rád přijedu.",
  mapCredit: "Trasa D1 © přispěvatelé OpenStreetMap",
};

export const form = {
  title: "Napište mi",
  fields: {
    name: { label: "Jméno", error: "Vyplňte prosím jméno." },
    company: { label: "Firma", error: "Vyplňte prosím název firmy." },
    contact: {
      label: "E-mail nebo telefon",
      error: "Vyplňte prosím e-mail nebo telefon, abych se vám mohl ozvat.",
    },
    web: { label: "Web firmy", error: "" },
    message: { label: "Zpráva", error: "Napište prosím, s čím vám mohu pomoci." },
    source: { label: "Odkud o mně víte?", error: "" },
  },
  optional: "nepovinné",
  privacyBefore: "Údaje použiji jen k odpovědi na vaši zprávu. Více v ",
  privacyLink: "zásadách ochrany osobních údajů",
  privacyAfter: ".",
  submit: "Odeslat zprávu",
  sending: "Odesílám…",
  success: "Děkuji, zpráva dorazila. Ozvu se do 24 hodin v pracovní dny.",
  successSignature: "Štěpán Synek",
  errorSummary: (count: number) =>
    count === 1 ? "Formulář obsahuje 1 chybu." : count < 5 ? `Formulář obsahuje ${count} chyby.` : `Formulář obsahuje ${count} chyb.`,
  error: "Zprávu se nepodařilo odeslat.",
  errorEmail: "Napište mi prosím na",
  errorEmailPhone: "nebo zavolejte",
  errorPhone: "Zavolejte mi prosím na číslo",
  errorRetry: "Zkuste to prosím za chvíli znovu.",
  noscript: "Bez JavaScriptu formulář neodešlete. Napište mi prosím přímo na",
  subject: "Poptávka z webu stepansynek.com",
};

export const footer = {
  tagline: "Weby pro technické firmy z Brna, Vyškova, Rousínova a okolí.",
  register: "Fyzická osoba zapsaná v živnostenském rejstříku",
  privacy: "Zásady ochrany osobních údajů",
  linkedin: "LinkedIn",
  font: "Sázeno písmem Special Gothic",
};

export const notFound = {
  title: "Tato stránka neexistuje",
  text: "Odkaz je zřejmě zastaralý, nebo obsahuje překlep. Vše podstatné najdete na úvodní stránce.",
  back: "Zpět na úvod",
};

export const skipLink = "Přeskočit na obsah";

/** Položka seznamu, která se ukáže jen s vyplněným údajem z config.ts (služba se opravdu používá). */
type PrivacyItem = string | { text: string; when: ConfigKey };

/**
 * Zásady ochrany osobních údajů. NÁVRH – před spuštěním zkontroluje Štěpán (viz README).
 * Odstavec je řetězec, odrážky pole řetězců.
 */
export const privacy = {
  title: "Zásady ochrany osobních údajů",
  description: "Jak zpracovávám osobní údaje, které mi pošlete přes web, e-mailem nebo telefonicky.",
  intro:
    "Na této stránce vysvětluji, jak nakládám s osobními údaji, které mi pošlete přes web stepansynek.com, e-mailem nebo po telefonu.",
  sections: [
    {
      heading: "Správce osobních údajů",
      blocks: [
        "Štěpán Synek{, IČO [ICO]}{, se sídlem [SIDLO]}, fyzická osoba zapsaná v živnostenském rejstříku.{ E-mail: [EMAIL].}",
      ],
    },
    {
      heading: "Jaké údaje zpracovávám",
      blocks: [
        "Jen ty, které mi sami pošlete:",
        [
          {
            text: "z kontaktního formuláře: jméno, firmu, e-mail nebo telefon, web firmy, text zprávy a odpověď na otázku, odkud o mně víte,",
            when: "FORMSPREE_ID",
          },
          { text: "z rezervace konzultace v Cal.com: jméno, e-mail, zvolený termín a případnou poznámku,", when: "CAL_LINK" },
          "z e-mailu a telefonu: kontaktní údaje a obsah komunikace.",
        ],
      ],
    },
    {
      heading: "Účel a právní základ",
      blocks: [
        "Údaje používám k tomu, abych odpověděl na váš dotaz, domluvil konzultaci a případně připravil nabídku a smlouvu. Právním základem je jednání o smlouvě a její plnění (čl. 6 odst. 1 písm. b GDPR).",
        "Pokud spolu smlouvu neuzavřeme, mohu si komunikaci ponechat na nezbytně nutnou dobu z oprávněného zájmu, abych mohl doložit, co jsme si domluvili (čl. 6 odst. 1 písm. f GDPR).",
      ],
    },
    {
      heading: "Doba uchování",
      blocks: [
        "{Údaje uchovávám [DOBA_UCHOVANI]. }Pokud spolu uzavřeme smlouvu, řídí se doba uchování smlouvou a zákonnými povinnostmi, například účetními a daňovými předpisy.",
      ],
    },
    {
      heading: "Příjemci a zpracovatelé",
      blocks: [
        "Údaje neprodávám ani nepředávám dalším osobám. Pro provoz webu a komunikaci využívám tyto služby:",
        [
          { text: "Formspree, Inc. (USA) – odeslání kontaktního formuláře,", when: "FORMSPREE_ID" },
          { text: "Cal.com, Inc. (USA) – rezervace termínu konzultace,", when: "CAL_LINK" },
          "GitHub, Inc. (USA) – hosting webu na GitHub Pages; při návštěvě webu zpracovává technické logy včetně IP adres.",
        ],
        "Uvedené služby sídlí v USA, tedy mimo Evropskou unii.{ Předání údajů do USA probíhá na základě: [PRAVNI_ZAKLAD_PREDANI].}",
      ],
    },
    {
      heading: "Cookies a analytika",
      blocks: ["Web nepoužívá cookies ani žádnou analytiku nebo měření návštěvnosti."],
    },
    {
      heading: "Vaše práva",
      blocks: [
        "Máte právo:",
        [
          "na přístup ke svým údajům,",
          "na opravu nepřesných údajů,",
          "na výmaz,",
          "na omezení zpracování,",
          "na přenositelnost údajů,",
          "vznést námitku proti zpracování založenému na oprávněném zájmu.",
        ],
        "{Stačí mi napsat na [EMAIL].}",
        "Pokud máte za to, že s údaji nakládám v rozporu s předpisy, můžete podat stížnost u Úřadu pro ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7, www.uoou.gov.cz.",
      ],
    },
  ] as { heading: string; blocks: (string | PrivacyItem[])[] }[],
};
