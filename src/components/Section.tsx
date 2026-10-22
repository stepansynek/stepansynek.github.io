import { cn } from "@/lib/cn";
import { cs, t } from "@/lib/typography";
import { Container } from "./Container";

/**
 * Sekce úvodní stránky: nadpis přes linku na celou šířku sazby, vedle něj úvod, pod nimi obsah.
 * Linka nahoře odděluje sekce jako hrana stránky v prospektu.
 */
export function Section({
  id,
  title,
  intro,
  className,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const headingId = `${id}-nadpis`;
  return (
    <section id={id} aria-labelledby={headingId} className={cn("py-12 md:py-20", className)}>
      <Container>
        <div className="grid gap-5 border-t-[length:var(--rule)] border-ink pt-5 md:gap-8 md:pt-7 lg:grid-cols-12">
          <h2 id={headingId} className="h2 lg:col-span-7">
            {cs(title)}
          </h2>
          {intro ? <p className="measure text-lg lg:col-span-5 lg:pt-1.5">{t(intro)}</p> : null}
        </div>
        <div className="mt-10 md:mt-16">{children}</div>
      </Container>
    </section>
  );
}
