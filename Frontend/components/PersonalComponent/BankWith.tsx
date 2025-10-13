import Animate from "components/Animate";
import Image from "next/image";
import Link from "next/link";

export default function BankWith() {
  return (
    <div className="flex flex-col gap-7 px-2 py-6 md:px-8 md:py-7">
      <div className="mt-6 flex flex-col gap-4 justify-center w-full max-w-3xl mx-auto text-center p-2 md:p-4">
        <Animate type="fade-right" delay={300}>
          <h1 className="text-2xl md:text-5xl font-semibold text-gray-700">Bank With <span className="text-green-700">Novapay</span></h1>
        </Animate>
        <p className="text-md md:text-xl text-gray-700">
          Enjoy a <span className="text-green-700">transfer success rate of 99.9%</span> and experience seamless payment
          transfers. Need to pay some bills, pay a business or send money to a
          friend Novapay transfers go through every time. We mean it.
        </p>
      </div>
      {/* bottom */}
      <div className="flex flex-col-reverse items-center gap-5 md:flex-row justify-between px-2 py-3 md:px-8 md:py-4">
        {/* left right */}
        <div className="flex flex-col gap-6 w-full max-w-md">
          <p className="text-gray-700 text-center w-40 p-1 bg-green-100 rounded-2xl text-sm md:text-md">Instant Debit Card</p>
          <Animate type="fade-left" delay={300}>
            <h2 className="text-lg md:text-4xl text-green-800 font-semibold">Instant Debit cards that always work</h2>
          </Animate>
          <p className="text-md md:text-xl text-gray-700">
            If transfers aren’t your jam, we get it. Request a debit card and
            have it delivered to you within 48 hours. Activate it in minutes,
            and start using it right away.
          </p>
          <Link 
            href={"/"}
            className="bg-green-600 w-full max-w-40 text-white font-semibold px-1 py-2 md:p-4 text-center rounded-full"
            >Learn More</Link>
        </div>
        {/* right */}
        <div>
        <Animate type="fade-down" delay={300}>
          <Image src={"/tool1.png"} alt="" width={600} height={500} />
        </Animate>
        </div>
      </div>
    </div>
  );
}
