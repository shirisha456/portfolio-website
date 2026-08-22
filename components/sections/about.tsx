import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-content px-6 py-24 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16">
          <Reveal>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">About</h2>
          </Reveal>

          <Reveal delay={80} className="max-w-2xl space-y-5 text-base leading-relaxed text-foreground/90 sm:text-lg">
            <p>
              I care more about whether a system holds up under real conditions than whether it
              demos well. A login flow that survives a replayed refresh token, an AI feature that
              degrades to a template instead of crashing when the model call fails, a migration
              that&rsquo;s actually been rolled back and forward again before it ships — that&rsquo;s
              the part of engineering I find genuinely interesting.
            </p>
            <p>
              Most of what I&rsquo;ve learned has come from working at the seams between systems
              that weren&rsquo;t designed to talk to each other — language models and enterprise
              data services at S&amp;P Global, and on my own projects, event pipelines and
              third-party APIs that fail in ways you only discover once something is actually
              running. The happy path is rarely where the interesting problems are.
            </p>
            <p>
              I&rsquo;m drawn to distributed systems, AI infrastructure, and the backend layers
              other engineers build on top of — the kind of work that has to be correct before it
              can be clever.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
