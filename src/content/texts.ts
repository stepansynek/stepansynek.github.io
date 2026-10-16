import type { ConfigKey } from "./config";

/**
 * Texty webu. Hranaté závorky jsou klíče z config.ts, doplní se automaticky.
 * České uvozovky „…“ a pomlčky – piš rovnou sem, nezlomitelné mezery doplní cs().
 * {…} je volitelná část: když v ní chybí údaj, na webu se vynechá; {…|jinak} ji nahradí textem za svislítkem.
 */

export const seo = {
  title: "Štěpán Synek | Weby a marketing pro technické firmy, Brno",
  description:
    "Weby a marketing pro výrobní, montážní a servisní firmy z Brna a okolí. Web, texty, fotky a video z jedné ruky, pevná cena předem. Weby od 15 000 Kč.",
};

export const nav = [
  { id: "sluzby", label: "Služby" },
  { id: "prace", label: "Práce" },
  { id: "postup", label: "Postup" },
  { id: "o-mne", label: "O mně" },
  { id: "faq", label: "FAQ" },
  { id: "kontakt", label: "Kontakt" },
] as const;

export const header = {
  cta: "Domluvit konzultaci",
  menu: "Menu",
  close: "Zavřít",
  menuContact: "Přímý kontakt",
};

/** Krátké popisky k položkám v rolovacím menu. */
export const navHints: Record<string, string> = {
  sluzby: "Web na klíč, péče o web, foto a video",
  prace: "Aktuální projekty",
  postup: "Od konzultace po spuštění",
  "o-mne": "Kdo jsem a proč technické firmy",
  faq: "Cena, termíny, kdo co dělá",
  kontakt: "Telefon, e-mail, poptávka",
};

export const hero = {
  eyebrow: "Technické firmy z Brna, Vyškova a okolí",
  titleStart: "Weby a marketing pro firmy, které",
  titleWords: ["vyrábějí.", "montují.", "servisují."],
  titleFull: "Weby a marketing pro firmy, které vyrábějí, montují a servisují.",
  lead: "Pomáhám technickým firmám ukázat, co opravdu umí, a získávat z webu poptávky. Texty napíšu po jednom rozhovoru s vámi, fotky a video pořídíme přímo ve vašem provozu. Jednáte přímo se mnou.",
  price: "Weby od 15 000 Kč, pevná cena předem",
  cta: "Domluvit konzultaci zdarma",
  ctaNote: "20 minut, nezávazně. Ukážu vám tři konkrétní věci, které bych na vašem webu zlepšil.",
  callPrefix: "Nebo zavolejte",
  photoAlt: "Štěpán Synek",
  photoCaption: "Brno a okolí",
  marquee: ["Výroba", "Montáže", "Servis", "Elektro", "Weby na klíč", "Texty", "Fotky a video", "Newslettery", "Péče o web"],
};

export const facts = {
  title: "Na co se u mě můžete spolehnout",
  items: [
    { value: 15000, display: "15 000", unit: "Kč", text: "Za tolik začíná web na klíč. Pevnou cenu znáte předem, ne až na faktuře.", wide: true },
    { value: 20, display: "20", unit: "minut", text: "Úvodní konzultace zdarma. Telefonicky, online, nebo u vás." },
    { value: 2, display: "2", unit: "dny", text: "Nabídka s pevnou cenou a termínem do dvou pracovních dnů po konzultaci." },
    { value: 24, display: "24", unit: "hodin", text: "Na zprávu odpovím do 24 hodin v pracovní dny. Když hovor nestihnu, zavolám zpět ještě týž den.", wide: true },
    { value: 1, display: "1", unit: "rozhovor", text: "Hodinový rozhovor stačí. Texty napíšu já, vy je jen schválíte." },
    { value: 2, display: "2", unit: "projekty", text: "Nejvýš dva nové projekty za půl roku. Každý vedu osobně." },
  ],
  ownership: {
    title: "Web patří vám",
    text: "Doména se registruje na vaši firmu a obsah i kód vám na požádání předám. Měsíční péče je volitelná.",
  },
};

