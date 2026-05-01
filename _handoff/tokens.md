# MANCO.PARIS — Design Tokens

Référence pour l'implémentation Next.js / Tailwind.

---

## Couleurs

### Surfaces (dark theme)

| Token | Hex | Usage |
|---|---|---|
| `bg.0` | `#1A1A1A` | Fond principal · navbar · footer · hero |
| `bg.1` | `#222222` | Section alternée · base body |
| `bg.2` | `#2D2D2D` | Anthracite · surface card · modal |
| `bg.3` | `#3A3A3A` | Surface élevée · input background |

### Bordures

| Token | Hex | Usage |
|---|---|---|
| `border.DEFAULT` | `#3A3A3A` | Séparateurs subtils · cards |
| `border.strong` | `#555555` | Bordures actives · hover |

### Texte

| Token | Hex | Usage |
|---|---|---|
| `fg.DEFAULT` | `#FFFFFF` | Titres · texte principal |
| `fg.dim` | `#B0B0B0` | Sous-titres · descriptions |
| `fg.faint` | `#7A7A7A` | Méta · labels mono · captions |

### Accent (3 options)

| Nom | Hex | Note |
|---|---|---|
| **Ice** ⭐ par défaut | `#7DD3FC` | Tailwind sky-300 — pop doux, premium |
| Sky | `#60A5FA` | Tailwind blue-400 — plus saturé |
| Royal | `#3B82F6` | Tailwind blue-500 — corporate classique |

L'accent est utilisé pour : CTA primaires, liens actifs, italiques d'emphase dans les titres serif, glyphes d'icônes, focus states, badges status.

### Glassmorphism

```css
background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
backdrop-filter: blur(20px);
border: 1px solid #3A3A3A;
```

Opacité du blanc translucide : `0.04` par défaut, ajustable de `0` à `0.12`.

---

## Typographie

### Pairing

| Rôle | Famille | Poids utilisés | Usage |
|---|---|---|---|
| **Display** | Instrument Serif | 400 + italic | Titres H1/H2/H3, eyebrows accentuées |
| **Body** | Manrope | 300 / 400 / 500 / 600 / 700 / 800 | Paragraphes, UI, navigation, boutons |
| **Mono** | JetBrains Mono | 300 / 400 / 500 | Labels en capitales, méta, numéros, eyebrows |

### Google Fonts URL

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
```

### Échelle (clamp pour responsive)

| Niveau | Taille | Letter-spacing | Line-height |
|---|---|---|---|
| Display XXL (hero) | `clamp(44px, 5.8vw, 88px)` | `-0.03em` | `0.95` |
| Display L (section) | `clamp(40px, 5vw, 68px)` | `-0.025em` | `1` |
| Display M | `clamp(28px, 3.5vw, 44px)` | `-0.02em` | `1.05` |
| H3 card | `24px–26px` | `-0.015em` | `1.15` |
| Body L | `17px` | `0` | `1.5` |
| Body | `14px–15px` | `0` | `1.55–1.65` |
| Mono label | `10px–12px` | `0.16em–0.18em` (uppercase) | `1` |

### Patterns d'emphase

- **Italique accent** : `<em>` dans les titres serif → couleur accent + italique. Ex: « Quelle est *votre* question ? »
- **Eyebrow mono** : `JetBrains Mono` 11px, `letter-spacing: 0.18em`, uppercase, couleur accent ou `fg.faint`. Précédée d'un tiret cadratin « — » ou « ─ ».

---

## Espacements

| Token | Valeur | Usage |
|---|---|---|
| `gap.section` | `120px` (configurable 64–200) | Padding vertical entre sections |
| `gap.card` | `16px` | Entre cards d'une grille |
| `gap.card.padding` | `28px` | Padding interne d'une card |
| `gap.container.x` | `48px` | Padding horizontal des sections |
| `container.max` | `1240px` | Largeur max du contenu |

---

## Border radius

| Usage | Valeur |
|---|---|
| Card / modal | `14px` |
| Input / button rectangulaire | `8px` |
| Pill / CTA | `999px` |
| Avatar / icon circle | `50%` |

---

## Ombres

```css
/* Card hover */
box-shadow: 0 16px 48px -16px rgba(0,0,0,0.6);

