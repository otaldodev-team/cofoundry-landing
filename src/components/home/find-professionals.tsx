"use client";

import { AnimatedJobs } from "../jobs";

export const FindProfessionals = () => {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6 lg:px-16">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Encontre Profissionais
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Conecte-se com especialistas de diversas áreas.
          </p>
        </div>
        <AnimatedJobs />
      </div>
    </section>
  );
};
