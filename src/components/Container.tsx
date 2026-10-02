import { cn } from "@/lib/cn";

/** Obsah je široký max. 1100 px, okraje se přičítají zvlášť. */
export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[calc(1100px+2.5rem)] px-5 sm:max-w-[calc(1100px+4rem)] sm:px-8", className)}>{children}</div>;
}
