import { cs } from "@/lib/typography";
import { Container } from "./Container";

/**
 * Sekce úvodní stránky: 1px linka nahoře, monospace štítek s číslem a nadpis H2.
 * Číslo dostává z pole vykreslených sekcí (src/app/page.tsx).
 */
export function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  const headingId = `${id}-nadpis`;
  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-line py-16 md:py-24">
      <Container>
        <p className="label">
          <span aria-hidden="true">{number}</span>
        </p>
        <h2 id={headingId} className="h2 mt-4 mb-10 md:mb-14">
          {cs(title)}
        </h2>
        {children}
      </Container>
    </section>
  );
}
