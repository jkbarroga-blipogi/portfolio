import { site, socials } from "@/data/portfolio";
import { ArrowRight, ArrowUpRight, SocialIcon } from "./icons";
import { LivePortrait } from "./live-portrait";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-name"
      className="relative overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20"
    >
      <div
        aria-hidden
        className="hero-blob -top-32 right-[8%] size-[22rem]"
      />
      <div
        aria-hidden
        className="hero-blob hero-blob--glow top-24 left-[4%] size-[18rem]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] xl:gap-16 2xl:gap-24">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4 sm:gap-5">
              <LivePortrait />
              <div className="min-w-0">
                <h1
                  id="hero-name"
                  className="text-2xl font-medium tracking-[-0.035em] sm:text-[1.7rem]"
                >
                  {site.name}
                </h1>

                <p className="mt-1.5 text-[11px] leading-5 text-muted">
                  {site.study} · {site.school}
                </p>

                <div className="mt-1.5 flex items-center gap-0.5">
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
              </div>
            </div>

            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
              {site.location}
            </p>
          </div>

          <div>
            <p className="max-w-3xl text-[clamp(2rem,3.6vw,3.4rem)] leading-[1.12] font-light tracking-[-0.04em] text-balance">
              Student Web Developer{" "}
              <span className="text-muted">— React, PHP &amp; NestJS</span>
            </p>

            <p className="mt-5 max-w-2xl text-pretty text-[15px] leading-7 text-muted">
              {site.tagline}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all duration-300 hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                View my projects
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 rounded-full px-1 py-3 text-sm font-medium text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Get in touch
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
