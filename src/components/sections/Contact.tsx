import { config } from "@/content/config";
import { contact } from "@/content/texts";
import { consultationHref } from "@/lib/config";
import { cs, t } from "@/lib/typography";
import { ButtonLink } from "../Button";
import { ContactForm } from "../ContactForm";
import { ContactLink } from "../ContactLink";
import { Container } from "../Container";

/** Tmavý kontaktní panel: velký telefon a e-mail, konzultace a formulář. */
export function Contact() {
  return (
    <section id="kontakt" aria-labelledby="kontakt-nadpis" className="px-3 py-8 sm:px-5 md:py-12">
      <div data-spotlight className="relative mx-auto max-w-[1340px] overflow-hidden rounded-[2.5rem] bg-text py-16 text-white md:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="aurora aurora-1 -top-40 -left-20 size-[30rem] bg-accent opacity-25" />
          <div className="aurora aurora-2 right-[-8rem] bottom-[-10rem] size-[30rem] bg-blue opacity-45" />
          <div className="aurora aurora-3 top-1/3 left-1/2 size-[20rem] bg-violet opacity-30" />
        </div>
        <Container className="relative grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div data-reveal>
            <p className="eyebrow border-white/15 bg-white/10 text-white">{cs(contact.titleEyebrow)}</p>
            <h2 id="kontakt-nadpis" className="h2 mt-5 max-w-[14ch] text-balance">
              {cs(contact.title)}
            </h2>
            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-[0.9375rem] text-white/85">{contact.phoneLabel}</dt>
                <dd className="mt-1 text-[clamp(1.75rem,4vw,2.75rem)] leading-tight font-[720] tracking-[-0.03em] [font-stretch:112%]">
                  <ContactLink type="phone" value={config.TELEFON} className="tabular-nums" />
                </dd>
              </div>
              <div>
                <dt className="text-[0.9375rem] text-white/85">{contact.emailLabel}</dt>
                <dd className="mt-1 text-[clamp(1.4rem,3vw,2rem)] leading-tight font-[650] tracking-[-0.02em] break-all">
                  <ContactLink type="email" value={config.EMAIL} />
                </dd>
              </div>
            </dl>
            <p className="prose-width mt-6 text-white/75">{t(contact.note)}</p>
            <ButtonLink href={consultationHref} variant="primary" arrow className="mt-8 min-h-14 px-7">
              {contact.cta}
            </ButtonLink>
          </div>
          <div data-reveal style={{ "--d": 1 } as React.CSSProperties}>
            <ContactForm />
          </div>
        </Container>
      </div>
    </section>
  );
}
