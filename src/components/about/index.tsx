"use client";

import { Hero } from "./hero";
import { Values } from "./values";
import { Team } from "./team";
import { Stats } from "./stats";
import { Contact } from "./contact";
import type { IAbout } from "@/types/about";

export const About = ({ about }: { about: IAbout }) => {
  console.log(about);

  return (
    <main className="flex-1 py-12">
      {about.sections[0] && <Hero data={about.sections[0]} />}
      {about.sections[1] && <Values data={about.sections[1]} />}
      {about.sections[2] && <Team data={about.sections[2]} />}
      {about.sections[3] && <Stats />}
      {about.sections[4] && <Contact />}
    </main>
  );
};
