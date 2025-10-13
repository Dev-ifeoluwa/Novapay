"use client"
import { EyeIcon, EyeOffIcon, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


export default function AdminPage () {
    const [showBalance, setShowBalance] = useState(false)
    const [users, setUsers] = useState(false)
    const [wallet, setWallet] = useState(false)
    const [transaction, setTransaction] = useState(false)
    const [todaysTransaction, setTodaysTransaction] = useState(false)
    const [sales, setSales] = useState(false)
    const [Profit, setProfit] = useState(false)
    const toggleBalance = () => setShowBalance(!showBalance)



    return(  
        <div className="flex flex-col gap-6 justify-center mx-auto w-full md:max-w-2xl">
                <div className="bg-gradient-to-r from-green-900 to-lime-400 py-5 px-3 md:p-10">
                    {/* Layer 1 */}
                    <div className="flex items-center justify-between">
                        <div className="max-w-[200px]">
                            <p className="text-lg md:text-2xl text-white font-semibold whitespace-break-spaces">Welcome, <span className="text-green-100 font-semibold">Admin</span></p>
                        </div>
                        <div className="flex gap-4 text-lg md:text-2xl items-center">
                            <h2 className="font-semibold text-white">Novapay</h2>
                            <Link href={"/Admin"} className="py-1 px-1.5 text-sm font-bold text-gray-700 bg-gray-200 rounded-full">Ad</Link>
                        </div>
                    </div>
                    {/* layer 2 */}
                    <div className="flex bg-lime-600 items-center justify-between border border-dotted border-b-4 border-gray-300 rounded-2xl px-4 mx-1 py-6 md:p-6 mt-10">
                        <div>
                            <p>Admin Balance (API)</p>
                            <div className="flex items-center gap-2">
                                <button onClick={toggleBalance} 
                                    className="flex items-center text-[1.4rem] md:text-3xl font-bold gap-2 text-xl p-1 cursor-pointer rounded-full">
                                    {showBalance? <div className="blur-[6px]">₦750,000.00</div> : '₦750,000.00'}
                                    <span className="bg-green-800 p-1 text-white rounded-full">
                                        {showBalance ? <EyeOffIcon size={17}/> : <EyeIcon size={17}/> }
                                    </span>
                                </button>
                            </div>
                        </div>
                        <Link href={"/Admin"}
                                className="flex text-white rounded-full px-2 py-1 bg-gradient-to-r from-lime-700 to-green-900">
                            <Plus size={17}/>
                            <p className="text-[13px] md:text-sm whitespace-nowrap">Fund Wallet</p>
                        </Link>
                    </div>
                </div>
                {/* Middle */}
                <div className="flex flex-col gap-3 px-4 py-5 md:px-3 shadow-md mx-2 shadow-gray-400 rounded-2xl">
                    <div className="flex justify-between">
                        <div className="flex gap-1 flex-col">
                            <p className="text-lg md:text-xl text-gray-600 font-semibold">Application Views</p>
                            <h3 className="text-xl font-semibold">29,780</h3>
                        </div>
                        <div className="flex gap-1 flex-col">
                            <p className="text-lg md:text-xl cursor-pointer text-green-600 font-semibold">Your Resellers</p>
                            <h3 className="text-xl font-semibold">0 Resellers</h3>
                        </div>
                    </div>
                    <hr className="text-gray-300"/>
                    {/* ---------------------------- */}
                    <div className="flex justify-between">
                        <div className="flex gap-1 flex-col">
                            <p className="text-lg md:text-xl text-green-600 cursor-pointer font-semibold">Total Users</p>
                            <button 
                                onClick={() => setUsers(!users)}
                                className="text-xl flex items-center gap-2 font-semibold">
                                {users? <div className="blur-[6px]">7500</div> : '7500'}
                                {users ? <EyeOffIcon size={17}/> : <EyeIcon size={17}/> }
                            </button>
                        </div>
                        <div className="flex gap-1 flex-col">
                            <p className="text-lg md:text-xl cursor-pointer text-gray-600 font-semibold">User's Wallet</p>
                            <button 
                                onClick={() => setWallet(!wallet)}
                                className="text-xl flex items-center gap-2 font-semibold text-right">
                                {wallet? <div className="blur-[6px]">₦55,050</div> : '₦55,050'}
                                {wallet ? <EyeOffIcon size={17}/> : <EyeIcon size={17}/> }
                            </button>
                        </div>
                    </div>
                    <hr className="text-gray-300"/>
                    {/* ------------------------------ */}
                    <div className="flex justify-between">
                        <div className="flex gap-1 flex-col">
                            <p className="text-lg md:text-xl text-green-600 cursor-pointer font-semibold">Transactions</p>
                            <button 
                                onClick={() => setTransaction(!transaction)}
                                className="text-xl flex items-center gap-2 font-semibold text-right">
                                {transaction? <div className="blur-[6px]">59,050</div> : '59,050'}
                                {transaction ? <EyeOffIcon size={17}/> : <EyeIcon size={17}/> }
                            </button>
                        </div>
                        <div className="flex gap-1 flex-col">
                            <p className="text-lg md:text-xl cursor-pointer text-gray-600 font-semibold">Today's Transaction</p>
                            <button 
                                onClick={() => setTodaysTransaction(!todaysTransaction)}
                                className="text-xl flex items-center gap-2 font-semibold text-right ml-15">
                                {todaysTransaction? <div className="blur-[6px]">55,050</div> : '55,050'}
                                {todaysTransaction? <EyeOffIcon size={17}/> : <EyeIcon size={17}/> }
                            </button>
                        </div>
                    </div>
                    <hr className="text-gray-300"/>
                    {/* --------------------------------- */}
                    <div className="flex justify-between">
                        <div className="flex gap-1 flex-col">
                            <p className="text-lg md:text-xl text-gr-600 font-semibold">Sales(12:26PM - Now)</p>
                            <button 
                                onClick={() => setSales(!sales)}
                                className="text-xl flex items-center gap-2 font-semibold text-right">
                                {sales? <div className="blur-[6px]">2050</div> : '2050'}
                                {sales? <EyeOffIcon size={17}/> : <EyeIcon size={17}/> }
                            </button>
                        </div>
                        <div className="flex gap-1 flex-col">
                            <p className="text-lg md:text-xl cursor-pointer text-green-600 font-semibold">Profit</p>
                            <button 
                                onClick={() => setProfit(!Profit)}
                                className="text-xl flex items-center gap-2 font-semibold text-right -ml-12">
                                {Profit? <div className="blur-[6px]">₦455,050</div> : '₦455,050'}
                                {Profit? <EyeOffIcon size={17}/> : <EyeIcon size={17}/> }
                            </button>
                        </div>
                    </div>
                    <hr className="text-gray-300"/>
                    
                </div>
        </div>
    )
}