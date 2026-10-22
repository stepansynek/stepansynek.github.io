import { config, site } from "@/content/config";
import { contact, form } from "@/content/texts";
import { consultationHref, isFilled, isShown, mailHref } from "@/lib/config";
import { cs, t } from "@/lib/typography";
import { ButtonLink } from "../Button";
import { ContactForm } from "../ContactForm";
import { ContactLink } from "../ContactLink";
import { Container } from "../Container";
import { Phone } from "../Phone";
import { RegionMap } from "../RegionMap";

/** Hláška při chybě odeslání formuláře: nabídne jen ty kontakty, které jsou vyplněné. */
function SendError() {
  const email = isShown("EMAIL");
  const phone = isShown("TELEFON");
  return (
    <p role="alert" className="mb-4 bg-orange-tint px-4 py-3">
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
 * Zadní strana prospektu: modrá plocha na celou šířku, bílý text vysekaný z barvy.
 * Velký telefon a e-mail, tlačítka, mapka okolí a formulář (když je, mapka se přesune pod něj).
 * V produkci se skryje, co nemá vyplněný údaj: formulář bez Formspree by zprávu neodeslal
 * a tlačítko konzultace bez Cal.com by vedlo samo na sebe (#kontakt). Místo něj je hlavní akcí e-mail.
 */
export function Contact() {
  const showForm = isShown("FORMSPREE_ID");
  const showPhone = isShown("TELEFON");
  const showEmail = isShown("EMAIL");
  const hasCal = isFilled("CAL_LINK");
  const emailHref = `${mailHref}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(contact.emailBody)}`;

  return (
    <section id="kontakt" aria-labelledby="kontakt-nadpis" className="bg-ink text-white">
      <Container className="py-14 md:py-24">
        <div className="grid gap-x-6 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 id="kontakt-nadpis" className="h2 max-w-[11ch]">
              {cs(contact.title)}
            </h2>
            {showPhone || showEmail ? (
              <dl className="mt-8 grid gap-6 md:mt-12">
                {showPhone ? (
                  <div>
                    <dt className="small text-white/80">{contact.phoneLabel}</dt>
                    <dd className="mt-1 text-[clamp(1.875rem,4vw,3rem)] leading-tight font-bold [font-stretch:87%]">
                      <Phone />
                    </dd>
                  </div>
                ) : null}
                {showEmail ? (
                  <div>
                    <dt className="small text-white/80">{contact.emailLabel}</dt>
                    <dd className="mt-1 text-[clamp(1.5rem,3.2vw,2.5rem)] leading-tight font-bold break-all [font-stretch:87%]">
                      <ContactLink type="email" value={config.EMAIL} />
                    </dd>
                  </div>
                ) : null}
              </dl>
            ) : null}
            <p className="measure mt-6 text-lg text-white/85">
              {showPhone ? `${t(contact.phoneNote)} ` : null}
              {t(contact.note)}
            </p>
            {hasCal || isFilled("EMAIL") ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {isFilled("EMAIL") ? (
                  <a href={emailHref} className="btn btn-orange min-h-14 px-7 text-lg">
                    {contact.emailCta}
                  </a>
                ) : null}
                {hasCal ? (
                  <ButtonLink href={consultationHref} variant="whiteLine" className="min-h-14 px-7 text-lg">
                    {contact.cta}
                  </ButtonLink>
                ) : null}
              </div>
            ) : null}
          </div>

          <div className="lg:col-span-6">
            {showForm ? (
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
            ) : (
              <RegionMap className="lg:pt-3" />
            )}
          </div>
        </div>
        {showForm ? <RegionMap className="mt-16 md:mt-24 lg:w-1/2" /> : null}
      </Container>
    </section>
  );
}
