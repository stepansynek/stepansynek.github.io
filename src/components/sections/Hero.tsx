import { config } from "@/content/config";
import { hero } from "@/content/texts";
import { consultationHref, isFilled, isShown, mailHref } from "@/lib/config";
import { cs, t } from "@/lib/typography";
import { ButtonLink } from "../Button";
import { Container } from "../Container";
import { Phone } from "../Phone";
import { Photo } from "../Photo";

/** Náhrada portrétu, dokud chybí public/photos/me.jpg: iniciály v přetisku. */
function Monogram() {
  return (
    <div role="img" aria-label={hero.photoAlt} className="flex h-full w-full items-end p-6">
      <span aria-hidden="true" className="text-[clamp(6rem,14vw,12rem)] leading-none font-bold text-overprint [font-stretch:75%]">
        ŠS
      </span>
    </div>
  );
}

/**
 * Obálka prospektu. Oranžová deska jde na spadávku vpravo, portrét je na ní vytištěný modrou (multiply).
 * Titulek leží přes okraj desky; kde ji překryje, ztmavne do přetisku. Tabulka Technické údaje
 * je bílý výsek přes spodní hranu desky. Pod lg je deska nahoře a titulek ji první řádkou přetiskne.
 */
export function Hero() {
  const showEmail = isFilled("EMAIL");
  return (
    <section aria-labelledby="hero-nadpis" className="relative overflow-x-clip lg:flex lg:min-h-[clamp(40rem,calc(100svh-var(--header-height)),56rem)]">
      <figure className="print-plate relative bg-orange px-4 pt-4 pb-[12vw] sm:px-8 sm:pt-6 lg:absolute lg:top-0 lg:right-0 lg:bottom-[7.5rem] lg:w-[42vw] lg:p-[2.5vw] lg:pb-0">
        <Photo
          name="me-duo"
          alt={hero.photoAlt}
          sizes="(min-width: 1024px) 38vw, 100vw"
          eager
          className="overprint aspect-[5/4] w-full object-[50%_22%] md:aspect-[16/9] lg:aspect-auto lg:h-full lg:object-[50%_28%]"
          fallback={<Monogram />}
        />
        <figcaption className="small absolute top-[calc(100%+0.6rem)] right-[2.5vw] hidden xl:block">
          {cs(hero.photoCaption)}
        </figcaption>
      </figure>

      <Container className="relative pb-14 lg:grid lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-6 lg:pt-[clamp(3rem,7vh,5rem)] lg:pb-12">
        <h1
          id="hero-nadpis"
          className="print-register overprint display relative z-10 -mt-[10.4vw] text-[12.4vw] lg:col-span-12 lg:mt-0 lg:text-[clamp(3.25rem,10vw,9.5rem)]"
        >
          {hero.titleLines.map((line) => (
            <span key={line} className="block whitespace-nowrap">
              {cs(line)}
            </span>
          ))}
        </h1>

        <div className="mt-7 lg:col-span-6 lg:mt-0 lg:self-end lg:pt-10">
          <p className="measure text-lg md:text-xl">{t(hero.lead)}</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ButtonLink href={consultationHref} variant="ink" className="min-h-14 px-7 text-lg">
              {hero.cta}
            </ButtonLink>
            {showEmail ? (
              <a href={mailHref} className="link text-lg font-medium">
                {config.EMAIL}
              </a>
            ) : null}
          </div>
          <p className="small mt-4 max-w-[34rem] text-ink-soft">
            {t(hero.ctaNote)}
            {isShown("TELEFON") ? (
              <>
                {" "}
                <span className="whitespace-nowrap">
                  {hero.callPrefix} <Phone className="font-bold text-ink" />
                </span>
              </>
            ) : null}
          </p>
        </div>

        <div className="relative z-10 mt-10 bg-paper lg:col-span-6 lg:col-start-7 lg:mt-0 lg:self-end lg:px-6 lg:pt-5 lg:pb-3 xl:col-span-4 xl:col-start-7">
          <p className="h3">{cs(hero.specTitle)}</p>
          <dl className="spec mt-3">
            {hero.spec.map((row) => (
              <div key={row.label}>
                <dt>{cs(row.label)}</dt>
                <dd>{cs(row.value)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
