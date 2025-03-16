"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLenis } from "lenis/react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [toggleVisibility]);

  const scrollToTop = () => {
    lenis?.scrollTo(0, {
      duration: 1.3,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={cn(
        "fixed bottom-4 right-4 z-40 rounded-full shadow-md transition-opacity duration-300",
        isVisible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  );
}
