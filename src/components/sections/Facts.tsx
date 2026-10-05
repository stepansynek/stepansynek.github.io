import { facts } from "@/content/texts";
import { cs, t } from "@/lib/typography";
import { Section } from "../Section";

/** Fakta z briefu jako mřížka s počítadly. Bez JavaScriptu se ukáže rovnou výsledné číslo. */
export function Facts() {
  return (
    <Section id="fakta" eyebrow="Fakta" title={facts.title}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {facts.items.map((item, index) => (
          <li
            key={item.text}
            data-reveal
            style={{ "--d": index } as React.CSSProperties}
            className={`card card-lift flex flex-col justify-between gap-10 p-6 md:p-7 ${item.wide ? "sm:col-span-2" : ""}`}
          >
            <p className="flex items-baseline gap-2">
              <span
                data-count={item.value}
                className={`font-[760] leading-none tracking-[-0.05em] tabular-nums [font-stretch:120%] ${index === 0 ? "grad-text text-[clamp(3.5rem,9vw,6.5rem)]" : "text-[clamp(3rem,6vw,4.25rem)]"}`}
              >
                {cs(item.display)}
              </span>
              <span className="text-lg font-semibold text-muted">{item.unit}</span>
            </p>
            <p className="max-w-[34ch]">{t(item.text)}</p>
          </li>
        ))}
        <li data-reveal className="card relative overflow-hidden bg-text p-6 text-white sm:col-span-2 md:p-7 lg:col-span-4">
          <div aria-hidden="true" className="aurora aurora-2 -top-20 right-0 size-72 bg-accent opacity-40" />
          <div className="relative grid gap-4 md:grid-cols-[1fr_1.4fr] md:items-end">
            <p className="text-[clamp(2rem,4vw,3rem)] leading-none font-[740] tracking-[-0.04em] [font-stretch:115%]">{cs(facts.ownership.title)}</p>
            <p className="max-w-[56ch] text-lg text-white/80">{t(facts.ownership.text)}</p>
          </div>
        </li>
      </ul>
    </Section>
  );
}
