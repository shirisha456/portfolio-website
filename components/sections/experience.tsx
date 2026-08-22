import { Reveal } from "@/components/reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-content px-6 py-24 sm:py-28">
        <Reveal>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">Experience</h2>
        </Reveal>

        <div className="mt-10 space-y-14">
          {experience.map((role, i) => (
            <Reveal key={role.title} delay={i * 80}>
              <article className="grid gap-6 border-t border-border pt-8 lg:grid-cols-[220px_1fr]">
                <div>
                  <h3 className="font-serif text-xl text-foreground">{role.company}</h3>
                  <p className="mt-1 text-sm text-foreground/80">{role.title}</p>
                  <p className="mt-3 font-mono text-xs text-muted">{role.period}</p>
                  <p className="font-mono text-xs text-muted">{role.location}</p>
                </div>

                <div>
                  <ul className="space-y-3">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                        <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {role.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
