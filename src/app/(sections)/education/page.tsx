import { Education } from "@/components/education";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Education", "/education", "Kyle's BS Information Technology studies at Naga College Foundation and self-directed learning.");

export default function EducationPage() {
  return <Education standalone />;
}
