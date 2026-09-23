export const siteConfig = {
  name: "Liga Coop",
  legalName:
    "Federação Nacional de Cooperativas de Mobilidade Urbana Liga Coop",
  title: "Liga Coop — Federação Nacional de Cooperativas de Mobilidade Urbana",
  description:
    "A Liga Coop reúne 10 cooperativas filiadas em um transporte privado de pessoas, empresas e bens que é justo, seguro e confiável. Conheça a federação que move o cooperativismo de mobilidade no Brasil.",
  shortDescription:
    "Transporte justo, seguro e cooperativo para pessoas, empresas e bens.",
  url: "https://www.ligacoop.coop.br",
  locale: "pt_BR",
  foundingDate: "2023",
  foundingLocation: "Caxias do Sul, RS",
  keywords: [
    "Liga Coop",
    "cooperativa de mobilidade urbana",
    "transporte cooperativo",
    "federação de cooperativas",
    "mobilidade urbana Brasil",
    "cooperativismo de plataforma",
    "transporte privado de passageiros",
    "cooperado motorista",
    "Caxias do Sul",
  ],
  contact: {
    email: "suporte@ligacoop.coop.br",
    phone: "+555432194365",
    phoneDisplay: "(54) 3219-4365",
    whatsapp: "+5554991470750",
    whatsappDisplay: "(54) 99147-0750",
    whatsappUrl: "https://wa.me/5554991470750",
  },
  social: {
    instagram: "https://instagram.com/ligacoopoficial",
    instagramHandle: "@ligacoopoficial",
    facebook: "https://facebook.com/LigaCoopOficial",
    facebookHandle: "LigaCoopOficial",
  },
} as const;

export type SiteConfig = typeof siteConfig;
