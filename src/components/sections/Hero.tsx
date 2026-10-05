import { site } from "@/content/config";
import { hero } from "@/content/texts";
import { consultationHref, isShown } from "@/lib/config";
import { cs, t } from "@/lib/typography";
import { ButtonLink } from "../Button";
import { Container } from "../Container";
import { Phone } from "../Phone";
import { Photo } from "../Photo";

/** Náhrada portrétu, dokud chybí public/photos/me.jpg: tmavý panel s iniciálami. */
function Monogram() {
  return (
    <div role="img" aria-label={hero.photoAlt} className="relative flex aspect-[4/5] w-full items-end overflow-hidden rounded-[1.5rem] bg-text p-7 pb-12">
      <span aria-hidden="true" className="relative text-[clamp(5rem,9vw,7rem)] leading-none font-[800] tracking-[-0.06em] text-white [font-stretch:125%]">
        ŠS
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-nadpis" data-spotlight className="relative -mt-[4.25rem] overflow-hidden pt-[calc(4.25rem+2rem)] pb-10 md:pt-[calc(4.25rem+5rem)] md:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="dot-grid absolute inset-0" />
        <div className="dot-grid-glow absolute inset-0" />
      </div>

      <Container className="grid items-center gap-8 md:gap-14 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-12">
        <div>
          <p data-reveal className="eyebrow">
            {cs(hero.eyebrow)}
          </p>
          <h1 id="hero-nadpis" data-reveal style={{ "--d": 1 } as React.CSSProperties} className="display mt-6">
            <span className="sr-only">{hero.titleFull}</span>
            <span aria-hidden="true">
              {t(hero.titleStart)}{" "}
              <span className="rotator">
                {hero.titleWords.map((word) => (
                  <span key={word} className="grad-text">
                    {word}
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <p data-reveal style={{ "--d": 2 } as React.CSSProperties} className="prose-width mt-6 text-lg text-muted md:mt-8 md:text-xl">
            {t(hero.lead)}
          </p>
          <div data-reveal style={{ "--d": 3 } as React.CSSProperties} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4 md:mt-10">
            <ButtonLink href={consultationHref} variant="primary" arrow className="min-h-14 px-7 text-[1.0625rem]">
              {hero.cta}
            </ButtonLink>
            <p className="price text-lg">{t(hero.price)}</p>
          </div>
          <p data-reveal style={{ "--d": 4 } as React.CSSProperties} className="mt-4 text-[0.9375rem] text-muted">
            {t(hero.ctaNote)}
            {isShown("TELEFON") ? (
              <>
                {" "}
                {hero.callPrefix} <Phone className="font-semibold text-text" />
              </>
            ) : null}
          </p>
        </div>

        <div data-reveal style={{ "--d": 2 } as React.CSSProperties} className="relative mx-auto w-full max-w-[17rem] sm:max-w-[24rem] lg:max-w-[26rem]">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface p-2 shadow-[0_24px_60px_-32px_rgb(14_17_22/0.35)]">
            <Photo
              name="me"
              alt={hero.photoAlt}
              sizes="(min-width: 1024px) 26rem, (min-width: 640px) 24rem, 17rem"
              eager
              className="aspect-[4/5] w-full rounded-[1.5rem]"
              fallback={<Monogram />}
            />
          </div>
          <p className="mt-3 flex items-center justify-between gap-4 px-2 text-[0.9375rem]">
            <span className="font-semibold">{site.name}</span>
            <span className="text-muted">{cs(hero.photoCaption)}</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
