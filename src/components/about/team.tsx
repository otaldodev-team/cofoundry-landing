"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "next-themes";
import type { IAboutMember, IAboutSection } from "@/types/about";

export const Team = ({ data }: { data: IAboutSection }) => {
  const { theme } = useTheme();

  // Helper function to get the appropriate icon component
  const getIconComponent = (iconName: string | undefined) => {
    switch (iconName) {
      case "X":
        return <Twitter className="h-4 w-4" />;
      case "Linkedin":
        return <Linkedin className="h-4 w-4" />;
      case "Github":
        return <Github className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6 lg:px-16">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {data.title}
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            {data.description}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, index) => {
            // Check if the item is a team member (has 'name' property)
            if ("name" in item) {
              const member = item as IAboutMember;
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="relative h-full overflow-hidden">
                    <MagicCard
                      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                      gradientOpacity={0}
                    >
                      <div className="aspect-square overflow-hidden p-2">
                        <Image
                          src="/placeholder.svg"
                          alt={member.name}
                          width={400}
                          height={400}
                          className="rounded-lg object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{member.name}</CardTitle>
                        <CardDescription>{member.job}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {member.bio}
                        </p>
                        <div className="flex space-x-2">
                          {member.links.map((link) => (
                            <Link
                              key={link.id}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                              >
                                {getIconComponent(link.icon)}
                                <span className="sr-only">{link.title}</span>
                              </Button>
                            </Link>
                          ))}
                        </div>
                      </CardContent>
                    </MagicCard>
                  </Card>
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
