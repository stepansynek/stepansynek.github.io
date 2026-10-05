import { facts } from "@/content/texts";
import { cs, t } from "@/lib/typography";
import { Section } from "../Section";

/** Fakta z briefu jako mřížka s počítadly. Bez JavaScriptu se ukáže rovnou výsledné číslo. */
export function Facts() {
  return (
    <Section id="fakta" eyebrow="Fakta" title={facts.title}>
      <ul className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
        {facts.items.map((item, index) => (
          <li
            key={item.text}
            data-reveal
            style={{ "--d": index } as React.CSSProperties}
            className={`card card-lift flex flex-col justify-between gap-4 p-4 md:gap-10 md:p-7 ${item.wide ? "col-span-2" : ""}`}
          >
            <p className="flex items-baseline gap-2">
              <span
                data-count={item.value}
                className={`font-[760] leading-none tracking-[-0.05em] tabular-nums [font-stretch:120%] ${index === 0 ? "grad-text text-[clamp(3rem,9vw,6.5rem)]" : "text-[clamp(2.25rem,6vw,4.25rem)]"}`}
              >
                {cs(item.display)}
              </span>
              <span className="text-[0.9375rem] font-semibold text-muted md:text-lg">{item.unit}</span>
            </p>
            <p className="max-w-[34ch] text-[0.9375rem] leading-snug md:text-base md:leading-normal">{t(item.text)}</p>
          </li>
        ))}
        <li data-reveal className="card relative col-span-2 overflow-hidden bg-text p-5 text-white md:p-7 lg:col-span-4">
          <div className="relative grid gap-4 md:grid-cols-[1fr_1.4fr] md:items-end">
            <p className="text-[clamp(2rem,4vw,3rem)] leading-none font-[740] tracking-[-0.04em] [font-stretch:115%]">{cs(facts.ownership.title)}</p>
            <p className="max-w-[56ch] text-white/80 md:text-lg">{t(facts.ownership.text)}</p>
          </div>
        </li>
      </ul>
    </Section>
  );
}
