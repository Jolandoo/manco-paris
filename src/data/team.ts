export interface TeamMember {
  id: string;
  name: string;
  photo: string;
  titleFr: string;
  titleEn: string;
  bioFr: string;
  bioEn: string;
  email: string;
  linkedin: string;
}

export const team: TeamMember[] = [
  {
    id: "jerome-coirier",
    name: "Jérôme Coirier",
    photo: "/team/jerome-coirier.jpg",
    titleFr: "Président",
    titleEn: "Chairman",
    bioFr: "25 ans d'expérience. Entrepreneur spécialisé dans la structuration et l'accompagnement des sociétés de gestion.",
    bioEn: "25 years of experience. Entrepreneur specializing in the structuring and support of asset management companies.",
    email: "jcoirier@manco.paris",
    linkedin: "linkedin.com/in/jcoirier",
  },
  {
    id: "andre-mayens",
    name: "André Mayens",
    photo: "/team/andre-mayens.jpg",
    titleFr: "Directeur général",
    titleEn: "Chief Executive Officer",
    bioFr: "35 ans d'expérience. Expert métiers et risques marchés, spécialiste en gestion des risques financiers.",
    bioEn: "35 years of experience. Business and market risk expert, specialist in financial risk management.",
    email: "amayens@manco.paris",
    linkedin: "",
  },
  {
    id: "thomas-bertrand",
    name: "Thomas Bertrand",
    photo: "/team/thomas-bertrand.png",
    titleFr: "Secrétaire Général — RCCI",
    titleEn: "General Secretary — RCCI",
    bioFr: "Plus de 10 ans d'expérience dans le métier de conformité et contrôle interne.",
    bioEn: "Over 10 years of experience in compliance and internal control.",
    email: "tbertrand@manco.paris",
    linkedin: "",
  },
];
