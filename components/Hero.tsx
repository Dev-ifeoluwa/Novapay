"use client";

import HeaderMirro from "./HeaderMirro";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-[120vh] overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-[120vh] object-cover"
      >
        <source src="/fintech-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (darkens video slightly for readability) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white mt-25">
        <div className="flex items-center gap-2 mt-4">
          <span className="bg-green-500 rounded-full p-2 animate-bounce">
            <Image src="/arrow-white.svg" alt="logo" height="15" width="15" />
          </span>
          <p className="text-lg md:text-2xl mb-4 cursor-default">
            Built for You, Built for Tomorrow
          </p>
        </div>
        <HeaderMirro />
        <p className="mt-4 max-w-2xl text-lg md:text-xl cursor-default">
          Guiding you with expert insights and strategic solutions to achieve
          financial growth, stability, and long-term success.
        </p>
        <div className="flex items-center gap-3">
          <div
            className="mt-8 flex relative overflow-hidden group items-center gap-6 text-lg 
            md:text-xl font-medium bg-green-600 hover:bg-green-700 
            text-white px-6 py-3 rounded-full cursor-pointer 
            transition-colors duration-300"
          >
            <Link href={"/"}>
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10">Get Started</span>
            </Link>
            <span className="animate-bounce">
              <Image src="/arrow-white.svg" alt="logo" height="20" width="20" />
            </span>
          </div>
          <div
            className="mt-8 flex items-center gap-7 text-lg 
    md:text-xl font-medium 
    text-white px-6 py-3 rounded-full cursor-pointer 
    transition-colors duration-300"
          >
            <span className="relative group">
              <Image src="/icon-play.svg" alt="logo" height={15} width={15} />

              {/* Tooltip Circle */}
              <span
                className="absolute left-1/2 -translate-x-1/2 -top-3
                          w-16 h-16 flex items-center justify-center
                          opacity-0 group-hover:opacity-100 
                          transition-opacity duration-300  animate-bounce 
                          bg-black text-white text-sm font-medium
                          rounded-full shadow-lg"
              >
                Play
              </span>
            </span>

            <Link href={"/"}>introduction</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
