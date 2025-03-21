"use client";

import { motion } from "framer-motion";
import { BorderBeam } from "@/components/magicui/border-beam";
import { IAboutSection, IAboutValue } from "@/types/about";

export const Values = ({ data }: { data: IAboutSection }) => {
  return (
    <section className="bg-muted py-20">
      <div className="container px-4 md:px-6 lg:px-16">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {data.title}
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            {data.description}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item, index) => {
            // Check if the item is a value item (has 'title' property)
            if ("title" in item) {
              const valueItem = item as IAboutValue;
              return (
                <motion.div
                  key={valueItem.id}
                  className="relative flex flex-col items-center space-y-4 overflow-hidden rounded-lg border bg-card p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <BorderBeam size={150} duration={6} />
                  <h3 className="text-xl font-bold">{valueItem.title}</h3>
                  <p className="text-center text-muted-foreground">
                    {valueItem.description}
                  </p>
                </motion.div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};
