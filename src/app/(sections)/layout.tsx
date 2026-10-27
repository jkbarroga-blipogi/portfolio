import type { ReactNode } from "react";

export default function SectionLayout({ children }: { children: ReactNode }) {
  return <div className="pt-16 lg:pt-6">{children}</div>;
}
