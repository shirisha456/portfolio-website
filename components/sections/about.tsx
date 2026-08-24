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
              I&rsquo;m a software engineer focused on backend and full-stack systems — APIs,
              data infrastructure, and the application layers built on top of them. At S&amp;P
              Global, I worked on AI-powered enterprise features, connecting LLMs to internal
              GraphQL services, and separately rebuilt a slow ETL pipeline on Amazon Redshift.
              Both are the kind of problems I like: making a system faster, more reliable, or
              actually usable in production.
            </p>
            <p>
              Outside of work, I build complete projects on my own time — a fitness platform and
              a personal finance platform, each with real authentication, background processing,
              and the infrastructure decisions behind them, not just a UI on top of a database.
              I&rsquo;m especially interested in backend engineering, distributed systems, and
              AI/LLM applications, and I care about getting the reliability and security right
              along the way.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
