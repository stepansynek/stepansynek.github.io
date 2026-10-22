import { config } from "@/content/config";
import { services } from "@/content/services";
import { services as texts } from "@/content/texts";
import { cs, t } from "@/lib/typography";
import { Section } from "../Section";

type Row = { title: string; badge?: string; text: string; includes?: string; price: string; major?: boolean };

/** Řádek ceníku: název, popis, cena. Hlavní položka má cenu velkým zúženým řezem. */
function PriceRow({ row }: { row: Row }) {
  const includes = row.includes ? t(row.includes) : "";
  return (
    <li className="grid gap-x-6 gap-y-3 border-t-[length:var(--rule)] border-ink py-6 md:py-8 lg:grid-cols-12">
      <h3 className={row.major ? "h2 lg:col-span-4" : "h3 lg:col-span-4"}>{t(row.title)}</h3>
      <div className="lg:col-span-5">
        <p className="measure">{t(row.text)}</p>
        {includes ? <p className="small measure mt-2 text-ink-soft">{includes}</p> : null}
      </div>
      <div className="lg:col-span-3 lg:text-right">
        <p
          className={
            row.major
              ? "text-[clamp(2.25rem,4.4vw,3.75rem)] leading-[0.95] font-bold [font-stretch:75%]"
              : "text-xl leading-tight font-bold [font-stretch:87%]"
          }
        >
          {t(row.price)}
        </p>
        {row.badge ? <p className="small mt-1 text-ink-soft">{cs(row.badge)}</p> : null}
      </div>
    </li>
  );
}

/** Nabídka jako ceník prospektu: základní provedení, volitelná péče, na přání. Pod tím oranžová deska o vlastnictví. */
export function Services() {
  const [main, ...rest] = services;
  const vat = t(texts.vat);
  return (
    <Section id="sluzby" title={texts.title} intro={texts.intro}>
      <ul>
        <PriceRow row={{ ...main, major: true }} />
        {rest.map((service) => (
          <PriceRow key={service.title} row={service} />
        ))}
      </ul>

      <h3 className="h3 mt-12 md:mt-16">{cs(texts.extrasTitle)}</h3>
      <ul className="mt-4">
        {texts.extras.map((extra) => (
          <PriceRow key={extra.title} row={extra} />
        ))}
      </ul>

      <div className="mt-10 grid gap-3 bg-orange p-6 text-overprint md:mt-14 md:p-10 lg:grid-cols-12 lg:items-end lg:gap-6">
        <p className="h2 lg:col-span-5">{cs(texts.ownership.title)}</p>
        <p className="measure text-lg lg:col-span-7">{t(texts.ownership.text)}</p>
      </div>

      {config.ZAKLADAJICI_NABIDKA ? <p className="measure mt-6">{t(texts.foundingOffer)}</p> : null}
      {vat ? <p className="small mt-4 text-ink-soft">{vat}</p> : null}
    </Section>
  );
}
