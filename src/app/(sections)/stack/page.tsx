import { Stack } from "@/components/stack";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Stack", "/stack", "The tools and technologies Kyle uses, from HTML and React to PHP and NestJS.");

export default function StackPage() {
  return <Stack standalone />;
}
