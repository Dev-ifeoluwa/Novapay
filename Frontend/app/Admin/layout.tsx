import AccountFoot from "components/UserDashboardCompo/AccountFoot";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        {children}
        {/* <div className="fixed bottom-0 border-b-2 border-green-600 w-full md:max-w-2xl mx-auto">
          <AccountFoot />
          className="justify-center shadow-gray-400 shadow-sm mx-auto w-full md:max-w-2xl md:px-0"
        </div> */}
      </div>
    </>
  );
}
