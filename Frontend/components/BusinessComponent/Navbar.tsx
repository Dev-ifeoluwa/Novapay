"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full fixed top-0 left-0 bg-green-800 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-bold">
            <span className="bg-green-500 rounded-full p-2">
              <Image src="/arrow-white.svg" alt="logo" height="15" width="15" />
            </span>
            <Link href="/Business">
              Novapay
              <span className="text-green-500 font-bold text-3xl">.</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-15 text-lg">
            <Link href="/Business" className="hover:text-gray-200 transition-colors">
              Business
            </Link>
            <Link href="/Personal" className="hover:text-gray-200 transition-colors">
              Personal
            </Link>
            <Link href="/Company" className="hover:text-gray-200 transition-colors">
              Company
            </Link>
            <Link href="/Contact" className="hover:text-gray-200 transition-colors">
              Contact
            </Link>
          </div>

          {/* Get Started Button */}
          <div className="hidden md:block relative px-6 py-2 font-semibold rounded-md overflow-hidden group">
            <Link href="/Account/loginaccount">
              <span className="absolute inset-0 bg-black translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10">Login / signup</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="md:hidden bg-green-700 text-white px-6 py-4 space-y-4">
          <Link href="/Business" className="block hover:text-gray-200">
           Business
          </Link>
          <Link href="/Personal" className="block hover:text-gray-200">
            Personal
          </Link>
          <Link href="/Company" className="block hover:text-gray-200">
            Company
          </Link>
          <Link href="/Contact" className="block hover:text-gray-200">
            Contact
          </Link>
          <Link
            href="/Account/loginaccount"
            className="relative inline-block px-6 py-2 font-semibold rounded-md overflow-hidden group"
          >
            <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
            <span className="relative z-10">Login / signup</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
