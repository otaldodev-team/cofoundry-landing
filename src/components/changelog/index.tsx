"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChangelogFilterType, IChangelog } from "@/app/types/changelog";
import { ChangelogList } from "./changelog-list";

const TEXT = {
  title: "Changelog",
  subtitle:
    "Mantenha-se atualizado com os recursos e melhorias mais recentes da CoFoundry.",
  tabs: {
    all: "Tudo",
    features: "Novas Funcionalidades",
    improvements: "Melhorias",
    fixes: "Correções",
  },
};

export const Changelog = ({ changelogs }: { changelogs: IChangelog[] }) => {
  if (!changelogs?.length) {
    return (
      <main className="flex-1 py-12">
        <div className="container px-4 text-center md:px-6 lg:px-16">
          <h1 className="font-heading text-3xl font-bold">{TEXT.title}</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            No changelog entries available.
          </p>
        </div>
      </main>
    );
  }

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
              {TEXT.title}
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              {TEXT.subtitle}
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="ALL" className="mb-8">
          <TabsList className="mx-auto flex w-fit justify-center">
            <TabsTrigger value="ALL">{TEXT.tabs.all}</TabsTrigger>
            <TabsTrigger value="FEATURE">{TEXT.tabs.features}</TabsTrigger>
            <TabsTrigger value="IMPROVEMENT">
              {TEXT.tabs.improvements}
            </TabsTrigger>
            <TabsTrigger value="FIX">{TEXT.tabs.fixes}</TabsTrigger>
          </TabsList>
          {(
            ["ALL", "FEATURE", "IMPROVEMENT", "FIX"] as ChangelogFilterType[]
          ).map((filter) => (
            <TabsContent key={filter} value={filter}>
              <ChangelogList items={changelogs} filter={filter} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  );
};
