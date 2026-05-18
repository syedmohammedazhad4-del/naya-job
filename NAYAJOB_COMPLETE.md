# NayaJob — The Complete Document

> Everything about NayaJob in one document. Problem, solution, product, market, business model, technical architecture, go-to-market, risks, roadmap, founder.

**Use this for:** college submissions, accelerator applications, investor decks, B2B partnership pitches, hiring conversations, internal reference, future co-founder onboarding.

---

## Contents

1. [One-Sentence Pitch](#1-one-sentence-pitch)
2. [Executive Summary](#2-executive-summary)
3. [The Problem](#3-the-problem)
4. [Why This Problem Exists](#4-why-this-problem-exists)
5. [Why Existing Solutions Fall Short](#5-why-existing-solutions-fall-short)
6. [The Solution: NayaJob](#6-the-solution-nayajob)
7. [Product Walkthrough](#7-product-walkthrough)
8. [The 40-Item Knowledge Base](#8-the-40-item-knowledge-base)
9. [Target Customer](#9-target-customer)
10. [Market Opportunity](#10-market-opportunity)
11. [Business Model & Pricing](#11-business-model--pricing)
12. [Competitive Landscape](#12-competitive-landscape)
13. [Technical Architecture](#13-technical-architecture)
14. [Go-to-Market Strategy](#14-go-to-market-strategy)
15. [Product Roadmap](#15-product-roadmap)
16. [Financial Projections](#16-financial-projections)
17. [Risks & Mitigations](#17-risks--mitigations)
18. [Founder & Vision](#18-founder--vision)
19. [Live Links & Resources](#19-live-links--resources)
20. [Appendix: All 40 Items](#20-appendix-all-40-items)

---

## 1. One-Sentence Pitch

> **NayaJob is a personalized 12-month roadmap that tells every Indian fresh hire exactly what govt + money tasks to do, when, and how — replacing the 14-page HR document, the 47 conflicting Google articles, and the ₹15,000+ "fresher tax" of avoidable mistakes.**

---

## 2. Executive Summary

Every year, **1.5 million Indians in their early 20s take their first formal job.** They sign 14 pages of HR paperwork they don't understand, pick the wrong tax regime, fail to activate UAN, skip independent health insurance, miss ITR deadlines, and silently pay an invisible "fresher tax" of **₹20,000–₹80,000 in their first year alone.**

This isn't because they're lazy. The information exists but is fragmented across 200+ government and finance sites, written in legalese, often outdated, never personalized.

**NayaJob fixes this with a guided, personalized to-do list for the first 12 months of working life.**

- **60-second intake** → 4 questions
- **30–40 ranked action items** → grouped by urgency
- **Step-by-step guides** → 5 steps max, sources cited, dated
- **WhatsApp + email reminders** → never miss a deadline
- **AI assistant** → grounded in verified content, no hallucination
- **₹399 one-time** → lifetime access for year one

**Stack:** Next.js 14 + Tailwind + Supabase + Gemini Flash. Solo founder. Built in Hyderabad. Already live in v0.2 at `https://syedmohammedazhad4-del.github.io/naya-job/`.

**5-year revenue potential: ₹50–200 cr ARR** across B2C (₹399 freshers), B2B (HR partnerships at IT companies), and adjacent expansion (Settled Earner product for 25–32-year-olds).

---

## 3. The Problem

### 3.1 Who is affected — a real person

> **Ravi, 22, from Warangal. Graduated from JNTU. Got placed at TCS in May 2026. Moving to Hyderabad. CTC ₹4.5 LPA.**
>
> *He has never filed a tax return, heard of Form 12BB or UAN, understood his salary breakup, bought independent health insurance, linked PAN with Aadhaar, or made a rent agreement.*

Ravi is not unusual. **He is the median fresh hire in Indian IT.** Multiply him by ~1.5 million per year.

### 3.2 What goes wrong (the real costs)

In his first 12 months of working, the median Ravi will:

| Mistake | Annual cost |
|---|---|
| Pick New tax regime by default when Old saves ₹15k with HRA + 80C | **₹15,000** |
| Forget Form 12BB → excess TDS for 6 months → refund stuck for a year | Cash flow stress |
| Not activate UAN → PF inaccessible, can't transfer on job switch | Compounded loss for career |
| Skip independent health insurance → mom needs surgery during a job gap | **Catastrophic** |
| Miss 31 July ITR deadline | ₹1,000–5,000 fine + interest |
| Forget to e-verify ITR within 30 days → filing invalid → notice in October | Stress + notice |
| Pay credit card "minimum due" → 40% interest builds quietly | ₹10,000+ |
| Not collect rent receipts → loses HRA exemption | **₹30,000–₹60,000** |
| Not update Aadhaar address → KYC fails on bank, mobile, scheme verification | Operational chaos |
| Get wrong professional tax deduction → can't claim under Sec 16 | ₹500–₹2,000 |
| Doesn't open NPS in high-CTC band → loses ₹50k extra deduction headroom | ₹15,000 (at 30% slab) |

**Total invisible cost of fresher confusion in year 1: ₹20,000–₹80,000.**
**Compounded over a career: lakhs.**

### 3.3 The qualitative pain

- **Anxiety** — *"Am I supposed to do something now?"*
- **Time wasted** — *"I've read 12 articles on this and they all say different things."*
- **Family pressure** — *"Beta, did you submit the form?"* (parent doesn't know which form)
- **Avoidable compounding** — a missed step in month 1 creates a problem in month 11
- **Survivor bias** — *"My colleague figured it out, so it must be doable"* (no, they had a CA uncle)

---

## 4. Why This Problem Exists

Five compounding factors:

### 4.1 Government systems are functional but UX-hostile
EPFO, Income Tax Dept, UIDAI portals work — but are designed for compliance officers, not 22-year-olds. Jargon, dropdowns four levels deep, error messages in officialese.

### 4.2 HR onboarding is paperwork, not pedagogy
The "joining kit" is a 14-page PDF designed to protect the company legally, not educate the employee. Nobody reads it. Nobody is meant to.

### 4.3 Indian families' knowledge doesn't transfer
The previous generation worked in PSUs, govt, or family businesses. They know FD interest, agriculture income, gold loans. They don't know HRA exemption rules for a software engineer renting in Madhapur.

### 4.4 Education ignores this entirely
4 years of engineering at JNTU teaches no tax, no insurance, no investing, no docs. The first salary lands and the person is alone with the system.

### 4.5 The internet has failed this demographic specifically
| Source | Problem |
|---|---|
| Govt sites | Technically correct, UX-broken |
| Finance YouTubers | Entertainment-grade, not action-grade |
| SEO content farms | Low quality, often outdated, conflicting |
| CA blogs | Behind paywalls or assume prior knowledge |
| General AI chatbots | Hallucinate confidently on Indian tax/govt rules |

The result: **every fresher solves the same 40 problems alone, painfully, with avoidable mistakes.**

---

## 5. Why Existing Solutions Fall Short

| Product | What it does | Why it doesn't solve this |
|---|---|---|
| **ClearTax / TaxBuddy** | ITR filing | ITR is item #29 of 40. Doesn't help with the 28 things before. |
| **myScheme.gov.in** | Aggregates 3,000+ schemes | Discovery-only. Not personalized for working professionals. No deadlines, no reminders. |
| **Groww / Zerodha** | Investing platforms | Assumes you already know what + when to invest. |
| **Policybazaar** | Insurance comparison | Single-product. Doesn't help with the other 39 items. Commission-driven. |
| **HR onboarding docs** | Legal paperwork | Designed for HR's protection, not employee learning. |
| **YouTube finance influencers** | Education content | Doesn't translate to "do THIS by THIS date for YOUR situation." |
| **General AI chatbots** | Conversational | Hallucinate on Indian tax/govt rules — worst possible domain. |
| **CAs / friends** | Personalized advice | Slow, gatekept, expensive (₹3k–15k consult). Not scalable. |

**The gap:** no product *coordinates* the action items, *personalizes* them, *grounds* answers in verified sources, and *follows through* with reminders.

That gap is the product.

---

## 6. The Solution: NayaJob

NayaJob is a **personalized 12-month roadmap** for the first year of working life in India.

### 6.1 What you get

| | Free | Premium (₹399 one-time, lifetime for year 1) |
|---|---|---|
| Personalized roadmap | ✅ | ✅ |
| All 40 item guides | ✅ text | ✅ + screenshots + templates |
| Email reminders | ✅ basic | ✅ smart-timed |
| AI assistant | 5 questions/mo | Unlimited |
| WhatsApp reminders | ❌ | ✅ |
| Done-for-you templates | ❌ | ✅ (rent agreement, HRA declaration, resignation letter, ITR walkthrough video) |
| Priority email support | ❌ | ✅ (24-hour response) |
| 30-day money-back guarantee | n/a | ✅ |

### 6.2 The core promise

**"₹399 to avoid even ONE wrong tax-regime call (~₹15,000 lost). No-brainer."**

### 6.3 What we deliberately don't do

- ❌ File your ITR for you (ClearTax does this; we tell you how)
- ❌ Sell you specific stocks, mutual funds, or insurance products (no commissions)
- ❌ Replace a CA for complex tax cases (we route you to one if needed)
- ❌ Make general financial chitchat with a hallucinating chatbot
- ❌ Sell your data, ever

---

## 7. Product Walkthrough

The complete user journey, end to end:

### Step 1 — Landing page
One sentence: *"The govt + money checklist no one told you about when you started your first job."*
One button: **Get my roadmap → free.**

### Step 2 — 60-second intake (4 questions)
1. When are you joining your first job?
2. CTC band (₹3–5L, 5–8L, 8–12L, 12–20L, 20L+)
3. Which city?
4. Living situation (alone / shared / with parents)

No login. No email yet. Answers stored in browser localStorage.

### Step 3 — Personalized roadmap generated
Rule-based engine filters 40 items → ~28–34 relevant to this profile, sorted by urgency:

| Urgency | Sample items |
|---|---|
| 🔴 **Do this week** (5–7 items) | PAN-Aadhaar link, UAN activation, Form 12BB, tax regime choice, nominee setup |
| 🟡 **Do this month** (8–12 items) | Independent health insurance, rent agreement, salary account, emergency fund |
| 🟢 **Do this year** (12–16 items) | ITR filing, 80C top-up, NPS, Form 16 review |
| ⚪ **Situational** (3–6 items) | DL state transfer, lost PAN replacement, PF transfer on job switch |

Progress bar at top. "Edit answers" link to re-run.

### Step 4 — Item detail page
Each item is a complete guide:
- Why it matters (1–2 plain-English sentences)
- 3–5 step how-to
- Documents needed
- Deadline
- Link to the official government source
- "Verified as of [date]" stamp
- Mark-as-done toggle
- Ask AI a follow-up button

### Step 5 — Mark as done
Single click toggles a checkmark. Progress bar updates instantly across all pages. State persists in localStorage (v0.2) → Supabase (v0.5+).

### Step 6 — Reminders
3 days before a deadline, the user gets:
- **Free:** email with the link to the guide
- **Premium:** WhatsApp message via Business API

### Step 7 — AI assistant
User asks a follow-up question. Backend (v0.5+):
1. Embeds the question (Gemini)
2. Retrieves top-3 relevant items via Supabase pgvector
3. Sends question + retrieved context to Gemini Flash with strict system prompt: *"Answer ONLY from this context. Cite source. If not in context, say 'I don't know' and link to official portal."*

**Result:** an AI that's expert on these 40 things and refuses to invent answers.

### Step 8 — Sources & changelog (public)
- `/sources` lists every cited govt portal per item
- `/changelog` lists every content change with date

This is the trust layer.

---

## 8. The 40-Item Knowledge Base

The product *is* the content. The 40 items live in `src/data/items.ts`, versioned in git, reviewed monthly.

### Structure of each item

```typescript
{
  slug: "uan-activation",
  title: "Activate your EPF UAN",
  category: "pf",
  urgency: "this-week",
  whyShort: "Your employer auto-creates a UAN, but you can't see, transfer, or withdraw your PF until you activate it online.",
  whyLong: "Every month 12% of your basic salary goes into EPF, matched by another 12% from your employer...",
  steps: [
    "Find your UAN on your salary slip (look for 'UAN' or 'PF Account No.').",
    "Go to unifiedportal-mem.epfindia.gov.in → 'Activate UAN'.",
    "Enter UAN, name, DOB, mobile, Aadhaar, PAN.",
    "Generate OTP, set a strong password.",
    "Log in and verify name + DOB are correct."
  ],
  documents: ["UAN number", "Aadhaar", "PAN", "Aadhaar-linked mobile"],
  deadline: "Within 30 days of joining.",
  sourceTitle: "EPFO — Member Portal",
  sourceUrl: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/",
  verifiedAt: "2026-04-27",
  appliesIf: (p) => true,
}
```

See the [Appendix](#20-appendix-all-40-items) for the full list of 40 items.

---

## 9. Target Customer

### 9.1 Primary persona (Phase 1)

- **Age:** 21–24
- **Status:** Joined first job in last 12 months OR joining in next 60 days
- **CTC:** ₹3–15 LPA
- **Industry:** IT, tech, services, consulting, BFSI (urban, English-comfortable)
- **Location:** Metros, often relocated from hometown
- **Has:** Smartphone, bank account, salary, WhatsApp, LinkedIn

### 9.2 Phase 1 city focus: Hyderabad

**Why Hyderabad first:**
- Founder lives here, can validate locally
- ~150,000–200,000 fresh tech hires/year (TCS, Infosys, Wipro, Cognizant, Tech Mahindra, Microsoft, Amazon, Google, Salesforce campus hires)
- Direct first-customer network (engineering colleges: JNTU, IIIT-H, BITS Hyd, VNR, CBIT, MGIT, GRIET, Vasavi)
- State-specific items work (Telangana Professional Tax ₹200/mo, TS Police tenant verification portal)
- Telugu-second-language nuance (founder fluent)

### 9.3 Phase 2+ personas

- **Non-IT freshers** (manufacturing, BFSI, healthcare entrants) — same product, different items
- **Govt employees** joining — different items (pension, GPF, leave rules)
- **Freelancers / consultants** in their 20s (presumptive taxation, GST registration)
- **Phase 2 product:** "Settled Earner" for 25–32-year-olds (marriage, home loan, kids' insurance)

---

## 10. Market Opportunity

### 10.1 Volume

| Segment | Annual size |
|---|---|
| Indians entering formal employment per year | **~1.5M** |
| In IT/services/BFSI (direct addressable) | **~1M** |
| In Hyderabad alone | **~150–200k** |

Sources: EPFO Annual Report 2023–24, NASSCOM India Tech Talent Outlook, MeitY Skill Development data.

### 10.2 TAM / SAM / SOM

| | India | Logic |
|---|---|---|
| **TAM** (total addressable) | ₹600 cr | 1.5M freshers × ₹399 × 100% adoption |
| **SAM** (serviceable addressable) | ₹400 cr | 1M IT/BFSI × ₹399 × 100% |
| **SOM** (5-yr realistic) | **₹50–200 cr ARR** | Mix of B2C + B2B + Phase 2 expansion |

### 10.3 Why this market is enterable now

- AI infrastructure has made content-grounded chatbots cheap (₹0–₹100/mo at startup scale)
- Indian digital govt rails (DigiLocker, Aadhaar e-KYC, UPI mandates) make verification + payments frictionless
- Solo founders can build + ship full products in days (this v0.2 was built that way)
- Trust-first content brands are winning over commission-driven aggregators (see: Ditto, Zerodha)
- Personal finance literacy is rising in 20-somethings (post-COVID inflection)

---

## 11. Business Model & Pricing

### 11.1 Three revenue streams

**B2C (immediate)**
- **Free:** roadmap + guides + email reminders
- **Premium ₹399 one-time:** lifetime access for first job year — WhatsApp, AI, templates, support
- Goal: 5–10% conversion of free users to paid

**Add-ons (months 3+)**
- ₹999 — ITR filing assistance via CA partner (we take ₹200 cut)
- ₹499 — Rent agreement + police verification kit
- ₹999 — PF transfer / FNF dispute help

**B2B (year 2+)**
- ₹50–₹100 per fresher onboarded for IT companies' HR teams
- White-label option for HR portals
- TCS hires ~40,000 freshers/year. 5% partnership at ₹75/fresher = **₹15 lakh/year per such client**
- 5 such partnerships = **₹75 lakh ARR** at near-100% margin

### 11.2 Why ₹399 one-time, not ₹99/month

- Lower psychological friction (no recurring anxiety, one click)
- Premium covers first job year — the natural product lifecycle
- After year 1, graduate to a different product ("Settled Earner")
- Higher LTV per conversion (₹399 > ₹99 × avg retention)
- Easier marketing math (acquisition cost vs lifetime value clearer)

### 11.3 Unit economics

| Metric | Conservative |
|---|---|
| Premium price (avg) | ₹399 |
| Razorpay fees | ~2% = ₹8 |
| AI cost per user / month | ~₹1 |
| Net per paid user | **~₹385** |
| CAC (organic in year 1) | ~₹0–50 |
| Gross margin | >95% |

This is software-margin economics on a fully digital product.

---

## 12. Competitive Landscape

| Competitor | Their wedge | Our differentiator |
|---|---|---|
| **ClearTax** | ITR filing + 80C tax tools | Covers post-ITR. We cover the 28 things before, with personalization. |
| **myScheme.gov.in** | Govt scheme discovery | They list 3,000 schemes. We curate 40 actions per first-jobber. |
| **Khyaal** | Senior-focused finance app | Different demographic. |
| **1% Club** | Premium personal finance education | Education ≠ action. We do action, not courses. |
| **Beyondinvesting / Wint Wealth** | Investing platforms | Single-product. We coordinate the system. |
| **CashRoute / Borderless** | Cross-border banking for NRIs | Different demographic. |
| **Razorpay X Payroll / Niyo Money / Fi** | Salary account + spend apps | They serve the salary; we serve the bureaucracy. |

### Why funded competitors won't kill us

- **ClearTax** is anchored on filing software for CAs and SMEs — fresher-onboarding doesn't fit their go-to-market
- **myScheme** is a govt portal — they don't optimize for UX or do reminders
- **Funded fintechs** make commissions on insurance/investing — they can't be unbiased advisors

**Our moat is the curated content + the founder's specific demographic access, not the technology.** Anyone can build a Next.js app in two weeks. Reproducing 40 items, dated, sourced, monthly-reviewed, with a 22-year-old's voice — that takes years.

---

## 13. Technical Architecture

### 13.1 Stack (v0.2 — current)

| Layer | Pick | Why |
|---|---|---|
| Framework | Next.js 14 (App Router) | Static export + SSR-ready when needed |
| Language | TypeScript (strict) | Type safety, refactor-ability |
| Styling | Tailwind CSS | Speed + custom design tokens |
| Fonts | Inter + Fraunces (next/font/google) | Editorial, not template-y |
| Hosting | GitHub Pages | Free, public, 50ms loads |
| State | localStorage | Zero backend cost while validating |
| Search | Custom keyword + scoring (no deps) | Fast, no API key, honest |
| CI/CD | GitHub Actions | Auto-deploy on push to main |

**Total monthly cost: ₹0.**

### 13.2 Stack (v0.5+ — full product)

| Layer | Pick | Cost |
|---|---|---|
| Hosting | Vercel | ₹0 hobby tier, ₹1,700/mo Pro |
| Database | Supabase (Postgres + auth + RLS + pgvector) | ₹0–₹2,000/mo |
| Email | Resend | ₹0–₹1,500/mo |
| WhatsApp | AiSensy or Gupshup | ₹2,500–₹5,000/mo |
| AI | Gemini 2.0 Flash via Google AI Studio | ₹0 for first 50k chats, then ~₹10/100k chats |
| Payments | Razorpay | 2% transaction fee |
| Analytics | PostHog | ₹0 hobby tier |
| Errors | Sentry | ₹0 hobby tier |
| Domain | nayajob.in | ₹800/yr |

**Total at 1,000 paying users / month: ~₹6,000/mo. Net margin still >95%.**

### 13.3 Why this stack

- No exotic tech — all standard, well-documented, hireable for
- All cloud-native — no servers to maintain
- All scale-to-zero — costs only when used
- All swappable — Gemini → Claude → GPT in 5 minutes if needed
- All Indian-compliant — Supabase ap-south-1, payments via India-licensed Razorpay

### 13.4 Why the AI choice is RAG, not custom training

The content is the moat, not the model. Custom training a 1B+ parameter model for 40 items would:
- Cost ₹40k–₹4L in compute
- Take 4–8 weeks
- Produce worse output than off-the-shelf frontier models
- Lock us to one model

RAG over Gemini Flash gives us frontier quality at near-zero cost, swappable in minutes. See ["Should I train a custom agent?" decision in chat transcripts.]

---

## 14. Go-to-Market Strategy

### 14.1 First 1,000 users (60-day plan)

**Days 1–15: 0 → 100 users**
- Personal LinkedIn launch post with founder story
- WhatsApp 50 batchmates personally
- Post in 5 college Telegram/WhatsApp groups (BITS Hyd, IIIT-H, JNTU, VNR, Osmania)
- Reach out to 3 college placement officers
- 5 Reddit comments/day on r/IndianWorkplace, r/developersIndia, r/Hyderabad

**Days 16–30: 100 → 300 users**
- Daily LinkedIn post (one specific tip per day)
- Quora answers (3/day on first-job questions, SEO juice)
- 1 Reddit story post per week
- Twitter/X presence

**Days 31–45: 300 → 600 users + first paid**
- Launch ₹399 tier
- 5 micro-influencer collabs (CA students, finance YouTubers)
- Cold email 20 mid-size IT company HR teams
- Referral program: refer 3 friends → free upgrade

**Days 46–60: 600 → 1,000 users**
- 2–3 college placement cell partnerships signed
- 1 corporate HR partnership (200–500 freshers added at once)
- SEO starts compounding — long-tail keywords ranking
- First 30–50 paid customers

**Total marketing spend to reach 1,000 users: under ₹15,000.**

### 14.2 Distribution channels (ranked by ROI)

1. **LinkedIn organic** — founder posts daily, peers engage
2. **College partnerships** — placement cells distribute as freebie to placed students
3. **Reddit + Quora** — value-first content, links in bio
4. **B2B HR partnerships** — biggest unlock at year 2+
5. **SEO** — long-tail keywords like "how to activate UAN", "professional tax Telangana"
6. **Referrals** — paid users get free upgrade for 3 friend signups
7. **Paid ads** — NOT in year 1. Organic only.

### 14.3 Why founder-led GTM works here

- **Founder is the customer** — your story is the marketing
- **Direct network access** — 5,000 batchmates in this exact demographic
- **Locality advantage** — Hyderabad first, can validate face-to-face
- **Age congruence** — peers trust peers, not 35-year-old finfluencers
- **Speed** — no marketing budget approval, no marketing team

---

## 15. Product Roadmap

| Version | Ships | What's in it |
|---|---|---|
| **v0.1** ✅ | Apr 2026 | Landing page + scaffolding + auto-deploy to GitHub Pages |
| **v0.2** ✅ | Apr 2026 | Working intake → roadmap engine + all 40 item pages + smart search + trust pages |
| **v0.3** | Jun 2026 | Old vs New regime toggle in intake. Deadline calendar view. Email reminders via Resend. |
| **v0.4** | Jul 2026 | Supabase backend. Real user accounts. Migrate localStorage state. |
| **v0.5** | Aug 2026 | Razorpay paywall. Premium tier. Gemini Flash + RAG chatbot. |
| **v0.6** | Sep 2026 | WhatsApp reminders via AiSensy. Done-for-you templates downloadable. |
| **v0.7** | Oct 2026 | DigiLocker auto-fill for PAN/Aadhaar. Mobile PWA polish. |
| **v0.8** | Nov 2026 | B2B HR partnership portal — bulk fresher onboarding. |
| **v1.0** | Dec 2026 | Public marketing launch. Domain nayajob.in. Custom OG images. Press push. |
| **v2.x** | 2027 | "Settled Earner" product line for 25–32 demographic |
| **v3.x** | 2028 | "Mid-career navigator" |

### 15.1 Long-term vision

NayaJob is the **Life Operating System for the first 15 years of working life in India.**

- **v1 (year 1):** First-job kit — 40 items
- **v2 (year 2):** "Settled Earner" — marriage, home loan, kids' education, parents' insurance
- **v3 (year 3):** "Mid-career navigator" — job switches, freelance, retirement
- **v4 (year 5):** End-to-end financial + bureaucratic OS

End state: one product a 21-year-old installs once, which guides their life for 15 years.

---

## 16. Financial Projections

### 16.1 Realistic curve (B2C only)

| Month | Free signups (cumulative) | Paid customers | Monthly revenue | Total revenue |
|---|---|---|---|---|
| 1 | 100 | 3 | ₹1,200 | ₹1,200 |
| 3 | 700 | 50 | ₹20,000 | ₹35,000 |
| 6 | 3,000 | 250 | ₹100,000 | ₹3,00,000 |
| 12 | 12,000 | 1,500 | ₹6,00,000 | ₹15,00,000 |
| 18 | 30,000 | 4,000 | ₹16,00,000 | ₹50,00,000 |
| 24 | 60,000 | 9,000 | ₹36,00,000 | ₹1,50,00,000 |

Assumptions:
- Conversion: 5% free → paid (improves over time)
- Avg ₹399 per paid user (lifetime, year 1)
- Organic growth in year 1; modest paid in year 2

### 16.2 With B2B (year 2+)

5 HR partnerships at year 2 → **₹75 lakh ARR** added on top of B2C.
**Year 2 total: ₹2.25 cr ARR realistic.**
**Year 3 total: ₹5–8 cr ARR realistic.**

### 16.3 Costs

| Year | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| Hosting / infra | ₹50k | ₹2L | ₹6L |
| AI / WhatsApp | ₹30k | ₹3L | ₹10L |
| Founder living (Hyderabad) | ₹3L | ₹4L | ₹5L |
| First hire (year 2) | — | ₹4L | ₹8L |
| Marketing | ₹50k | ₹3L | ₹15L |
| **Total** | **₹4.3L** | **₹16L** | **₹44L** |

### 16.4 Profitability

**Bootstrappable from month 6.** No external funding required for v1.0. Investors optional in year 2 for B2B sales acceleration.

---

## 17. Risks & Mitigations

| # | Risk | Mitigation |
|---|---|---|
| 1 | **Tax / govt rules change yearly** | Monthly content review ritual. "Verified as of" stamp. Major changes (Budget, EPFO circulars) trigger same-day updates + reminder blasts. Public changelog. |
| 2 | **ClearTax / 1% Club expands into onboarding** | Speed. Brand of "made for first-jobbers" specifically. Multi-language. Open data attracts community. |
| 3 | **Govt launches a competing portal** | Unlikely to do UX well. We compete on craft. |
| 4 | **Liability for wrong info** | Disclaim ("informational, not legal/tax advice"). Cite sources. 24-hour fix policy. |
| 5 | **Founder boredom (40 items isn't a lifetime of content)** | Planned Phase 2 product. B2B partnerships keep founder engaged with customer-facing work. |
| 6 | **Distribution monoculture** | Diversify across LinkedIn, Reddit, SEO, B2B, college partnerships. |
| 7 | **AI hallucination** | Strict RAG with system prompt: "Answer ONLY from provided context." Test suite of trick questions. |
| 8 | **Trust collapse from one wrong answer** | Open data, fast-fix culture, transparent versioning. |
| 9 | **Solo founder burnout** | Hard cap on customer support hours. First hire (ops associate) at 1,000 paid users. |
| 10 | **Razorpay/Supabase outage** | Standard SaaS redundancy. Status page. Communication template ready. |

---

## 18. Founder & Vision

### 18.1 Who

**Syed Mohammed Azhad** — 22, engineer, Hyderabad.

### 18.2 Why me

1. **I am the customer.** I lived this problem in the last 12 months.
2. **Direct network access.** ~5,000 of my college batch + 1-degree network are the exact target customer.
3. **Technical execution.** This v0.2 was scaffolded and shipped in days, not months. I can build, design, and write content solo.
4. **Locality.** I'm in Hyderabad. I know the Telangana ecosystem, language nuance, college network, IT corridor.
5. **Voice.** A 22-year-old explaining tax to a 22-year-old beats a 35-year-old CA explaining tax to a 22-year-old. Trust comes from peer-likeness.

### 18.3 Why not someone else

Most first-job confusion startups are built by 30+ year old founders with healthcare/insurance backgrounds. They optimize for compliance, not for a fresher's voice. They have funding but the wrong founder-market fit. I have the opposite — perfect founder-market fit, no funding. The product proves the founder-market fit is more valuable.

### 18.4 What I need to win

- 18 months of focused execution
- ₹4–5L runway (covered by living modestly + first revenue arriving month 3–6)
- One ops associate hire at month 12 (₹15k/mo)
- No investor money in year 1; option to raise in year 2 to accelerate B2B

---

## 19. Live Links & Resources

| What | URL |
|---|---|
| 🟢 **Live product (v0.2)** | https://syedmohammedazhad4-del.github.io/naya-job/ |
| 💻 **Source code** | https://github.com/syedmohammedazhad4-del/naya-job |
| 📄 **Problem statement (short)** | [PROBLEM_STATEMENT.md](./PROBLEM_STATEMENT.md) |
| 📄 **Complete document (this)** | [NAYAJOB_COMPLETE.md](./NAYAJOB_COMPLETE.md) |
| 🛣️ **Roadmap / Changelog** | https://syedmohammedazhad4-del.github.io/naya-job/changelog/ |
| 📚 **Cited sources** | https://syedmohammedazhad4-del.github.io/naya-job/sources/ |
| 📧 **Contact** | hi@nayajob.in (to be set up) |

---

## 20. Appendix: All 40 Items

### Pre-joining & joining (Month 0–1) — 10 items
1. Link your PAN with Aadhaar
2. Confirm your PAN is active (not inoperative)
3. Activate your EPF UAN
4. Seed your UAN with Aadhaar + PAN + bank account
5. Submit Form 12BB (investment declaration) to HR
6. Choose: Old vs New tax regime
7. Decode every line on your first salary slip
8. Set up your salary account properly (and a separate savings account)
9. Set nominees on EPF, salary acc, savings, insurance
10. Calculate your real in-hand salary (vs CTC theatre)

### Settling in (Month 2–4) — 10 items
11. Buy independent health insurance (don't rely only on employer cover)
12. Buy term life insurance — only if someone depends on you
13. Build a ₹50,000 emergency fund (3 months of expenses)
14. Start one ELSS SIP for tax saving (80C)
15. Get your first credit card — the boring, responsible way
16. Get a proper rent agreement (with police verification)
17. Set up monthly rent receipts + HRA proof file
18. Understand your state's Professional Tax
19. Update your address on Aadhaar (if relocated)
20. Transfer your Voter ID to your new city

### Mid-year (Month 5–9) — 8 items
21. Run a mid-year tax projection (are you on track?)
22. Top up your 80C if under-invested
23. Open NPS for the extra ₹50,000 deduction (80CCD-1B)
24. Submit rent receipts + HRA proof to HR
25. Submit insurance + investment proofs to HR (80C, 80D)
26. Read your Form 16 like a tax person, not a confused fresher
27. Set up your first non-tax-saving SIP (index fund)
28. Do a preventive health checkup (claim ₹5,000 under 80D)

### Pre-ITR (Month 10–12) — 6 items
29. Download Form 26AS + AIS before filing ITR
30. Pick the right ITR form (most freshers = ITR-1)
31. File your first ITR
32. E-verify your ITR within 30 days
33. Track your tax refund (and chase if delayed)
34. Transfer (don't withdraw) your PF when you switch jobs

### Situational — 6 items
35. Transfer your driving licence to your new state
36. Update mobile number / email on Aadhaar
37. Replace lost / damaged PAN
38. Replace lost Aadhaar (and download e-Aadhaar)
39. Police verification as a tenant
40. Transfer gas / electricity / water in your name

**Full structured data with steps, deadlines, and sources lives in [`src/data/items.ts`](./src/data/items.ts).**

---

## Closing

This document is the source of truth for NayaJob as of **v0.2, May 2026.** It will be updated alongside the product. Every major change lands in the [Changelog](https://syedmohammedazhad4-del.github.io/naya-job/changelog/).

For any question this document doesn't answer: **hi@nayajob.in**.

Built in Hyderabad. For India's first-time earners. Made by an engineer who needed it himself.

*— Syed Mohammed Azhad*
