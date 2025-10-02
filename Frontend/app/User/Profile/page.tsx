"use client";

import { useRouter } from "next/navigation";
import {
  LucideIcon,
  Save,
  Home,
  ArrowLeft,
  Settings,
  Workflow,
  ShoppingBag,
  HomeIcon,
  LogOut,
  CircleQuestionMark,
  MailQuestionMarkIcon,
  Newspaper,
  Contact,

} from "lucide-react";
import Link from "next/link";

type Settings = {
  title: string;
  icon: LucideIcon;
  href: string;
};

export default function ProfilePage() {
  const SettingsitemsTop: Settings[] = [
    {
      icon: Home,
      title: "Go Home",
      href: "/",
    },
    {
      icon: Settings,
      title: "Settings",
      href: "/",
    },
    {
      icon: Save,
      title: "Refer And Earn",
      href: "/",
    },
  ];

  const SettingsitemsBottom: Settings[] = [
    {
      icon: ShoppingBag,
      title: "Shop Here",
      href: "/",
    },
    {
      icon: HomeIcon,
      title: "Partner with Us",
      href: "/",
    },
    {
      icon: Workflow,
      title: "Find A Job",
      href: "/",
    },
  ];

  const router = useRouter();
  const handlebackClick = () => {
    router.push("/UserDashboard");
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
          <p className="font-semibold">My Profile</p>
        </p>
        <div className="bg-gradient-to-r from-lime-400 to-green-800 shadow-gray-400 text-center justify-center mt-5 shadow-sm px-2 py-3 rounded-lg">
            <div className="p-3">
                <span className="py-3 px-3.5 text-sm font-bold text-gray-700 bg-gray-200 rounded-full">TF</span>
                <p className="mt-5 text-lg md:text-xl font-semibold text-white">Fowobaje Taiwo Patrick</p>
            </div>
            <span className="text-2xl md:text-3xl font-bold text-white">₦550,000.00</span>
            <div className="flex items-center gap-17 text-white md:gap-20 mt-3 p-3 justify-center">
                <Link href={"/"} className="flex flex-col items-center">
                    <span className="bg-green-900 p-2 rounded-full"><Contact size={19}/></span>
                    <p>Contact</p>
                </Link>
                <Link href={"/"} className="flex flex-col items-center">
                    <span className="bg-green-900 p-2 rounded-full"><CircleQuestionMark size={19}/></span>
                    <p>FAQs</p>
                </Link>
                <Link href={"/"} className="flex flex-col items-center">
                    <span className="bg-green-900 p-2 rounded-full"><Newspaper size={19}/></span>
                    <p>Blog</p>
                </Link>
                <Link href={"/"} className="flex flex-col items-center">
                    <span className="bg-green-900 p-2 rounded-full"><LogOut size={19}/></span>
                    <p>SIgn Out</p>
                </Link>
            </div>
        </div>
        <div className="shadow-gray-400 shadow-sm px-2 py-3 rounded-lg">
            <h2 className="font-semibold p-3 text-md mb-2 md:text-xl">Menu</h2>
          <div className="flex flex-col gap-5">
            {SettingsitemsTop.map(({ title, href, icon: Icon }) => (
              <Link href={href} key={title} className="flex items-center gap-3">
                <div className="p-1 rounded-full text-white bg-gradient-to-r from-green-900 to-lime-400"><Icon size={18}/></div>
                <p>{title}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="shadow-gray-400 shadow-sm px-2 py-3 rounded-lg">
            <h2 className="font-semibold p-3 text-md mb-2 md:text-xl">Other service</h2>
          <div className="flex flex-col gap-5">
            {SettingsitemsBottom.map(({ title, href, icon: Icon }) => (
              <Link href={href} key={title} className="flex items-center gap-3">
                <div className="p-1 rounded-full text-white bg-gradient-to-r from-green-900 to-lime-400"><Icon size={18}/></div>
                <p>{title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
