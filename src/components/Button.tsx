import { cn } from "@/lib/cn";

/** Pilulková tlačítka: žluté primární (hero, kontakt), tmavé a průhledné sekundární. */
export const buttonClass = {
  primary: "btn btn-primary",
  dark: "btn btn-dark",
  secondary: "btn btn-ghost",
};

export function Arrow() {
  return (
    <svg aria-hidden="true" focusable="false" className="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ButtonLink({
  href,
  variant = "secondary",
  arrow = false,
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof buttonClass;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={cn(buttonClass[variant], className)}>
      {children}
      {arrow ? <Arrow /> : null}
    </a>
  );
}
