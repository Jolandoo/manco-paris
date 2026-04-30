# MANCO.PARIS — Modernisation & Migration Next.js

## Contexte

Refonte du site vitrine de **MANCO.PARIS**, société de gestion agréée AMF (GP-21000001), actuellement sous WordPress/Elementor. Migration vers une stack moderne Next.js 15 / TypeScript / Tailwind CSS / Sanity CMS.

Le client est une société B2B de gestion d'actifs financiers. Le ton est **corporate, sobre, crédible** — pas de fantaisie, pas de startup vibes. Le public cible : sociétés de gestion, CGP, investisseurs institutionnels, porteurs de projets.

---

## Stack technique

| Couche | Techno |
|---|---|
| Framework | Next.js 15 (App Router) |
| Langage | TypeScript |
| Styling | Tailwind CSS 4 |
| CMS | Sanity v3 (studio embarqué) |
| Déploiement | Vercel |
| i18n | next-intl (FR/EN) |
| Cookies/RGPD | Tarteaucitron.js (ou CookieYes) |
| Chat support | Crisp (script embed) |
| Formulaires | React Hook Form + validation Zod, envoi via API route (email Resend ou Nodemailer) |

---

## Architecture des pages

### Pages principales (FR + EN mirroir)

1. **Page d'accueil** `/fr` `/en`
   - Hero : baseline + CTA "Contactez-nous"
   - Section carrousel icônes cliquables (9 items) → chaque icône ouvre une modal avec texte + formulaire de contact + photo du contact dédié
   - Section "Porteur de projet" (incubation) — 2 cards + CTA
   - Section "Société de gestion" — 4 sous-services (middle/back office, conformité, risques, reporting) + grille de vidéos témoignages (6 vidéos)
   - Section "Conseiller CGP" — architecture ouverte, 1 vidéo
   - Section "Investisseur institutionnel" — offre + 1 vidéo
   - Section "Équipe" — 3 profils cliquables → overlay/modal avec bio, contacts, LinkedIn
   - Section "Actionnaires" — logos Banque Delubac + Holding BCM
   - Footer — plan du site, coordonnées, liens sociaux, mentions AMF

2. **Publications** `/fr/publications` `/en/publications`
   - Liste filtrable par catégorie : Article / Interview / Webinaire
   - Chaque publication : vignette, titre, date, catégorie, lien vers page dédiée
   - Contenu géré via Sanity CMS

3. **Page publication individuelle** `/fr/publications/[slug]` `/en/publications/[slug]`
   - Titre, date, catégorie, contenu riche (texte, images, vidéos embed)
   - Géré via Sanity (Portable Text)

4. **Mentions légales** `/fr/mentions-legales` `/en/legal`
   - Page de texte statique (RGPD, DPO, cookies, hébergeur)

5. **Informations réglementaires** `/fr/informations-reglementaires` `/en/regulatory`
   - Page de texte statique (politique ESG, SFDR, vote, rémunération)

### Éléments transversaux

- **Navbar** : logo, liens sections (scroll-to sur accueil), lien Publications, switch FR/EN
- **Footer** : plan du site, coordonnées, réseaux sociaux, mention AMF
- **Modal de contact** (composant réutilisable) : prénom, nom, email/téléphone, select motif, textarea message, bouton envoyer. Chaque modal affiche le contact dédié (photo + nom + tél + email)
- **Modal profil équipe** : photo, nom, titre, bio, coordonnées, LinkedIn
- **Widget Crisp** : chat bubble en bas à droite
- **Bandeau cookies** : Tarteaucitron.js

---

## Schémas Sanity CMS

### `publication`
```ts
{
  title: string,           // Titre
  slug: slug,              // URL-friendly
  category: 'article' | 'interview' | 'webinaire',
  publishedAt: datetime,
  locale: 'fr' | 'en',
  thumbnail: image,
  body: portableText,      // Contenu riche
  videoUrl?: url,          // Lien vidéo embed optionnel
}
```

### `teamMember`
```ts
{
  name: string,
  role: string,            // ex: "Président"
  roleEn: string,          // ex: "Chairman"
  photo: image,
  bio: text,
  bioEn: text,
  email: string,
  phone: string,
  phone2?: string,
  linkedin?: url,
  order: number,           // Ordre d'affichage
}
```

### `siteSettings`
```ts
{
  companyName: string,
  address: string,
  phone: string,
  email: string,
  amfNumber: string,
  socialLinks: { linkedin: url, twitter: url },
}
```

---

## Vidéos existantes à intégrer

Les vidéos sont actuellement hébergées en MP4 sur le WordPress. Options :
- **Option A** : les héberger sur Vercel (attention au bandwidth)
- **Option B (recommandé)** : les uploader sur YouTube/Vimeo en non-répertorié et embed via iframe — meilleur pour la perf et le SEO

Liste des vidéos :
1. Témoignage Delubac AM
2. Pourquoi une ManCo — Jérôme Coirier
3. Offre sociétés de gestion — Thomas (conformité)
4. Offre sociétés de gestion — Thomas (comment)
5. Offre risques de marché — André (partie 1)
6. Offre risques de marché — André (partie 2)
7. Reporting — Lou
8. Offre Family/CGP
9. Offre Institutionnels

