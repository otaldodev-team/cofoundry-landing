"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";

export const Contact = () => {
  return (
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
  );
};
