"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {LucideIcon,
     ArrowLeft, 
     Search, Lightbulb,
      PanelBottomClose, Bubbles,
       School2Icon, ShoppingBag,
     Plane, Hotel, 
      Monitor,
      Earth,
      PhoneCall,
      Gamepad2,
      WalletCards,
      BaggageClaim,
      Coins,
      EuroIcon} from "lucide-react";
import Link from "next/link";

type Product = {
    Name: string;
    href: string;
    icon: LucideIcon
};

const MoreServicepage = () => {
  const router = useRouter();
  const HandleClick = () => {
    router.push("/UserDashboard");
  };


  const MoreService:Product[] = [
    {
        icon: Lightbulb,
        Name: "Electricity",
        href: "/"
    },
    {
        icon: PanelBottomClose,
        Name: "Solar",
        href: "/"
    },
    {
        icon: Bubbles,
        Name: "Waste bill",
        href: "/"
    },
    {
        icon: School2Icon,
        Name: "School",
        href: "/"
    },
    {
        icon: ShoppingBag,
        Name: "Online Shopping",
        href: "/"
    },
    {
        icon: Plane,
        Name: "Travel",
        href: "/"
    },
    {
        icon: Hotel,
        Name: "Hotel",
        href: "/"
    },
    {
        icon: Monitor,
        Name: "Tv subscription",
        href: "/User/Tv subscription"
      },
      {
        icon: Earth,
        Name: "Mobile data",
        href: "/User/Mobiledata"
      },
      {
        icon: PhoneCall,
        Name: "Airtime Topup",
        href: "/User/AirtimeTopup"
      },
      {
        icon: Gamepad2,
        Name: "Sport wallet Funding",
        href: "/User/Sport funding"
      },
      {
        icon: WalletCards,
        Name: "Loan",
        href: "/User/Loan"
      },
      {
        icon: EuroIcon,
        Name: "Convert Currency",
        href: "/"
      },
    {
        icon: Coins,
        Name: "Crytotransfer",
        href: "/"
    },
    {
        icon: Monitor,
        Name: "Tv stream",
        href: "/"
    },
  ]

  return (
    <div className="flex flex-col gap-3 px-4 py-8 text-sm md:text-md">
        <span className="flex justify-between px-2 items-center">
            <p className="flex items-center gap-3">
            <ArrowLeft
                onClick={HandleClick}
                className="cursor-pointer"
                size={20}
            />
            <p className="font-semibold">All Service</p>
            </p>
            <Search size={20} />
        </span>
        <div className="flex flex-col gap-3 mt-5">
            <p className="font-semibold">E-commerce</p>
            <div className="shadow-sm flex flex-col items-center gap-3 w-full max-w-27 shadow-gray-400 cursor-pointer rounded-xl px-2 py-4 text-green-950 text-sm">
                <ShoppingBag className="text-green-950"/>
                <p className="text-green-950">Novamart</p>
            </div>
        </div>
        <div className="mt-3 mb-15 text-center justify-center items-center">
            <p className="font-semibold text-left p-2">Bills Payment</p>
            <div className="grid grid-cols-3 lg:grid-cols-4 p-0.5 gap-2">
                {MoreService.map(({Name, href, icon: Icon}) => (
                    <Link
                        href={href}
                        key={Name}
                        className="shadow-sm flex flex-col items-center gap-3 shadow-gray-400 cursor-pointer rounded-xl px-2 py-4 text-green-950 text-sm"
                        >
                        <Icon/>
                        <p>{Name}</p>
                    </Link>
                ))}
             </div>
        </div>
    </div>
  );
};

export default MoreServicepage;
