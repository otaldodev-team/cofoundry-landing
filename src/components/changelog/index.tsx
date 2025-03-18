"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Changelog = () => {
  return (
    <main className="flex-1 py-12">
      <div className="container px-4 md:px-6 lg:px-16">
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Changelog
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Mantenha-se atualizado com os recursos e melhorias mais recentes
              da CoFoundry.
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mx-auto flex justify-center">
            <TabsTrigger value="all">All Updates</TabsTrigger>
            <TabsTrigger value="FEATURE">Features</TabsTrigger>
            <TabsTrigger value="IMPROVEMENT">Improvements</TabsTrigger>
            <TabsTrigger value="FIX">Bug Fixes</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <ChangelogList items={updates} filter="all" />
          </TabsContent>
          <TabsContent value="FEATURE">
            <ChangelogList items={updates} filter="FEATURE" />
          </TabsContent>
          <TabsContent value="IMPROVEMENT">
            <ChangelogList items={updates} filter="IMPROVEMENT" />
          </TabsContent>
          <TabsContent value="FIX">
            <ChangelogList items={updates} filter="FIX" />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};
