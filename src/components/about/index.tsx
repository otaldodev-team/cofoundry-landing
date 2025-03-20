"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/magicui/border-beam";
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
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useTheme } from "next-themes";
import { NumberTicker } from "../magicui/number-ticker";

const teamMembers = [
  {
    id: 1,
    name: "Arthur Nunes",
    role: "Founder",
    bio: "Empreendedor autodidata e autônomo, com experiência em videografia, fotografia, produção cultural e engenharia de software.",
    avatar:
      "https://media.licdn.com/dms/image/v2/C4E03AQGSNG7VyL3Lbw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1647864212317?e=1747267200&v=beta&t=bWaiRXeTBVb4kosWG9v3iEupIdrIK7JDktd4XEd2DWI",
    social: {
      twitter: "https://x.com/otaldodev",
      linkedin: "https://linkedin.com/in/otaldonunes",
      github: "https://github.com/otaldodev-team",
    },
  },
];

const values = [
  {
    title: "Colaboração",
    description:
      "Acreditamos que grandes projetos nascem quando pessoas com diferentes experiências se unem para construir algo único.",
  },
  {
    title: "Inovação",
    description:
      "Valorizamos ideias criativas e novas maneiras de enfrentar desafios no mundo das startups.",
  },
  {
    title: "Inclusividade",
    description:
      "Queremos que todos tenham espaço para participar, contribuir e crescer dentro da nossa comunidade.",
  },
  {
    title: "Transparência",
    description:
      "Acreditamos no diálogo aberto e no feedback sincero para criar um ambiente de trabalho produtivo e saudável.",
  },
];

export const About = () => {
  const { theme } = useTheme();

  return (
    <main className="flex-1 py-12">
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container px-4 md:px-6 lg:px-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <motion.h1
                  className="font-heading text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Nossa Missão
                </motion.h1>
                <motion.p
                  className="max-w-[600px] text-balance text-muted-foreground md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  A CoFoundry existe para eliminar barreiras entre profissionais
                  talentosos e ideias inovadoras. Acreditamos que as melhores
                  startups são construídas por equipes diversas, com habilidades
                  complementares e uma visão compartilhada.
                </motion.p>
                <motion.p
                  className="mt-4 max-w-[600px] text-balance text-muted-foreground md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Nossa plataforma conecta fundadores, desenvolvedores,
                  designers, profissionais de marketing e outros especialistas
                  para colaborar em projetos que realmente importam. Estamos
                  construindo uma comunidade em que grandes ideias encontram o
                  talento necessário para se tornarem realidade.
                </motion.p>
              </div>
            </div>
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <DotLottieReact src="/lottie/team.lottie" loop autoplay />
            </motion.div>
          </div>
        </div>
      </section>
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

      {/* Stats Section */}
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
      <section className="py-20">
        <div className="container px-4 md:px-6 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Entre em Contato
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Tem perguntas sobre a CoFoundry? Adoraríamos ouvir você.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="mailto:contact@cofoundry.example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Fale Conosco
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
