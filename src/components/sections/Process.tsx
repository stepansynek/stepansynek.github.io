import { process } from "@/content/texts";
import { t } from "@/lib/typography";
import { Section } from "../Section";

/** Čtyři kroky spojené tenkou linkou: na mobilu svisle vlevo, od lg vodorovně nahoře. */
export function Process({ number }: { number: string }) {
  return (
    <Section id="postup" number={number} title={process.title}>
      <ol className="grid border-l border-line-strong lg:grid-cols-4 lg:border-t lg:border-l-0">
        {process.steps.map((step, index) => (
          <li key={step.title} className="relative pb-10 pl-6 last:pb-0 lg:pt-6 lg:pr-8 lg:pb-0 lg:pl-0">
            <span aria-hidden="true" className="absolute top-2 -left-[4.5px] size-2 bg-text lg:-top-[4.5px] lg:left-0" />
            <p className="label">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">{t(step.title)}</h3>
            <p className="mt-2">{t(step.text)}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
