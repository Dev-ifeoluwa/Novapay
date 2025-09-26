"use client"
import { HomeIcon, Menu, Settings } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AccountFoot() {
     const router = useRouter()
        const handleClick = () => {
            router.push("/Account/SignUp")
        }

    return(
        <>
        <div className="flex justify-between  p-2 items-center rounded bg-white shadow-lime-500 mt-5 px-6 shadow-lg">
            <button 
                onClick={handleClick}
                className="p-2 rounded-full text-white bg-lime-700">
                <HomeIcon/>
            </button>
            <button 
                onClick={handleClick}
                 className="p-2 rounded-full text-white bg-lime-700">
                <Settings/>
            </button>
            {/* <AccountSideBar /> */}
            <button
                onClick={handleClick}
                className="p-2 rounded-full text-white bg-lime-700">
                <Menu />
            </button>
        </div>
    </>
    )
}