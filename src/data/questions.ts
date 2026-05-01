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
    bodyFr: "Mutualisez les fonctions support, externalisez les opérations à faible valeur ajoutée et concentrez vos ressources sur la performance. Notre modèle permet de réduire jusqu'à 40% le coût de fonctionnement d'un fonds.",
    bodyEn: "Pool support functions, outsource low-value operations and focus your resources on performance. Our model reduces fund operating costs by up to 40%.",
    contact: jerome,
    glyph: "€",
  },
  {
    id: "q2",
    titleFr: "Quelle solution réglementaire ?",
    titleEn: "Which regulatory solution?",
    category: "Conformité",
    bodyFr: "AIFM, UCITS, FIA, FPS — nous vous aidons à choisir le véhicule le plus adapté à votre stratégie d'investissement et à votre cible d'investisseurs.",
    bodyEn: "AIFM, UCITS, FIA, FPS — we help you choose the vehicle best suited to your investment strategy and target investors.",
    contact: thomas,
    glyph: "§",
  },
  {
    id: "q3",
    titleFr: "Créer votre société de gestion ?",
    titleEn: "Create your own management company?",
    category: "Incubation",
    bodyFr: "Du business plan à l'agrément AMF, nous accompagnons la création de votre SGP en moins de 9 mois. Hébergement, supervision, mentoring inclus.",
    bodyEn: "From business plan to AMF approval, we support the creation of your management company in under 9 months. Hosting, supervision, mentoring included.",
    contact: jerome,
    glyph: "+",
  },
  {
    id: "q4",
    titleFr: "Externaliser le middle / back office ?",
    titleEn: "Outsource middle / back office?",
    category: "Opérations",
    bodyFr: "Valorisation, contrôle dépositaire, passage d'ordres, NAV : déchargez-vous de la mécanique pour vous concentrer sur le pilotage.",
    bodyEn: "Valuation, custodian control, order execution, NAV: offload the mechanics to focus on steering.",
    contact: andre,
    glyph: "↗",
  },
  {
    id: "q5",
    titleFr: "Reporting investisseurs sur-mesure ?",
    titleEn: "Custom investor reporting?",
    category: "Reporting",
    bodyFr: "Reportings réglementaires (AIFMD, EMIR, Solvency II) et reportings commerciaux personnalisés à la fréquence qui convient à vos LP.",
    bodyEn: "Regulatory reports (AIFMD, EMIR, Solvency II) and custom commercial reports at the frequency that suits your LPs.",
    contact: andre,
    glyph: "◫",
  },
  {
    id: "q6",
    titleFr: "Mise en conformité AMF ?",
    titleEn: "AMF compliance?",
    category: "Régulation",
    bodyFr: "Audit de conformité, rédaction de procédures, formation des équipes, interface avec le régulateur — un partenaire de bout en bout.",
    bodyEn: "Compliance audit, procedure drafting, team training, regulator interface — an end-to-end partner.",
    contact: thomas,
    glyph: "✓",
  },
  {
    id: "q7",
    titleFr: "Architecture ouverte pour CGP ?",
    titleEn: "Open architecture for financial advisors?",
    category: "CGP",
    bodyFr: "Une alternative à la création de SGP : profitez de notre agrément, distribuez vos propres mandats et fonds via notre plateforme.",
    bodyEn: "An alternative to creating your own management company: leverage our license, distribute your own mandates and funds through our platform.",
    contact: jerome,
    glyph: "⊙",
  },
  {
    id: "q8",
    titleFr: "One-stop-shop institutionnel ?",
    titleEn: "Institutional one-stop-shop?",
    category: "Institutionnels",
    bodyFr: "Caisses de retraite, mutuelles, family offices : centralisez l'ensemble de vos gestions sous un seul agrément, un seul reporting, un seul interlocuteur.",
    bodyEn: "Pension funds, mutuals, family offices: centralize all your management under one license, one report, one contact.",
    contact: jerome,
    glyph: "◇",
  },
  {
    id: "q9",
    titleFr: "Gestion des risques de marché ?",
    titleEn: "Market risk management?",
    category: "Risques",
    bodyFr: "VaR, stress-tests, suivi des limites, modélisation : un dispositif de risk management proportionné à la complexité de vos stratégies.",
    bodyEn: "VaR, stress tests, limit monitoring, modeling: a risk management framework proportionate to the complexity of your strategies.",
    contact: andre,
    glyph: "~",
  },
];
