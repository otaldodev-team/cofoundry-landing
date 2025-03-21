"use client";

import { motion } from "framer-motion";
import { NumberTicker } from "@/components/magicui/number-ticker";

interface StatItem {
  id: string;
  value: number;
  label: string;
  delay: number;
}

export const Stats = () => {
  const stats: StatItem[] = [
    {
      id: "projects",
      value: 500,
      label: "Projetos Ativos",
      delay: 0,
    },
    {
      id: "professionals",
      value: 2000,
      label: "Profissionais",
      delay: 0.1,
    },
    {
      id: "startups",
      value: 150,
      label: "Startups Bem-Sucedidas",
      delay: 0.2,
    },
  ];

  return (
    <section className="bg-muted py-20">
      <div className="container px-4 md:px-6 lg:px-16">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: stat.delay }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-4xl font-bold">
                +<NumberTicker value={stat.value} />
              </h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
