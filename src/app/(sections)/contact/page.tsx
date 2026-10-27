import { Contact } from "@/components/contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Contact", "/contact", "Get in touch with Kyle Barroga through email, Facebook, or GitHub.");

export default function ContactPage() {
  return <Contact standalone />;
}
