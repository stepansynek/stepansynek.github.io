import { config } from "@/content/config";
import { services } from "@/content/services";
import { services as texts } from "@/content/texts";
import { t } from "@/lib/typography";
import { Section } from "../Section";

export function Services({ number }: { number: string }) {
  return (
    <Section id="sluzby" number={number} title={texts.title}>
      <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
        {services.map((service) => (
          <li key={service.title} className="flex flex-col border border-line bg-surface p-6 md:p-8">
            <div className="flex-1">
              <h3 className="text-xl font-semibold tracking-tight">{t(service.title)}</h3>
              <p className="mt-3">{t(service.text)}</p>
              {service.includes ? <p className="mt-3 text-muted">{t(service.includes)}</p> : null}
            </div>
            <p className="price mt-6 border-t border-line pt-4">{t(service.price)}</p>
          </li>
        ))}
      </ul>
      <div className="prose-width mt-10 space-y-3">
        <p>{t(texts.newsletter)}</p>
        {config.ZAKLADAJICI_NABIDKA ? <p>{t(texts.foundingOffer)}</p> : null}
        <p className="text-muted">{t(texts.vat)}</p>
      </div>
    </Section>
  );
}
