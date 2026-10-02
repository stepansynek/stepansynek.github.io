import { cn } from "@/lib/cn";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 border border-text text-base font-medium text-text transition-colors duration-150 disabled:cursor-wait disabled:opacity-60";

/** Výška min. 48 px u obou velikostí; sm má jen menší vodorovný okraj (hlavička). */
const sizes = { md: "px-6", sm: "px-3 text-[0.9375rem] sm:px-4" };

/**
 * Primární (žluté) tlačítko jen v heru a v kontaktu.
 * Sekundární je průhledné s rámečkem, při najetí se vyplní bílou.
 */
export const buttonClass = {
  primary: cn(base, "bg-accent hover:bg-text hover:text-surface"),
  secondary: cn(base, "bg-transparent hover:bg-surface"),
};

export function ButtonLink({
  href,
  variant = "secondary",
  size = "md",
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof buttonClass;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={cn(buttonClass[variant], sizes[size], className)}>
      {children}
    </a>
  );
}
