"use client"

import { ArrowLeft, CircleUser, Newspaper, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type DataPlan = {
    // id: number;
    dataPlan: string;
    Validity: string;
    Price: string;
}

type DataPlans = {
    dataPlan: string;
    Validity: string;
    Price: string;
}


export default function MobileDataTopup() {
    const router = useRouter()
    const HandleClick = () => {
        router.push("/UserDashboard")
    }

    const [network, setNetwork] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [selectPlan, setSelectPlan] = useState<DataPlans | null>(null)
    const [showPopup, setShowPopup] = useState(false)
    const [error, setError] = useState('')
    const [activeTab, setActiveTab] = useState<'Hot' | 'Daily' | 'Weekly' | 'Monthly' | 'Yearly'>('Hot')
    const [filteredPlan, setFilteredPlan] = useState<DataPlans[]>([])

    useEffect(() => {
        filterPlan('Hot')
    }, [])

    const tabs = ['Hot', 'Daily', 'Weekly', 'Monthly', 'Yearly'];

    const filterPlan = (tab: 'Hot' | 'Daily' | 'Weekly' | 'Monthly' | 'Yearly') => {
        setActiveTab(tab)
        let durationFilter = ''
        switch (tab) {
            case 'Hot':
                durationFilter = 'Day';
                break;
            case 'Daily':
                durationFilter = '1 Day';
                break
            case 'Weekly':
                durationFilter = '7 Days';
                break
            case 'Monthly':
                durationFilter = '30 Days';
                break
            case 'Yearly':
                durationFilter = 'Year';
                break
        }
        const filtered = DataPrice.filter((plan) => plan.Validity.includes(durationFilter))
        setFilteredPlan(filtered)
    }

    const handleTabClick = (tab: 'Hot' | 'Daily' | 'Weekly' | 'Monthly' | 'Yearly') => {
        filterPlan(tab)
    }

    const handleCardClick = (plan: any) => {
        if (!network || !phoneNumber) {
            alert('please select network and enter phone number')
            return
        }
        setSelectPlan(plan)
        setShowPopup(true)
    }

    const handleProcess = () => {
        const payload = {
            network,
            phoneNumber,
            dataPlan: selectPlan?.dataPlan,
            validity: selectPlan?.Validity,
            price: selectPlan?.Price
        }
        console.log('sending to backend:', payload);

    }

    const DataPrice: DataPlan[] = [
        {
            dataPlan: "1GB",
            Validity: "1 Day",
            Price: "₦500"
        },
        {
            dataPlan: "2.5GB",
            Validity: "2 Days",
            Price: "₦500"
        },
        {
            dataPlan: "500MB",
            Validity: "7 Days",
            Price: "₦500"
        },
        {
            dataPlan: "1GB",
            Validity: "7 Days",
            Price: "₦800"
        },
        {
            dataPlan: "2.5GB",
            Validity: "1 Day",
            Price: "₦750"
        },
        {
            dataPlan: "2GB",
            Validity: "30 Days",
            Price: "₦1,500"
        },
        {
            dataPlan: "3.5GB",
            Validity: "30 Days",
            Price: "₦500"
        },
        {
            dataPlan: "20GB",
            Validity: "7 Days",
            Price: "₦5,000"
        },
        {
            dataPlan: "25GB",
            Validity: "30 Days",
            Price: "₦15,000"
        },
        {
            dataPlan: "60GB",
            Validity: "Year",
            Price: "₦75,000"
        },
        {
            dataPlan: "100GB",
            Validity: "Year",
            Price: "₦110,000"
        },
    ]


    return (
        <div className="p-2 pt-8 mb-15 text-sm md:text-md flex md:pt-5 flex-col gap-5">
            {error && (
                <div className="bg-red-400 font-semibold text-white text-[12px] md:text-sm text-center py-2 rounded ">{error}</div>
            )}
            <span className="flex justify-between px-2 items-center">
                <p className="flex items-center gap-3">
                    <ArrowLeft
                        onClick={HandleClick}
                        className="cursor-pointer"
                        size={20} />
                    <p className="font-semibold">Mobile Data</p>
                </p>
                <p className="cursor-pointer font-semibold">History</p>
            </span>
            <div className="flex items-center justify-between p-1">
                <div className="flex items-center p-1 mt-4">
                    <select name="" id=""
                        onChange={(e) => setNetwork(e.target.value)}
                        className="text-sm font-semibold outline-0 border-0">
                        <option value="">Network</option>
                        <option value="MTN">MTN</option>
                        <option value="Glo">Glo</option>
                        <option value="Airtel">Airtel</option>
                        <option value="9mobile">9mobile</option>
                    </select>
                    <input name="" type="tel"
                        value={phoneNumber}
                        onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '');
                            setPhoneNumber(value);

                            if (value.length > 0 && value[0] !== '0') {
                                setError('phone number must start with 0');
                            } else if (value.length > 0 && value.length !== 11) {
                                setError('phone number must be 11 digits');
                            }
                            else {
                                setError('')
                            }
                        }}
                        maxLength={11}
                        className="max-w-50 px-7 py-1 outline-0 border-0"
                        id="" placeholder="Phone number"
                    />
                </div>
                <div className="bg-green-600 rounded-full">
                    <CircleUser className="cursor-pointer text-white" />
                </div>
            </div>
            <div className="flex flex-col text-[12px] md:text-sm gap-5 px-2 rounded-md shadow-sm py-4 shadow-gray-600">
                <div className="flex text-gray-600 justify-between items-center px-3">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className="bg-gray-200 px-2.5 py-1 rounded-full"
                            onClick={() => handleTabClick(tab as 'Hot' | 'Daily' | 'Weekly' | 'Monthly' | 'Yearly')}>
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {filteredPlan.length === 0}
                    {filteredPlan.map((plan: DataPlan, index: number) => (
                        <div key={index}
                            onClick={() => handleCardClick(plan)}
                            className="px-2 py-6 flex flex-col gap-2 shadow-sm shadow-gray-600 rounded-2xl cursor-pointer text-green-800 font-semibold text-md text-center bg-gray-100">
                            <p>{plan.dataPlan}</p>
                            <p className="text-[12px] text-white md:text-sm bg-gradient-to-r from-green-900 to-lime-400">{plan.Validity}</p>
                            <p className="text-[12px] md:text-sm text-gray-600">{plan.Price}</p>
                        </div>
                    ))}
                </div>
                <div>
                </div>
            </div>
            <div className="flex flex-col gap-2 p-2 shadow-sm rounded-md shadow-gray-600">
                <p className="p-1 text-gray-700 font-semibold">Data Service</p>
                <span className="flex items-center gap-2">
                    <Newspaper className="text-gray-700" />
                    <div>
                        <p className="font-semibold text-[12px] md:text-sm">USSD enquiry</p>
                        <p className="text-[12px] text-sm">Check phone and more</p>
                    </div>
                </span>
            </div>
            {showPopup && selectPlan && (
                <div className="fixed bottom-0 mb-13 bg-opacity-50 backdrop-blur-lg left-0 right-0 p-4 shadow-md
                        rounded-t-3xl shadow-t-sm w-full md:max-w-2xl mx-auto">
                    <div className="flex flex-col gap-3">
                        <p className="flex justify-between items-center px-4"><strong>Service: </strong>{network}</p>
                        <p className="flex justify-between items-center px-4"><strong>Number: </strong>{phoneNumber}</p>
                        <p className="flex justify-between items-center px-4"><strong>Data plan: </strong>{selectPlan.dataPlan}</p>
                        <p className="flex justify-between items-center px-4"><strong>Validity: </strong>{selectPlan.Validity}</p>
                        <p className="flex justify-between items-center px-4"><strong>Price: </strong>{selectPlan.Price}</p>
                    </div>
                    <div className="flex mt-4 justify-between items-center">
                        <button
                            className="cursor-pointer w-[150px] bg-gradient-to-r from-green-900 to-lime-400 text-white px-4 py-2 rounded-2xl"
                            onClick={handleProcess}
                        >Process</button>
                        <button
                            onClick={() => setShowPopup(false)}
                            className="bg-gray-600 w-[150px] text-white cursor-pointer px-4 py-2 rounded-2xl">Cancel</button>
                    </div>
                </div>
            )}
        </div>
    )
}