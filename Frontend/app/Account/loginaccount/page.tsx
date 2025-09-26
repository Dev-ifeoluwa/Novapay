import AccountCard from "components/AccountUserDemoDashboard/AccountCard";
import AccountFoot from "components/AccountUserDemoDashboard/AccountFoot";
import AccountProductCard from "components/AccountUserDemoDashboard/AccountProductCard";

export default function Loginaccount() {
    return(
        <>
        <div className="justify-center shadow-lime-500 shadow-lg mx-auto w-full md:max-w-2xl md:px-0">
        <AccountCard />
        <AccountProductCard />
        <AccountFoot />
        </div>
        </>
    )
}