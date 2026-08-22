import { Reveal } from "@/components/reveal";
import { skills } from "@/lib/data";

export function TechStack() {
  return (
    <section id="stack" className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-content px-6 py-24 sm:py-28">
        <Reveal>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">Tech Stack</h2>
        </Reveal>

        <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 60}>
              <h3 className="font-mono text-xs tracking-widest text-accent uppercase">{group.category}</h3>
              <ul className="mt-4 space-y-2.5 border-l border-border pl-4">
                {group.items.map((item) => (
                  <li key={item} className="text-[15px] text-foreground/90">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
