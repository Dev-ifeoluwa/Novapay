// components/Animate.tsx
"use client";

import { ReactNode } from "react";

interface AnimateProps {
  children: ReactNode;
  type?: string;   // animation type e.g. fade-up, zoom-in
  delay?: number;  // delay in ms
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
