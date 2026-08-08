import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { CaseStudyBlock } from "@/components/case-study";
import { Reveal } from "@/components/reveal";
import { caseStudies, otherWork } from "@/lib/data";

export function Projects() {
  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-content px-6 py-24 sm:py-28">
        <SectionHeading
          eyebrow="Selected work"
          title="Two systems, built and documented phase by phase"
          description="Both went from a data model on paper to a deployed, containerized application — architecture decisions, trade-offs, and verification steps recorded as they were made, not written up after the fact."
        />

        <div className="mt-14">
          {caseStudies.map((study, i) => (
            <CaseStudyBlock key={study.slug} study={study} index={i} />
          ))}
        </div>

        <div className="mt-8 border-t border-border pt-14">
          <Reveal>
            <h3 className="font-mono text-xs tracking-widest text-muted uppercase">More engineering work</h3>
          </Reveal>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {otherWork.map((project, i) => (
              <Reveal key={project.name} delay={i * 80}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col rounded-xl border border-border p-6 transition-colors hover:border-border-strong"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-serif text-lg text-foreground">{project.name}</h4>
                    <ArrowUpRight className="size-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                  <p className="mt-1 text-sm text-accent">{project.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-full border border-border px-2.5 py-1 font-mono text-[10.5px] text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
