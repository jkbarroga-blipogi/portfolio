"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/data/portfolio";

/**
 * A small portrait medallion that flips between Kyle's photo and the Yato
 * artwork. It auto-previews Yato once after loading, previews on hover, and
 * pins on click, tap, Enter or Space.
 */
export function LivePortrait() {
  const [pinned, setPinned] = useState(false);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const show = window.setTimeout(() => setPreview(true), 1300);
    const hide = window.setTimeout(() => setPreview(false), 5400);

    return () => {
      window.clearTimeout(show);
      window.clearTimeout(hide);
    };
  }, []);

  const showYato = pinned || preview;

  function togglePortrait() {
    setPreview(false);
    setPinned((value) => !value);
  }

  return (
    <button
      type="button"
      data-yato={showYato}
      aria-pressed={pinned}
      aria-label={pinned ? "Show Kyle's photo" : "Show the Yato portrait"}
      title="Hover or tap to switch portraits"
      onClick={togglePortrait}
      className="live-avatar group relative size-60 max-w-full shrink-0 overflow-hidden rounded border border-line bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:size-72"
    >
      <Image
        src={site.portrait}
        alt=""
        fill
        priority
        sizes="(min-width: 640px) 288px, 240px"
        className="live-avatar__photo object-cover"
      />
      <Image
        src={site.yato}
        alt=""
        fill
        loading="eager"
        sizes="(min-width: 640px) 288px, 240px"
        className="live-avatar__yato object-cover"
      />

      <span aria-hidden className="live-avatar__sweep" />
      <span aria-hidden className="live-avatar__flash" />

      <span
        aria-hidden
        className="live-avatar__badge absolute right-1.5 bottom-1.5 z-20 grid size-5 place-items-center rounded-full border border-white/25 bg-black/55 font-serif text-[9px] leading-none text-white backdrop-blur-sm"
      >
        夜
      </span>
    </button>
  );
}