export const services = {
  title: "Co pro vás udělám",
  intro: "Vše z jedné ruky: web, texty, fotky i video. Nemusíte koordinovat grafika, copywritera a fotografa.",
  extrasTitle: "Na přání také",
  extras: [
    {
      title: "Fotky a video z provozu",
      text: "Vaše dílna, stroje a hotové zakázky. Fotíme a natáčíme přímo u vás se spolupracující fotografkou. Za příplatek, cenu znáte předem.",
    },
    {
      title: "Newsletter pro zákazníky",
      text: "Pravidelný e-mail stávajícím zákazníkům: nové zakázky, technologie a volné kapacity. Připomenete se dřív, než zavolají konkurenci.",
    },
  ],
  foundingOffer: "Prvním třem firmám dávám zakládající cenu výměnou za souhlas s uvedením jako reference.",
  vat: "{[DPH_VETA]}",
};

export const work = {
  title: "Na čem pracuji",
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
  title: "O mně",
  heading: "Rozumím řeči techniků.",
  intro:
    "{Od roku [ROK_OD] dělám|Dělám} marketing pro firmu z průmyslové automatizace a studuji automatizaci na VUT. Když mluvíte o rozvaděčích nebo servisních smlouvách, nemusíte mi nic překládat. Zakázku vedu osobně od prvního rozhovoru po spuštění.",
  facts: [
    "Pro firmu z průmyslové automatizace spravuji weby a připravuji newslettery.",
    "Studuji automatizaci a měřicí techniku na VUT FEKT a ekonomii na MUNI ECON.",
    "Komunikuji česky i anglicky.",
    "Rád za vámi přijedu do firmy. Provoz je nejlepší vidět na vlastní oči.",
  ],
  capacity: "Beru nejvýš dva nové projekty za půl roku. Každému se věnuji naplno.",
  cta: "Domluvit konzultaci",
  linkedin: "Profil na LinkedInu",
};

export const faq = {
  title: "Časté otázky",
  intro: "Nenašli jste odpověď? Zavolejte nebo napište, odpovím do 24 hodin v pracovní dny.",
};

export const contact = {
  titleEyebrow: "Kontakt",
  title: "Pojďme se podívat na váš web",
  phoneLabel: "Telefon",
  emailLabel: "E-mail",
  /** Ukáže se jen s vyplněným telefonem. */
  phoneNote: "{Telefon beru [CASY_TELEFON], jinak|Když hovor nestihnu,} zavolám zpět ještě týž den.",
  note: "Působím v Brně, Vyškově, Rousínově a okolí. Rád za vámi přijedu do firmy.",
  cta: "Domluvit konzultaci zdarma",
  /** Tlačítko na e-mail s předvyplněným předmětem a osnovou zprávy. */
  emailCta: "Napsat e-mail",
  emailBody: "Dobrý den,\n\nfirma:\nweb:\ns čím potřebujeme pomoct:\n\n",
  /** Panel vedle kontaktů, když není formulář. */
  next: {
    title: "Co bude následovat",
    steps: [
      "Napíšete nebo zavoláte. Do 24 hodin v pracovní dny se ozvu a domluvíme termín.",
      "Za 20 minut projdeme váš web a cíle. Ukážu vám tři konkrétní věci, které bych zlepšil.",
      "Do dvou pracovních dnů dostanete nabídku s pevnou cenou a termínem.",
    ],
    note: "Konzultace je zdarma a nezávazná.",
  },
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
  tagline: "Weby a marketing pro technické firmy z Brna, Vyškova a okolí.",
  register: "Fyzická osoba zapsaná v živnostenském rejstříku",
  privacy: "Zásady ochrany osobních údajů",
  linkedin: "LinkedIn",
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
