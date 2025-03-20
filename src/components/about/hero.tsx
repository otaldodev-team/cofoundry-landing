"use client";

import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container px-4 md:px-6 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.h1
                className="font-heading text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Nossa Missão
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-balance text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                A CoFoundry existe para eliminar barreiras entre profissionais
                talentosos e ideias inovadoras. Acreditamos que as melhores
                startups são construídas por equipes diversas, com habilidades
                complementares e uma visão compartilhada.
              </motion.p>
              <motion.p
                className="mt-4 max-w-[600px] text-balance text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Nossa plataforma conecta fundadores, desenvolvedores, designers,
                profissionais de marketing e outros especialistas para colaborar
                em projetos que realmente importam. Estamos construindo uma
                comunidade em que grandes ideias encontram o talento necessário
                para se tornarem realidade.
              </motion.p>
            </div>
          </div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <DotLottieReact src="/lottie/team.lottie" loop autoplay />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
