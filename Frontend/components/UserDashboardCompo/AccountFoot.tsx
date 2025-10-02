import { Contact, HomeIcon, Menu, Settings } from "lucide-react";
import Link from "next/link";
import AccountSideBar from "./AccountSIdebar";

export default function AccountFoot() {
    return(
        <>
        <div className="flex justify-between p-2 items-center rounded bg-white shadow-lime-500 mt-5 px-6 shadow-lg">
            <Link href={"/UserDashboard"} className="p-2 rounded-full text-white bg-green-700">
                <HomeIcon/>
            </Link>
            <Link href={"/User/Settings"} className="p-2 rounded-full text-white bg-green-700">
                <Settings/>
            </Link>
            <Link 
                href={"/"}
                className="p-2 rounded-full text-white bg-green-700">
                <Contact />
            </Link>
            {/* <AccountSideBar /> */}
        </div>
    </>
    )
}