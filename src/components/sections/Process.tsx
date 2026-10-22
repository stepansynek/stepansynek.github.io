import { process } from "@/content/texts";
import { t } from "@/lib/typography";
import { Section } from "../Section";

/** Čtyři kroky v pořadí, jak jdou za sebou. Čísla nesou informaci (je to sled), proto jsou velká. */
export function Process() {
  return (
    <Section id="postup" title={process.title}>
      <ol className="grid gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4">
        {process.steps.map((step, index) => (
          <li key={step.title} className="border-t-[length:var(--rule)] border-ink pt-4">
            <span aria-hidden="true" className="block text-[clamp(4.5rem,8vw,7rem)] leading-[0.8] font-bold [font-stretch:75%]">
              {index + 1}
            </span>
            <h3 className="h3 mt-5">{t(step.title)}</h3>
            <p className="measure mt-2">{t(step.text)}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
