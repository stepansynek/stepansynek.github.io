import { process } from "@/content/texts";
import { t } from "@/lib/typography";
import { Section } from "../Section";

/**
 * Čtyři kroky spojené linkou, která se při scrollu vyplňuje (--progress z Effects.tsx).
 * Na mobilu svisle vlevo, od lg vodorovně nahoře.
 */
export function Process() {
  return (
    <Section id="postup" eyebrow="Postup" title={process.title}>
      <ol data-progress className="relative grid gap-6 pl-10 md:gap-10 lg:grid-cols-4 lg:gap-6 lg:pt-12 lg:pl-0">
        <span aria-hidden="true" className="absolute top-2 bottom-2 left-[15px] w-0.5 rounded-full bg-line lg:top-[15px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-0.5 lg:w-auto" />
        <span
          aria-hidden="true"
          className="absolute top-2 left-[15px] h-[calc((100%-1rem)*var(--progress,1))] w-0.5 rounded-full bg-[linear-gradient(var(--accent),var(--orange))] lg:top-[15px] lg:left-0 lg:h-0.5 lg:w-[calc(100%*var(--progress,1))] lg:bg-[linear-gradient(90deg,var(--accent),var(--orange))]"
        />
        {process.steps.map((step, index) => (
          <li key={step.title} data-reveal style={{ "--d": index } as React.CSSProperties} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-0 -left-10 grid size-8 place-items-center rounded-full border-2 border-text bg-surface text-sm font-bold tabular-nums lg:-top-12 lg:left-0"
            >
              {index + 1}
            </span>
            <h3 className="h3">{t(step.title)}</h3>
            <p className="mt-2 text-muted">{t(step.text)}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
