import { DollarSign } from "lucide-react";
import Image from "next/image";
import Animate from "../Animate";

export default function Trust() {
  return (
    <>
      <div className="flex flex-col px-6 py-10 gap-4 justify-between md:flex-row">
        {/*---left section----- */}
        <div className="flex flex-col gap-5 w-full max-w-2xl mt-10">
          <div>
            <span className="flex flex-col gap-2">
              <span className="flex items-center gap-1">
                <DollarSign />
                <p className="uppercase">Why choose Us</p>
              </span>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold mb-9 leading-snug">
                Why trust us{" "}
                <span className="text-green-500">our finances</span>
              </h2>
            </span>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-3 mt-2">
              <div className="gap-7 flex flex-col bg-gray-200 p-5 rounded-2xl">
                    <div className="bg-green-500 rounded-xl w-[40px] justify-center p-2">
                    <Image
                        src={"/icon-why-choose-1.svg"}
                        alt=""
                        width={30}
                        height={30}
                    />
                    </div>
                    <h3 className="text-gray-600 text-2xl">Financial Strategies</h3>
                    <p className="text-lg">
                    Tailored plans to meet your unique financial needs and goals.
                    </p>
              </div>
              <div className="gap-7 flex flex-col bg-green-300 p-5 rounded-2xl">
                <div className="bg-green-500 rounded-xl w-[40px] justify-center p-2">
                  <Image
                    src={"/icon-why-choose-2.svg"}
                    alt=""
                    width={30}
                    height={30}
                  />
                </div>
                <h3 className="text-gray-600 text-2xl">Tax Optimization</h3>
                <p className="text-lg">
                  Tailored plans to meet your unique financial needs and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* --------right--------- */}
        <div className="relative mx-auto px-5 py-10 w-full max-w-lg flex">
          <div className="absolute right-6">
                <Animate type="fade-up">
                <Image
                    src="/fin2.jpg"
                    alt="Team working"
                    width={300}
                    height={100}
                    className="object-cover rounded-2xl"
                />
                </Animate>
          </div>
          <div className="absolute top-[250px] left-1">
                <Animate type="fade-left" delay={300}>
                <Image
                    src="/fin1.jpg"
                    alt="Business meeting"
                    width={250}
                    height={100}
                    className="object-cover rounded-2xl"
                />
                </Animate>
          </div>
        </div>
      </div>
    </>
  );
}
