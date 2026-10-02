import { config, site } from "@/content/config";
import { header, nav } from "@/content/texts";
import { consultationHref, isFilled, telHref } from "@/lib/config";
import { visibleProjects } from "@/lib/projects";
import { cs } from "@/lib/typography";
import { ButtonLink } from "./Button";
import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";

/** Položky menu; Práce zmizí, když není co ukázat. */
export const navItems = nav
  .filter((item) => item.id !== "prace" || visibleProjects.length > 0)
  .map((item) => ({ href: `/#${item.id}`, label: cs(item.label) }));

function PhoneIcon() {
  return (
    <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2" strokeLinejoin="round" />
    </svg>
  );
}

export function Header() {
  const hasPhone = isFilled("TELEFON");
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <Container className="flex h-(--header-height) items-center gap-4 lg:gap-8">
        <a href="/" className="mr-auto font-semibold tracking-tight whitespace-nowrap lg:mr-0">
          {site.name}
        </a>

        <nav aria-label="Hlavní menu" className="hidden lg:ml-auto lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="block px-2 py-2 text-[0.9375rem] text-muted transition-colors duration-150 hover:text-text">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href={hasPhone ? telHref : "/#kontakt"} className="hidden font-mono text-[0.9375rem] whitespace-nowrap tabular-nums lg:block">
          {cs(config.TELEFON)}
        </a>
        <div className="hidden lg:block">
          <ButtonLink href={consultationHref} size="sm">
            {header.cta}
          </ButtonLink>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={hasPhone ? telHref : "/#kontakt"}
            aria-label={hasPhone ? `Zavolat ${config.TELEFON}` : "Kontakt"}
            className="inline-flex size-10 items-center justify-center"
          >
            <PhoneIcon />
          </a>
          <ButtonLink href={consultationHref} size="sm">
            {header.ctaShort}
          </ButtonLink>
          <MobileMenu items={navItems} />
        </div>
      </Container>
    </header>
  );
}
