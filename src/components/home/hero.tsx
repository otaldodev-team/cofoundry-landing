"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { WordRotate } from "@/components/magicui/word-rotate";
import { cn } from "@/lib/utils";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ChevronRight } from "lucide-react";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

export const Hero = () => {
  return (
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
                <WordRotate
                  words={["Conecte-se, ", "Colabore, ", "Crie, "]}
                  duration={2200}
                />
              </motion.h1>
              <motion.p
                className="text-muted-foreground max-w-[600px] text-balance md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Una-se a uma comunidade de profissionais para construir a
                próxima grande inovação. Encontre cofundadores, membros de
                equipe e colaboradores para dar vida à sua ideia de startup.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/projetos">
                <div className="group relative mx-auto flex items-center justify-center rounded-full bg-white px-4 py-1.5 shadow-xl transition-shadow duration-500 ease-out hover:shadow-2xl">
                  <span
                    className={cn(
                      "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
                    )}
                    style={{
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "destination-out",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "subtract",
                      WebkitClipPath: "padding-box",
                    }}
                  />
                  🧑‍💻 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                  <AnimatedGradientText className="cursor-pointer text-base font-medium">
                    Explorar Projetos
                  </AnimatedGradientText>
                  <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </div>
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px]">
              <div className="from-primary/20 to-secondary/40 absolute inset-0 rounded-full bg-gradient-to-br blur-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <DotLottieReact src="/lottie/rocket.lottie" loop autoplay />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
