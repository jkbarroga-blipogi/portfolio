import { contactBlurb, site, type SocialName } from "@/data/portfolio";
import { ArrowUpRight, SocialIcon } from "./icons";
import { Reveal } from "./reveal";

type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: SocialName;
  external: boolean;
};

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: "mail",
    external: false,
  },
  {
    label: "Facebook",
    value: "@nskkyle",
    href: site.facebook,
    icon: "facebook",
    external: true,
  },
  {
    label: "GitHub",
    value: "@jkbarroga-blipogi",
    href: site.github,
    icon: "github",
    external: true,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative border-t border-line/70 py-10 sm:py-14"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-20">
          <Reveal>
            <h2
              id="contact-heading"
              className="max-w-xl text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.08] font-light tracking-[-0.04em]"
            >
              Let&apos;s work together.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-muted">
              {contactBlurb}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-xl border border-line bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_18px_40px_-32px_rgba(0,0,0,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-surface text-muted transition-colors group-hover:text-foreground">
                    <SocialIcon name={link.icon} className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
                      {link.label}
                    </span>
                    <span className="mt-1 block break-all text-sm font-medium">
                      {link.value}
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
