"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
  <>
    <footer className="flex flex-col mx-auto gap-8 justify-between items-center bg-gray-900 text-gray-200 px-2 py-9 md:px-6 md:py-15 md:flex-row">
      <div className="flex flex-col">
        <div className="w-full max-w-md">
          <h3 className="font-bold text-lg mt-6 mb-2 text-white">Novapay</h3>
          <p className="text-sm">
            Novapay is authorised and regulated by the Central Bank of Nigeria
            to offer banking services. Deposits are insured by the Nigerian
            Deposit Insurance Corporation (NDIC).
          </p>
        </div>
        <div>
          <div className="flex items-center gap-5 px-2 md:px-1">
            <div
              className="mt-8 flex hover:bg-black items-center gap-4 bg-green-600 md:font-medium
                  text-white p-2 md:px-3 md:py-2 rounded-xl cursor-pointer 
                  transition-colors duration-300"
              >
              <Link href={"/"} className="flex items-center">
                <Image src="/playstore.svg" alt="logo" height="20" width="20" />
                <span>
                  <p className="text-[12px] md:text-md font-medium">Get it on</p>
                  <h2 className="text-sm md:text-md">Google Play</h2>
                </span>
              </Link>
            </div>
            {/*  */}
            <div
              className="mt-8 flex hover:bg-green-600 items-center gap-4 bg-black md:font-medium
                  text-white p-2 md:px-3 md:py-2 rounded-xl cursor-pointer 
                  transition-colors duration-300"
              >
              <Link href={"/"} className="flex items-center">
                <Image src="/apple.svg" alt="logo" height="30" width="30" />
                <span>
                  <p className="text-[12px] md:text-md font-medium">Get it on</p>
                  <h2 className="text-sm md:text-md">Apple Store</h2>
                </span>
              </Link>
            </div>
          </div>
        </div> 
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* xelviopay Info */}
        {/* For Business */}
        <div>
          <h4 className="font-semibold mb-2 text-white">For Business</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/Business" className="hover:text-green-400 transition">
                Business Account
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Point of Sale Terminal
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Loan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Expense Card
              </a>
            </li>
          </ul>
        </div>
        {/* For Personal */}
        <div>
          <h4 className="font-semibold mb-2 text-white">For Personal</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Instant Debit Card
              </a>
            </li>
            <li>
              <a href="/Personal" className="hover:text-green-400 transition">
                Personal Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Payment
              </a>
            </li>
            <li>
              <a href="/Personal" className="hover:text-green-400 transition">
                Personal Banking
              </a>
            </li>
          </ul>
        </div>
        {/* -------------- */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-green-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Xelviomart
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Join Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Press & Media
              </a>
            </li>
            <li>
              <a href="/Contact" className="hover:text-green-400 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* Resource */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Resource</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Help center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Learning Centre
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Whistleblower Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                IMS Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Security Trust Center
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <div>
      <div className="bg-gray-800 text-center py-4">
        <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Novapay. All rights reserved built and developed by Ifeoluwa fowobaje</p>
      </div>
    </div>
  </>
  );
}
