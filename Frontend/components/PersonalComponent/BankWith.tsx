import Animate from "components/Animate";
import Image from "next/image";
import Link from "next/link";

export default function BankWith() {
  return (
    <div className="flex flex-col gap-4 px-2 py-6 md:px-8 md:py-7">
      <div className="mt-6 flex flex-col gap-4 justify-center w-full max-w-3xl mx-auto text-center p-2 md:p-4">
        <Animate type="fade-right" delay={300}>
          <h1 className="text-2xl md:text-5xl font-semibold text-gray-700">Pay With <span className="text-green-700">Shalompay</span></h1>
        </Animate>
        <p>
          Experience the ease of paying your bills and making transfers with
           confidence. <span className="text-green-700"> With a 99.9% success rate</span>, enjoy seamless transactions, 
          real-time updates, and total peace of mind knowing your money 
          is always in safe hands
        </p>
      </div>
      {/* bottom */}
      <div className="flex flex-col-reverse items-center gap-2 md:flex-row justify-between px-2 py-3 md:px-15 md:py-4">
        {/* left right */}
        <div className="flex flex-col gap-6 w-full max-w-md">
          <p className="text-gray-700 text-center w-40 p-1 bg-green-100 rounded-2xl text-sm md:text-md">Bill Payments</p>
          <Animate type="fade-left" delay={300}>
            <h2 className="text-lg md:text-4xl text-green-800 font-semibold">Seamless Bill Payments</h2>
          </Animate>
          <p className="text-md md:text-xl text-gray-700">
            Bill payments that always go through.
            From electricity to internet and TV subscriptions, pay your 
            bills in seconds with a 99.9% success 
            rate. No delays, no errors just smooth, secure payments that work every time.
          </p>
          <Link 
            href={"/Account/loginaccount"}
            className="bg-green-600 w-full max-w-40 text-white font-semibold px-1 py-2 md:p-4 text-center rounded-full"
            >Open Account</Link>
        </div>
        {/* right */}
        <div className="flex">
          <Animate type="fade-down" delay={300}>
            <Image src={"/app3.png"} alt="" width={300} height={300} className="mr-12 -rotate-30" />
          </Animate>
          {/* <Animate type="fade-down" delay={300}>
            <Image src={"/app2.png"} alt="" width={300} height={300} className="mr-12"/>
          </Animate> */}
        </div>
      </div>
    </div>
  );
}
