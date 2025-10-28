"use client";

import { useRouter } from "next/navigation";
import {
  LucideIcon,
  Lock,
  Key,
  Save,
  Home,
  FileQuestion,
  Contact2,
  AlertTriangle,
  Lectern,
  Power,
  CircleQuestionMarkIcon,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

type Settings = {
  title: string;
  icon: LucideIcon;
  href: string;
};

export default function userSettings() {
  const SettingsitemsTop: Settings[] = [
    {
      icon: Lock,
      title: "Payment settings",
      href: "/",
    },
    {
      icon: Key,
      title: "Login settings",
      href: "/",
    },
    {
      icon: Save,
      title: "Savings settings",
      href: "/",
    },
  ];

  const settingsItemsMiddle: Settings[] = [
    {
      icon: Home,
      title: "Homepage settings",
      href: "/",
    },
    {
      icon: FileQuestion,
      title: "Security Questions",
      href: "/",
    },
    {
      icon: Contact2,
      title: "Speak with An Agent",
      href: "/",
    },
    {
      icon: AlertTriangle,
      title: "SMS Alert Subscription",
      href: "/",
    },
  ];

  const SettingsitemsBottom: Settings[] = [
    {
      icon: Lectern,
      title: "Feedback and suggestion",
      href: "/",
    },
    {
      icon: Power,
      title: "Close Account",
      href: "/",
    },
    {
      icon: CircleQuestionMarkIcon,
      title: "About",
      href: "/",
    },
  ];

  const router = useRouter();
  const handlebackClick = () => {
    router.push("/UserDashboard");
  };

  const handleLogoutClick = () => {
    router.push("/Account/loginaccount")
  };

  return (
    <>
      <div className="p-2 mb-15 text-sm md:text-md flex flex-col pt-5 gap-3">
        <p className="flex items-center gap-3">
          <ArrowLeft
            onClick={handlebackClick}
            className="cursor-pointer"
            size={20}
          />
          <p className="font-semibold">Settings</p>
        </p>
        <div className=" shadow-gray-400 mt-5 shadow-sm px-2 py-3 rounded-lg">
          <div className="flex flex-col gap-5">
            {SettingsitemsTop.map(({ title, href, icon: Icon }) => (
              <Link href={href} key={title} className="flex items-center gap-3">
                <div className="p-1 rounded-full text-white bg-linear-to-r from-green-900 to-lime-400"><Icon size={18}/></div>
                <p>{title}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className=" shadow-gray-400 shadow-sm px-2 py-3 rounded-lg">
          <div className="flex flex-col gap-5">
            {settingsItemsMiddle.map(({ title, href, icon: Icon }) => (
              <Link href={href} key={title} className="flex items-center gap-3">
                <div className="p-1 rounded-full text-white bg-linear-to-r from-green-900 to-lime-400"><Icon size={18}/></div>
                <p>{title}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="shadow-gray-400 shadow-sm px-2 py-3 rounded-lg">
          <div className="flex flex-col gap-5">
            {SettingsitemsBottom.map(({ title, href, icon: Icon }) => (
              <Link href={href} key={title} className="flex items-center gap-3">
                <div className="p-1 rounded-full text-white bg-linear-to-r from-green-900 to-lime-400"><Icon size={18}/></div>
                <p>{title}</p>
              </Link>
            ))}
          </div>
        </div>
        <button 
            onClick={handleLogoutClick}
            className="shadow-gray-400 cursor-pointer shadow-sm px-2 py-3 rounded-lg">
            Sign Out
        </button>
      </div>
    </>
  );
}
