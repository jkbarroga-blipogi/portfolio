"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site, socials } from "@/data/portfolio";
import { ArrowRight, SocialIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import { HomeLink } from "./home-link";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="portfolio-pattern fixed inset-y-0 left-0 z-40 hidden w-56 flex-col overflow-y-auto border-r border-line bg-background px-5 py-10 lg:flex xl:w-60 xl:px-6">
      <HomeLink className="section-title text-center text-lg">{site.name}<span className="text-accent">.</span></HomeLink>
      <nav aria-label="Sidebar" className="mt-12 space-y-1">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            className={`group flex items-center gap-3 rounded-lg px-3 py-3 font-mono text-sm transition-colors hover:bg-surface hover:text-foreground ${pathname === item.href ? "bg-surface text-foreground" : "text-muted"}`}
          >
            <ArrowRight className={`size-3.5 ${pathname === item.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
            <span className={item.href === "/resume" ? "section-title" : undefined}>{item.label}</span>
          </Link>
        ))}
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
