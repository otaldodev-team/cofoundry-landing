"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import {
  Briefcase,
  Bug,
  Code,
  Database,
  Palette,
  Rocket,
  Smartphone,
} from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string }
>(({ className, children, label }, ref) => {
  return (
    <div className="flex flex-col items-center">
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        {children}
      </div>
      {label && (
        <span className="mt-2 text-base font-medium text-white">{label}</span>
      )}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedJobs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between text-black">
          <Circle ref={div1Ref} label="Developers">
            <Code className="h-10 w-10" />
          </Circle>
          <Circle ref={div5Ref} label="Designers">
            <Palette className="h-10 w-10" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between text-black">
          <Circle ref={div2Ref} label="Business">
            <Briefcase className="h-10 w-10" />
          </Circle>
          <Circle ref={div4Ref} className="size-16" label="CoFoundry">
            <Rocket className="h-10 w-10" />
          </Circle>
          <Circle ref={div6Ref} label="QA">
            <Bug className="h-10 w-10" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between text-black">
          <Circle ref={div3Ref} label="Data">
            <Database className="h-10 w-10" />
          </Circle>
          <Circle ref={div7Ref} label="Mobile">
            <Smartphone className="h-10 w-10" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
