# Prompt de lancement — Claude Code

Copie-colle ce prompt dans Claude Code pour démarrer le projet :

---

```
Tu es mon assistant de développement pour un projet de refonte de site web corporate.

## Contexte
Je modernise le site de MANCO.PARIS (société de gestion d'actifs agréée AMF), actuellement sous WordPress/Elementor, vers une stack Next.js 15 / TypeScript / Tailwind CSS / Sanity CMS.

Le fichier `PROJECT_SPEC.md` à la racine du projet contient la spécification complète : architecture des pages, schémas CMS, structure de fichiers, stack technique, design direction, et planning de développement. Lis-le intégralement avant de commencer.

## Site de référence
- Site actuel à reproduire/moderniser : https://manco-paris.com/fr/
- Version anglaise : https://manco-paris.com/en/homepage/

## Règles de développement

1. **Lis `./PROJECT_SPEC.md` en premier** — c'est la source de vérité du projet.
2. **Next.js 15 App Router** avec `src/` directory. Pas de Pages Router.
3. **TypeScript strict** — pas de `any`, pas de `@ts-ignore`.
4. **Tailwind CSS 4** — pas de CSS modules, pas de styled-components.
5. **next-intl** pour l'i18n avec routing `/fr` et `/en`.
6. **Sanity v3** pour le CMS (publications, équipe, settings). Studio embarqué dans `/studio`.
7. **Composants réutilisables** — le `ContactModal` est utilisé ~9 fois avec des props différentes (contact dédié, motif pré-rempli). Factorise.
8. **Mobile-first** — tout doit être responsive.
9. **Animations subtiles** — fade-in au scroll, pas de surcharge. C'est un site corporate finance, pas une landing page startup.
10. **SEO** — meta tags dynamiques, Open Graph, sitemap.xml, robots.txt.
11. **Performance** — `next/image` pour toutes les images, lazy loading des vidéos embed, pas de bundle JS inutile.

## Design direction
Je veux implémenter la homepage de MANCO.PARIS (société de gestion d'actifs financiers
agréée AMF, Paris) à partir d'un handoff design fourni dans le dossier
`design_handoff_manco_paris/` à la racine du projet.

## Avant de commencer

1. Lis intégralement les 3 docs de référence dans cet ordre :
   - `design_handoff_manco_paris/README.md` — spec layout section par section,
     interactions, intégrations tierces, recommandations stack
   - `design_handoff_manco_paris/tokens.md` — design tokens complets +
     `tailwind.config.ts` prêt à coller
   - `design_handoff_manco_paris/MANCO Homepage C.html` — proto de référence
     (à ouvrir en local pour comparer visuellement)

2. Examine `manco-shared.jsx` et `hifi-c.jsx` dans le handoff. Ce sont des
   références JSX en Babel-in-browser avec inline styles — ce n'est PAS du code
   à copier. Tu dois recréer chaque composant en TypeScript + Tailwind en
   suivant les conventions du projet existant.

## Stack visée

- Next.js 14+ App Router
- TypeScript strict
- Tailwind CSS (config dans tokens.md)
- shadcn/ui pour les primitives (Sheet pour SidePanel, Dialog si besoin, Form)
- next/font/google pour Instrument_Serif, Manrope, JetBrains_Mono
- Framer Motion pour les animations scroll + expand TeamCard
- next-intl pour le switch FR/EN
- React Hook Form + Zod + Server Action pour le formulaire de contact

## Périmètre

Recrée la homepage avec ces sections dans l'ordre exact (voir README §Screens) :

1. Navbar sticky avec switch FR/EN
2. Hero split (texte gauche + panneau stats droite : AMF / fonds gérés / AUM)
3. Grille 3×3 stricte de 9 questions cliquables
4. Section Personas en 4 colonnes (Porteur / SGP / CGP / Institutionnel)
5. Détail SGP (4 piliers + 6 témoignages vidéo)
6. CGP + Institutionnels en split avec vidéos
7. Section Équipe (3 cards avec expand inline au click "Contacter")
8. Bandeau Actionnaires (Banque Delubac, Holding BCM)
9. Footer 4 colonnes
10. Side Panel (Sheet shadcn) qui s'ouvre au click sur une question — avec
    formulaire de contact + bloc "Votre interlocuteur"
11. Widget hu-manity.co (cookies) — placeholder à remplacer par le snippet
    officiel client
12. Crisp chat — placeholder à remplacer par le snippet officiel Crisp

## Contraintes critiques

- **Pixel-perfect sur la direction C** : couleurs hex, spacings, typo, radius,
  shadows, transitions exacts comme dans tokens.md
- **Accent par défaut** : `#7DD3FC` (ice blue). Ajoute un mécanisme simple
  pour basculer Sky/Royal si besoin (CSS variable ou config)
