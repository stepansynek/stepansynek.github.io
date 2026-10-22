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
    <main id="obsah" className="py-16 md:py-28">
      <Container className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
        {/* Číslo chyby vytištěné oranžovou deskou, přes ni modrý titulek v přetisku. */}
        <p aria-hidden="true" className="bg-orange px-4 pt-3 text-[clamp(7rem,24vw,18rem)] leading-[0.8] font-bold text-white [font-stretch:75%] lg:col-span-5">
          404
        </p>
        <div className="lg:col-span-6 lg:col-start-7 lg:self-end">
          <h1 className="h2">{cs(notFound.title)}</h1>
          <p className="measure mt-5 text-lg">{t(notFound.text)}</p>
          <ButtonLink href="/" variant="ink" className="mt-8">
            {notFound.back}
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
