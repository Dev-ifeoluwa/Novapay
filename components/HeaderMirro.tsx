"use client";

import { useEffect } from "react";

export default function FancyHeading() {
  useEffect(() => {
    const lens = document.querySelector<HTMLElement>(".lens");
    const move = (e: MouseEvent) => {
      if (lens) {
        lens.style.top = `${e.clientY}px`;
        lens.style.left = `${e.clientX}px`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative group">
      <p className="text-5xl md:text-6xl font-semibold max-w-lg leading-[3rem] md:leading-[4rem] md:max-w-xl cursor-default relative z-10">
        <span className="text-green-500">Redefining</span> the Future of Banking
        Today
      </p>
      <div className="lens hidden group-hover:block"></div>

      <style jsx>
        {`
          .lens {
            position: fixed;
            top: 0;
            left: 0;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            pointer-events: none;
            mix-blend-mode: difference; /* inverts colors under lens */
            background: white; /* white makes text invert */
            z-index: 50;
            transform: translate(-50%, -50%);
          }
        `}
      </style>
    </div>
  );
}
