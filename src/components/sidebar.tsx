import { nav, site, socials } from "@/data/portfolio";
import { ArrowUpRight, SocialIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col overflow-y-auto border-r border-line bg-background px-6 py-10 lg:flex xl:w-72 xl:px-8">
      <a href="#top" className="font-mono text-lg font-medium tracking-tight">{site.name}<span className="text-accent">.</span></a>
      <p className="mt-2 text-xs text-muted">Student Developer</p>
      <nav aria-label="Sidebar" className="mt-12 space-y-1">
        {[{ label: "Overview", href: "#top" }, ...nav, { label: "Stack", href: "#stack" }].map((item) => <a key={item.href} href={item.href} className="group flex items-center justify-between rounded-lg px-3 py-3 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"><span>{item.label}</span><ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" /></a>)}
      </nav>
      <div className="mt-auto pt-10">
        <div className="mb-7 flex items-center justify-between border-y border-line py-3"><span className="text-xs text-muted">Appearance</span><ThemeToggle /></div>
        <p className="text-xs leading-6 text-muted">For questions, ideas & everything else, reach me at</p>
        <a href={`mailto:${site.email}`} className="mt-2 block break-words text-xs leading-5 hover:text-accent">{site.email}</a>
        <div className="mt-5 flex gap-3">{socials.map((social) => <a key={social.label} href={social.href} aria-label={social.label} className="rounded-md p-2 text-muted hover:bg-surface hover:text-foreground"><SocialIcon name={social.icon} className="size-4" /></a>)}</div>
      </div>
    </aside>
  );
}
