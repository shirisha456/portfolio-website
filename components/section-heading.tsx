import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="font-mono text-[13px] tracking-widest text-accent uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-balance font-serif text-3xl text-foreground sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>}
    </Reveal>
  );
}
