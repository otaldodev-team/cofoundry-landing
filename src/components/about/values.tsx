"use client";

import { motion } from "framer-motion";
import { BorderBeam } from "@/components/magicui/border-beam";

export const Values = ({ values }) => {
  return (
    <section className="bg-muted py-20">
      <div className="container px-4 md:px-6 lg:px-16">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nossos Valores
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Os princípios que guiam tudo o que fazemos:
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="relative flex flex-col items-center space-y-4 overflow-hidden rounded-lg border bg-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BorderBeam size={150} duration={6} />
              <h3 className="text-xl font-bold">{value.title}</h3>
              <p className="text-center text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
