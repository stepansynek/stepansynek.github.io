/**
 * Texty webu. Hranaté závorky jsou klíče z config.ts, doplní se automaticky.
 * České uvozovky „…“ a pomlčky – piš rovnou sem, nezlomitelné mezery doplní cs().
 * {…} je volitelná část: když v ní chybí údaj, na webu se vynechá; {…|jinak} ji nahradí textem za svislítkem.
 */

export const seo = {
  title: "Štěpán Synek | Weby a marketing pro technické firmy, Brno",
  description:
    "Weby a marketing pro technické firmy z Brna a okolí. Texty, fotky a video z jedné ruky, pevná cena předem. Weby od 15 000 Kč.",
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
  menuContact: "Rovnou se mnou",
};

/** Krátké popisky k položkám v rolovacím menu. */
export const navHints: Record<string, string> = {
  sluzby: "Web na klíč, péče, foto a video",
  prace: "Na čem právě pracuji",
  postup: "Od konzultace po spuštění",
  "o-mne": "Kdo jsem a proč technika",
  faq: "Cena, termíny, kdo co dělá",
  kontakt: "Telefon, e-mail, poptávka",
};

export const hero = {
  eyebrow: "Weby pro technické firmy z Brna, Vyškova a Rousínova",
  titleStart: "Weby a marketing pro firmy, které",
  titleWords: ["vyrábějí.", "montují.", "servisují."],
  titleFull: "Weby a marketing pro firmy, které vyrábějí, montují a servisují.",
  lead: "Pomáhám technickým firmám ukázat, co opravdu umí. Texty napíšu za vás po jednom rozhovoru, fotky a video zajistíme přímo u vás. Mluvíte přímo se mnou.",
  price: "Weby od 15 000 Kč, pevná cena předem",
  cta: "Domluvit konzultaci zdarma",
  ctaNote: "20 minut. Ukážu vám tři věci, které bych na vašem webu změnil.",
  callPrefix: "Nebo zavolejte",
  photoAlt: "Štěpán Synek",
  photoCaption: "Brno a okolí",
  marquee: ["Výroba", "Montáže", "Servis", "Elektro", "Weby na klíč", "Texty", "Fotky a video", "Newslettery", "Péče o web"],
};

export const facts = {
  title: "Na co se u mě můžete spolehnout",
  items: [
    { value: 15000, display: "15 000", unit: "Kč", text: "Za tolik začíná web na klíč. Pevnou cenu znáte předem, ne až na faktuře.", wide: true },
    { value: 20, display: "20", unit: "minut", text: "Úvodní konzultace zdarma. Telefonem, online, nebo u vás ve firmě." },
    { value: 2, display: "2", unit: "dny", text: "Do dvou pracovních dnů po konzultaci pošlu nabídku s cenou a termínem." },
    { value: 24, display: "24", unit: "hodin", text: "Na zprávu odpovím do 24 hodin v pracovní dny. Telefon beru, a když ne, zavolám zpět týž den.", wide: true },
    { value: 1, display: "1", unit: "rozhovor", text: "Hodinový rozhovor stačí. Texty pak napíšu já, vy je jen zkontrolujete." },
    { value: 2, display: "2", unit: "projekty", text: "Za semestr beru nejvýš dva nové projekty, abych se každému věnoval naplno." },
  ],
  ownership: {
    title: "Web patří vám",
    text: "Doména se registruje na vaši firmu a obsah i kód vám na požádání předám. Měsíční péče je volitelná.",
  },
};

export const services = {
  title: "Co pro vás udělám",
  intro: "Všechno z jedné ruky: web, texty, fotky i video. Nemusíte koordinovat grafika, copywritera a fotografa.",
  photo: "Fotky a video z vašeho provozu, strojů a zakázek zajistím za příplatek s fotografkou, se kterou spolupracuji. Cenu řeknu předem.",
  newsletter: "Na přání i newsletter pro vaše stávající zákazníky: nové zakázky, technologie a volné kapacity.",
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
      text: "20 minut zdarma, telefonem, online nebo u vás. Projdeme váš web a cíle.",
    },
    {
      title: "Nabídka",
      text: "Do dvou pracovních dnů pošlu pevnou cenu a termín.{ Platby: [PLATBY].}",
    },
    {
      title: "Web na klíč",
      text: "Rozhovor, texty, fotky, návrh a spuštění.{ Obvykle [DELKA_PROJEKTU] týdnů.}",
    },
    {
      title: "Péče",
      text: "Pokud chcete, starám se o web i dál.",
    },
  ],
};

