# Personal Portfolio

A single-page student portfolio built with Next.js 16, React 19, TypeScript and Tailwind CSS 4. A wide, responsive editorial layout with light/dark themes, scroll reveals, a portrait that flips to Yato, and an AI portfolio assistant. No UI dependencies — every component is local and editable.

The content is written honestly for a second-year BSIT student at Naga College Foundation in Naga City: real projects, current skills, and what is still being learned.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Make it yours

Almost all content lives in **`src/data/portfolio.ts`**:

| What | Where |
| --- | --- |
| Name, role, location, email, domain | `site` |
| School, city and Facebook link | `site` |
| Social links | `socials` |
| About copy and quick facts | `about` |
| Projects | `projects` |
| Education and next steps | `education` |
| Skill groups | `skills` |
| Contact copy | `contactBlurb` |

The projects point at real live sites and GitHub repositories. If you add a project, give it an `image` (a screenshot in `public/projects/`) or let it fall back to the code-panel visual used by Shelter API.

### Portfolio assistant

The floating chat button opens an AI assistant. Messages are sent to the server-side route at `src/app/api/chat/route.ts`, which adds portfolio facts to a system prompt and calls an OpenAI-compatible model. The client keeps the conversation history, shows a typing state, and falls back to a small set of local answers if the network request fails.

The default provider is Pollinations' keyless endpoint (`openai-fast`). Its free anonymous tier allows **one reply every 30 seconds per IP**, so the chat shows a countdown and a quick local answer when that limit is hit. For unlimited chatting, add a free API key:

```bash
# .env.local — pick one
GROQ_API_KEY=gsk_...        # free at console.groq.com/keys
GEMINI_API_KEY=...          # free at aistudio.google.com/apikey
```

Or point it at any OpenAI-compatible endpoint:

```bash
AI_BASE_URL=https://your-provider.example/v1/chat/completions
AI_API_KEY=...
AI_MODEL=your-model
```

Restart `npm run dev` (or `npm run start`) after changing environment variables. With a key, replies are not subject to the 30-second free-tier limit. The local keyword answers in `getReply()` remain as the offline fallback; quick-question chips are defined in `quickPrompts`.

### Replace the portraits

- **Your photo** — `public/portrait.jpg`. Replace the file (keeping the name) or point `portrait` in `site` at a different file in `public/`.
- **Yato artwork** — `public/yato.jpg`. The circular avatar auto-previews Yato once, previews on hover, and pins on click/tap. The chat panel also uses the artwork.

Both images are cropped with `object-cover`; keep your face near the upper-center of the frame and Yato centered for the cleanest circle crop.

### Project screenshots

Project covers live in `public/projects/`:

- `ncfdocs.jpg` — the live NCFDocs PHP site
- `aurora.jpg` — the deployed AURORA fragrance page
- `artappmap.jpg` — the deployed matcha class project

Use a 16:10 viewport screenshot (for example 1440×900) for the cleanest crop. The Shelter API card intentionally uses a small API-panel fallback instead of a screenshot.

### Change the look

- **Colors** — CSS variables in `src/app/globals.css` (`:root` for light, `.dark` for dark).
- **Fonts** — `src/app/layout.tsx` (Geist Sans, Geist Mono).
- **Page order** — `src/app/page.tsx`.
- **Favicon** — `src/app/icon.svg`.

The accent color and all surfaces flow from the CSS variables, so changing `--accent` updates the entire site. The avatar transition also uses `--portrait-glow` for its cyan sweep and halo.

## Motion

- Scroll reveals use a small `IntersectionObserver` wrapper (`Reveal`).
- The hero avatar defaults to the photo. It auto-previews Yato once after loading, previews Yato on hover, and pins on click, tap, Enter or Space. The switch uses a cyan sweep, a soft flash and a clip-path reveal. The `夜` badge hints at the artwork without giving it away.
- The chat panel has a short entrance animation, shows a typing indicator while the AI responds, and remembers the conversation for follow-up questions.
- Light/dark switching uses the View Transitions API for a circular reveal, with an instant fallback when the API or motion preference is unavailable.
- `prefers-reduced-motion` disables the avatar transition, blobs, scroll reveals and theme reveal.

## Structure

```
src/
├── app/
│   ├── layout.tsx        # fonts, metadata, theme bootstrap, portfolio assistant
│   ├── page.tsx          # section order
│   ├── globals.css       # theme tokens, utilities, animation
│   ├── icon.svg          # favicon
│   ├── api/chat/route.ts # server-side AI proxy
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── hero.tsx          # avatar, role headline, links
│   ├── live-portrait.tsx # photo → Yato avatar transition
│   ├── projects.tsx      # responsive project grid
│   ├── about.tsx
│   ├── education.tsx     # timeline + technologies
│   ├── contact.tsx       # email, Facebook and GitHub cards
│   ├── portfolio-chat.tsx # floating AI assistant
│   ├── site-header.tsx   # sticky nav + mobile menu
│   ├── site-footer.tsx
│   ├── theme-toggle.tsx  # view-transition theme switch
│   ├── reveal.tsx        # IntersectionObserver scroll reveal
│   └── icons.tsx         # inline SVG icon set
└── data/
    └── portfolio.ts      # ← edit your content here
```

## Accessibility & motion

- Skip link, semantic landmarks, labelled sections and visible focus rings.
- The avatar is a real button with `aria-pressed` and a state-aware label.
- The chat launcher has `aria-expanded`, the panel is a labelled dialog, replies are announced through a live log, and Escape closes the chat.
- Mobile menu supports Escape, traps focus, locks scroll and returns focus on close.
- `prefers-reduced-motion` disables the avatar sweep, blobs, reveals and theme reveal.
- Content remains visible without JavaScript via a `<noscript>` fallback.

## Deploy

The page is prerendered, but the chat needs a Node.js runtime and outbound network access for `/api/chat`.

**Vercel:** push to GitHub, import the repo at [vercel.com/new](https://vercel.com/new), and deploy. Set `site.url` to your production domain for correct canonical and sitemap URLs. It is currently a placeholder (`https://kylebarroga.dev`). Add `GROQ_API_KEY` or `GEMINI_API_KEY` under Project Settings → Environment Variables if you want to avoid the 30-second anonymous limit.

**Other hosts:** `npm run build` then `npm run start` on any Node.js host. No database is required, but the host must allow server-side `fetch` requests to the AI provider.
