"use client"

import { ArrowLeft, CircleUser, Newspaper } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AirtimeTopup() {
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

    return(
            <div className="p-2 mb-15 text-sm md:text-md flex pt-5 flex-col gap-5">
                <span className="flex justify-between px-2 items-center">
                    <p className="flex items-center gap-3">
                        <ArrowLeft 
                            onClick={HandleClick}
                            className="cursor-pointer"
                            size={20}/>
                        <p className="font-semibold">Airtime Topup</p>
                    </p>
                    <p className="cursor-pointer font-semibold">History</p>
                </span>
                <div className="flex items-center justify-between p-1">
                    <div className="flex items-center p-1 mt-4">
                        <select name="" id="" className="text-sm font-semibold outline-0 border-0">
                            <option value="">MTN</option>
                            <option value="">Glo</option>
                            <option value="">Airtel</option>
                            <option value="">9mobile</option>
                        </select>
                        <input name=""
                        maxLength={11}
                        className="max-w-50 px-7  py-1 outline-0 border-0"
                         id="" placeholder="Phone number"/>
                    </div>
                    <div className="bg-green-600 rounded-full">
                        <CircleUser className="cursor-pointer text-white"/>
                    </div>
                </div>
                <div className="flex flex-col gap-5 px-2 rounded-md shadow-sm py-4 shadow-gray-600">
                    <p className="text-md font-semibold">Topup Plans</p>
                    <div className="grid grid-cols-3 gap-2">
                        {AirtimePrice.map((items, index) => (
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
                <div className="flex flex-col gap-2 p-2 shadow-sm rounded-md shadow-gray-600">
                    <p className="p-1 text-gray-700 font-semibold">Airtime Service</p>
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