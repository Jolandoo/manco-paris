# Handoff: MANCO.PARIS — Refonte Homepage (Direction C · Conversational)

## Overview

Refonte de la homepage de **MANCO.PARIS**, société de gestion d'actifs financiers agréée AMF basée à Paris. Migration depuis WordPress (site actuel : https://manco-paris.com/fr/) vers une stack **Next.js + Tailwind CSS**.

La direction graphique retenue est **C — Conversational** : un hero qui pose la question (« Quelle est *votre* question ? »), une grille 3×3 stricte de 9 questions business cliquables, des sections personas en 4 colonnes verticales, et une approche pédagogique guidée. Le tout en thème dark anthracite avec accent ice blue (#7DD3FC) et typographie Instrument Serif × Manrope × JetBrains Mono.

## About the Design Files

Les fichiers de ce bundle sont des **références de design créées en HTML/JSX** — des prototypes qui montrent l'apparence et les comportements visés, **pas du code de production à copier tel quel**. Le travail consiste à **recréer ces designs en Next.js + Tailwind CSS** en suivant les patterns établis du codebase cible (App Router, Server Components quand pertinent, composants shadcn/ui ou équivalent, etc.).

Les inline styles utilisés dans les `.jsx` sont là parce que le proto tourne en Babel-in-browser sans build — ne pas les porter tels quels. Tout doit être migré en classes Tailwind / CSS modules selon ta convention.

## Fidelity

**High-fidelity (hifi)** : couleurs finales, typographie finale, spacings finaux, interactions finales. Le développeur doit recréer l'UI à pixel près, en utilisant Tailwind et les composants existants du projet.

Une seule chose est en *placeholder* visuel : le **contenu textuel** (questions, descriptions, bios équipe). C'est du remplissage plausible — le vrai contenu sera fourni par le client lors de l'implémentation.

## Screens / Views

C'est une **single-page** (homepage), divisée en sections verticales scrollables :

### 1. Navbar (sticky)
- **Layout** : flex space-between, padding `20px 48px`, sticky top, fond `#1A1A1A` avec `backdrop-filter: blur(12px)` et bordure bottom `1px solid #3A3A3A`
- **Gauche** : logo MANCO.PARIS (le client a son propre logo — ne pas redessiner, conserver l'asset existant)
- **Centre/droite** : liens nav (Équipe, Incubation, Sociétés de gestion, Family Office, Institutionnels, Publications) — `Manrope 13px / weight 500`, couleur `#B0B0B0`, hover `#FFFFFF` (transition `160ms`)
- **Droite extrême** : switch FR/EN — pill border `1px solid #3A3A3A`, padding 3, radius 999. Active = fond `#FFF` texte `#1A1A1A`. Inactive = couleur `#B0B0B0`. Font `JetBrains Mono 11px`.
- **Mobile** : burger menu (à implémenter — proto desktop seulement)

### 2. Hero
- **Layout** : centré, padding `110px 48px 90px`, fond `radial-gradient(900px 500px at 50% 0%, #7DD3FC18, transparent 60%)` sur `#222222`, grille de fond `80px×80px` avec mask radial
- **Eyebrow** : pastille verte `#7DD3FC` (8px, glow `box-shadow: 0 0 16px #7DD3FC`) + texte mono « PARIS · AGRÉÉE AMF » (`JetBrains Mono 11px`, `letter-spacing: 0.18em`, couleur `#B0B0B0`)
- **Titre H1** : « Quelle est *votre* question ? » — `Instrument Serif`, `clamp(44px, 5.8vw, 88px)`, weight 400, line-height 0.95, letter-spacing `-0.03em`. Le mot **votre** est en `<em>` italique couleur accent `#7DD3FC`.
- **Sous-titre** : « Nous prenons en charge toutes les activités liées au fonctionnement quotidien de la gestion de fonds. » — `Manrope 17px`, line-height 1.5, couleur `#B0B0B0`, max-width 600px, centré
- **CTAs** : 2 boutons côte à côte
  - Primaire « Contactez-nous → » : fond `#7DD3FC`, texte `#1A1A1A`, padding `16px 28px`, radius 999, weight 600, `box-shadow: 0 8px 32px -8px #7DD3FC88`
  - Secondaire « ↓ Explorer » : transparent, border `1px solid #555555`, texte `#FFFFFF`, weight 500

### 3. Grille 3×3 questions
- **Layout** : `grid-template-columns: repeat(3, 1fr)`, gap 16px, max-width 1240px, padding `120px 48px`, fond `#222222`
- **Card** : 
  - Fond `linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))`
  - Border `1px solid #3A3A3A` (hover : `#555555`)
  - Radius 14px, padding 28px, min-height 240px
  - Hover : `translateY(-2px)`, `box-shadow: 0 16px 48px -16px rgba(0,0,0,0.6)`, transition 240ms
  - **Top** : flex space-between
    - Cercle icône 52×52, border `1px solid #555555` (hover `#7DD3FC`), glyphe `Instrument Serif 26px` couleur accent
    - Label catégorie mono uppercase 10px couleur `#7A7A7A`
  - **Middle** : titre `Instrument Serif 24px`, weight 400, letter-spacing `-0.015em`, line-height 1.15
  - **Bottom** : « → ouvrir le panel » mono 11px, couleur `#B0B0B0` → `#7DD3FC` au hover
- **Click** : ouvre `SidePanel` à droite (voir section Interactions)

### 4. Personas en 4 colonnes
- **Layout** : padding `120px 48px`, fond `#2D2D2D`, max-width 1240px
- **Eyebrow** : « — 02 / VOTRE PROFIL » mono 11px couleur accent letter-spacing 0.18em
- **Titre** : « Qui *êtes-vous* ? » — `Instrument Serif clamp(40px, 5vw, 68px)`, italique sur « êtes-vous » couleur accent
- **Grille** : `grid-template-columns: repeat(4, 1fr)`, gap 16px
- **Card persona** :
  - Fond glass identique à la grille questions, border `1px solid #3A3A3A`, radius 14px, padding 28px, min-height 320px
  - **Top** : numéro `02`/`03`/`04`/`05` en `Instrument Serif italic 56px` couleur accent
  - **Middle** : titre `Instrument Serif 26px` (Porteur de projet, Société de gestion, Conseiller CGP, Institutionnel)
  - Sous-titre `Manrope 14px` couleur `#B0B0B0`
  - **Bottom** : bouton « → détails » outline border `1px solid #555555`, padding `8px 14px`, radius 999, weight 500

### 5. Détail SGP (4 piliers + 6 témoignages)
- **Layout** : padding `120px 48px`, fond `#222222`
- **Eyebrow** : « — DÉTAIL · SOCIÉTÉ DE GESTION » mono 11px accent
- **Titre** : « Quatre piliers opérationnels. » `Instrument Serif clamp(28px, 3.5vw, 44px)`
- **Grille services** : 4 colonnes, `ServiceCard` (Middle/Back, Conformité, Risques, Reporting) avec glyphe + titre + description
- **Témoignages vidéo** : 6 colonnes, `VideoTile` 16:9 cliquables (Carmin, Tactical, Pivot, Northwind, Lumen, Adagio avec durées)

### 6. Vidéos full-bleed (CGP + Institutionnels)
- **Layout** : 2 colonnes, gap 32px, padding `120px 48px`, fond `#1A1A1A`
- Chaque colonne : titre `Instrument Serif clamp(24px, 2.4vw, 36px)` + `VideoTile big` (gros play button, ratio 16:9)

### 7. Section Équipe
- **Layout** : padding `120px 48px`, fond `#222222`
- **Eyebrow** : « — 06 / L'ÉQUIPE »
- **Titre** : « Les visages derrière *MANCO*. » avec italique accent sur MANCO
- **Grille** : 3 colonnes, gap 20px, `TeamCard` chacune
- **TeamCard** :
  - Carré portrait 100% width, ratio carré, fond `#3A3A3A` avec initiales en `Instrument Serif 64px` opacity 0.5 + label mono « PORTRAIT » top-left (placeholder pour vraie photo)
  - Padding 24px : nom `Instrument Serif 26px`, titre `Manrope 13px` couleur `#B0B0B0`
  - **Click bouton « Contacter → »** : expand inline (la card grandit pour afficher bio + email + LinkedIn). Bouton devient « ← réduire » outline.

### 8. Actionnaires
- **Layout** : flex avec gap 64px, padding `64px 48px`, fond `#222222`, border-top `1px solid #3A3A3A`
- Eyebrow « NOS ACTIONNAIRES — » + 2 logos en pills outline (BANQUE DELUBAC & CIE, HOLDING BCM)

### 9. Footer
- **Layout** : padding `64px 48px 32px`, fond `#1A1A1A`
- **Grille 4 colonnes** (`2fr 1fr 1fr 1fr`, gap 32px) :
  - Col 1 : Logo + tagline « Société de gestion d'actifs financiers — solutions opérationnelles, réglementaires et stratégiques pour fonds, CGP et institutionnels. »
  - Col 2 : Plan du site (mono eyebrow + 6 liens : Équipe, Incubation, Sociétés de gestion, Family Office, Institutionnels, Publications)
  - Col 3 : Contact (email `contact@manco.paris`, tél `+33 1 84 88 12 00`)
  - Col 4 : Réseaux (LinkedIn, Twitter)
- **Bottom bar** : flex space-between, padding-top 24px, border-top `1px solid #3A3A3A`, mono 11px couleur `#7A7A7A` :
  - Gauche : « © 2026 MANCO PARIS · SOCIÉTÉ AGRÉÉE AMF N° GP-XX-XXXX »
  - Droite : « MENTIONS LÉGALES · POLITIQUE DE CONFIDENTIALITÉ · COOKIES »

### 10. Side Panel (modal questions)
- Slide depuis la droite, width 540px, height full, fond `#1A1A1A`, border-left `1px solid #555555`
- Animation `transform: translateX(100%) → 0`, easing `cubic-bezier(0.16, 1, 0.3, 1)` 280ms
- Backdrop : `rgba(0,0,0,0.5)` avec `backdrop-filter: blur(4px)`
- Contenu : eyebrow catégorie + bouton close, titre `Instrument Serif 38px`, body, bloc « VOTRE INTERLOCUTEUR » (avatar initiales, nom, titre, email, tél), formulaire de contact (Nom, Email, Société, Message + bouton submit accent)

### 11. Widget hu-manity.co (cookies)
- Pill flottant **bottom-left** position fixed, fond `#2D2D2D`, border `1px solid #555555`, radius 999
- Badge accent rond avec « ! » à gauche + texte « Notice Choices » + label mono « HU-MANITY » à droite
- **Click** : panel 340px au-dessus avec 3 toggles (Strictement nécessaires / Mesure d'audience / Ne pas vendre mes informations) + boutons « Enregistrer mes choix » + « Tout accepter » + footer « POWERED BY HU-MANITY.CO »
- **À remplacer** par le vrai snippet d'intégration hu-manity.co — c'est juste une maquette visuelle de leur widget

### 12. Crisp chat
- Bouton rond 56×56 bottom-right, fond accent, glow accent, emoji 💬
- **À remplacer** par le vrai widget Crisp (https://crisp.chat) — placeholder visuel uniquement

## Interactions & Behavior

| Interaction | Comportement |
|---|---|
| Click card question | Ouvre side panel droit avec contenu dédié + form |
| Click bouton « Contacter » sur TeamCard | Expand inline de la card (bio + coordonnées + LinkedIn) |
| Hover card (questions, personas, services) | `translateY(-2px)`, border passe à `#555555`, shadow apparaît, 240ms |
| Hover lien navbar | Couleur `#B0B0B0` → `#FFFFFF`, 160ms |
| Focus input form | Border passe à `#7DD3FC` |
| Switch FR/EN | À implémenter (i18n Next — `next-intl` recommandé) |
| Animations scroll | À ajouter en implémentation (Framer Motion ou CSS `@starting-style` + IntersectionObserver) — fade-in + léger slide-up |

## State Management

- **Side panel state** : `openQuestion: Question | null` — quelle question est ouverte
- **TeamCard state** : `isExpanded: boolean` par card — local
- **Cookie banner state** : `isVisible` — géré par le widget hu-manity.co officiel, ne pas réimplémenter
- **Crisp state** : géré par leur SDK, ne pas réimplémenter
- **i18n** : locale `fr | en` — utiliser `next-intl` ou équivalent

## Design Tokens

Voir `tokens.md` pour la spec complète. Résumé :

- **Surfaces** : `#1A1A1A`, `#222222`, `#2D2D2D`, `#3A3A3A`
- **Bordures** : `#3A3A3A` (default), `#555555` (strong)
- **Texte** : `#FFFFFF`, `#B0B0B0`, `#7A7A7A`
- **Accent (3 options)** : `#7DD3FC` (ice ⭐), `#60A5FA` (sky), `#3B82F6` (royal)
- **Fonts** : Instrument Serif (display), Manrope (body), JetBrains Mono (labels)
- **Radius** : 8 (input), 14 (card), 999 (pill), 50% (avatar)
- **Container max** : 1240px
- **Section padding vertical** : 120px (configurable)

## Assets

- **Logo MANCO.PARIS** : à fournir par le client (le proto utilise un placeholder texte « MANC[O] PARIS » — ne pas porter)
- **Photos équipe** : à fournir par le client (le proto utilise des carrés gris avec initiales)
- **Vidéos témoignages** : à fournir par le client (le proto utilise des thumbnails placeholders avec play button)
- **Logos actionnaires** (Banque Delubac, Holding BCM) : à fournir par le client
- **Google Fonts** : chargées via `<link>` depuis `fonts.googleapis.com` — utiliser `next/font/google` en Next.js pour l'optimisation

## Files

| Fichier | Rôle |
|---|---|
| `MANCO Homepage C.html` | Point d'entrée standalone du proto direction C |
| `manco-shared.jsx` | Composants partagés : tokens, Logo, Navbar, SidePanel, ServiceCard, VideoTile, TeamCard, Shareholders, Footer, CookieBanner (hu-manity), Crisp, GlobalStyles |
| `hifi-c.jsx` | Direction C : Hero, QuestionsGrid3x3, PersonaColumns, SGPDetail, VideosFullBleed, TeamHorizontal, App |
| `tokens.md` | Spec complète des design tokens + suggestion de `tailwind.config.ts` |

## Intégrations tierces

| Service | Snippet | Note |
|---|---|---|
| **hu-manity.co** | À récupérer côté client | Remplace le `CookieBanner` mock |
| **Crisp** | https://crisp.chat — `<script>` standard | Remplace le `Crisp` mock |
| **Email contact** | `contact@manco.paris` | Form du SidePanel à brancher (API route Next + provider type Resend/Postmark) |

## Recommandations stack

- **Framework** : Next.js 14+ (App Router)
- **Styling** : Tailwind CSS (config dans `tokens.md`)
- **Composants UI** : shadcn/ui pour les primitives (Dialog, Sheet pour le SidePanel, Form)
- **Fonts** : `next/font/google` (Instrument_Serif, Manrope, JetBrains_Mono)
- **Animation** : Framer Motion pour les fade-in scroll, expand TeamCard, slide SidePanel
- **i18n** : `next-intl` pour le switch FR/EN
- **Form** : React Hook Form + Zod + une API route ou Server Action
