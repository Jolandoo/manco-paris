export interface Persona {
  num: string;
  titleFr: string;
  titleEn: string;
  subtitleFr: string;
  subtitleEn: string;
}

export const personas: Persona[] = [
  {
    num: "01",
    titleFr: "Porteur de projet",
    titleEn: "Project Owner",
    subtitleFr: "Solution clé en main, du cadrage à l'onboarding.",
    subtitleEn: "Turnkey solution, from scoping to onboarding.",
  },
  {
    num: "02",
    titleFr: "Société de gestion",
    titleEn: "Asset Manager",
    subtitleFr: "Concentrez-vous sur vos performances et vos clients.",
    subtitleEn: "Focus on your performance and your clients.",
  },
  {
    num: "03",
    titleFr: "Conseiller CGP",
    titleEn: "Financial Advisor",
    subtitleFr: "Architecture ouverte.",
    subtitleEn: "Open architecture.",
  },
  {
    num: "04",
    titleFr: "Institutionnel",
    titleEn: "Institutional",
    subtitleFr: "One-stop-shop de vos gestions.",
    subtitleEn: "One-stop-shop for your management needs.",
  },
];
