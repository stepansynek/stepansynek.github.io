import { cn } from "@/lib/cn";
import { cs, t } from "@/lib/typography";
import { Container } from "./Container";

/** Sekce úvodní stránky: štítek, velký nadpis, volitelný úvod a obsah. */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  className,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const headingId = `${id}-nadpis`;
  return (
    <section id={id} aria-labelledby={headingId} className={cn("py-20 md:py-32", className)}>
      <Container>
        <div data-reveal className="mb-12 grid gap-6 md:mb-16 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">{cs(eyebrow)}</p>
            <h2 id={headingId} className="h2 mt-5 max-w-[16ch] text-balance">
              {cs(title)}
            </h2>
          </div>
          {intro ? <p className="prose-width text-lg text-muted lg:pb-2">{t(intro)}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
