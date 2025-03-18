"use client";

import { FixedSpinningText } from "@/components/fixed-spinning-text";
import { Hero } from "./hero";
import { HowItWorks } from "./how-it-works";
import { FindProfessionals } from "./find-professionals";
import { ReadyToStart } from "./ready-to-start";

export const Home = () => {
  return (
    <main className="flex-1">
      <FixedSpinningText
        text="CoFoundry • Crie • Conecte-se • Colabore •"
        className="hidden md:block"
      />
      <Hero />
      <HowItWorks />
      <FindProfessionals />
      <ReadyToStart />
    </main>
  );
};
