"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { Bug, Rocket, Sparkles, Zap } from "lucide-react";

// Helper function to get icon based on update type
const getIconForType = (type: string) => {
  switch (type) {
    case "FEATURE":
      return <Rocket className="h-5 w-5" />;
    case "IMPROVEMENT":
      return <Zap className="h-5 w-5" />;
    case "FIX":
      return <Bug className="h-5 w-5" />;
    default:
      return <Sparkles className="h-5 w-5" />;
  }
};

// Helper function to get display name for update type
const getTypeDisplayName = (type: string) => {
  switch (type) {
    case "FEATURE":
      return "New Feature";
    case "IMPROVEMENT":
      return "Improvement";
    case "FIX":
      return "Bug Fix";
    default:
      return "Update";
  }
};

// Helper function to get CSS classes for badge based on update type
const getBadgeClassForType = (type: string) => {
  switch (type) {
    case "FEATURE":
      return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
    case "IMPROVEMENT":
      return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
    case "FIX":
      return "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20";
    default:
      return "";
  }
};

export const Changelog = ({ updates }) => {
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

        <Tabs defaultValue="ALL" className="mb-8">
          <TabsList className="mx-auto flex w-fit justify-center">
            <TabsTrigger value="ALL">Tudo</TabsTrigger>
            <TabsTrigger value="FEATURE">Novas Funcionalidades</TabsTrigger>
            <TabsTrigger value="IMPROVEMENT">Melhorias</TabsTrigger>
            <TabsTrigger value="FIX">Correções</TabsTrigger>
          </TabsList>
          {/* <TabsContent value="ALL">
            <ChangelogList items={updates} filter="ALL" />
          </TabsContent>
          <TabsContent value="FEATURE">
            <ChangelogList items={updates} filter="FEATURE" />
          </TabsContent>
          <TabsContent value="IMPROVEMENT">
            <ChangelogList items={updates} filter="IMPROVEMENT" />
          </TabsContent>
          <TabsContent value="FIX">
            <ChangelogList items={updates} filter="FIX" />
          </TabsContent> */}
        </Tabs>
      </div>
    </main>
  );
};
