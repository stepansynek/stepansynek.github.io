import { config } from "@/content/config";
import { about } from "@/content/texts";
import { t } from "@/lib/typography";
import { ContactLink } from "../ContactLink";
import { Section } from "../Section";

export function About({ number }: { number: string }) {
  return (
    <Section id="o-mne" number={number} title={about.title}>
      <div className="prose-width">
        <p className="text-xl font-medium md:text-2xl md:leading-snug">{t(about.intro)}</p>
        <ul className="mt-8 border-t border-line">
          {about.facts.map((fact) => (
            <li key={fact} className="border-b border-line py-3">
              {t(fact)}
            </li>
          ))}
        </ul>
        <p className="mt-8">{t(about.capacity)}</p>
        <p className="mt-6">
          <ContactLink type="url" value={config.LINKEDIN} label={about.linkedin} />
        </p>
      </div>
    </Section>
  );
}
