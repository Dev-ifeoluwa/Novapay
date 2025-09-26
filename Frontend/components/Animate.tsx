"use client";

import { ReactNode } from "react";

type AOSType =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-up-right"
  | "fade-up-left"
  | "fade-down-right"
  | "fade-down-left"
  | "flip-left"
  | "flip-right"
  | "flip-up"
  | "flip-down"
  | "zoom-in"
  | "zoom-in-up"
  | "zoom-in-down"
  | "zoom-in-left"
  | "zoom-in-right"
  | "zoom-out"
  | "zoom-out-up"
  | "zoom-out-down"
  | "zoom-out-left"
  | "zoom-out-right";
   "spin";

interface AnimateProps {
  children: ReactNode;
  type?: AOSType;   // ✅ restricts to valid AOS animations
  delay?: number;   // delay in ms
  duration?: number; // duration in ms
}

export default function Animate({
  children,
  type = "fade-up",
  delay = 0,
  duration = 800,
}: AnimateProps) {
  return (
    <div
      data-aos={type}
      data-aos-delay={delay}
      data-aos-duration={duration}
    >
      {children}
    </div>
  );
}
