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

export const Team = ({ teamMembers }) => {
  const { theme } = useTheme();

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6 lg:px-16">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Conheça Nossa Equipe
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            As pessoas que tornam a CoFoundry possível.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
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
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                    <div className="flex space-x-2">
                      {member.social.twitter && (
                        <Link
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <Twitter className="h-4 w-4" />
                            <span className="sr-only">Twitter</span>
                          </Button>
                        </Link>
                      )}
                      {member.social.linkedin && (
                        <Link
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                          </Button>
                        </Link>
                      )}
                      {member.social.github && (
                        <Link
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </Button>
                        </Link>
                      )}
                      {/* {member.social.mail && (
                        <Link href={member.social.mail}>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <Mail className="h-4 w-4" />
                            <span className="sr-only">Email</span>
                          </Button>
                        </Link>
                      )} */}
                    </div>
                  </CardContent>
                </MagicCard>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