export const about = {
  title: "O mně",
  heading: "Rozumím řeči techniků.",
  intro:
    "{Od roku [ROK_OD] dělám|Dělám} marketing pro firmu z průmyslové automatizace a studuji automatizaci na VUT. Když mluvíte o rozvaděčích nebo servisních smlouvách, nemusíte mi nic překládat. A mluvíte přímo se mnou.",
  facts: [
    "Pro firmu z průmyslové automatizace připravuji newslettery a spravuji weby.",
    "Studuji automatizaci a měřicí techniku na VUT FEKT a ekonomii na MUNI ECON.",
    "Mluvím česky a anglicky.",
    "Rád se zastavím přímo u vás ve firmě.",
  ],
  capacity: "Beru nejvýš dva nové projekty za semestr, abych se každému věnoval naplno.",
  linkedin: "Profil na LinkedInu",
};

export const faq = {
  title: "Časté otázky",
  intro: "Nenašli jste odpověď? Zavolejte, nebo napište. Odpovím do 24 hodin v pracovní dny.",
};

export const contact = {
  titleEyebrow: "Kontakt",
  title: "Pojďme se podívat na váš web",
  phoneLabel: "Telefon",
  emailLabel: "E-mail",
  /** Ukáže se jen s vyplněným telefonem. */
  phoneNote: "{Telefon beru [CASY_TELEFON], jinak|Když telefon neberu,} zavolám zpět týž den.",
  note: "Brno · Vyškov · Rousínov, rád se zastavím u vás ve firmě.",
  cta: "Domluvit konzultaci zdarma",
};

export const form = {
  title: "Napište mi",
  fields: {
    name: { label: "Jméno", error: "Vyplňte prosím jméno." },
    company: { label: "Firma", error: "Vyplňte prosím název firmy." },
    contact: {
      label: "E-mail nebo telefon",
      error: "Vyplňte prosím e-mail nebo telefon, ať se vám můžu ozvat.",
    },
    web: { label: "Web firmy", error: "" },
    message: { label: "Zpráva", error: "Napište prosím, s čím vám můžu pomoct." },
    source: { label: "Odkud o mně víte?", error: "" },
  },
  optional: "nepovinné",
  privacyBefore: "Údaje použiju jen k odpovědi na vaši zprávu. Více v ",
  privacyLink: "zásadách ochrany osobních údajů",
  privacyAfter: ".",
  submit: "Odeslat zprávu",
  sending: "Odesílám…",
  success: "Díky, ozvu se do 24 hodin v pracovní dny.",
  successSignature: "Štěpán",
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
  revision: "Verze",
  register: "Fyzická osoba zapsaná v živnostenském rejstříku",
  privacy: "Zásady ochrany osobních údajů",
  linkedin: "LinkedIn",
};

export const notFound = {
  title: "Tahle stránka neexistuje",
  text: "Odkaz je možná starý nebo v něm je překlep. Všechno podstatné najdete na úvodní stránce.",
  back: "Zpět na úvod",
};

export const skipLink = "Přeskočit na obsah";

/**
 * Zásady ochrany osobních údajů. NÁVRH – před spuštěním zkontroluje Štěpán (viz README).
 * Odstavec je řetězec, odrážky pole řetězců.
 */
export const privacy = {
  title: "Zásady ochrany osobních údajů",
  description: "Jak zpracovávám osobní údaje z kontaktního formuláře, rezervací, e-mailu a telefonu.",
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
          "z kontaktního formuláře: jméno, firmu, e-mail nebo telefon, web firmy, text zprávy a odpověď na otázku, odkud o mně víte,",
          "z rezervace konzultace v Cal.com: jméno, e-mail, zvolený termín a případnou poznámku,",
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
        "Údaje neprodávám ani nepředávám dalším osobám. Pracuji s těmito službami:",
        [
          "Formspree, Inc. (USA) – odeslání kontaktního formuláře,",
          "Cal.com, Inc. (USA) – rezervace termínu konzultace,",
          "GitHub, Inc. (USA) – hosting webu na GitHub Pages; při návštěvě webu zpracovává technické logy včetně IP adres.",
        ],
        "Tyto služby sídlí mimo Evropskou unii.{ Předání údajů do USA probíhá na základě: [PRAVNI_ZAKLAD_PREDANI].}",
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
  ] as { heading: string; blocks: (string | string[])[] }[],
};
