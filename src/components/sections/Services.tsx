import { config } from "@/content/config";
import { services } from "@/content/services";
import { services as texts } from "@/content/texts";
import { t } from "@/lib/typography";
import { Section } from "../Section";

/** Abstraktní grafiky ke kartám: okno prohlížeče, cyklus péče. */
const graphics = [
  <svg key="web" viewBox="0 0 120 80" className="h-full w-full" fill="none">
    <rect x="1" y="1" width="118" height="78" rx="10" className="fill-white stroke-line-strong" />
    <circle cx="11" cy="10" r="2.5" className="fill-accent" />
    <circle cx="19" cy="10" r="2.5" className="fill-line-strong" />
    <path d="M1 19h118" className="stroke-line" />
    <rect x="10" y="28" width="56" height="8" rx="4" className="fill-text" />
    <rect x="10" y="41" width="40" height="5" rx="2.5" className="fill-line-strong" />
    <rect x="10" y="54" width="30" height="12" rx="6" className="fill-accent" />
    <rect x="76" y="28" width="34" height="40" rx="6" className="fill-text" />
    <circle cx="93" cy="48" r="7" className="fill-accent" />
  </svg>,
  <svg key="care" viewBox="0 0 120 80" className="h-full w-full" fill="none">
    <circle cx="60" cy="40" r="30" className="stroke-line-strong" strokeDasharray="4 6" />
    <circle cx="60" cy="40" r="18" className="fill-accent" />
    <circle cx="60" cy="10" r="5" className="fill-accent stroke-text" />
    <circle cx="90" cy="40" r="5" className="fill-white stroke-text" />
    <circle cx="60" cy="70" r="5" className="fill-white stroke-text" />
    <circle cx="30" cy="40" r="5" className="fill-white stroke-text" />
  </svg>,
];

export function Services() {
  return (
    <Section id="sluzby" eyebrow="Služby" title={texts.title} intro={texts.intro}>
      <ul className="grid gap-4 md:grid-cols-2">
        {services.map((service, index) => (
          <li key={service.title} data-reveal style={{ "--d": index } as React.CSSProperties} className="card card-lift flex flex-col p-5 md:p-8">
            <div aria-hidden="true" className="mb-8 hidden aspect-[2/1] rounded-2xl bg-bg p-6 md:block">{graphics[index]}</div>
            <h3 className="h3">{t(service.title)}</h3>
            <p className="mt-3 flex-1 text-muted">{t(service.text)}</p>
            {service.includes && t(service.includes) ? <p className="mt-3 text-[0.9375rem]">{t(service.includes)}</p> : null}
            <p className="price mt-4 inline-flex md:mt-6 self-start rounded-[1.25rem] bg-bg px-4 py-2">{t(service.price)}</p>
          </li>
        ))}
      </ul>
      <div data-reveal className="mt-6 grid gap-3 md:mt-8">
        <p className="prose-width">{t(texts.photo)}</p>
        <p className="prose-width">{t(texts.newsletter)}</p>
        {config.ZAKLADAJICI_NABIDKA ? <p className="prose-width">{t(texts.foundingOffer)}</p> : null}
        {t(texts.vat) ? <p className="text-[0.9375rem] text-muted">{t(texts.vat)}</p> : null}
      </div>
    </Section>
  );
}
