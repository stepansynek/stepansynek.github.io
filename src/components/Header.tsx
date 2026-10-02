import Link from "next/link";
import { nav, site } from "@/config/site";
import { ButtonLink } from "./Button";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="border-b border-hairline">
      <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-4 md:flex-nowrap md:py-5">
        <Link href="/" className="py-2 text-lg font-semibold tracking-tight">
          {site.name}
        </Link>
        <nav aria-label="Hlavní menu" className="order-last -mx-2 w-[calc(100%+1rem)] md:order-none md:mx-0 md:ml-auto md:w-auto">
          <ul className="flex flex-wrap items-center text-[0.9375rem]">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="block px-2 py-2 text-muted transition-colors hover:text-graphite md:px-3">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink href="/#kontakt" className="min-h-10 px-4 py-2 text-sm">
          Domluvit konzultaci
        </ButtonLink>
      </Container>
    </header>
  );
}
