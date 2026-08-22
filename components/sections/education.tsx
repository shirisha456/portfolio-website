import { Reveal } from "@/components/reveal";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="border-b border-border">
      <div className="mx-auto max-w-content px-6 py-24 sm:py-28">
        <Reveal>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">Education</h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {education.map((ed, i) => (
            <Reveal key={ed.school} delay={i * 80}>
              <div className="rounded-xl border border-border p-6">
                <h3 className="font-serif text-lg text-foreground">{ed.school}</h3>
                <p className="mt-1 text-sm text-foreground/80">{ed.degree}</p>
                <div className="mt-4 flex flex-wrap justify-between gap-2 font-mono text-xs text-muted">
                  <span>{ed.period}</span>
                  <span>{ed.location}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
