import { cn } from "@/lib/cn";
import { SectionDivider } from "./SectionDivider";

/** Oddělovač s linkou a nadpis sekce. */
export function SectionHeading({
  id,
  title,
  intro,
  className,
}: {
  id?: string;
  title: string;
  intro?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <SectionDivider className="mb-8 md:mb-10" />
      <h2 id={id} className="max-w-[22ch] text-3xl font-semibold leading-tight tracking-tight text-balance md:text-[2.5rem]">
        {title}
      </h2>
      {intro ? <div className="mt-5 max-w-[60ch] text-lg leading-relaxed text-muted">{intro}</div> : null}
    </div>
  );
}
