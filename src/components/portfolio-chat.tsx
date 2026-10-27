"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { projects, site } from "@/data/portfolio";
import {
  ArrowUp,
  ArrowUpRight,
  Close,
  Mail,
  MessageCircle,
} from "./icons";

type ChatLink = {
  label: string;
  href: string;
  external?: boolean;
};

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
  links?: ChatLink[];
};

type Reply = {
  text: string;
  links?: ChatLink[];
};

const emailLink: ChatLink = {
  label: "Email Kyle",
  href: `mailto:${site.email}`,
};

const facebookLink: ChatLink = {
  label: "Facebook",
  href: site.facebook,
  external: true,
};

const githubLink: ChatLink = {
  label: "GitHub",
  href: site.github,
  external: true,
};

const quickPrompts = [
  { label: "Projects", question: "What projects has Kyle built?" },
  { label: "Skills", question: "What is Kyle's tech stack?" },
  { label: "School", question: "Where does Kyle study?" },
  { label: "OJT", question: "Is Kyle available for an OJT or internship?" },
  { label: "Contact", question: "How can I contact Kyle?" },
];

const initialMessage: Message = {
  id: 1,
  role: "bot",
  text: "Hi! I'm Kyle's AI assistant. Ask me about his projects, skills, school, or availability — I'll answer from his portfolio. What would you like to know?",
};

function getReply(input: string): Reply {
  const q = input.toLowerCase();

  if (/\b(thanks|thank you|salamat|ty)\b/.test(q)) {
    return {
      text: "You're welcome! If you'd like to talk to Kyle directly, email or message him on Facebook.",
      links: [emailLink, facebookLink],
    };
  }

  if (/\b(hi|hello|hey|kamusta|kumusta)\b/.test(q)) {
    return {
      text: "Hi! Ask me about Kyle's projects, skills, school, availability, or how to contact him.",
    };
  }

  if (/\b(resume|cv|curriculum vitae)\b/.test(q)) {
    return {
      text: "There's no résumé posted yet. Facebook is the quickest way to reach Kyle for now.",
      links: [facebookLink, emailLink],
    };
  }

  if (
    /\b(project|projects|built|ncfdocs|aurora|matcha|shelter|portfolio work)\b/.test(
      q,
    )
  ) {
    return {
      text: "Kyle has four projects on this page: NCFDocs (a live PHP school-documents site), AURORA (a fragrance landing page), a Matcha landing page, and Shelter API (a NestJS REST API).",
      links: projects.map((project) => ({
        label: project.title,
        href: project.href,
        external: true,
      })),
    };
  }

  if (
    /\b(school|study|studying|student|college|ncf|education|course|bsit|naga college)\b/.test(
      q,
    )
  ) {
    return {
      text: `Kyle is a second-year BS Information Technology student at ${site.school} in ${site.city}, Philippines.`,
      links: [{ label: "Education", href: "#education" }],
    };
  }

  if (
    /\b(skill|skills|stack|tech|technology|technologies|framework|language|react|next|php|nestjs|mysql|typescript|javascript|html|css)\b/.test(
      q,
    )
  ) {
    return {
      text: "Kyle works with HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, and TypeScript, plus PHP, Node.js, NestJS, MySQL, and TypeORM on the backend. He's still learning testing, database design, and accessibility.",
      links: [{ label: "Technologies", href: "#education" }],
    };
  }

  if (
    /\b(available|availability|intern|internship|ojt|hire|hiring|collab|collaboration|freelance)\b/.test(
      q,
    )
  ) {
    return {
      text: "Yes — Kyle is open to internships, OJT placements, and student collaborations. Email him or message him on Facebook.",
      links: [emailLink, facebookLink],
    };
  }

  if (/\b(contact|email|facebook|github|reach|message)\b/.test(q)) {
    return {
      text: `You can reach Kyle at ${site.email}, on Facebook at @nskkyle, or on GitHub at @jkbarroga-blipogi.`,
      links: [emailLink, facebookLink, githubLink],
    };
  }

  if (/\b(yato|anime|avatar|picture|photo)\b/.test(q)) {
    return {
      text: "The round portrait switches to a Yato artwork. Hover over it on desktop, or tap it on your phone. The chat panel uses the same artwork too.",
    };
  }

  if (/\b(where|location|city|based|address)\b/.test(q)) {
    return {
      text: `Kyle is based in ${site.location}.`,
    };
  }

  if (/\b(who|about|introduce|yourself)\b/.test(q)) {
    return {
      text: "Kyle Barroga is a second-year BSIT student at Naga College Foundation. He builds small, real projects with React, PHP, and NestJS, and he's looking for an internship, OJT placement, or student collaboration.",
      links: [{ label: "About Kyle", href: "#about" }],
    };
  }

  return {
    text: "I don't have a prepared answer for that one. Try asking about projects, skills, school, availability, or contact — or email Kyle directly.",
    links: [emailLink, facebookLink],
  };
}

