export interface Service {
  glyph: string;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
}

export const services: Service[] = [
  {
    glyph: "◫",
    titleFr: "Middle / Back",
    titleEn: "Middle / Back",
    descFr: "Valorisation, NAV, contrôle dépositaire.",
    descEn: "Valuation, NAV, custodian control.",
  },
  {
    glyph: "✓",
    titleFr: "Conformité",
    titleEn: "Compliance",
    descFr: "Procédures, RCCI, formation, audit.",
    descEn: "Procedures, RCCI, training, audit.",
  },
  {
    glyph: "~",
    titleFr: "Risques",
    titleEn: "Risk",
    descFr: "VaR, stress-tests, suivi des limites.",
    descEn: "VaR, stress tests, limit monitoring.",
  },
  {
    glyph: "◐",
    titleFr: "Reporting",
    titleEn: "Reporting",
    descFr: "Réglementaire et commercial.",
    descEn: "Regulatory and commercial.",
  },
];
