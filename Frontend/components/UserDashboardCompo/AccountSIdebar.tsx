"use client"

import { Menu } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function AccountSideBar() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null)


  // toggle sidebar
  const toggleSidebar = () => setOpen(!open)


    // close sidebar on outside click 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && 
        !sidebarRef.current.contains(event.target as HTMLElement))
      {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [])

  const meunItems = [
    "Wallet",
    "Transactions",
    "BreezePay",
    "Loan",
    "Xelviomart",
    "Notification",
    "Appearance",
    "Settings",
    "KYC",
    "Contact us",
    "Report An Issue",
    "Logout"
  ];

  return (
    <>
      <div className="relative">
        <button className="p-2 bg-lime-700 rounded-full text-white"
        onClick={toggleSidebar}>
          <Menu />
        </button>
        {/* sidebar */}
        {open && (
          <div 
            ref={sidebarRef}
            className="fixed top-0 left-0  h-full text-green-800 w-50 bg-white shadow-2xl
                    z-50 p-5 space-y-4">
              {meunItems.map((item, index) => (
                <button
                  key={index}
                  className="block text-left mt-5 w-full text-gray-800
                              hover:text-green-600"
                >
                  {item}
                </button>
            ))}
            
          </div>
        )}
      </div>
    </>
  );
}
