import { faq } from "@/content/faq";
import { faq as texts } from "@/content/texts";
import { t } from "@/lib/typography";
import { Section } from "../Section";

/** Akordeon z nativních <details>, řádky oddělené linkou. Plynulé rozbalení řeší CSS, funguje i bez JavaScriptu. */
export function Faq() {
  return (
    <Section id="faq" title={texts.title} intro={texts.intro}>
      <div className="lg:ml-[calc((100%+1.5rem)*5/12)]">
        {faq.map((item) => (
          <details key={item.question} className="faq-item group border-t-[length:var(--rule)] border-ink last:border-b-[length:var(--rule)]">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-4 text-lg font-bold md:py-5 md:text-xl">
              {t(item.question)}
              <svg aria-hidden="true" viewBox="0 0 20 20" className="faq-icon size-5 shrink-0">
                <path d="M10 2v16M2 10h16" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </summary>
            <p className="measure pb-5 md:pb-6">{t(item.answer)}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
