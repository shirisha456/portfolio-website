import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { CopyEmailButton } from "@/components/copy-email-button";
import { site } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-content px-6 py-24 sm:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[13px] tracking-widest text-accent uppercase">Contact</p>
          <h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-foreground sm:text-4xl">
            Looking for software engineer, backend, full-stack, and AI/LLM engineering roles.
          </h2>
          <p className="mt-5 text-balance text-base leading-relaxed text-muted sm:text-lg">
            If your team cares about getting the fundamentals right before shipping the
            interesting part, I&rsquo;d like to talk.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="size-4" />
              {site.email}
            </a>
            <CopyEmailButton email={site.email} />
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <GitHubIcon className="size-[18px]" /> GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <LinkedInIcon className="size-[18px]" /> LinkedIn
            </a>
            <a
              href={site.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
