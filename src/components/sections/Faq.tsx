import { faq } from "@/content/faq";
import { faq as texts } from "@/content/texts";
import { t } from "@/lib/typography";
import { Section } from "../Section";

/** Akordeon z nativních <details>, funguje i bez JavaScriptu. */
export function Faq({ number }: { number: string }) {
  return (
    <Section id="faq" number={number} title={texts.title}>
      <div className="border-t border-line">
        {faq.map((item) => (
          <details key={item.question} className="group border-b border-line">
            <summary className="flex cursor-pointer items-start justify-between gap-6 py-4 text-lg font-medium">
              {t(item.question)}
              <span aria-hidden="true" className="font-mono text-muted group-open:hidden">
                +
              </span>
              <span aria-hidden="true" className="hidden font-mono text-muted group-open:inline">
                −
              </span>
            </summary>
            <p className="prose-width pb-5">{t(item.answer)}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
