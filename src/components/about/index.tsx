"use client";

import { Hero } from "./hero";
import { Values } from "./values";
import { Team } from "./team";
import { Stats } from "./stats";
import { Contact } from "./contact";
import type { IAbout } from "@/types/about";

const teamMembers = [
  {
    id: 1,
    name: "Arthur Nunes",
    role: "Founder",
    bio: "Empreendedor autodidata e autônomo, com experiência em videografia, fotografia, produção cultural e engenharia de software.",
    avatar:
      "https://media.licdn.com/dms/image/v2/C4E03AQGSNG7VyL3Lbw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1647864212317?e=1747267200&v=beta&t=bWaiRXeTBVb4kosWG9v3iEupIdrIK7JDktd4XEd2DWI",
    social: {
      twitter: "https://x.com/otaldodev",
      linkedin: "https://linkedin.com/in/otaldonunes",
      github: "https://github.com/otaldodev-team",
    },
  },
];

const values = [
  {
    title: "Colaboração",
    description:
      "Acreditamos que grandes projetos nascem quando pessoas com diferentes experiências se unem para construir algo único.",
  },
  {
    title: "Inovação",
    description:
      "Valorizamos ideias criativas e novas maneiras de enfrentar desafios no mundo das startups.",
  },
  {
    title: "Inclusividade",
    description:
      "Queremos que todos tenham espaço para participar, contribuir e crescer dentro da nossa comunidade.",
  },
  {
    title: "Transparência",
    description:
      "Acreditamos no diálogo aberto e no feedback sincero para criar um ambiente de trabalho produtivo e saudável.",
  },
];

export const About = ({ about }: { about: IAbout }) => {
  console.log(about);

  return (
    <main className="flex-1 py-12">
      <Hero />
      <Values values={values} />
      <Team teamMembers={teamMembers} />
      <Stats />
      <Contact />
    </main>
  );
};
