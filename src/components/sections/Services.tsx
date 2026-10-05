import { config } from "@/content/config";
import { services } from "@/content/services";
import { services as texts } from "@/content/texts";
import { t } from "@/lib/typography";
import { Section } from "../Section";

/** Abstraktní grafiky ke kartám: okno prohlížeče, cyklus péče, objektiv. */
const graphics = [
  <svg key="web" viewBox="0 0 120 80" className="h-full w-full" fill="none">
    <rect x="1" y="1" width="118" height="78" rx="10" className="fill-white stroke-line-strong" />
    <circle cx="11" cy="10" r="2.5" className="fill-accent" />
    <circle cx="19" cy="10" r="2.5" className="fill-line-strong" />
    <path d="M1 19h118" className="stroke-line" />
    <rect x="10" y="28" width="56" height="8" rx="4" className="fill-text" />
    <rect x="10" y="41" width="40" height="5" rx="2.5" className="fill-line-strong" />
    <rect x="10" y="54" width="30" height="12" rx="6" className="fill-accent" />
    <rect x="76" y="28" width="34" height="40" rx="6" fill="url(#g-web)" />
    <defs>
      <linearGradient id="g-web" x1="76" y1="28" x2="110" y2="68">
        <stop stopColor="#2b59ff" />
        <stop offset="1" stopColor="#b03ad8" />
      </linearGradient>
    </defs>
  </svg>,
  <svg key="care" viewBox="0 0 120 80" className="h-full w-full" fill="none">
    <circle cx="60" cy="40" r="30" className="stroke-line-strong" strokeDasharray="4 6" />
    <circle cx="60" cy="40" r="18" fill="url(#g-care)" />
    <circle cx="60" cy="10" r="5" className="fill-accent stroke-text" />
    <circle cx="90" cy="40" r="5" className="fill-white stroke-text" />
    <circle cx="60" cy="70" r="5" className="fill-white stroke-text" />
    <circle cx="30" cy="40" r="5" className="fill-white stroke-text" />
    <defs>
      <linearGradient id="g-care" x1="42" y1="22" x2="78" y2="58">
        <stop stopColor="#ffc700" />
        <stop offset="1" stopColor="#ff8a00" />
      </linearGradient>
    </defs>
  </svg>,
  <svg key="photo" viewBox="0 0 120 80" className="h-full w-full" fill="none">
    <rect x="20" y="18" width="80" height="54" rx="12" className="fill-text" />
    <rect x="44" y="10" width="32" height="12" rx="4" className="fill-text" />
    <circle cx="60" cy="45" r="18" className="fill-white" />
    <circle cx="60" cy="45" r="12" fill="url(#g-photo)" />
    <circle cx="88" cy="28" r="3" className="fill-accent" />
    <defs>
      <linearGradient id="g-photo" x1="48" y1="33" x2="72" y2="57">
        <stop stopColor="#2b59ff" />
        <stop offset="1" stopColor="#7b5cff" />
      </linearGradient>
    </defs>
  </svg>,
];

export function Services() {
  return (
    <Section id="sluzby" eyebrow="Služby" title={texts.title} intro={texts.intro}>
      <ul className="grid gap-4 lg:grid-cols-3">
        {services.map((service, index) => (
          <li key={service.title} data-reveal style={{ "--d": index } as React.CSSProperties} className="card card-lift flex flex-col p-6 md:p-8">
            <div className="mb-8 aspect-[3/2] rounded-2xl bg-bg p-6">{graphics[index]}</div>
            <h3 className="h3">{t(service.title)}</h3>
            <p className="mt-3 flex-1 text-muted">{t(service.text)}</p>
            {service.includes ? <p className="mt-3 text-[0.9375rem]">{t(service.includes)}</p> : null}
            <p className="price mt-6 inline-flex self-start rounded-full bg-bg px-4 py-2">{t(service.price)}</p>
          </li>
        ))}
      </ul>
      <div data-reveal className="mt-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <p className="prose-width">{t(texts.newsletter)}</p>
        {config.ZAKLADAJICI_NABIDKA ? <p className="prose-width">{t(texts.foundingOffer)}</p> : null}
        <p className="text-[0.9375rem] text-muted">{t(texts.vat)}</p>
      </div>
    </Section>
  );
}
