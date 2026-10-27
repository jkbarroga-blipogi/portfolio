import type { MetadataRoute } from "next";
import { nav, site } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ href: "/" }, ...nav].map((item) => ({
    url: new URL(item.href, site.url).href,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