- **Italique d'emphase** : dans les `<h1>`/`<h2>` Instrument Serif, certains
  mots sont en `<em>` italique couleur accent — pattern récurrent du design
- **Eyebrow mono** : `JetBrains Mono` 11px uppercase letter-spacing 0.18em,
  préfixé par "—" ou "─" tiret cadratin — pattern à factoriser
- **Glass cards** : `linear-gradient(180deg, rgba(255,255,255,0.04),
  rgba(255,255,255,0.01))` + border `#3A3A3A` + radius 14 — pattern à
  factoriser dans un composant `<GlassCard>`
- **Hover cards** : `translateY(-2px)` + shadow + border passe à `#555555`,
  transition 240ms cubic-bezier(.2,.7,.2,1)
- **Responsive** : le proto est desktop. Implémente le mobile :
  - Navbar avec burger menu (Sheet shadcn)
  - Hero split → empilé en mobile
  - Grille 3×3 → 1 colonne en mobile, 2 en tablette
  - Personas 4 colonnes → 2x2 en tablette, 1 colonne en mobile
  - Équipe 3 colonnes → 1 colonne en mobile
  - SidePanel reste 540px desktop, full-width en mobile
- **Accessibilité** : focus rings visibles (utilise l'accent), `aria-label` sur
  les boutons icône, contrastes vérifiés, navigation clavier sur le SidePanel,
  trap focus dans la Sheet

## Contenu

Le contenu textuel dans le handoff est du **placeholder plausible**. Garde-le
pour l'instant — il sera remplacé par le vrai contenu client en review. Mais
structure le code pour que le contenu soit facilement remplaçable :

- Place les questions, personas, team members, services dans des fichiers de
  données séparés (`src/data/questions.ts`, `src/data/team.ts`, etc.)
- Type-les strictement avec des interfaces TypeScript
- Externalise toutes les chaînes via next-intl (`messages/fr.json`,
  `messages/en.json`)

## Intégrations à mocker pour l'instant

- **Formulaire de contact** : crée la Server Action mais log juste l'input
  pour l'instant. TODO : brancher Resend ou Postmark plus tard
- **hu-manity.co** : laisse mon composant placeholder visuel + un commentaire
  TODO indiquant où remplacer par le snippet officiel
- **Crisp** : pareil, placeholder visuel + TODO

## Livrable

- Code complet, fonctionnel, qui passe `pnpm build` sans erreur ni warning
- README à jour expliquant comment lancer le projet et ce qui reste à brancher
- Pas de console.log oubliés, pas de `any` TypeScript, pas de classes
  Tailwind redondantes (utilise `@apply` ou un `cn()` helper si une combinaison
  revient plus de 2 fois)
- Lighthouse : viser 95+ sur Performance, 100 sur Accessibility et SEO

Commence par lire les 3 docs, puis propose-moi un plan d'implémentation
en 5-8 étapes avant d'écrire du code. J'approuve le plan, ensuite tu
implémentes étape par étape avec des commits atomiques.

## Commencer par
Phase 1 du PROJECT_SPEC.md : setup du projet, layout global (Navbar + Footer), Hero de la page d'accueil, et routing i18n de base.
```
