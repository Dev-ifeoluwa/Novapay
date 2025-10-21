import Animate from "components/Animate";
import Image from "next/image";
import Link from "next/link";

export default function PersonalAccount() {
  return (
    <div className="px-2 py-8 md:px-8">
      <div className="flex flex-col-reverse items-center gap-5 md:flex-row justify-between px-2 py-3 md:px-15 md:py-4">
        <div>
        <Animate type="fade-up" delay={300}>
          <Image src={"/tes2.png"} alt="" width={650} height={600} />
        </Animate>
        </div>
        {/* left */}
        <div className="flex flex-col gap-6 w-full max-w-md">
          <p className="text-gray-700 text-center w-40 p-1 bg-green-100 rounded-2xl text-sm md:text-md">Personal Account</p>
          <Animate type="fade-left" delay={300}>
            <h2 className="text-lg md:text-4xl text-green-800 font-semibold">One app for all your bills needs</h2>
          </Animate>
          <p className="text-md md:text-xl text-gray-700">
          Need to pay bills with ease? We know that your money is important
           to you, and we take that seriously. Manage your money, make
           payments and pay bills all from our platform.
          </p>
          <Link 
            href={"/Account/loginaccount"}
            className="bg-green-600 w-full max-w-40 text-white font-semibold px-1 py-2 md:p-4 text-center rounded-full"
            >Learn More</Link>
        </div>
        {/* right */}
      </div>
    </div>
  );
}
