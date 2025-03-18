"use client";

import { useState, useEffect } from "react";
import { SpinningText } from "@/components/magicui/spinning-text";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

interface FixedSpinningTextProps {
  text: string;
  className?: string;
  textClassName?: string;
  duration?: number;
  radius?: number;
  zIndex?: number;
  offsetX?: number;
  offsetY?: number;
  mobileRadius?: number;
  mobileOffsetX?: number;
  mobileOffsetY?: number;
  hideOnMobile?: boolean;
}

export function FixedSpinningText({
  text,
  className,
  textClassName,
  duration = 15,
  radius = 5,
  zIndex = 50,
  offsetX = 20,
  offsetY = 20,
  mobileRadius = 3.5,
  mobileOffsetX = 10,
  mobileOffsetY = 10,
  hideOnMobile = false,
}: FixedSpinningTextProps) {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery("(max-width: 640px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentRadius = isMobile ? mobileRadius : radius;
  const currentOffsetX = isMobile ? mobileOffsetX : offsetX;
  const currentOffsetY = isMobile ? mobileOffsetY : offsetY;

  if (isMobile && hideOnMobile) {
    return null;
  }

  return (
    <div
      className={cn(
        "pointer-events-none fixed bottom-2 left-2 font-heading",
        className,
      )}
      style={{
        zIndex,
        marginLeft: currentOffsetX,
        marginBottom: currentOffsetY,
      }}
    >
      <SpinningText
        className={cn("text-base opacity-70 sm:text-2xl", textClassName)}
        duration={duration}
        reverse
        radius={currentRadius}
      >
        {text}
      </SpinningText>
    </div>
  );
}
