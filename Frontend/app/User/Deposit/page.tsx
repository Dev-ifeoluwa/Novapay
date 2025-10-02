"use client"

import { ArrowLeft, ArrowRight, CardSim, Home, QrCode, TabletIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddMoney() {
    const router = useRouter()
    const HandleClick = () => {
        router.push("/UserDashboard")
    }

    return (
        <div className="p-2 mb-15 text-sm md:text-md flex pt-5 flex-col gap-5">
            <span className="flex px-2 items-center">
                <p className="flex items-center gap-3">
                    <ArrowLeft
                        onClick={HandleClick}
                        className="cursor-pointer"
                        size={20} />
                    <p className="font-semibold">Add Money</p>
                </p>
            </span>
            <div className="bg-gradient-to-r from-green-900 to-lime-400 text-white flex flex-col gap-4 mt-4 px-4 py-2  rounded-md shadow-sm shadow-gray-400">
                <div className="flex justify-between p-2 items-center">
                    <div className="flex items-center gap-4">
                        <span className="p-2 bg-green-700 text-white rounded-full"><Home /></span>
                        <div>
                            <h2 className="font-semibold">Bank Transfer</h2>
                            <p>Add money via mobile banking</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <ArrowRight />
                    </div>
                </div>
                <div>
                    <p>Account Number</p>
                    <p className="font-bold text-2xl md:text-3xl tracking-[7px]">2345678923</p>
                </div>
                <div className="flex items-center justify-between px-3 py-2">
                    <p className="bg-lime-400 px-4 py-2 rounded-2xl text-black">Copy Number</p>
                    <p className="bg-green-600 px-4 py-2 rounded-2xl">Share Details</p>
                </div>
            </div>
            <div className="flex items-center mx-auto gap-4 text-gray-600">
                <hr className="w-30" /><p>OR</p><hr className="w-30" />
            </div>
            <div className="flex justify-between px-4 items-center rounded-md shadow-sm py-4 shadow-gray-400">
                <div className="flex items-center gap-4">
                    <span className="p-2 bg-green-700 text-white rounded-full"><Home /></span>
                    <div className="flex flex-col gap-1">
                        <h2 className="font-semibold">Cash Deposit (Coming Soon)</h2>
                        <p>Fund your Account with <br /> nearby merchants</p>
                    </div>
                </div>
                <div>
                    <ArrowRight />
                </div>
            </div>
            <div className="flex justify-between px-4 items-center rounded-md shadow-sm py-4 shadow-gray-400">
                <div className="flex items-center gap-4">
                    <span className="p-2 bg-green-700 text-white rounded-full"><CardSim /></span>
                    <div className="flex flex-col gap-1">
                        <h2 className="font-semibold">Deposit with card</h2>
                        <p>Add money with your bank card</p>
                    </div>
                </div>
                <div>
                    <ArrowRight />
                </div>
            </div>
            <div className="flex justify-between px-4 items-center rounded-md shadow-sm py-4 shadow-gray-400">
                <div className="flex items-center gap-4">
                    <span className="p-2 bg-green-700 text-white rounded-full"><TabletIcon /></span>
                    <div className="flex flex-col gap-1">
                        <h2 className="font-semibold">Bank USSD</h2>
                        <p>Add money with other banks</p>
                    </div>
                </div>
                <div>
                    <ArrowRight />
                </div>
            </div>
            <div className="flex justify-between px-4 items-center rounded-md shadow-sm py-4 shadow-gray-400">
                <div className="flex items-center gap-4">
                    <span className="p-2 bg-green-700 text-white rounded-full"><QrCode /></span>
                    <div className="flex flex-col gap-1">
                        <h2 className="font-semibold">Scan my QR Code</h2>
                        <p>Show OR code to any Xelviopay user</p>
                    </div>
                </div>
                <div>
                    <ArrowRight />
                </div>
            </div>
        </div>
    )
}