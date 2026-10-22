import { cn } from "@/lib/cn";

/** Sazební obrazec: obsah široký max. 1312 px, okraje 16 px (mobil) a 32 px. */
export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[calc(1312px+2rem)] px-4 sm:max-w-[calc(1312px+4rem)] sm:px-8", className)}>{children}</div>;
}
