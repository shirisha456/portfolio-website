import { ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)] opacity-60"
      />
      <div className="relative mx-auto max-w-content px-6 pt-28 pb-24 sm:pt-36 sm:pb-32">
        <p className="font-mono text-[13px] tracking-widest text-accent uppercase">
          Software Engineer · San Jose, CA
        </p>

        <h1 className="mt-6 text-balance font-sans text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Shirisha Gujja
        </h1>

        <p className="mt-6 max-w-2xl text-balance font-serif text-2xl leading-snug text-foreground/90 italic sm:text-3xl">
          Building reliable backend systems and AI-powered products.
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Currently pursuing an MS in Software Engineering at San José State University, after
          two years building LLM-powered enterprise features and ETL infrastructure at S&amp;P
          Global. I work end to end, but the backend — and the systems underneath it — is where
          I spend most of my attention.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            View my work
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={site.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Resume
          </a>

          <div className="ml-1 flex items-center gap-4 pl-2">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-foreground"
            >
              <GitHubIcon className="size-5" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-foreground"
            >
              <LinkedInIcon className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
