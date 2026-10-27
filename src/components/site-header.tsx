"use client";

import { useEffect, useRef, useState } from "react";
import { nav, site, socials } from "@/data/portfolio";
import { ArrowUpRight, Close, Menu, SocialIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const overlay = overlayRef.current;
      if (!overlay) return;

      const focusable = overlay.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      const timer = window.setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 60);
      return () => window.clearTimeout(timer);
    }

    if (wasOpen.current) {
      menuButtonRef.current?.focus();
      wasOpen.current = false;
    }
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 lg:hidden ${
          scrolled || open
            ? "border-b border-line/70 bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-4 px-6 sm:px-8 lg:px-10">
          <a
            href="#top"
            className="group flex items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            aria-label={`${site.name} — back to top`}
          >
            <span className="font-mono text-[13px] font-semibold tracking-[0.16em] transition-colors group-hover:text-accent">
              {site.initials}
            </span>
            <span
              aria-hidden
              className="size-1 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125"
            />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-2.5 py-2 text-[13px] text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label="Open menu"
              className="grid size-9 place-items-center rounded-full border border-line text-foreground transition-colors hover:border-foreground/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </div>
      </header>

      <div
        ref={overlayRef}
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 z-50 flex flex-col bg-background transition-all duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-line/70 px-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            Menu
          </span>
          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid size-9 place-items-center rounded-full border border-line text-foreground transition-colors hover:border-foreground/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Close className="size-4" />
            </button>
          </div>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 py-10">
          <div className="flex min-h-full flex-col justify-center">
            {nav.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 border-t border-line/70 py-5 last:border-b focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span className="font-mono text-[10px] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-2xl font-medium tracking-[-0.03em] transition-colors group-hover:text-accent">
                  {item.label}
                </span>
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Get in touch
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </nav>

        <div className="flex items-center justify-between border-t border-line/70 px-6 py-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
            {site.city}
          </p>
          <div className="flex items-center gap-1">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.icon === "mail" ? undefined : "_blank"}
                rel={social.icon === "mail" ? undefined : "noreferrer"}
                aria-label={social.label}
                className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <SocialIcon name={social.icon} className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
