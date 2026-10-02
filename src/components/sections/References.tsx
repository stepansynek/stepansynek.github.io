import { references } from "@/content/references";
import { ReferenceCard } from "../ReferenceCard";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";

export function References() {
  return (
    <Section id="reference" labelledBy="reference-nadpis" tone="chalk">
      <SectionHeading id="reference-nadpis" title="Reference" />
      {references.length > 0 ? (
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {references.map((reference) => (
            <li key={reference.company}>
              <ReferenceCard reference={reference} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xl font-medium">První případová studie se připravuje.</p>
      )}
    </Section>
  );
}
