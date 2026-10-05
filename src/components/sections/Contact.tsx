import { config, site } from "@/content/config";
import { contact, form } from "@/content/texts";
import { consultationHref, isFilled, isShown } from "@/lib/config";
import { cn } from "@/lib/cn";
import { cs, t } from "@/lib/typography";
import { ButtonLink } from "../Button";
import { ContactForm } from "../ContactForm";
import { ContactLink } from "../ContactLink";
import { Phone } from "../Phone";
import { Container } from "../Container";

/** Hláška při chybě odeslání formuláře: nabídne jen ty kontakty, které jsou vyplněné. */
function SendError() {
  const email = isShown("EMAIL");
  const phone = isShown("TELEFON");
  return (
    <p role="alert" className="mb-4 rounded-2xl bg-accent/25 px-4 py-3">
      {cs(form.error)}{" "}
      {email ? (
        <>
          {cs(form.errorEmail)} <ContactLink type="email" value={config.EMAIL} />
          {phone ? (
            <>
              {" "}
              {form.errorEmailPhone} <Phone />
            </>
          ) : null}
          .
        </>
      ) : phone ? (
        <>
          {cs(form.errorPhone)} <Phone />.
        </>
      ) : (
        cs(form.errorRetry)
      )}
    </p>
  );
}

/**
 * Tmavý kontaktní panel: velký telefon a e-mail, konzultace a formulář.
 * V produkci se skryje, co nemá vyplněný údaj: formulář bez Formspree by zprávu neodeslal
 * a tlačítko konzultace bez Cal.com by vedlo samo na sebe (#kontakt).
 */
export function Contact() {
  const showForm = isShown("FORMSPREE_ID");
  const showPhone = isShown("TELEFON");
  const showEmail = isShown("EMAIL");

  return (
    <section id="kontakt" aria-labelledby="kontakt-nadpis" className="px-3 py-8 sm:px-5 md:py-12">
      <div data-spotlight className="relative mx-auto max-w-[1340px] overflow-hidden rounded-[2rem] bg-text py-10 text-white md:rounded-[2.5rem] md:py-24">
        <Container className={cn("relative grid gap-12 lg:gap-16", showForm && "lg:grid-cols-[1fr_1.05fr]")}>
          <div data-reveal>
            <p className="eyebrow border-white/15 bg-white/10 text-white">{cs(contact.titleEyebrow)}</p>
            <h2 id="kontakt-nadpis" className="h2 mt-5 max-w-[14ch] text-balance">
              {cs(contact.title)}
            </h2>
            {showPhone || showEmail ? (
              <dl className="mt-6 space-y-4 md:mt-10 md:space-y-6">
                {showPhone ? (
                  <div>
                    <dt className="text-[0.9375rem] text-white/85">{contact.phoneLabel}</dt>
                    <dd className="mt-1 text-[clamp(1.75rem,4vw,2.75rem)] leading-tight font-[720] tracking-[-0.03em] [font-stretch:112%]">
                      <Phone />
                    </dd>
                  </div>
                ) : null}
                {showEmail ? (
                  <div>
                    <dt className="text-[0.9375rem] text-white/85">{contact.emailLabel}</dt>
                    <dd className="mt-1 text-[clamp(1.4rem,3vw,2rem)] leading-tight font-[650] tracking-[-0.02em] break-all">
                      <ContactLink type="email" value={config.EMAIL} />
                    </dd>
                  </div>
                ) : null}
              </dl>
            ) : null}
            <p className="prose-width mt-6 text-white/75">
              {showPhone ? `${t(contact.phoneNote)} ` : null}
              {t(contact.note)}
            </p>
            {isShown("CAL_LINK") ? (
              <ButtonLink href={consultationHref} variant="primary" arrow className="mt-8 min-h-14 px-7">
                {contact.cta}
              </ButtonLink>
            ) : null}
          </div>
          {showForm ? (
            <div data-reveal style={{ "--d": 1 } as React.CSSProperties}>
              <ContactForm
                endpoint={isFilled("FORMSPREE_ID") ? `https://formspree.io/f/${config.FORMSPREE_ID}` : ""}
                privacyHref={site.privacyPath}
                sendError={<SendError />}
                noscript={
                  isShown("EMAIL") ? (
                    <>
                      {cs(form.noscript)} <ContactLink type="email" value={config.EMAIL} />.
                    </>
                  ) : null
                }
              />
            </div>
          ) : null}
        </Container>
      </div>
    </section>
  );
}
