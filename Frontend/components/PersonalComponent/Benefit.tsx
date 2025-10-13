import Animate from "components/Animate";
import { DollarSign } from "lucide-react";
import Image from "next/image";
import BenefitCard from "./BenefitCard";


export default function Benefit() {
  return (
    <>
      <div className="flex flex-col gap-4 px-2 py-7 md:px-7 md:py-14">
        {/* top */}
        <div className="flex justify-between items-center lg:flex-row">
          <div className="w-full max-w-lg">
            <Animate type="fade-up" delay={300}>
              <h2 className="text-lg text-green-800 md:text-4xl font-semibold mb-9 px-2 leading-lung">
                Key benefit more reason to bank{" "}
                <span className="">with Novapay</span>
              </h2>
            </Animate>
          </div>
          <div className="flex items-center gap-3 text-white bg-green-500 font-semibold text-md whitespace-nowrap py-1 text-center px-2 rounded-4xl md:py-3 md:px-5 md:text-xl">
                <span>Learn More</span>
                <span>
                    <Image 
                        src="/arrow-white.svg" 
                        alt="logo" 
                        height={20} 
                        width={20}
                        />
                </span>
          </div>
        </div>
        {/* bottom */}
        <div>
            <BenefitCard />
        </div>
      </div>
    </>
  );
}
