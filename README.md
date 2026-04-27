# NayaJob

> **The govt + money checklist no one told you about when you started your first job.**
>
> Personalized 12-month roadmap of every PAN, UAN, HRA, ITR, insurance, and tax decision a fresh hire in India needs to make. Built for first-time earners aged 21–24. Solo founder, Hyderabad.

---

## Status

`v0.1 — landing page only`. Roadmap engine, intake flow, item pages, AI chat, payments — all coming in subsequent versions.

## Tech

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS with a custom editorial design system
- **Fonts:** Inter (body) + Fraunces (display) via `next/font/google`
- **Hosting:** Vercel (free tier)
- **DB (later):** Supabase
- **Payments (later):** Razorpay
- **AI (later):** Gemini 2.0 Flash with RAG over verified MDX content

## Run locally

```bash
# 1. install deps
npm install

# 2. start dev server
npm run dev

# 3. open
# http://localhost:3000
```

## Build for production

```bash
npm run build
npm run start
```

## Deploy

Push to GitHub. Connect the repo to Vercel. It deploys automatically on every push to `main`.

## Project structure

```
naya-job/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # HTML shell, fonts, metadata
│   │   ├── page.tsx         # Landing page (hero, problem, sample, features, pricing, FAQ, founder note)
│   │   ├── globals.css      # Design tokens + utility classes
│   │   ├── start/page.tsx   # Intake flow (v0.1 stub)
│   │   ├── about/page.tsx   # Founder story + "what we won't do"
│   │   └── not-found.tsx    # 404
│   ├── components/
│   │   ├── Nav.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── tailwind.config.ts       # Custom theme: cream bg, ochre accent, serif display
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## Design principles

1. **Editorial, not SaaS.** Cream paper, serif headlines, restrained ochre accent.
2. **Specific over generic.** Real numbers (₹15,000 lost), real names (Ravi), real places (Hyderabad).
3. **Trust-first.** Every claim cited. Verified-on dates. Founder face. No data sale.
4. **Built in the open.** Data layer eventually open-source on GitHub. Public changelog.
5. **No AI-template aesthetic.** No glassmorphism, no gradient hero, no 3D illustrations, no fake testimonial logos.

## Roadmap

- `v0.1` — Landing page + about + 404 (this commit)
- `v0.2` — Intake flow + rule-based personalization engine + first 5 item pages
- `v0.3` — All 40 item pages in MDX + content review workflow
- `v0.4` — Email + WhatsApp reminder system (Resend + AiSensy)
- `v0.5` — Razorpay paywall + Premium tier
- `v0.6` — RAG chatbot (Gemini Flash + Supabase pgvector)
- `v0.7` — DigiLocker integration for autofill
- `v1.0` — Public launch

## License

Source code: MIT.
Curated content (item guides, sources): CC-BY-4.0 — attribute and use freely.
NayaJob brand and trademarks: all rights reserved.

## Contact

Founder: Syed
Email: hi@nayajob.in
Hyderabad, India.
