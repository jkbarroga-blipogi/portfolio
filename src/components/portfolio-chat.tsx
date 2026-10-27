"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { projects, site, skills } from "@/data/portfolio";
import { ArrowUp, Close, MessageCircle } from "./icons";

const questions = ["Projects", "Skills", "School", "Contact", "About", "Yato"];
type Message = { role: "user" | "bot"; text: string };

function answer(question: string): string {
  const q = question.toLowerCase();
  const project = projects.find((p) => q.includes(p.title.toLowerCase()) || (p.title === "Shelter API" && q.includes("shelter")) || (p.title === "Matcha Landing Page" && q.includes("matcha")));
  if (project) return `${project.title}: ${project.description}\n${project.href}`;
  if (/project|built|gawa|proyekto/.test(q)) return projects.map((p) => `${p.title} — ${p.tagline}`).join("\n\n");
  if (/school|study|studying|college|course|education|aral|bsit/.test(q)) return `Kyle is a second-year BS Information Technology student at ${site.school}.`;
  if (/skill|stack|tech|language|framework|html|css|react|php|nestjs/.test(q)) return skills.map((g) => `${g.label}: ${g.items.join(", ")}`).join("\n\n");
  if (/contact|email|facebook|github|reach|message|kontak/.test(q)) return `Email: ${site.email}\nFacebook: ${site.facebook}\nGitHub: ${site.github}\n\nFacebook is the quickest way to reach Kyle.`;
  if (/resume|résumé|cv/.test(q)) return `There is no résumé posted yet. You can reach Kyle at ${site.email} or on Facebook: ${site.facebook}`;
  if (/yato|anime|portrait|photo|avatar/.test(q)) return "Tap Kyle's portrait to switch to Yato from Noragami. Tap it again to show Kyle's photo.";
  if (/where|location|based|saan|taga/.test(q)) return `Kyle is based in ${site.location}.`;
  if (/intern|ojt|available|hire|collab/.test(q)) return `For questions about opportunities or collaborations, contact Kyle directly at ${site.email}.`;
  if (/about|who|sino|kyle/.test(q)) return `${site.name} is a ${site.study} at ${site.school}. ${site.tagline}`;
  if (/thank|salamat/.test(q)) return "You're welcome! Pick another topic if you'd like to know more about Kyle.";
  if (/hello|^hi\b|hey|kumusta|kamusta/.test(q)) return "Hi! Ask about Kyle's projects, skills, school, or contact details. You can also choose a topic below.";
  return "I only have answers about Kyle's portfolio. Try Projects, Skills, School, Contact, About, or Yato—or ask about a project by name.";
}

export function PortfolioChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([{ role: "bot", text: "Hi! I'm Kyle's portfolio guide. Choose a topic or ask a question about this portfolio. Answers are saved locally—no AI service needed." }]);
  const launcher = useRef<HTMLButtonElement>(null);
  const field = useRef<HTMLInputElement>(null);
  const log = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    field.current?.focus();
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        launcher.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);

  useEffect(() => {
    if (log.current) log.current.scrollTop = log.current.scrollHeight;
  }, [messages, open]);

  function send(text: string) {
    const question = text.trim();
    if (!question) return;
    setMessages((current) => [...current, { role: "user", text: question }, { role: "bot", text: answer(question) }]);
    setInput("");
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    send(input);
  }

  return (
    <>
      <button ref={launcher} type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close portfolio guide" : "Ask about Kyle"} aria-expanded={open} aria-controls="portfolio-chat" className="fixed right-4 bottom-5 z-40 flex h-12 items-center gap-2 rounded-full border border-line bg-foreground px-4 text-background shadow-lg sm:right-6">
        <MessageCircle className="size-4" /><span className="hidden text-xs font-medium sm:inline">Ask about Kyle</span>
      </button>
      {open && (
        <section id="portfolio-chat" role="dialog" aria-label="Portfolio guide" className="chat-panel fixed right-4 bottom-20 left-4 z-50 flex h-[min(32rem,calc(100dvh-7rem))] flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-2xl sm:right-6 sm:left-auto sm:w-96">
          <header className="flex shrink-0 items-center gap-3 border-b border-line px-4 py-3">
            <Image src={site.yato} alt="" width={36} height={36} className="size-9 rounded-full object-cover" />
            <div className="flex-1"><p className="text-sm font-medium">Portfolio guide</p><p className="text-[11px] text-muted">Local answers · No cooldown</p></div>
            <button type="button" aria-label="Close chat" onClick={() => { setOpen(false); launcher.current?.focus(); }} className="grid size-9 place-items-center rounded-full hover:bg-surface"><Close className="size-4" /></button>
          </header>
          <div ref={log} role="log" aria-live="polite" aria-relevant="additions" className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => <p key={index} className={`max-w-[92%] rounded-2xl px-3.5 py-3 text-[13px] leading-6 break-words whitespace-pre-line ${message.role === "user" ? "ml-auto bg-foreground text-background" : "bg-surface"}`}>{message.text}</p>)}
          </div>
          <form onSubmit={submit} className="shrink-0 border-t border-line p-3">
            <div className="mb-3 flex flex-wrap gap-1.5">{questions.map((q) => <button key={q} type="button" onClick={() => send(q)} className="rounded-full border border-line px-3 py-1.5 text-xs text-muted hover:bg-surface hover:text-foreground">{q}</button>)}</div>
            <div className="flex items-center gap-2 rounded-full border border-line px-3 py-1">
              <label htmlFor="chat-input" className="sr-only">Ask about Kyle</label>
              <input ref={field} id="chat-input" value={input} onChange={(e) => setInput(e.target.value)} maxLength={300} placeholder="Ask about the portfolio…" className="h-10 min-w-0 flex-1 bg-transparent text-base outline-none sm:text-sm" />
              <button type="submit" aria-label="Send message" disabled={!input.trim()} className="grid size-8 place-items-center rounded-full bg-foreground text-background disabled:opacity-40"><ArrowUp className="size-4" /></button>
            </div>
          </form>
        </section>
      )}
    </>
  );
}
