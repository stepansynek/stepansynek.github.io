import { config } from "@/content/config";
import { contact } from "@/content/texts";
import { consultationHref } from "@/lib/config";
import { t } from "@/lib/typography";
import { ButtonLink } from "../Button";
import { ContactForm } from "../ContactForm";
import { ContactLink } from "../ContactLink";
import { Section } from "../Section";

export function Contact({ number }: { number: string }) {
  return (
    <Section id="kontakt" number={number} title={contact.title}>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <div>
          <dl className="space-y-6">
            <div>
              <dt className="label">{contact.phoneLabel}</dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
                <ContactLink type="phone" value={config.TELEFON} className="tabular-nums" />
              </dd>
            </div>
            <div>
              <dt className="label">{contact.emailLabel}</dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight break-all md:text-3xl">
                <ContactLink type="email" value={config.EMAIL} />
              </dd>
            </div>
          </dl>
          <p className="prose-width mt-6 text-muted">{t(contact.note)}</p>
          <ButtonLink href={consultationHref} variant="primary" className="mt-8">
            {contact.cta}
          </ButtonLink>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
