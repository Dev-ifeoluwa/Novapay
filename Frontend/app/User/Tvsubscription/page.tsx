"use client"

import { ArrowLeft, CircleUser, Newspaper } from "lucide-react";
import { useRouter } from "next/navigation";

type Product = {
    Name: string,
    Plan: any,
    Price: string
}
export default function TvSubsPage() {
    const router = useRouter()
    const HandleClick = () => {
        router.push("/UserDashboard")
    }


    const AirtimePrice = [
        "₦ 50",
        "₦ 100",
        "₦ 200",
        "₦ 500",
        "₦ 1000",
        "₦ 2000",
    ]

    const TvsubPlan:Product[] = [
        {
            Name: "DStv padi",
            Plan: "1 month",
            Price: "4,000"
        },
        {
            Name: "DStv Yanga",
            Plan: "1 month",
            Price: "6,000"
        },
        {
            Name: "DStv Confam",
            Plan: "1 month",
            Price: "11,000"
        },
        {
            Name: "DStv Compact",
            Plan: "1 month",
            Price: "1,900"
        },
        {
            Name: "DStv Compact Plus",
            Plan: "1 month",
            Price: "30,000"
        },
        {
            Name: "DStv Stream Premium",
            Plan: "1 month",
            Price: "44,500"
        },
    ]

    return(
            <div className="p-2 mb-15 text-sm md:text-md flex pt-5 flex-col gap-5">
                <span className="flex justify-between px-2 items-center">
                    <p className="flex items-center gap-3">
                        <ArrowLeft 
                            onClick={HandleClick}
                            className="cursor-pointer"
                            size={20}/>
                        <p className="font-semibold">Tv subscription</p>
                    </p>
                    <p className="cursor-pointer font-semibold">History</p>
                </span>
                <div className="flex flex-col p-2">
                    <div className="flex items-center p-1 mt-4">
                        <select name="" id="" className="text-sm font-semibold outline-0 border-0">
                            <option value="">DStv</option>
                            <option value="">Startime</option>
                            <option value="">Shomax</option>
                            <option value="">Netfilx</option>
                        </select>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-[13px] md:text-sm">Smartcard Number</p>
                            <div>
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <p>Beneficiaries</p>
                                    <span className="bg-green-600 rounded-full">
                                        <CircleUser className="cursor-pointer text-white"/>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <input name=""
                                maxLength={20}
                                className="max-w-50 pr-2 mt-3 font-semibold text-md py-1 outline-0 border-0"
                                id="" placeholder="00000000"/>
                    </div>
                </div>
                <div className="flex flex-col gap-5 px-2 rounded-md shadow-sm py-4 shadow-gray-600">
                    <div className="flex gap-4 items-center text-gray-600">
                        <p className="text-md font-semibold">Hot Offers</p>
                        <p className="text-md font-semibold">Premium</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {TvsubPlan.map((items, index) => (
                            <div 
                                key={index} className="px-3 py-10 flex flex-col gap-2 shadow-sm shadow-gray-600 rounded-2xl text-md cursor-pointer text-green-800 font-semibold text-center bg-gray-100">
                                <p>{items.Name}</p>
                                <p className="text-[12px] md:text-sm text-gray-200 bg-gradient-to-r from-green-900 to-lime-400">{items.Plan}</p>
                                <p className="text-[14px] md:text-sm">{items.Price}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                </div>
                </div>
                <div className="flex flex-col gap-2 p-2 shadow-sm rounded-md shadow-gray-600">
                    <p className="p-1 text-gray-700 font-semibold">Tv Service</p>
                    <span className="flex items-center gap-2">
                        <Newspaper className="text-gray-700"/>
                        <div>
                            <p className="font-semibold text-[12px] text-sm">USSD enquiry</p>
                            <p className="text-[12px] text-sm">Check phone and more</p>
                        </div>
                    </span>
                </div>
            </div>
    )
}