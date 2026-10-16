import { config, site } from "@/content/config";
import { contact, form } from "@/content/texts";
import { consultationHref, isFilled, isShown, mailHref } from "@/lib/config";
import { cn } from "@/lib/cn";
import { cs, t } from "@/lib/typography";
import { Arrow, ButtonLink } from "../Button";
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

/** Co se stane po prvním kontaktu. Stojí vedle kontaktů, když na webu není formulář. */
function NextSteps() {
  return (
    <div data-reveal style={{ "--d": 1 } as React.CSSProperties} className="self-end rounded-[1.75rem] border border-white/15 bg-white/[0.06] p-6 md:p-8">
      <h3 className="text-xl font-[700] tracking-tight [font-stretch:110%] md:text-2xl">{cs(contact.next.title)}</h3>
      <ol className="mt-6 space-y-5">
        {contact.next.steps.map((step, index) => (
          <li key={step} className="flex gap-4">
            <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-full bg-accent text-sm font-bold text-text tabular-nums">
              {index + 1}
            </span>
            <p className="pt-0.5 text-white/85 md:text-lg">{t(step)}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 border-t border-white/15 pt-5 text-[0.9375rem] text-white/75">{t(contact.next.note)}</p>
    </div>
  );
}

/**
 * Tmavý kontaktní panel: velký telefon a e-mail, tlačítka a formulář (bez formuláře postup po kontaktu).
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
    <section id="kontakt" aria-labelledby="kontakt-nadpis" className="px-3 py-8 sm:px-5 md:py-12">
      <div data-spotlight className="relative mx-auto max-w-[1340px] overflow-hidden rounded-[2rem] bg-text py-10 text-white md:rounded-[2.5rem] md:py-24">
        <Container className={cn("relative grid gap-10 lg:gap-16", showForm ? "lg:grid-cols-[1fr_1.05fr]" : "lg:grid-cols-[1.15fr_1fr]")}>
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
            {hasCal || isFilled("EMAIL") ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {hasCal ? (
                  <ButtonLink href={consultationHref} variant="primary" arrow className="min-h-14 px-7">
                    {contact.cta}
                  </ButtonLink>
                ) : null}
                {isFilled("EMAIL") ? (
                  <a href={emailHref} className={hasCal ? "btn min-h-14 px-7 text-white shadow-[inset_0_0_0_1px_rgb(255_255_255/0.35)] hover:bg-white/10" : "btn btn-primary min-h-14 px-7"}>
                    {contact.emailCta}
                    <Arrow />
                  </a>
                ) : null}
              </div>
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
          ) : (
            <NextSteps />
          )}
        </Container>
      </div>
    </section>
  );
}
