export interface QuestionContact {
  name: string;
  title: string;
  email: string;
  phone: string;
}

export interface Question {
  id: string;
  titleFr: string;
  titleEn: string;
  category: string;
  bodyFr: string;
  bodyEn: string;
  contact: QuestionContact;
  glyph: string;
}

const jerome: QuestionContact = {
  name: "Jérôme Coirier",
  title: "Président",
  email: "jcoirier@manco.paris",
  phone: "+33 6 27 25 75 81",
};

const andre: QuestionContact = {
  name: "André Mayens",
  title: "Directeur général",
  email: "amayens@manco.paris",
  phone: "+33 6 25 35 16 26",
};

const thomas: QuestionContact = {
  name: "Thomas Bertrand",
  title: "Secrétaire Général — RCCI",
  email: "tbertrand@manco.paris",
  phone: "+33 7 66 66 28 91",
};

export const questions: Question[] = [
  {
    id: "q1",
    titleFr: "Comment faire baisser sa structure de coûts ?",
    titleEn: "How to reduce your cost structure?",
    category: "Optimisation",
    bodyFr: "Les services de Manco.paris vous offrent la possibilité de réduire vos coûts de structures tout en apportant une qualité et solidité de l'opérationnel.",
    bodyEn: "Manco.paris services offer you the possibility to reduce your structural costs while providing quality and solid operations.",
    contact: jerome,
    glyph: "€",
  },
  {
    id: "q2",
    titleFr: "Comment répondre aux appels d'offres ?",
    titleEn: "How to respond to institutional tenders?",
    category: "Institutionnels",
    bodyFr: "Pour répondre aux appels d'offres des institutionnels il faut que la société de gestion dispose d'une infrastructure opérationnelle solide. Ce critère représente 30 à 40% de la note. Un partenariat avec Manco.paris peut vous permettre d'accéder à ces marchés.",
    bodyEn: "To respond to institutional tenders, the management company must have a solid operational infrastructure. This criterion represents 30 to 40% of the score. A partnership with Manco.paris can give you access to these markets.",
    contact: jerome,
    glyph: "§",
  },
  {
    id: "q3",
    titleFr: "Pourquoi nous solliciter ?",
    titleEn: "Why work with us?",
    category: "Services",
    bodyFr: "Nous vous proposons un service global incluant le middle-back office (comprenant le système d'information), le contrôle des risques marchés, le contrôle interne conformité et le reporting légal. Deux formes juridiques possibles : sous prestation (vous restez la SGP de tête, nous agissons comme prestataire global) ou sous délégation de gestion (format adapté pour le démarrage de l'activité ou pour l'international).",
    bodyEn: "We offer a comprehensive service including middle-back office (including the information system), market risk control, internal compliance control, and legal reporting. Two legal forms available: as a service provider (you remain the lead management company, we act as a global provider) or under delegated management (format suited for starting up or international operations).",
    contact: jerome,
    glyph: "+",
  },
  {
    id: "q4",
    titleFr: "Quelle alternative à la concentration du secteur ?",
    titleEn: "What alternative to sector consolidation?",
    category: "Stratégie",
    bodyFr: "Il parait clair que la baisse des rémunérations (arrêt des commissions de mouvements, modifications des règles des frais variables) combinée à la pression réglementaire continue conduisent des regroupements dans le secteur de la gestion d'actif. L'alternative ? « Chassez en meute » disait Alain Leclair.",
    bodyEn: "It seems clear that declining compensation (end of movement commissions, changes to variable fee rules) combined with continued regulatory pressure are driving consolidation in the asset management sector. The alternative? \"Hunt as a pack\" as Alain Leclair said.",
    contact: jerome,
    glyph: "↗",
  },
  {
    id: "q5",
    titleFr: "Institutionnels : Centralisez vos risques",
    titleEn: "Institutional: Centralize your risks",
    category: "Institutionnels",
    bodyFr: "Recourir aux services de Manco.paris comme société de gestion, vous permet de centraliser votre suivi des positions et des risques tout en simplifiant l'opérationnel. Le changement d'allocation financière ne change pas l'infrastructure.",
    bodyEn: "Using Manco.paris as your management company allows you to centralize your position and risk monitoring while simplifying operations. Changing the financial allocation does not change the infrastructure.",
    contact: andre,
    glyph: "◫",
  },
  {
    id: "q6",
    titleFr: "Quelle offre ?",
    titleEn: "What do we offer?",
    category: "Risques",
    bodyFr: "Manco.Paris permet une réelle indépendance du contrôle des risques, même si la typologie de gestion ne l'impose pas règlementairement parlant. C'est donc un gage de sécurité supplémentaire pour vos clients.",
    bodyEn: "Manco.Paris enables true independence of risk control, even when the type of management does not require it by regulation. This is an additional security guarantee for your clients.",
    contact: andre,
    glyph: "~",
  },
  {
    id: "q7",
    titleFr: "Par où commencer ?",
    titleEn: "Where to start?",
    category: "Conformité",
    bodyFr: "Manco.paris offre une solution complète, allant de l'aide à la rédaction du programme d'agrément, les relations avec l'autorité de tutelle, l'aide à la rédaction des procédures, l'établissement des business plan et le fonctionnement quotidien de votre société.",
    bodyEn: "Manco.paris offers a complete solution, from helping draft the approval program, relations with the supervisory authority, help drafting procedures, establishing business plans, and the day-to-day operations of your company.",
    contact: thomas,
    glyph: "✓",
  },
  {
    id: "q8",
    titleFr: "Quelle solution réglementaire ?",
    titleEn: "Which regulatory solution?",
    category: "Conformité",
    bodyFr: "Manco.paris couvre les contrôles sur les risques marchés, le contrôle interne et la conformité ainsi que les reporting réglementaires (Factsheets, PRIPPS…). Vous disposez d'une prestation de qualité centralisée sur un unique interlocuteur.",
    bodyEn: "Manco.paris covers market risk controls, internal control and compliance, as well as regulatory reporting (Factsheets, PRIIPs...). You get a quality service centralized through a single point of contact.",
    contact: thomas,
    glyph: "⊙",
  },
  {
    id: "q9",
    titleFr: "Créer votre société de gestion ?",
    titleEn: "Create your own management company?",
    category: "Incubation",
    bodyFr: "Nous vous accompagnons sur le cadrage, l'agrément puis la mise en œuvre de l'ensemble. Notre engagement à vos côtés vous garantit l'opérationnel de votre société de gestion.",
    bodyEn: "We support you through scoping, approval, and then full implementation. Our commitment alongside you guarantees the operations of your management company.",
    contact: jerome,
    glyph: "◇",
  },
];
