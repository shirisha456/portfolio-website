"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { nav, site } from "@/lib/data";

export function SiteHeader() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        <a
          href="#top"
          className="font-serif text-lg tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          Shirisha Gujja
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-1.5 font-mono text-[13px] tracking-tight transition-colors ${
                active === item.href
                  ? "bg-accent-soft text-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-foreground"
          >
            <GitHubIcon className="size-[18px]" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-foreground"
          >
            <LinkedInIcon className="size-[18px]" />
          </a>
          <ThemeToggle />
          <a
            href={site.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border-strong px-4 py-1.5 font-mono text-[13px] text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="flex size-9 items-center justify-center text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-1 pt-2" aria-label="Primary mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 font-mono text-sm text-foreground/90 hover:bg-surface"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-4 border-t border-border pt-4">
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-foreground">
              <GitHubIcon className="size-5" />
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-foreground">
              <LinkedInIcon className="size-5" />
            </a>
            <ThemeToggle />
            <a
              href={site.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="ml-auto rounded-full border border-border-strong px-4 py-1.5 font-mono text-[13px] text-foreground"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