function TypingBubble() {
  return (
    <div className="mr-auto flex max-w-[85%] items-center gap-1 rounded-2xl rounded-bl-md bg-surface px-3.5 py-3">
      <span className="sr-only">Assistant is typing</span>
      {[0, 120, 240].map((delay) => (
        <span
          key={delay}
          aria-hidden
          className="size-1 animate-bounce rounded-full bg-muted"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </div>
  );
}

export function PortfolioChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const nextId = useRef(2);

  const coolingDown = cooldown > 0;

  useEffect(() => {
    if (!coolingDown) return;

    const timer = window.setInterval(() => {
      setCooldown((value) => Math.max(0, value - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [coolingDown]);

  useEffect(() => {
    if (!open) return;

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 120);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [messages, typing]);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  async function sendMessage(raw: string) {
    const text = raw.trim();
    if (!text || typing || cooldown > 0) return;

    const history = messages
      .filter((message) => message.id !== initialMessage.id)
      .slice(-8)
      .map((message) => ({
        role: message.role === "bot" ? "assistant" : "user",
        content: message.text,
      }));

    const userMessage: Message = {
      id: nextId.current++,
      role: "user",
      text,
    };
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setTyping(true);

    const controller = new AbortController();
    abortRef.current?.abort();
    abortRef.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 40_000);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...history, { role: "user", content: text }],
        }),
        signal: controller.signal,
      });

      if (response.status === 429) {
        const data = (await response.json().catch(() => null)) as {
          retryAfter?: unknown;
        } | null;
        const retryAfter =
          typeof data?.retryAfter === "number" &&
          Number.isFinite(data.retryAfter)
            ? Math.min(Math.max(Math.round(data.retryAfter), 5), 120)
            : 30;
        const fallback = getReply(text);

        setCooldown(retryAfter);
        setMessages((current) => [
          ...current,
          {
            id: nextId.current++,
            role: "bot",
            text: `The AI is cooling down for ${retryAfter} seconds, so here's a quick answer in the meantime. ${fallback.text}`,
            links: fallback.links,
          },
        ]);
        return;
      }

      if (!response.ok) throw new Error("AI unavailable");

      const data = (await response.json()) as { reply?: unknown };
      const reply = data.reply;

      if (typeof reply !== "string" || !reply.trim()) {
        throw new Error("Empty reply");
      }

      setMessages((current) => [
        ...current,
        {
          id: nextId.current++,
          role: "bot",
          text: reply.trim(),
          links: getReply(text).links,
        },
      ]);
    } catch {
      const fallback = getReply(text);

      setMessages((current) => [
        ...current,
        {
          id: nextId.current++,
          role: "bot",
          text: `I couldn't reach the AI just now. ${fallback.text}`,
          links: fallback.links,
        },
      ]);
    } finally {
      window.clearTimeout(timeout);
      if (abortRef.current === controller) abortRef.current = null;
      setTyping(false);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  function onInternalLink(href: string) {
    if (href.startsWith("#")) setOpen(false);
  }

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="portfolio-chat"
        aria-label={open ? "Close portfolio assistant" : "Ask about Kyle"}
        className="group fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-[45] inline-flex size-12 items-center justify-center gap-2 rounded-full bg-foreground text-background shadow-[0_18px_40px_-18px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:right-6 sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom))] sm:size-auto sm:px-4 sm:py-3"
      >
        <MessageCircle className="size-4" />
        <span className="hidden text-xs font-medium sm:inline">
          Ask about Kyle
        </span>
      </button>

      {open ? (
        <section
          id="portfolio-chat"
          role="dialog"
          aria-label="AI portfolio assistant"
          className="chat-panel fixed inset-x-4 bottom-[calc(6rem+env(safe-area-inset-bottom))] z-[45] mx-auto flex h-[min(32rem,calc(100dvh-11rem))] w-auto max-w-[23rem] flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)] sm:inset-x-auto sm:right-6 sm:bottom-[calc(6rem+env(safe-area-inset-bottom))] sm:w-[23rem]"
        >
          <header className="flex shrink-0 items-center gap-3 border-b border-line/70 px-4 py-3">
            <span className="relative size-9 shrink-0 overflow-hidden rounded-full border border-line bg-surface">
              <Image
                src={site.yato}
                alt=""
                fill
                loading="eager"
                sizes="36px"
                className="object-cover object-[50%_18%]"
              />
              <span
                aria-hidden
                className="absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-card bg-emerald-400"
              />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium tracking-[-0.01em]">
                AI portfolio assistant
              </p>
              <p className="mt-0.5 text-[10px] text-muted">
                Ask anything about Kyle
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                launcherRef.current?.focus();
              }}
              aria-label="Close chat"
              className="grid size-9 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Close className="size-4" />
            </button>
          </header>

          <div
            ref={logRef}
            role="log"
            aria-live="polite"
            aria-relevant="additions"
            className="chat-log min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain px-4 py-4"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.role === "user"
                    ? "ml-auto max-w-[85%]"
                    : "mr-auto max-w-[92%]"
                }
              >
                <div
                  className={`rounded-2xl px-3.5 py-2.5 text-[13px] leading-5 break-words whitespace-pre-line text-pretty ${
                    message.role === "user"
                      ? "rounded-br-md bg-foreground text-background"
                      : "rounded-bl-md bg-surface text-foreground"
                  }`}
                >
                  {message.text}
                </div>

                {message.links?.length ? (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {message.links.map((link) => (
                      <a
                        key={`${link.label}-${link.href}`}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noreferrer" : undefined}
                        onClick={() => onInternalLink(link.href)}
                        className="inline-flex items-center gap-1 rounded-full border border-line bg-background px-2.5 py-1 text-[10px] font-medium text-muted transition-colors hover:border-foreground/25 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        {link.label}
                        {link.external ? (
                          <ArrowUpRight className="size-3" />
                        ) : null}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}

            {typing ? <TypingBubble /> : null}
          </div>

          <form
            onSubmit={onSubmit}
            className="shrink-0 border-t border-line/70 p-3"
          >
            <div className="mb-2.5 flex flex-wrap gap-1.5">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt.label}
                  type="button"
                  onClick={() => sendMessage(prompt.question)}
                  disabled={typing || cooldown > 0}
                  className="rounded-full border border-line bg-background px-3 py-2 text-[11px] text-muted transition-colors hover:border-foreground/25 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50"
                >
                  {prompt.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 rounded-full border border-line bg-background py-1 pr-1 pl-3 transition-colors focus-within:border-foreground/30">
              <label htmlFor="chat-input" className="sr-only">
                Ask about Kyle
              </label>
              <input
                ref={inputRef}
                id="chat-input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={
                  cooldown > 0
                    ? `AI cooling down · ${cooldown}s`
                    : "Ask about Kyle..."
                }
                maxLength={200}
                autoComplete="off"
                className="h-9 min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted sm:text-[13px]"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing || cooldown > 0}
                aria-label="Send message"
                className="grid size-9 shrink-0 place-items-center rounded-full bg-foreground text-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-40"
              >
                <ArrowUp className="size-4" />
              </button>
            </div>

            <p
              className="mt-2 flex items-center justify-center gap-1.5 text-[9px] text-muted"
              title="AI replies may be inaccurate. Email Kyle for anything important."
            >
              <Mail className="size-2.5" />
              {cooldown > 0
                ? `Cooling down · ${cooldown}s · `
                : "AI assistant · "}
              <a
                href={`mailto:${site.email}`}
                className="underline underline-offset-2 transition-colors hover:text-foreground"
              >
                Email Kyle
              </a>
            </p>
          </form>
        </section>
      ) : null}
    </>
  );
}
