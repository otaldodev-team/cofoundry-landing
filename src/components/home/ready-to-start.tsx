"use client";

import { motion } from "framer-motion";

import Link from "next/link";

import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export const ReadyToStart = () => {
  return (
    <section className="bg-muted py-20">
      <div className="container px-4 md:px-6 lg:px-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Pronto para Formar o Time dos Seus Sonhos?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Junte-se à nossa comunidade de inovadores e transforme suas ideias
              em realidade.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="!mt-6"
          >
            <Link href="/projetos">
              <InteractiveHoverButton className="cursor-pointer text-base">
                Explorar Projetos
              </InteractiveHoverButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
