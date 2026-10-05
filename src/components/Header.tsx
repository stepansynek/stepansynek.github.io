import { config, site } from "@/content/config";
import { header, nav, navHints } from "@/content/texts";
import { consultationHref, isFilled, telHref } from "@/lib/config";
import { visibleProjects } from "@/lib/projects";
import { cs } from "@/lib/typography";
import { HeaderShell } from "./HeaderShell";

/** Položky menu; Práce zmizí, když není co ukázat. */
export const navItems = nav
  .filter((item) => item.id !== "prace" || visibleProjects.length > 0)
  .map((item) => ({ href: `/#${item.id}`, label: cs(item.label), hint: cs(navHints[item.id] ?? "") }));

export function Header() {
  return (
    <HeaderShell
      name={site.name}
      items={navItems}
      cta={{ href: consultationHref, label: header.cta }}
      phone={{ href: isFilled("TELEFON") ? telHref : "/#kontakt", label: cs(config.TELEFON) }}
      email={{ href: isFilled("EMAIL") ? `mailto:${config.EMAIL}` : "/#kontakt", label: config.EMAIL }}
      texts={{ menu: header.menu, close: header.close, contact: header.menuContact }}
    />
  );
}
