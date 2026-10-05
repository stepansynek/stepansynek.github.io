import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { notFound } from "@/content/texts";
import { cs, t } from "@/lib/typography";

export const metadata: Metadata = {
  title: `${notFound.title} | Štěpán Synek`,
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main id="obsah" className="relative overflow-hidden py-24 md:py-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora aurora-1 -top-32 left-1/4 size-[28rem] bg-accent" />
        <div className="aurora aurora-2 top-10 right-0 size-[24rem] bg-blue opacity-30" />
      </div>
      <Container>
        <p className="grad-text text-[clamp(6rem,20vw,12rem)] leading-none font-[800] tracking-[-0.06em] [font-stretch:125%]">404</p>
        <h1 className="h2 mt-4">{cs(notFound.title)}</h1>
        <p className="prose-width mt-5 text-lg text-muted">{t(notFound.text)}</p>
        <ButtonLink href="/" variant="dark" arrow className="mt-10">
          {notFound.back}
        </ButtonLink>
      </Container>
    </main>
  );
}
