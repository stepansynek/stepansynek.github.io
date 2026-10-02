import { cn } from "@/lib/cn";
import { Container } from "./Container";

const tones = {
  white: "bg-white text-graphite",
  chalk: "bg-chalk text-graphite",
  graphite: "on-dark bg-graphite text-white",
} as const;

export function Section({
  id,
  labelledBy,
  tone = "white",
  className,
  children,
}: {
  id?: string;
  labelledBy: string;
  tone?: keyof typeof tones;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn(tones[tone], "py-20 md:py-28", className)}>
      <Container>{children}</Container>
    </section>
  );
}
