import { faq } from "@/content/faq";
import { faq as texts } from "@/content/texts";
import { t } from "@/lib/typography";
import { Section } from "../Section";

/** Akordeon z nativních <details>; plynulé rozbalení řeší CSS, funguje i bez JavaScriptu. */
export function Faq() {
  return (
    <Section id="faq" eyebrow="FAQ" title={texts.title} intro={texts.intro}>
      <div className="grid gap-3">
        {faq.map((item, index) => (
          <details key={item.question} data-reveal style={{ "--d": index % 4 } as React.CSSProperties} className="faq-item card group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 text-lg font-semibold md:px-8">
              {t(item.question)}
              <span aria-hidden="true" className="faq-icon grid size-9 shrink-0 place-items-center rounded-full bg-bg text-xl leading-none">
                +
              </span>
            </summary>
            <p className="prose-width px-6 pb-6 text-muted md:px-8">{t(item.answer)}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
