/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE TO MAKE THE PORTFOLIO YOURS
 *
 *  Everything content-related lives here: name, links,
 *  projects, education, skills and social profiles.
 *  Keep the copy honest — this is a student portfolio.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Kyle Barroga",
  initials: "KB",
  role: "Student Web Developer",
  study: "2nd-Year BSIT Student",
  school: "Naga College Foundation",
  city: "Naga City",
  location: "Naga City, Philippines",
  email: "johnkylebarroga@gmail.com",
  github: "https://github.com/jkbarroga-blipogi",
  facebook: "https://www.facebook.com/nskkyle",
  availability: "Open to internships & collaborations",
  description:
    "Second-year BSIT student at Naga College Foundation, learning by building real projects with React, PHP and NestJS.",
  url: "https://kylebarroga.dev", // TODO: replace with the real deployed domain
  portrait: "/portrait.jpg",
  yato: "/yato.jpg",
  tagline:
    "I'm a second-year BSIT student at Naga College Foundation, building small, real projects with React, PHP and NestJS — and looking for a team where I can keep learning.",
};

export const nav = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export type SocialName = "github" | "facebook" | "linkedin" | "x" | "mail";

export type Social = {
  label: string;
  href: string;
  icon: SocialName;
};

export const socials: Social[] = [
  {
    label: "GitHub",
    href: "https://github.com/jkbarroga-blipogi",
    icon: "github",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/nskkyle",
    icon: "facebook",
  },
  {
    label: "Email",
    href: "mailto:johnkylebarroga@gmail.com",
    icon: "mail",
  },
];

export const about = {
  lead: "I'm early in this journey — and I'd rather show you what I've built than tell you what I know.",
  paragraphs: [
    "I'm a second-year BS Information Technology student at Naga College Foundation. Most of what I know comes from class, documentation, and rebuilding interfaces I like until I understand how they work. So far that's produced a published PHP document service, a fragrance landing page in plain HTML and CSS, a responsive matcha page for a class activity, and a NestJS API with authentication and CRUD modules.",
    "I'm still learning, so I won't pretend to have years of experience. What I can offer is curiosity, consistency, and a habit of finishing what I start. Right now I'm looking for an internship, OJT placement, or student collaboration where I can contribute and learn from people who've been doing this longer than I have.",
  ],
  facts: [
    { label: "Based in", value: "Naga City, Philippines" },
    { label: "Studying", value: "BSIT, 2nd year" },
    { label: "School", value: "Naga College Foundation" },
    { label: "Focus", value: "Web development" },
    { label: "Learning now", value: "NestJS & TypeScript" },
  ],
  quote: "Build small. Finish it. Then build it better.",
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  status: string;
  year: string;
  href: string;
  linkLabel: string;
  image?: string;
  endpoints?: { method: "GET" | "POST"; path: string }[];
  accent: string;
  mark: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "ncfdocs",
    title: "NCFDocs",
    tagline: "School documents, from request to release.",
    description:
      "A published student document service with student and registrar logins, a public tracking lookup, and a responsive green-and-gold identity. Built as a multi-page PHP site.",
    category: "PHP app",
    status: "Live",
    year: "2026",
    href: "https://ncfdocs.alwaysdata.net",
    linkLabel: "Visit live site",
    image: "/projects/ncfdocs.jpg",
    accent: "#2f7d5b",
    mark: "N",
    tags: ["PHP", "HTML", "CSS", "Auth"],
  },
  {
    slug: "aurora",
    title: "AURORA",
    tagline: "A fragrance landing page built from scratch.",
    description:
      "A concept storefront and my first deployed website. Plain HTML and CSS, no frameworks — an exercise in full-bleed imagery, display type, and responsive layout.",
    category: "Front-end",
    status: "Live",
    year: "2026",
    href: "https://jkbarroga-blipogi.github.io/Fragrances/",
    linkLabel: "Visit live site",
    image: "/projects/aurora.jpg",
    accent: "#f97316",
    mark: "A",
    tags: ["HTML", "CSS", "Responsive"],
  },
  {
    slug: "matcha-landing",
    title: "Matcha Landing Page",
    tagline: "A responsive page about everyone's favorite green tea.",
    description:
      "A matcha tea landing page built as a class activity. Practice with semantic HTML, Flexbox and Grid, image treatment, and layouts that hold up on a phone.",
    category: "Class project",
    status: "Live",
    year: "2026",
    href: "https://jkbarroga-blipogi.github.io/artappmap/",
    linkLabel: "Visit live page",
    image: "/projects/artappmap.jpg",
    accent: "#84cc16",
    mark: "M",
    tags: ["HTML", "CSS", "Grid"],
  },
  {
    slug: "shelter-api",
    title: "Shelter API",
    tagline: "A NestJS backend for an animal shelter.",
    description:
      "A REST API built while working through a step-by-step NestJS guide: JWT auth, CRUD modules for animals, shelters and categories, and TypeORM entities for species and breeds.",
    category: "Backend",
    status: "Learning build",
    year: "2026",
    href: "https://github.com/jkbarroga-blipogi/kylebackend",
    linkLabel: "View on GitHub",
    endpoints: [
      { method: "POST", path: "/auth/login" },
      { method: "GET", path: "/animals" },
      { method: "GET", path: "/shelters" },
    ],
    accent: "#38bdf8",
    mark: "API",
    tags: ["NestJS", "TypeScript", "MySQL", "JWT"],
  },
];

export type Education = {
  program: string;
  detail: string;
  period: string;
  location: string;
  description: string;
  status?: string;
};

export const education: Education[] = [
  {
    program: "BS Information Technology",
    detail: "2nd year undergraduate",
    period: "In progress",
    location: "Naga College Foundation",
    status: "Current",
    description:
      "Building the fundamentals — programming, data structures, databases, and web development — through coursework at Naga College Foundation and hands-on projects. This is the base I'm working from, and I'm in no rush to skip it.",
  },
  {
    program: "Self-directed web development",
    detail: "Documentation, tutorials & rebuilding interfaces",
    period: "Ongoing",
    location: "Online",
    description:
      "Started with HTML and CSS, then moved into JavaScript, React, Next.js, PHP, and NestJS. Every project on this site came from that habit: pick something I want to understand, build it, then figure out why it works.",
  },
  {
    program: "Next: internship / OJT",
    detail: "Looking for a team to learn from",
    period: "Ahead",
    location: "Naga City or remote",
    description:
      "I'm looking for a place where I can contribute to real work, ask a lot of questions, and grow into a dependable developer. If your team needs an extra pair of hands, my inbox is open.",
  },
];

export type SkillGroup = {
  label: string;
  note: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Comfortable with",
    note: "Used in class and personal projects",
    items: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
  },
  {
    label: "Building with",
    note: "Learning by shipping small projects",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    label: "Backend & data",
    note: "Coursework and guided builds",
    items: ["Node.js", "NestJS", "PHP", "MySQL", "TypeORM", "JWT auth"],
  },
  {
    label: "Learning next",
    note: "The current reading list",
    items: ["Testing", "Database design", "Accessibility", "System design"],
  },
];

export const contactBlurb =
  "I'm looking for an internship, OJT placement, or a student collaboration. If you're building something and could use an extra pair of hands — or a developer who asks a lot of questions — I'd love to hear from you. Facebook is the quickest way to reach me.";
