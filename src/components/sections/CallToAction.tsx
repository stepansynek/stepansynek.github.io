import { cz } from "@/lib/typography";
import { ButtonLink } from "../Button";
import { Section } from "../Section";
import { SectionDivider } from "../SectionDivider";

export function CallToAction() {
  return (
    <Section labelledBy="cta-nadpis" tone="graphite">
      <SectionDivider className="mb-10 text-muted-dark" />
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-16">
        <h2 id="cta-nadpis" className="max-w-[28ch] text-2xl leading-snug font-semibold tracking-tight text-balance md:text-[2rem]">
          {cz("Pošlete mi odkaz na svůj web a do 20 minut vám řeknu tři věci, které bych změnil.")}
        </h2>
        <ButtonLink href="#kontakt" className="shrink-0 self-start px-6 py-3 md:self-auto">
          Poslat odkaz na web
        </ButtonLink>
      </div>
    </Section>
  );
}
