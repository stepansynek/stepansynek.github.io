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
    question: "Kolik mi to vezme času?",
    answer:
      "Hlavně jeden hodinový rozhovor na začátku, klidně u vás ve firmě, a kontrola textů. Zbytek je na mně.",
  },
  {
    question: "Kdo napíše texty a udělá fotky?",
    answer: "Texty píšu já podle rozhovoru s vámi. Fotky a video za příplatek pořídí přímo u vás fotografka, se kterou spolupracuji.",
  },
  {
    question: "Komu web patří?",
    answer: "Vám. Doména se registruje na vaši firmu a obsah i kód vám na požádání předám. Doménu platíte přímo registrátorovi, hosting je v ceně péče.",
  },
  {
    question: "Musím platit měsíční péči?",
    answer: "Ne, péče je volitelná{ (od [CENA_PECE] Kč měsíčně: hosting, zálohy a do hodiny úprav měsíčně)}. Bez ní vám web předám a úpravy můžete objednávat jednotlivě.",
  },
  {
    question: "Můžu si web upravovat sám?",
    answer:
      "V rámci péče úpravy dělám já{, obvykle do [ODEZVA_PECE] pracovních dnů}. Na přání za příplatek zprovozním jednoduchý editor.",
  },
  {
    question: "Co když budete mít zkouškové?",
    answer:
      "Termíny plánuju podle semestru a beru jen dva projekty za semestr. Domluvené termíny platí i ve zkouškovém.",
  },
  {
    question: "Uvedete nás jako referenci?",
    answer: "Jen s vaším písemným souhlasem.",
  },
  {
    question: "V jakých jazycích web připravíte?",
    answer: "Česky, anglickou verzi na přání.",
  },
];
