"use client";

import { ReactLenis } from "lenis/react";
import { useRef } from "react";
import type { LenisRef } from "lenis/react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.1,
        duration: 1.3,
        smoothWheel: true,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      }}
    >
      {children}
    </ReactLenis>
  );
}
