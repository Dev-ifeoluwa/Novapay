import { EyeIcon, Plus } from "lucide-react";

export default function AccountCard() {
    return(
        <>
            <div className="flex flex-col gap-6 justify-center p-4 mx-auto w-full md:max-w-2xl md:p-10 bg-gradient-to-r from-green-900 to-lime-400">
                <div className="flex items-center justify-between">
                    <p className="text-lg md:text-2xl text-white font-semibold">Welcome, <span className="text-green-100 font-semibold">Taiwo</span></p>
                    <div className="flex gap-6 text-lg md:text-2xl items-center">
                        <h2 className="font-semibold text-white">Xelviopay</h2>
                        <span className="py-1 px-1.5 text-sm font-bold text-gray-700 bg-gray-200 rounded-full">TF</span>
                    </div>
                </div>
                {/* bottom */}
                <div className="flex bg-lime-600 border border-dotted border-b-4 border-gray-300 rounded-2xl p-6 flex-col mt-10">
                    <div className="flex  justify-between">
                        <div className="flex flex-col gap-1 mb-6">
                            <p className="text-white font-semibold text-lg md:text-2xl">Account Number</p>
                            <p className="text-white text-lg md:text-2xl">2345678923</p>
                        </div>
                        <div className="flex flex-col gap-7 items-center">
                            <div className="flex gap-2 items-center">
                                <p className="text-md text-white font-semibold">Currency</p>
                                <select name="" id="" className="text-white border-0 outline-0">
                                    <option value="" className="text-black">$</option>
                                    <option value="" className="text-black">£</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4 items-center text-white">
                            <div className="flex items-center gap-4">
                                <span className="bg-green-800 p-1 rounded-full"><EyeIcon /></span>
                                <span className="rounded-full p-1 bg-green-800"><Plus /></span>
                            </div>
                            <h4 className="text-2xl md:text-3xl font-semibold text-white">₦550,000.00</h4>
                    </div>
                </div>
            </div>
        </>
    )
} 