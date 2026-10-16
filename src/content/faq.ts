export type FaqItem = { question: string; answer: string };

/** Hranaté závorky jsou klíče z config.ts, {…} je volitelná část (viz fill v src/lib/config.ts). */
export const faq: FaqItem[] = [
  {
    question: "Kolik stojí web?",
    answer:
      "Od 15 000 Kč.{ Základ obsahuje [ROZSAH_ZAKLAD].} Pevnou cenu dostanete předem, do dvou pracovních dnů po konzultaci.{ [DPH_VETA]}",
  },
  {
    question: "Jak dlouho to trvá?",
    answer: "{Obvykle [DELKA_PROJEKTU] týdnů od úvodního rozhovoru.|Podle rozsahu. Termín dostanete v nabídce spolu s cenou.}",
  },
  {
    question: "Kolik času to zabere nám?",
    answer:
      "Hlavně hodinový rozhovor na začátku, ideálně přímo u vás ve firmě, a kontrola textů. Zbytek zajistím já.",
  },
  {
    question: "Kdo napíše texty a pořídí fotky?",
    answer: "Texty píšu já podle rozhovoru s vámi. Fotky a video za příplatek pořídíme přímo u vás se spolupracující fotografkou.",
  },
  {
    question: "Komu bude web patřit?",
    answer: "Vám. Doména se registruje na vaši firmu a obsah i kód vám na požádání předám. Doménu platíte přímo registrátorovi, hosting je součástí péče.",
  },
  {
    question: "Je měsíční péče povinná?",
    answer: "Ne, péče je volitelná{ (od [CENA_PECE] Kč měsíčně: hosting, zálohy a do hodiny úprav měsíčně)}. Bez ní vám web předám a úpravy můžete objednávat jednotlivě.",
  },
  {
    question: "Můžeme si web upravovat sami?",
    answer:
      "V rámci péče úpravy dělám já{, obvykle do [ODEZVA_PECE] pracovních dnů}. Na přání za příplatek zprovozním jednoduchý editor pro vlastní úpravy.",
  },
  {
    question: "Stihnete to v termínu?",
    answer:
      "Beru nejvýš dva nové projekty za půl roku, takže na každý mám vyhrazený čas. Termín dostanete v nabídce, a jakmile ho odsouhlasíme, platí.",
  },
  {
    question: "Uvedete nás jako referenci?",
    answer: "Jen s vaším písemným souhlasem.",
  },
  {
    question: "V jakých jazycích web připravíte?",
    answer: "V češtině, anglickou verzi připravím na přání.",
  },
];
