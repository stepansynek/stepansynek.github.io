import { cz } from "@/lib/typography";
import { Node } from "../Node";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";

const problems = [
  "Váš web vypadá, jako by byl z roku 2013.",
  "Zákazník na něm nenajde, co umíte.",
  "Poptávky chodí jen přes známé.",
];

export function Problem() {
  return (
    <Section id="problem" labelledBy="problem-nadpis" tone="chalk">
      <SectionHeading id="problem-nadpis" title="Poznáváte to?" />
      <ul className="grid gap-8 md:grid-cols-3 md:gap-12">
        {problems.map((problem) => (
          <li key={problem} className="flex gap-4">
            <Node className="mt-[0.55em] md:mt-[0.6em]" />
            <p className="text-xl leading-snug font-medium md:text-2xl md:leading-snug">{cz(problem)}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
