import { cn } from "@/lib/cn";

/** Obsah široký max. 1100 px, okraje 16 px (mobil) a 32 px. */
export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[calc(1100px+2rem)] px-4 sm:max-w-[calc(1100px+4rem)] sm:px-8", className)}>{children}</div>;
}
