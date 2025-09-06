"use client";

import Hero from "components/Hero";
import About from "components/About";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  let timeout: NodeJS.Timeout;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => setVisible(false), 200); // hide after 200ms of no movement
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen bg-white text-black">
      {/* <h1 className="text-center text-4xl pt-20">Welcome to My Homepage</h1> */}
      {/* <Hero /> */}
      <Hero />
      <div className="py-6 px-8">
        <About />
      </div>
      {/* Custom Cursor Dot */}
      {visible && (
        <div
          className="fixed w-3 h-3 bg-green-600 rounded-full pointer-events-none transition-transform duration-75 ease-linear"
          style={{
            left: position.x,
            top: position.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </main>
  );
}
