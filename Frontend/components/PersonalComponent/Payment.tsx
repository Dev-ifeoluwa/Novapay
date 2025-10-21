import Animate from "components/Animate";
import Image from "next/image";
import Link from "next/link";

export default function Payment() {
  return (
    <div className="px-2 py-8 md:px-8 bg-green-700">
      <div className="flex flex-col-reverse gap-5 items-center md:flex-row justify-between px-2 py-3 md:px-20 md:py-6">
        {/* left */}
        <div className="flex flex-col gap-6 w-full max-w-md">
          <p className="text-gray-700 text-center w-25 p-1 bg-green-100 rounded-2xl text-sm md:text-md">Payment</p>
          <Animate type="fade-left" delay={300}>
            <h2 className="text-lg md:text-4xl text-white font-semibold">Seamless transactions that always go through</h2>
          </Animate>
          <p className="text-md md:text-xl text-gray-300">
            Enjoy Smooth Money Moves! Transfer funds to loved 
            ones, buy airtime, convert funds and settle bills effortlessly. 
            At ShalomPay.
          </p>
          <Link 
            href={"/Account/loginaccount"}
            className="bg-green-800 w-full max-w-40 text-white font-semibold px-1 py-2 md:p-4 text-center rounded-full"
            >Learn More</Link>
        </div>
        {/* right */}
        <div className="max-w-[250px] md:max-w-md lg:max-w-lg">
          <Animate type="fade-down" delay={300}>
            <Image src={"/app2.png"} alt="" width={300} height={300} />
          </Animate>
        </div>
      </div>
    </div>
  );
}
