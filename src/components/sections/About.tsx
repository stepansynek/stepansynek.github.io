import { config } from "@/content/config";
import { about } from "@/content/texts";
import { consultationHref, isShown } from "@/lib/config";
import { cs, t } from "@/lib/typography";
import { ButtonLink } from "../Button";
import { ContactLink } from "../ContactLink";
import { Section } from "../Section";

/** Kdo jsem: fakta jako řádky tabulky, vedle oranžová deska s kapacitou. */
export function About() {
  return (
    <Section id="o-mne" title={about.title} intro={about.intro}>
      <div className="grid gap-x-6 gap-y-10 lg:grid-cols-12">
        <ul className="lg:col-span-7">
          {about.facts.map((fact) => (
            <li key={fact} className="border-t-[length:var(--rule)] border-ink py-4 text-lg md:py-5 md:text-xl">
              {t(fact)}
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-between gap-8 bg-orange p-6 text-overprint md:p-8 lg:col-span-5">
          <div>
            <p className="h2">{cs(about.capacity)}</p>
            <p className="measure mt-4 text-lg">{t(about.capacityText)}</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <ButtonLink href={consultationHref} variant="ink">
              {about.cta}
            </ButtonLink>
            {isShown("LINKEDIN") ? <ContactLink type="url" value={config.LINKEDIN} label={about.linkedin} className="font-bold" /> : null}
          </div>
        </div>
      </div>
    </Section>
  );
}
