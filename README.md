# MANCO.PARIS — Corporate Website Rebuild

Full redesign and migration of [MANCO.PARIS](https://manco.paris), a French AMF-regulated asset management company, from WordPress/Elementor to a modern JAMstack architecture.

**Built by [Jolann Madec](https://github.com/Jolann) — Fullstack Engineer**

![Next.js](https://img.shields.io/badge/Next.js_15-000?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?logo=tailwindcss&logoColor=white)
![Sanity](https://img.shields.io/badge/Sanity_CMS-F03E2F?logo=sanity&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=white)

---

## Context

MANCO.PARIS is a B2B financial services firm (asset management, compliance, risk management) serving fund managers, financial advisors, and institutional investors. The existing WordPress site no longer reflected the company's credibility and needed a ground-up rebuild with a modern stack, bilingual support, and a CMS the team could operate autonomously.

## Key Features

- **Bilingual (FR/EN)** — Full i18n with `next-intl`, locale-based routing (`/fr`, `/en`), and translated content across all pages
- **Headless CMS** — Sanity v3 with embedded studio (`/studio`), structured schemas for publications, team members, and site settings
- **Dynamic Publications** — Filterable blog (articles, interviews, webinars) powered by Sanity with Portable Text rendering
- **Contact System** — Per-section contact modals with dedicated recipients, React Hook Form + Zod validation, Resend email API
- **Scroll Animations** — Framer Motion fade-ins and staggered reveals for a polished, corporate feel
- **GDPR Compliance** — Cookie consent banner, legal notices, regulatory information pages
- **Live Chat** — Crisp integration
- **SEO** — Dynamic sitemap, robots.txt, Open Graph meta tags

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, React 19) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| CMS | Sanity v3 (embedded studio) |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| Email | Resend |
| i18n | next-intl |
| Deployment | Vercel |

## Architecture

```
src/
├── app/
│   ├── [locale]/              # Locale-scoped pages (FR/EN)
│   │   ├── page.tsx           # Homepage with sectioned layout
│   │   ├── publications/      # Blog list + [slug] detail
│   │   ├── mentions-legales/  # Legal notices
│   │   └── informations-reglementaires/
│   ├── api/contact/           # Email sending endpoint
│   └── studio/                # Sanity Studio
├── components/
│   ├── layout/                # Navbar, Footer
│   ├── sections/              # Homepage sections (Hero, Team, SGP, etc.)
│   ├── ui/                    # Reusable primitives (GlassCard, FadeIn, SidePanel)
│   └── integrations/          # Crisp, Cookie banner
├── sanity/                    # Schemas, client, queries
├── i18n/                      # Config, messages, routing
└── data/                      # Static data (team, services, personas)
```

## Running Locally

```bash
npm install
npm run dev
```

Requires environment variables for Sanity and Resend — see `.env.local.example`.

## Screenshots

*Coming soon*

---

> This project was built as a freelance engagement. It demonstrates end-to-end delivery of a production website: from technical architecture and CMS modeling to frontend polish and deployment.
