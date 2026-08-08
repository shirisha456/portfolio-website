import { site } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono text-xs">Built with Next.js &amp; Tailwind CSS · Deployed on Vercel</p>
      </div>
    </footer>
  );
}
