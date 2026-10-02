import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Stránka nenalezena | Štěpán Synek",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main id="obsah" className="py-20 md:py-28">
      <Container>
        <SectionDivider className="mb-10" />
        <h1 className="text-3xl leading-tight font-semibold tracking-tight md:text-5xl">Tuhle stránku jsem nenašel.</h1>
        <p className="mt-5 text-lg text-muted">Odkaz je možná zastaralý nebo v něm je překlep.</p>
        <ButtonLink href="/" className="mt-10 px-6 py-3">
          Zpět na úvod
        </ButtonLink>
      </Container>
    </main>
  );
}
