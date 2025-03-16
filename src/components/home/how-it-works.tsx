"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, Users } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";

export const HowItWorks = () => {
  return (
    <section className="bg-muted py-20">
      <div className="container px-4 md:px-6 lg:px-16">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Como Funciona
          </h2>
          <p className="font text-muted-foreground mt-4 text-xl">
            Conecte-se a profissionais e forme o time dos seus sonhos.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="bg-card relative flex flex-col items-center space-y-4 overflow-hidden rounded-lg border p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <BorderBeam size={200} duration={8} />
            <div className="bg-primary/10 rounded-full p-4">
              <Lightbulb className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">Compartilhe Sua Ideia</h3>
            <p className="text-muted-foreground text-center">
              Publique sua ideia ou projeto de startup e descreva as skills
              necessárias para tirá-la do papel.
            </p>
          </motion.div>
          <motion.div
            className="bg-card relative flex flex-col items-center space-y-4 overflow-hidden rounded-lg border p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <BorderBeam size={200} duration={8} />
            <div className="bg-primary/10 rounded-full p-4">
              <Users className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">Encontre colaboradores</h3>
            <p className="text-muted-foreground text-center">
              Conecte-se a profissionais de diversas áreas interessados em
              participar do seu projeto.
            </p>
          </motion.div>
          <motion.div
            className="bg-card relative flex flex-col items-center space-y-4 overflow-hidden rounded-lg border p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <BorderBeam size={200} duration={8} />
            <div className="bg-primary/10 rounded-full p-4">
              <Rocket className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">Construa em Conjunto</h3>
            <p className="text-muted-foreground text-center">
              Colabore com sua equipe para dar vida à sua ideia e lançar sua
              startup.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
