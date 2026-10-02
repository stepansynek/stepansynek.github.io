import { config } from "@/content/config";
import { hero } from "@/content/texts";
import { consultationHref } from "@/lib/config";
import { cs, t } from "@/lib/typography";
import { ButtonLink } from "../Button";
import { ContactLink } from "../ContactLink";
import { Container } from "../Container";
import { Photo } from "../Photo";

export function Hero({ number }: { number: string }) {
  return (
    <section aria-labelledby="hero-nadpis" className="pt-8 pb-16 md:pt-16 md:pb-24">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:items-end lg:gap-16">
        <div>
          <p className="label">
            <span aria-hidden="true">{number} · </span>
            {hero.label}
          </p>
          <h1 id="hero-nadpis" className="h1 mt-4 max-w-[18ch] text-balance md:mt-6">
            {t(hero.title)}
          </h1>
          <p className="prose-width mt-5 md:mt-8 md:text-lg">{t(hero.lead)}</p>
          <p className="price mt-5 md:mt-8">{t(hero.price)}</p>
          <div className="mt-5 md:mt-8">
            <ButtonLink href={consultationHref} variant="primary">
              {hero.cta}
            </ButtonLink>
            <p className="mt-3 text-[0.9375rem] text-muted">{t(hero.ctaNote)}</p>
            <p className="mt-2 text-[0.9375rem]">
              {hero.callPrefix} <ContactLink type="phone" value={config.TELEFON} className="font-mono tabular-nums" />
            </p>
          </div>
        </div>

        <div className="w-full max-w-[26rem]">
          <div className="border border-line bg-surface p-2">
            <Photo
              name="me"
              alt={hero.photoAlt}
              sizes="(min-width: 1024px) 26rem, (min-width: 448px) 26rem, 100vw"
              eager
              className="aspect-[4/5] w-full"
            />
          </div>
          <p aria-hidden="true" className="label mt-2">
            {cs(hero.photoLabel)}
          </p>
        </div>
      </Container>
    </section>
  );
}
