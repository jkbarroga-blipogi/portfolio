import { about, site, socials } from "@/data/portfolio";
import { ArrowUp, SocialIcon } from "./icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-6 pt-7 pb-20 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:pb-20 lg:px-10">
        <div className="max-w-xl">
          <p className="text-sm italic text-foreground/80">
            &ldquo;{about.quote}&rdquo;
          </p>
          <p className="mt-2 text-[10px] text-muted">
            © {site.name} · Still learning, still building.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-0.5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.icon === "mail" ? undefined : "_blank"}
                rel={social.icon === "mail" ? undefined : "noreferrer"}
                aria-label={social.label}
                className="grid size-8 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <SocialIcon name={social.icon} className="size-4" />
              </a>
            ))}
          </div>

          <span aria-hidden className="h-4 w-px bg-line" />

          <a
            href="#top"
            className="group inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Back to top
            <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
