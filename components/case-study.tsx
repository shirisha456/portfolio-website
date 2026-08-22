import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { Reveal } from "@/components/reveal";
import type { CaseStudy } from "@/lib/data";

export function CaseStudyBlock({ study }: { study: CaseStudy }) {
  return (
    <article className="border-t border-border py-16 first:border-t-0 first:pt-0 sm:py-20">
      <Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <h3 className="font-serif text-3xl text-foreground sm:text-4xl">{study.name}</h3>
            <p className="mt-2 max-w-xl text-balance text-base text-muted sm:text-lg">{study.tagline}</p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:items-end">
            <div className="flex gap-3">
              {study.live && (
                <a
                  href={study.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 font-mono text-xs text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Live demo <ExternalLink className="size-3.5" />
                </a>
              )}
              <a
                href={study.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-4 py-2 font-mono text-xs text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                GitHub <GitHubIcon className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12">
        <Reveal delay={60} className="min-w-0">
          <h4 className="font-mono text-xs tracking-widest text-muted uppercase">Problem</h4>
          <p className="mt-3 text-base leading-relaxed text-foreground/90">{study.problem}</p>

          <h4 className="mt-8 font-mono text-xs tracking-widest text-muted uppercase">What I built</h4>
          <ul className="mt-3 space-y-3">
            {study.approach.map((point) => (
              <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-foreground/90">
                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="min-w-0">
          <h4 className="font-mono text-xs tracking-widest text-muted uppercase">Architecture</h4>
          <div className="mt-3">
            <ArchitectureDiagram nodes={study.diagram.nodes} edges={study.diagram.edges} title={`${study.name} architecture diagram`} />
          </div>
        </Reveal>
      </div>

      <Reveal delay={100} className="mt-12">
        <h4 className="font-mono text-xs tracking-widest text-muted uppercase">Stack</h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {study.stack.map((t) => (
            <span key={t} className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted">
              {t}
            </span>
          ))}
        </div>
      </Reveal>
    </article>
  );
}