/* Modal / floating panel */
box-shadow: 0 24px 64px -16px rgba(0,0,0,0.7);

/* CTA glow */
box-shadow: 0 8px 32px -8px rgba(125, 211, 252, 0.53); /* accent + 88 alpha */
```

---

## Transitions

| Cas | Durée · easing |
|---|---|
| Hover card | `240ms ease` |
| Couleur (texte/border) | `220ms ease` |
| Modal slide-in | `280ms cubic-bezier(0.16, 1, 0.3, 1)` |

---

## Tailwind config (suggéré)

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: { 0: '#1A1A1A', 1: '#222222', 2: '#2D2D2D', 3: '#3A3A3A' },
        border: { DEFAULT: '#3A3A3A', strong: '#555555' },
        fg: { DEFAULT: '#FFFFFF', dim: '#B0B0B0', faint: '#7A7A7A' },
        accent: {
          DEFAULT: '#7DD3FC', // ice
          sky: '#60A5FA',
          royal: '#3B82F6',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: '1240px',
      },
      boxShadow: {
        card: '0 16px 48px -16px rgba(0,0,0,0.6)',
        modal: '0 24px 64px -16px rgba(0,0,0,0.7)',
        cta: '0 8px 32px -8px rgba(125, 211, 252, 0.53)',
      },
    },
  },
} satisfies Config;
```

---

## Composants à porter (depuis le proto)

Les composants suivants sont dans `manco-shared.jsx` et `hifi-c.jsx`. À porter en `.tsx` :

| Composant | Source | Notes |
|---|---|---|
| `Logo` | `manco-shared.jsx` L42 | Texte + cercle accent — placeholder, le vrai logo client est conservé |
| `Navbar` | `manco-shared.jsx` L66 | Sticky, switch FR/EN — passer en `position: fixed` |
| `SidePanel` | `manco-shared.jsx` L94 | Modal latéral droit avec form contact + interlocuteur |
| `ServiceCard` | `manco-shared.jsx` L185 | Card avec glyphe icon |
| `VideoTile` | `manco-shared.jsx` L210 | Thumbnail vidéo avec play button |
| `TeamCard` | `manco-shared.jsx` L235 | Card profil avec expand inline |
| `Shareholders` | `manco-shared.jsx` L283 | Bandeau logos actionnaires |
| `Footer` | `manco-shared.jsx` L298 | Footer 4 colonnes |
| `CookieBanner` | `manco-shared.jsx` L336 | **À remplacer** par snippet officiel hu-manity.co |
| `Crisp` | `manco-shared.jsx` L386 | **À remplacer** par snippet officiel Crisp |
| `HeroConversational` | `hifi-c.jsx` L8 | Hero direction C |
| `QuestionsGrid3x3` | `hifi-c.jsx` L60 | Grille 3×3 stricte |
| `PersonaColumns` | `hifi-c.jsx` L72 | 4 colonnes personas |
| `SGPDetail` | `hifi-c.jsx` L98 | Détail SGP avec 6 vidéos |
| `VideosFullBleed` | `hifi-c.jsx` L122 | CGP + Institutionnels en split |
| `TeamHorizontal` | `hifi-c.jsx` L139 | Section équipe 3 colonnes |

---

## Données mockées (à remplacer)

Le contenu textuel dans `manco-shared.jsx` (`QUESTIONS`, `TEAM`, contacts) est du **placeholder**. À remplacer par le vrai contenu client lors de l'implémentation.

| Constante | Source | Contenu |
|---|---|---|
| `QUESTIONS` | `manco-shared.jsx` L22 | 9 questions business avec catégorie, body, contact dédié |
| `TEAM` | `manco-shared.jsx` L34 | 3 profils équipe avec bio, email, LinkedIn |
