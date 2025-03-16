"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { LenisProvider } from "@/components/lenis-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppProgressProvider as ProgressProvider } from "@bprogress/next";
import { Toaster } from "@/components/ui/sonner";
import { useEffect, useRef } from "react";
import { frame, cancelFrame } from "framer-motion";
import type { LenisRef } from "lenis/react";
import { ScrollToTop } from "./scroll-to-top";

export function Providers({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LenisProvider>
        <ProgressProvider
          color="#8F2EEF"
          options={{
            showSpinner: false,
          }}
          shallowRouting
        >
          <TooltipProvider>
            {children}
            <Toaster />
            <ScrollToTop />
          </TooltipProvider>
        </ProgressProvider>
      </LenisProvider>
    </ThemeProvider>
  );
}
