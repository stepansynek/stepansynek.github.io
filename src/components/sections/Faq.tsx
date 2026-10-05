import { faq } from "@/content/faq";
import { faq as texts } from "@/content/texts";
import { t } from "@/lib/typography";
import { Section } from "../Section";

/** Akordeon z nativních <details>; plynulé rozbalení řeší CSS, funguje i bez JavaScriptu. */
export function Faq() {
  return (
    <Section id="faq" eyebrow="FAQ" title={texts.title} intro={texts.intro}>
      <div className="grid gap-2 md:gap-3">
        {faq.map((item, index) => (
          <details key={item.question} data-reveal style={{ "--d": index % 4 } as React.CSSProperties} className="faq-item card group">
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-semibold md:gap-6 md:px-8 md:py-5 md:text-lg">
              {t(item.question)}
              <span aria-hidden="true" className="faq-icon grid size-8 shrink-0 md:size-9 place-items-center rounded-full bg-bg text-xl leading-none">
                +
              </span>
            </summary>
            <p className="prose-width px-5 pb-5 text-muted md:px-8 md:pb-6">{t(item.answer)}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
