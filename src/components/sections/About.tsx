import { config } from "@/content/config";
import { about } from "@/content/texts";
import { isShown } from "@/lib/config";
import { t } from "@/lib/typography";
import { ContactLink } from "../ContactLink";
import { Section } from "../Section";

export function About() {
  return (
    <Section id="o-mne" eyebrow={about.title} title={about.heading} intro={about.intro}>
      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <ul className="card divide-y divide-line px-5 md:px-8">
          {about.facts.map((fact, index) => (
            <li key={index} data-reveal style={{ "--d": index } as React.CSSProperties} className="flex gap-4 py-4 md:py-5 md:text-lg">
              <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 rotate-45 bg-accent" />
              {t(fact)}
            </li>
          ))}
        </ul>
        <div data-reveal className="card relative flex flex-col justify-between gap-6 overflow-hidden bg-text p-5 text-white md:gap-10 md:p-8">
          <p className="relative text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.15] font-[680] tracking-[-0.02em] [font-stretch:110%]">
            {t(about.capacity)}
          </p>
          {isShown("LINKEDIN") ? (
            <p className="relative">
              <ContactLink type="url" value={config.LINKEDIN} label={about.linkedin} className="font-semibold text-white" />
            </p>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
