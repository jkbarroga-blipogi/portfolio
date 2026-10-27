import type { JSX, SVGProps } from "react";
import type { SocialName } from "@/data/portfolio";

type IconProps = SVGProps<SVGSVGElement>;

function StrokeIcon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </StrokeIcon>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </StrokeIcon>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M12 4v16" />
      <path d="m6 14 6 6 6-6" />
    </StrokeIcon>
  );
}

export function ArrowUp(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M12 20V4" />
      <path d="m6 10 6-6 6 6" />
    </StrokeIcon>
  );
}

export function Check(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m5 12 4.5 4.5L19 7" />
    </StrokeIcon>
  );
}

export function Mail(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </StrokeIcon>
  );
}

export function Sun(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </StrokeIcon>
  );
}

export function Moon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />
    </StrokeIcon>
  );
}

export function Menu(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </StrokeIcon>
  );
}

export function Close(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </StrokeIcon>
  );
}

export function MessageCircle(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H6l-3 2 1.2-4.2A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
    </StrokeIcon>
  );
}

export function Github(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

export function Facebook(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.2c0-.9.3-1.5 1.6-1.5h1.6V4.1c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H7.7v3h2.6v8h3.2Z" />
    </svg>
  );
}

export function Linkedin(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

export function XLogo(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

const socialIcons = {
  github: Github,
  facebook: Facebook,
  linkedin: Linkedin,
  x: XLogo,
  mail: Mail,
} satisfies Record<SocialName, (props: IconProps) => JSX.Element>;

export function SocialIcon({
  name,
  ...props
}: IconProps & { name: SocialName }) {
  const Icon = socialIcons[name];
  return <Icon {...props} />;
}
