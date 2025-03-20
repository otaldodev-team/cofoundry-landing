"use client";

import { motion } from "framer-motion";
import { NumberTicker } from "@/components/magicui/number-ticker";

export const Stats = () => {
  return (
    <section className="bg-muted py-20">
      <div className="container px-4 md:px-6 lg:px-16">
        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-4xl font-bold">
              +<NumberTicker value={500} />
            </h3>
            <p className="text-muted-foreground">Projetos Ativos</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-4xl font-bold">
              +<NumberTicker value={2000} />
            </h3>
            <p className="text-muted-foreground">Profissionais</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-4xl font-bold">
              +<NumberTicker value={150} />
            </h3>
            <p className="text-muted-foreground">Startups Bem-Sucedidas</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
