/**
 * Texty webu. Hranaté závorky jsou klíče z config.ts, doplní se automaticky.
 * České uvozovky „…“ a pomlčky – piš rovnou sem, nezlomitelné mezery doplní cs().
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
  ctaShort: "Konzultace",
};

export const hero = {
  label: "Brno · Vyškov · Rousínov",
  title: "Weby a marketing pro firmy, které vyrábějí, montují a servisují.",
  lead: "Pomáhám technickým firmám ukázat, co opravdu umí. Texty napíšu za vás po jednom rozhovoru, fotky a video zajistíme přímo u vás. Mluvíte přímo se mnou.",
  price: "Weby od 15 000 Kč · pevná cena předem",
  cta: "Domluvit konzultaci zdarma",
  ctaNote: "20 minut. Ukážu vám tři věci, které bych na vašem webu změnil.",
  callPrefix: "nebo zavolejte",
  photoLabel: "Detail A",
  photoAlt: "Štěpán Synek",
};

export const services = {
  title: "Co pro vás udělám",
  newsletter: "Na přání i newsletter pro vaše stávající zákazníky: nové zakázky, technologie a volné kapacity.",
  foundingOffer: "Prvním třem firmám dávám zakládající cenu výměnou za souhlas s uvedením jako reference.",
  vat: "[DPH_VETA]",
};

export const work = {
  title: "Práce",
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
      text: "Do dvou pracovních dnů pošlu pevnou cenu a termín. Platby: [PLATBY].",
    },
    {
      title: "Web na klíč",
      text: "Rozhovor, texty, fotky, návrh a spuštění. Obvykle [DELKA_PROJEKTU] týdnů.",
    },
    {
      title: "Péče",
      text: "Pokud chcete, starám se o web i dál.",
    },
  ],
};

export const about = {
  title: "O mně",
  intro: "Nejsem velká agentura. Mluvíte přímo se mnou, s člověkem, který rozumí řeči techniků i zákazníků.",
  facts: [
    "Od roku [ROK_OD] dělám B2B marketing pro firmu z průmyslové automatizace: newslettery a správu webů.",
    "Studuji automatizaci a měřicí techniku na VUT FEKT a ekonomii na MUNI ECON.",
    "Mluvím česky a anglicky.",
    "Rád se zastavím přímo u vás ve firmě.",
  ],
  capacity: "Beru nejvýš dva nové projekty za semestr, abych se každému věnoval naplno.",
  linkedin: "Profil na LinkedInu",
};

export const faq = {
  title: "Časté otázky",
};

export const contact = {
  title: "Kontakt",
  phoneLabel: "Telefon",
  emailLabel: "E-mail",
  note: "Telefon beru [CASY_TELEFON], jinak zavolám zpět týž den. Brno · Vyškov · Rousínov, rád se zastavím u vás ve firmě.",
  cta: "Domluvit konzultaci zdarma",
};

export const form = {
  title: "Poptávka",
  sheet: "List 1/1",
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
  errorPrefix: "Zprávu se nepodařilo odeslat. Napište mi prosím na",
  errorMiddle: "nebo zavolejte",
  noscript: "Bez JavaScriptu formulář neodešlete. Napište mi prosím přímo na",
  subject: "Poptávka z webu stepansynek.com",
};

export const footer = {
  stamp: [
    ["Název výkresu", "stepansynek.com"],
    ["Kreslil", "Štěpán Synek"],
    ["Měřítko", "1:1"],
    ["Formát", "A∞"],
    ["List", "1/1"],
  ],
  revision: "Revize",
  register: "Fyzická osoba zapsaná v živnostenském rejstříku",
  privacy: "Zásady ochrany osobních údajů",
  linkedin: "LinkedIn",
};

export const notFound = {
  title: "Výkres nenalezen",
  text: "List, který hledáte, v tomto výkresu není.",
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
        "Štěpán Synek, IČO [ICO], se sídlem [SIDLO], fyzická osoba zapsaná v živnostenském rejstříku. E-mail: [EMAIL].",
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
        "Údaje uchovávám [DOBA_UCHOVANI]. Pokud spolu uzavřeme smlouvu, řídí se doba uchování smlouvou a zákonnými povinnostmi, například účetními a daňovými předpisy.",
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
        "Tyto služby sídlí mimo Evropskou unii. Předání údajů do USA probíhá na základě: [PRAVNI_ZAKLAD_PREDANI].",
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
        "Stačí mi napsat na [EMAIL].",
        "Pokud máte za to, že s údaji nakládám v rozporu s předpisy, můžete podat stížnost u Úřadu pro ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7, www.uoou.gov.cz.",
      ],
    },
  ] as { heading: string; blocks: (string | string[])[] }[],
};
