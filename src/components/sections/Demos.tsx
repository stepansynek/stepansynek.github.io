import { demos } from "@/content/demos";
import { demos as texts } from "@/content/texts";
import { cn } from "@/lib/cn";
import { cs } from "@/lib/typography";
import { DemoFrame } from "../DemoFrame";
import { photoSources } from "../Photo";
import { Section } from "../Section";

/**
 * Ukázkové weby smyšlených firem jako barevná příloha prospektu: jediné místo na webu v plných barvách.
 * Rám se snímkem je vlevo a vpravo střídavě, vedle něj co web umí a odkazy. Text je ve zdroji první,
 * aby na mobilu stál název a označení „smyšlená“ před snímkem.
 */
export function Demos() {
  return (
    <Section id="ukazky" title={texts.title} intro={texts.intro}>
      <div className="grid gap-16 md:gap-24">
        {demos.map((demo, index) => {
          const flipped = index % 2 === 1;
          return (
            <article key={demo.slug} aria-labelledby={`ukazka-${demo.slug}`} className="grid gap-x-6 gap-y-7 lg:grid-cols-12">
              <div className={cn("lg:col-span-4 lg:row-start-1", flipped ? "lg:col-start-1" : "lg:col-start-9")}>
                <h3 id={`ukazka-${demo.slug}`} className="h2">
                  {cs(demo.name)}
                </h3>
                <p className="mt-4 text-lg font-medium">{cs(demo.kind)}</p>
                <p className="measure mt-3">{cs(demo.summary)}</p>
                <dl className="spec spec-stack mt-6">
                  {demo.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt>{cs(fact.label)}</dt>
                      <dd>{cs(fact.value)}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a href={demo.url} target="_blank" rel="noopener" className="btn btn-line">
                    {texts.open}
                    <span className="sr-only"> {texts.newWindow}</span>
                  </a>
                  <a href={demo.repo} target="_blank" rel="noopener" className="link font-medium">
                    {texts.repo}
                    <span className="sr-only"> {texts.newWindow}</span>
                  </a>
                </div>
              </div>
              <div className={cn("lg:col-span-8 lg:row-start-1", flipped ? "lg:col-start-5" : "lg:col-start-1")}>
                <DemoFrame
                  url={demo.url}
                  desktop={photoSources(demo.shots.desktop)}
                  mobile={photoSources(demo.shots.mobile)}
                  texts={{
                    live: texts.live,
                    liveNote: cs(texts.liveNote),
                    close: texts.close,
                    desktop: texts.desktop,
                    phone: texts.phone,
                    frameTitle: texts.frameTitle(demo.name),
                    shotAlt: texts.shotAlt(demo.name),
                  }}
                />
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
