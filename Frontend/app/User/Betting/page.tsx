"use client"

import { ArrowLeft, CircleUser, Dot, Newspaper } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SportBettingTopup() {
    const [chooseBet, setChooseBet] = useState('')
    const [betId, setBetId] = useState('')
    const [price, setPrice] = useState('')
    const [showPopUp, setShowPopUp] = useState(false)

    const handleBetPrice = (value: any) => {
        setPrice(value.toString())
    }

    const handlePurchaseBtn = () => {
        if (!chooseBet || !betId || !price) {
            alert('please select enter bet option, Bet Id and price')
            return
        }
        setShowPopUp(true)
    }

    const router = useRouter()
    const HandleClick = () => {
        router.push("/UserDashboard")
    }

    const BettingPrice = [
        "50",
        "100",
        "200",
        "500",
        "1000",
        "2000",
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
                    <p className="font-semibold">Bet Option</p>
                    <select 
                        name="" 
                        id="" 
                        onChange={(e) => setChooseBet(e.target.value)}
                        className="text-sm font-semibold outline-0 border-0">
                        <option value="">Choose here</option>
                        <option value="Sportybet">Sportybet</option>
                        <option value="BetNaija">BetNaija</option>
                        <option value="BetKing">BetKing</option>
                        <option value="1xbet">1xbet</option>
                    </select>
                    <div>
                        <p className="font-semibold text-gray-700 mt-3">User Id</p>
                        <input 
                                maxLength={15}
                                onChange={(e) => setBetId(e.target.value.replace(/\D/g, ''))}
                                value={betId}
                                className="p-2 w-full my-3 rounded-lg bg-gray-100 text-sm md:text-md font-semibold outline-0 border-0"
                                placeholder="9123756776"/>
                    </div>
                </div>
                <div className="flex flex-col gap-5 px-2 rounded-md shadow-sm py-4 shadow-gray-400">
                    <p className="text-md font-semibold">Select Amount</p>
                    <div className="grid grid-cols-3 gap-2">
                        {BettingPrice.map((plan) => (
                            <div
                                key={plan}
                                onClick={() => handleBetPrice(plan)}
                                className="px-3 py-10 shadow-sm shadow-gray-600 rounded-2xl text-md cursor-pointer text-green-800 font-semibold text-center bg-gray-100">
                                ₦{plan}
                            </div>
                        ))}
                    </div>
                    <div>
                    <div className="flex justify-between items-center px-3 py-1">
                        <div className="flex items-center gap-1 w-full">
                            <span className="text-lg font-semibold text-black">₦</span>
                                <input
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value.replace(/\D/g, ''))}
                                    maxLength={6}
                                    className="max-w-50 pr-2 py-1 text-sm md:text-md font-semibold outline-0 border-0"
                                    placeholder="50-300,000"/>
                        </div>
                        <button 
                        onClick={handlePurchaseBtn}
                        className="font-semibold px-3 py-1 shadow-sm shadow-gray-600 text-white  text-[12px] md:text-sm rounded-2xl bg-gradient-to-r from-green-900 to-lime-400">Purchase</button>
                    </div>
                </div>
                </div>
                {showPopUp && (
                <div className="fixed mb-13 p-2 shadow-md
                        rounded-t-3xl shadow-t-sm shadow-gray-400 w-full h-50 md:max-w-2xl mx-auto
                        bottom-0 left-0 right-0 bg-opacity-100 backdrop-blur-lg justify-center z-50">
                    <div className=" p-3 rounded-2xl">
                        <div className="flex flex-col gap-4">
                            <p className="flex justify-between items-center px-4"><strong>Bet Provider: </strong>{chooseBet}</p>
                            <p className="flex justify-between items-center px-4"><strong>Bet Id: </strong>{betId}</p>
                            <p className="flex justify-between items-center px-4"><strong>Price: </strong>₦{price}</p>
                        </div>
                        <div className="flex mt-4 justify-between items-center">
                            <button
                                className="cursor-pointer w-[150px] bg-gradient-to-r from-green-900 to-lime-400 text-white px-4 py-2 rounded-2xl"
                                // onClick={handleProcess}
                            >Process</button>
                            <button
                                onClick={() => setShowPopUp(false)}
                                className="bg-gray-600 w-[150px] text-white cursor-pointer px-4 py-2 rounded-2xl">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
            </div>
    )
}