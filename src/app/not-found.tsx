"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function NotFound() {
  return (
    <div className="bg-fintech-dark flex min-h-screen flex-col items-center justify-center text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <DotLottieReact
            src="/lottie/ovni.lottie"
            loop
            autoplay
            className="w-full max-w-[800px]"
          />
          <div className="space-y-2">
            <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Página Não Encontrada
            </h1>
            <p className="text-muted-foreground mx-auto max-w-[700px] text-lg md:text-xl">
              Ops! A página que você procura não existe ou foi movida.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/">
              <Button
                variant="default"
                className="bg-fintech-purple hover:bg-fintech-purple/90"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Página inicial
              </Button>
            </Link>
            <Link href="mailto:contato@cofoundry.tech">
              <Button
                variant="outline"
                className="border-fintech-purple text-fintech-purple hover:bg-fintech-purple/10"
              >
                Contatar suporte
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
