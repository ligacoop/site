import marcioGuimaraes from "@/assets/images/board/marcio_guimaraes.jpg";
import marceloSantos from "@/assets/images/board/marcelo_santos.jpg";
import andreZambonBoard from "@/assets/images/board/andre_zambon.jpg";
import rosangela from "@/assets/images/board/rosangela.jpg";

import kayaRaupp from "@/assets/images/team/kaya_raupp.jpg";
import douglasOliveira from "@/assets/images/team/douglas_oliveira.jpg";
import guilhermeSilveira from "@/assets/images/team/guilherme_silveira.jpg";
import fabioLima from "@/assets/images/team/fabio_lima.jpg";
import marceloMolina from "@/assets/images/team/marcelo_molina.jpg";

import type { StaticImageData } from "next/image";

export const heroStats = [
  { value: 3500, label: "Cooperados ativos" },
  { value: 150000, label: "Clientes atendidos" },
  { value: 5000, label: "Chamadas por dia" },
  { value: 10, label: "Cooperativas filiadas" },
];

export const aboutStats = [
  { value: "3.500", label: "cooperados ativos" },
  {
    value: "+10.000",
    label: "aguardando liberação para se tornar cooperados",
  },
  { value: "+5.000", label: "chamadas por dia" },
  { value: "+3.000", label: "chamadas atendidas" },
  { value: "+150.000", label: "clientes confiam na Liga Coop", wide: true },
];

export const values = [
  "Justiça financeira",
  "Dignidade e humanidade",
  "Prosperidade compartilhada",
  "Excelência e inclusão",
  "Sustentabilidade social",
  "Inovação consciente",
];

export const impactPoints = [
  "Melhoria da mobilidade urbana",
  "Empoderamento dos motoristas",
  "Inclusão e acessibilidade",
  "Sustentabilidade ambiental",
  "Economia local, comunitária e solidária",
  "Inovação tecnológica e de negócio",
];

export const campaigns = [
  "Campanha do Agasalho e Alimento",
  "Almoços e Jantares Beneficentes",
  "Marmita Solidária",
];

export const growthTimeline = [
  {
    year: "2026",
    users: "500 mil",
    cooperados: "12 mil",
    municipios: "30",
    fill: 18,
  },
  {
    year: "2027",
    users: "2 milhões",
    cooperados: "50 mil",
    municipios: "50",
    fill: 55,
  },
  {
    year: "2028",
    users: "5 milhões",
    cooperados: "150 mil",
    municipios: "70",
    fill: 100,
  },
];

export type Person = {
  name: string;
  role: string;
  image: StaticImageData;
};

export const boardMembers: Person[] = [
  { name: "Marcio Guimarães", role: "Presidente", image: marcioGuimaraes },
  { name: "Marcelo Santos", role: "Vice-Presidente", image: marceloSantos },
  {
    name: "André Zambon",
    role: "Secretário Geral",
    image: andreZambonBoard,
  },
  { name: "Rosangela Fulcher", role: "Tesoureira", image: rosangela },
];

export const teamMembers: Person[] = [
  { name: "Kayã Raupp", role: "Gerente Administrativo", image: kayaRaupp },
  {
    name: "Douglas Oliveira",
    role: "Gerente de Tecnologia",
    image: douglasOliveira,
  },
  {
    name: "Guilherme Silveira",
    role: "Head de Marketing e Comunicação",
    image: guilhermeSilveira,
  },
  {
    name: "Fabio Lima",
    role: "Gerente de Operações e Expansão",
    image: fabioLima,
  },
  {
    name: "Marcelo Molina",
    role: "Contador da Federação",
    image: marceloMolina,
  },
];

export const allPeople: Person[] = [...boardMembers, ...teamMembers];
