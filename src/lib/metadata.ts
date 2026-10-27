import type { Metadata } from "next";
import { site } from "@/data/portfolio";

export function pageMetadata(title: string, path: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: `${title} · ${site.name}`,
      description,
      url: path,
    },
    twitter: {
      card: "summary",
      title: `${title} · ${site.name}`,
      description,
    },
  };
}
