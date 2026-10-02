import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { notFound } from "@/content/texts";
import { t } from "@/lib/typography";

export const metadata: Metadata = {
  title: `${notFound.title} | Štěpán Synek`,
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main id="obsah" className="py-20 md:py-32">
      <Container>
        <p className="label">404</p>
        <h1 className="h1 mt-4">{notFound.title}</h1>
        <p className="mt-5">{t(notFound.text)}</p>
        <ButtonLink href="/" className="mt-10">
          {notFound.back}
        </ButtonLink>
      </Container>
    </main>
  );
}
