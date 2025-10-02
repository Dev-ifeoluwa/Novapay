"use client"

import { ArrowLeft, CircleUser, Newspaper } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MobileDataTopup() {
    const router = useRouter()
    const HandleClick = () => {
        router.push("/UserDashboard")
    }

    const AirtimePrice = [
        {
            dataPlan: "1GB",
            day: "1 Day",
            Price: "₦500"
        },
        {
            dataPlan: "2.5GB",
            day: "2 Days",
            Price: "₦500"
        },
        {
            dataPlan: "500MB",
            day: "7 Days",
            Price: "₦500"
        },
        {
            dataPlan: "1GB",
            day: "7 Days",
            Price: "₦800"
        },
        {
            dataPlan: "2.5GB",
            day: "1 Day",
            Price: "₦750"
        },
        {
            dataPlan: "2GB",
            day: "30 Days",
            Price: "₦1,500"
        },
        {
            dataPlan: "3.5GB",
            day: "30 Days",
            Price: "₦500"
        },
        {
            dataPlan: "20GB",
            day: "7 Days",
            Price: "₦5,000"
        },
        {
            dataPlan: "25GB",
            day: "30 Days",
            Price: "₦15,000"
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
                        <p className="font-semibold">Mobile Data</p>
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
                <div className="flex flex-col text-[12px] md:text-sm gap-5 px-2 rounded-md shadow-sm py-4 shadow-gray-600">
                    <div className="flex text-gray-600 justify-between items-center px-3">
                        <p className="text-md font-semibold">Hot</p>
                        <p className="text-md font-semibold">Daily</p>
                        <p className="text-md font-semibold">weekly</p>
                        <p className="text-md font-semibold">monthly</p>
                        <p className="text-md font-semibold">Yearly plan</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {AirtimePrice.map((items, index) => (
                            <div key={index} className="px-2 py-6 flex flex-col gap-2 shadow-sm shadow-gray-600 rounded-2xl cursor-pointer text-green-800 font-semibold text-md text-center bg-gray-100">
                                <p>{items.dataPlan}</p>
                                <p className="text-[12px] text-white md:text-sm bg-gradient-to-r from-green-900 to-lime-400">{items.day}</p>
                                <p className="text-[12px] md:text-sm text-gray-600">{items.Price}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                </div>
                </div>
                <div className="flex flex-col gap-2 p-2 shadow-sm rounded-md shadow-gray-600">
                    <p className="p-1 text-gray-700 font-semibold">Data Service</p>
                    <span className="flex items-center gap-2">
                        <Newspaper className="text-gray-700"/>
                        <div>
                            <p className="font-semibold text-[12px] md:text-sm">USSD enquiry</p>
                            <p className="text-[12px] text-sm">Check phone and more</p>
                        </div>
                    </span>
                </div>
            </div>
    )
}