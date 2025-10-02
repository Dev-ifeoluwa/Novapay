"use client"

import { ArrowLeft, CircleUser, Dot, Newspaper } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SportBettingTopup() {
    const router = useRouter()
    const HandleClick = () => {
        router.push("/UserDashboard")
    }

    const BettingPrice = [
        "₦ 50",
        "₦ 100",
        "₦ 200",
        "₦ 500",
        "₦ 1000",
        "₦ 2000",
    ]

    return(
            <div className="p-2 mb-15 text-sm md:text-md flex pt-5 flex-col gap-5">
                <span className="flex justify-between px-2 items-center">
                    <p className="flex items-center gap-3">
                        <ArrowLeft 
                            onClick={HandleClick}
                            className="cursor-pointer"
                            size={20}/>
                        <p className="font-semibold">Betting</p>
                    </p>
                    <p className="cursor-pointer font-semibold">History</p>
                </span>
                <div className="flex flex-col gap-4 mt-4 px-2 py-1  rounded-md shadow-sm shadow-gray-400">
                    <p className="font-semibold">Hot Offers</p>
                    <div className="flex items-center gap-4 text-[12px] md:text-sm">
                        <span className="px-2 py-1 bg-gray-300 text-gray-700 font-semibold rounded-full">Sportybet</span>
                        <span className="px-2 py-1 bg-gray-300 text-gray-700 font-semibold rounded-full">1xbet</span>
                        <span className="px-2 py-1 bg-gray-300 text-gray-700 font-semibold rounded-full">ILotbet</span>
                        <span className="px-2 py-1 bg-gray-300 rounded-full flex items-center">More</span>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-700 mt-3">User Id</p>
                        <input 
                                maxLength={15}
                                className="p-2 w-full my-3 rounded-lg bg-gray-100 text-sm md:text-md font-semibold outline-0 border-0"
                                placeholder="9123756776"/>
                    </div>
                </div>
                <div className="flex flex-col gap-5 px-2 rounded-md shadow-sm py-4 shadow-gray-400">
                    <p className="text-md font-semibold">Select Amount</p>
                    <div className="grid grid-cols-3 gap-2">
                        {BettingPrice.map((items, index) => (
                            <div key={index} className="px-3 py-10 shadow-sm shadow-gray-600 rounded-2xl text-md cursor-pointer text-green-800 font-semibold text-center bg-gray-100">
                                {items}
                            </div>
                        ))}
                    </div>
                    <div>
                    <div className="flex justify-between items-center px-3 py-1">
                        <input 
                            maxLength={6}
                            className="max-w-50 pr-2 py-1 text-sm md:text-md font-semibold outline-0 border-0"
                            placeholder="50-400,000"/>
                        <button className="font-semibold px-3 py-1 shadow-sm shadow-gray-600 text-white  text-[12px] md:text-sm rounded-2xl bg-gradient-to-r from-green-900 to-lime-400">Purchase</button>
                    </div>
                </div>
                </div>
            </div>
    )
}