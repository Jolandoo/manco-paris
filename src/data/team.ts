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
    bioFr: "25 ans d'expérience. Structuration et accompagnement des sociétés. Jérôme est entrepreneur avant tout ! Il aime créer, structurer, organiser.",
    bioEn: "25 years of experience. Company structuring and support. Jérôme is an entrepreneur above all! He loves creating, structuring, organizing.",
    email: "jcoirier@manco.paris",
    linkedin: "linkedin.com/in/jcoirier",
  },
  {
    id: "andre-mayens",
    name: "André Mayens",
    photo: "/team/andre-mayens.jpg",
    titleFr: "Directeur général",
    titleEn: "Chief Executive Officer",
    bioFr: "35 ans d'expérience. Expert métiers et risques marchés. Animateur et formateur risques. Sa devise : écouter, cogiter et viser juste !",
    bioEn: "35 years of experience. Business and market risk expert. Risk trainer and facilitator. His motto: listen, think, and aim right!",
    email: "amayens@manco.paris",
    linkedin: "",
  },
  {
    id: "thomas-bertrand",
    name: "Thomas Bertrand",
    photo: "/team/thomas-bertrand.png",
    titleFr: "Secrétaire Général — RCCI",
    titleEn: "General Secretary — RCCI",
    bioFr: "Plus de 10 ans d'expérience dans le métier de conformité et contrôle interne. Thomas aime les challenges, il est sportif.",
    bioEn: "Over 10 years of experience in compliance and internal control. Thomas loves challenges and is an athlete.",
    email: "tbertrand@manco.paris",
    linkedin: "",
  },
];
