import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-content px-6 py-24 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16">
          <SectionHeading eyebrow="About" title="How I think about building software" />

          <Reveal delay={80} className="max-w-2xl space-y-5 text-base leading-relaxed text-foreground/90 sm:text-lg">
            <p>
              I care more about whether a system holds up under real conditions than whether it
              demos well. A login flow that survives a replayed refresh token, an AI feature that
              degrades to a template instead of crashing when the model call fails, a migration
              that&rsquo;s actually been rolled back and forward again before it ships — that&rsquo;s
              the part of engineering I find genuinely interesting.
            </p>
            <p>
              That instinct comes from two places. At S&amp;P Global, I worked on the seam between
              large language models and enterprise data — teaching tool calls to fetch only the
              GraphQL fields they actually needed, and rebuilding a nine-hour nightly refresh job
              as Redshift-backed Python ETL with real retry logic and validation, cutting it to
              under ninety minutes. Outside of work, I build full systems end to end: FitForge and
              Meridian each went from a data model on paper to a deployed, containerized
              application, with the architecture decisions behind them written down as I made
              them, not reconstructed after the fact.
            </p>
            <p>
              I&rsquo;m currently pursuing my MS in Software Engineering at San José State
              University, building on that same foundation — distributed systems, AI
              infrastructure, and the kind of backend work that has to be correct before it can be
              clever.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
