import AccountCard from "components/UserDashboardCompo/AccountCard";
import AccountProductCard from "components/UserDashboardCompo/AccountProductCard";
import AccountTransaction from "components/UserDashboardCompo/AccountTransaction";

export default function UserDashboard() {
    return(
        <>
            <div >
                <AccountCard />
                <AccountProductCard />
                <div>
                    <div className="mb-14">
                        <AccountTransaction />
                    </div>
                </div>
            </div>
        </>
    )
}