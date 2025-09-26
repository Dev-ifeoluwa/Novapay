import { DollarSign } from "lucide-react";
import Image from "next/image";
import FeatureImageCard from "./FeatureImageCard";
import Animate from "../Animate";

export default function Feature() {
  return (
    <>
      <div className="flex flex-col gap-4 px-2 py-7 md:px-7 md:py-10 bg-green-800">
        {/* top */}
        <div className="flex justify-between items-center lg:flex-row">
          <div className="w-full max-w-lg">
            <span className="flex items-center gap-1 text-sm md:text-lg">
              <DollarSign />
              <p className="uppercase text-gray-300">Why choose Us</p>
            </span>
            <Animate type="fade-up" delay={300}>
              <h2 className="text-2xl text-gray-200 md:text-4xl xl:text-5xl font-semibold mb-9 leading-lung">
                Key features of our finance{" "}
                <span className="text-green-500">and consulting</span>
              </h2>
            </Animate>
          </div>
          <div className="flex items-center gap-3 text-white bg-green-500 font-semibold text-md whitespace-nowrap py-1 text-center px-2 rounded-4xl md:py-3 md:px-5 md:text-xl">
                <span>Contact Now</span>
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
            <FeatureImageCard />
        </div>
      </div>
    </>
  );
}
