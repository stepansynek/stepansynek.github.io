import { Node } from "../Node";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";

const services = [
  {
    title: "Web",
    text: "Moderní a rychlý web s poptávkovým formulářem, volitelně v češtině, němčině a angličtině.",
  },
  {
    title: "Newsletter",
    text: "Pravidelný kontakt s vašimi zákazníky.",
  },
  {
    title: "Péče",
    text: "Aktualizace, nové reference, pracovní nabídky a hosting za měsíční paušál.",
  },
];

/**
 * Tři části jednoho balíčku spojené jednou linkou s uzly:
 * na mobilu svisle vlevo, od md vodorovně nad sloupci.
 */
export function Services() {
  return (
    <Section id="sluzby" labelledBy="sluzby-nadpis">
      <SectionHeading id="sluzby-nadpis" title="Služby" intro="Jeden balíček, tři části." />
      <ul className="grid gap-12 border-l-[1.5px] border-graphite pl-8 md:grid-cols-3 md:gap-10 md:border-t-[1.5px] md:border-l-0 md:pt-10 md:pl-0">
        {services.map((service) => (
          <li key={service.title} className="relative">
            <Node className="absolute top-2 -left-[38.75px] md:-top-[46.75px] md:left-0" />
            <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted">{service.text}</p>
          </li>
        ))}
      </ul>
      <p className="mt-14 text-xl font-semibold md:mt-20 md:text-2xl">Pevná cena předem, žádná překvapení.</p>
    </Section>
  );
}