---

## i18n — Stratégie

- Routing : `/fr/...` et `/en/...` avec `next-intl`
- Contenu statique (hero, titres sections, labels) : fichiers JSON de traduction
- Contenu dynamique (publications, bios) : champ `locale` dans Sanity ou champs dupliqués FR/EN
- Switch langue dans la navbar

---

## Design — Direction

Le site actuel utilise une palette bleu marine (#1a2744 approx.) + blanc + accents bleu clair. Le design est corporate classique.

**Direction pour la refonte :**
- Conserver la palette bleu marine / blanc / bleu clair pour ne pas perdre l'identité
- Moderniser la typographie (remplacer les fonts WordPress par une paire distinctive)
- Aérer les sections, ajouter du whitespace
- Animations subtiles au scroll (fade-in, stagger)
- Cards et modals avec backdrop blur, ombres douces
- Responsive mobile-first
- Le logo existant est conservé tel quel

---

## Formulaires — Logique

Chaque modal de contact possède :
- Champs : Prénom, Nom, Email/Téléphone, Motif (select), Message (textarea)
- Le motif est pré-rempli selon la section d'où le modal est ouvert
- L'envoi déclenche un email au contact dédié (Jérôme, André ou Thomas selon la section)
- Validation côté client (Zod) + API Route Next.js pour l'envoi
- Feedback utilisateur : loading state, message de confirmation, gestion d'erreur

---

## Livrables

1. Site Next.js complet déployé sur Vercel
2. Studio Sanity configuré et accessible au client
3. Intégration Crisp (chat)
4. Intégration Tarteaucitron (cookies RGPD)
5. Formulaires de contact fonctionnels avec envoi email
6. Responsive desktop + tablette + mobile
7. Bilingue FR/EN complet
8. SEO : meta tags, Open Graph, sitemap.xml, robots.txt
9. Documentation d'utilisation Sanity pour le client

---

## Structure de fichiers cible

```
manco-paris/
├── public/
│   ├── images/          # Logo, icônes, photos équipe
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx                    # Accueil
│   │   │   ├── publications/
│   │   │   │   ├── page.tsx                # Liste publications
│   │   │   │   └── [slug]/page.tsx         # Publication individuelle
│   │   │   ├── mentions-legales/page.tsx
│   │   │   └── informations-reglementaires/page.tsx
│   │   ├── api/
│   │   │   └── contact/route.ts            # API envoi email
│   │   └── studio/[[...index]]/page.tsx    # Sanity Studio
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── IconCarousel.tsx
│   │   │   ├── ProjectSection.tsx
│   │   │   ├── AssetManagerSection.tsx
│   │   │   ├── CGPSection.tsx
│   │   │   ├── InstitutionalSection.tsx
│   │   │   ├── TeamSection.tsx
│   │   │   └── ShareholdersSection.tsx
│   │   ├── ui/
│   │   │   ├── ContactModal.tsx
│   │   │   ├── TeamModal.tsx
│   │   │   ├── VideoCard.tsx
│   │   │   ├── PublicationCard.tsx
│   │   │   └── CategoryFilter.tsx
│   │   └── integrations/
│   │       ├── CrispChat.tsx
│   │       └── CookieBanner.tsx
│   ├── sanity/
│   │   ├── client.ts
│   │   ├── schemas/
│   │   │   ├── publication.ts
│   │   │   ├── teamMember.ts
│   │   │   └── siteSettings.ts
│   │   └── queries.ts
│   ├── i18n/
│   │   ├── messages/
│   │   │   ├── fr.json
│   │   │   └── en.json
│   │   └── config.ts
│   └── lib/
│       ├── email.ts                        # Logique envoi email
│       └── utils.ts
├── sanity.config.ts
├── tailwind.config.ts
├── next.config.ts
├── PROJECT_SPEC.md                         # ← Ce fichier
└── package.json
```

---

## Priorités de développement

### Phase 1 — Fondations (Jour 1-2)
- Setup Next.js 15 + TypeScript + Tailwind + next-intl
- Layout global (Navbar + Footer)
- Page d'accueil : Hero + structure sections
- Routing i18n `/fr` `/en`

### Phase 2 — Sections accueil (Jour 3-5)
- Toutes les sections de la page d'accueil
- Composant ContactModal réutilisable
- Composant TeamModal
- Carrousel d'icônes cliquables
- Intégration vidéos (embed YouTube/Vimeo)

### Phase 3 — CMS + Publications (Jour 6-7)
- Setup Sanity v3 + schémas
- Page publications avec filtres
- Page publication individuelle
- Seed du contenu initial

### Phase 4 — Intégrations + Polish (Jour 8-10)
- Formulaires fonctionnels (API route + email)
- Crisp chat widget
- Tarteaucitron cookies
- Pages mentions légales + infos réglementaires
- SEO (meta, OG, sitemap)
- Responsive final
- Animations scroll
- Tests cross-browser
- Déploiement Vercel
