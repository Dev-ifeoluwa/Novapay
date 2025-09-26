"use client"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MouseDot from "components/MouseDot";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "xelviopay - Built for You, Built for Tomorrow",
  description: "banking app for the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){

  useEffect(() => {
    AOS.init({ once: true });
  }, [])
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <MouseDot />
          
          {children}
           
      </body>
    </html>
  );
}
