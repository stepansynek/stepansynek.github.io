import { site } from "@/config/site";
import { ContactForm } from "../ContactForm";
import { ContactLink } from "../ContactLink";
import { Node } from "../Node";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";

export function Contact() {
  return (
    <Section id="kontakt" labelledBy="kontakt-nadpis">
      <SectionHeading id="kontakt-nadpis" title="Kontakt" />
      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,38rem)] md:gap-16">
        <dl className="space-y-8">
          <div>
            <dt className="text-sm font-semibold text-muted">E-mail</dt>
            <dd className="mt-1 text-xl font-medium md:text-2xl">
              <ContactLink type="email" value={site.email} />
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-muted">Telefon</dt>
            <dd className="mt-1 text-xl font-medium md:text-2xl">
              <ContactLink type="phone" value={site.phone} />
            </dd>
          </div>
        </dl>
        <ContactForm />
      </div>
      <p className="mt-12 flex items-center gap-3 text-lg font-medium md:mt-16">
        <Node size={10} />
        {site.locations.join(" · ")}
      </p>
    </Section>
  );
}
