"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { site } from "@/data/portfolio";

export function HomeLink({ children, className }: { children: ReactNode; className?: string }) {
  const pathname = usePathname();

  return (
    <Link
      href="/#page-top"
      aria-label={`${site.name} — back to top`}
      className={className}
      onClick={(event) => {
        if (pathname !== "/" || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        // A repeated click on the current URL still needs to scroll to the top.
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        });
      }}
    >
      {children}
    </Link>
  );
}
