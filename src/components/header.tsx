"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Rocket, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AuthModal } from "@/components/auth-modal";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 lg:px-16">
        <Link href="/" className="flex items-center gap-2">
          <Rocket className="h-6 w-6" />
          <span className="font-heading text-xl font-bold">CoFoundry</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link
            href="/projetos"
            className="text-base font-medium underline-offset-4 hover:underline"
          >
            Projetos
          </Link>
          <Link
            href="/profissionais"
            className="text-base font-medium underline-offset-4 hover:underline"
          >
            Profissionais
          </Link>
          <Link
            href="/sobre"
            className="text-base font-medium underline-offset-4 hover:underline"
          >
            Sobre
          </Link>
          <Link
            href="/changelog"
            className="text-base font-medium underline-offset-4 hover:underline"
          >
            Changelog
          </Link>
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <AuthModal />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="sr-only">Abrir menu</span>
        </Button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container border-t px-4 py-4">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/projetos"
                  className="text-sm font-medium underline-offset-4 hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projetos
                </Link>
                <Link
                  href="/profissionais"
                  className="text-sm font-medium underline-offset-4 hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profissionais
                </Link>
                <Link
                  href="/sobre"
                  className="text-sm font-medium underline-offset-4 hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre
                </Link>
              </nav>
              <div className="mt-4 flex flex-col gap-4">
                <AuthModal />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
