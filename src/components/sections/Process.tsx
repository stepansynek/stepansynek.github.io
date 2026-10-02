import { cz } from "@/lib/typography";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";

const steps = [
  { number: "01", title: "Konzultace", text: "20 minut zdarma. Projdeme váš web a cíle." },
  { number: "02", title: "Web na klíč", text: "Texty, fotky, design, spuštění." },
  { number: "03", title: "Průběžná péče", text: "Starám se, aby web pracoval i dál." },
];

export function Process() {
  return (
    <Section id="jak-pracuji" labelledBy="jak-pracuji-nadpis" tone="chalk">
      <SectionHeading id="jak-pracuji-nadpis" title="Jak pracuji" />
      <ol className="grid gap-12 md:grid-cols-3 md:gap-10">
        {steps.map((step) => (
          <li key={step.number}>
            <div className="flex items-center gap-4">
              <span className="text-5xl font-semibold tracking-tight tabular-nums">{step.number}</span>
              <span aria-hidden="true" className="h-[1.5px] flex-1 bg-graphite" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight">{step.title}</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted">{cz(step.text)}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
