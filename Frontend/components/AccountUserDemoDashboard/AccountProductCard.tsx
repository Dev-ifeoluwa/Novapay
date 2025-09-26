"use client"
import { useRouter } from "next/navigation";
import {
    PenIcon,
    Gamepad2,
    PhoneCall,
    Earth,
    EuroIcon,
    WalletCards,
    Newspaper,
    Plane,
    Network,
    Monitor,
    LoaderIcon,
    BaggageClaim,
    Banknote,
    ArrowBigDownIcon,
  } from "lucide-react";
  import Link from "next/link";
  
  export default function AccountProductCard() {
    const router = useRouter()
    const handleClick = () => {
      router.push("/Account/SignUp")
    }

    const BankFeature = [
      {
        icon: <Banknote />,
        Name: "Reward",
      },
      {
        icon: <Network />,
        Name: "Xelviotransfer",
      },
      {
        icon: <Monitor />,
        Name: "Tv subscription",
      },
      {
        icon: <Earth />,
        Name: "Mobile data",
      },
      {
        icon: <PhoneCall />,
        Name: "Airtime Topup",
      },
      {
        icon: <Gamepad2 />,
        Name: "Sport wallet Funding",
      },
      {
        icon: <WalletCards />,
        Name: "Loan",
      },
      {
        icon: <LoaderIcon />,
        Name: "Business Account",
      },
      {
        icon: <BaggageClaim />,
        Name: "Xelviomart",
      },
      {
        icon: <EuroIcon />,
        Name: "Convert Currency",
      },
      {
        icon: <Plane />,
        Name: "Travel Payment",
      },
      {
        icon: <Newspaper />,
        Name: "Transaction history",
      },
    ];
  
    return (
      <>
        <div className="flex flex-col gap-3 px-4 py-8">
          <div className="flex items-center justify-between">
            <h4 className="text-lg md:text-xl text-green-950 font-semibold">
              Quick Actions
            </h4>
            <button
              onClick={handleClick} 
              className="flex cursor-pointer items-baseline-last gap-2 font-semibold text-green-950">
              <PenIcon size={15} />
              <p>Edit</p>
            </button>
          </div>
          {/* product card */}
          <div className="mt-3 text-center justify-center items-center">
            <div className="grid grid-cols-3 lg:grid-cols-4 p-0.5 gap-2">
              {BankFeature.map((BankFeature, index) => (
                <div
                  key={index}
                  onClick={handleClick}
                  className="shadow-sm flex flex-col items-center gap-3 shadow-gray-400 cursor-pointer rounded-xl px-2 py-4 text-greeb-950 text-sm"
                >
                  <span>{BankFeature.icon}</span>
                  <p>{BankFeature.Name}</p>
                </div>
              ))}
            </div>
          </div>
          <Link
            href={"/"}
            className="font-bold text-sm md:text-md text-blue-950 gap-1 flex items-center mx-auto text-center justify-center"
          >
            <p>Show More</p>
            <ArrowBigDownIcon />
          </Link>
        </div>
      </>
    );
  }
  