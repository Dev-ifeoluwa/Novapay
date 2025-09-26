import { DollarSign } from "lucide-react";
import Image from "next/image";
import Animate from "../Animate";

export default function Trust() {
  return (
    <>
      <div className="flex flex-col px-2 py-7 md:px-7 md:py-10 gap-4 justify-between md:flex-row">
        {/*---left section----- */}
        <div className="flex flex-col mx-auto gap-5 w-full max-w-2xl mt-10">
          <div>
            <Animate type="zoom-in" delay={300}>
              <span className="flex flex-col gap-2">
                <span className="flex items-center gap-1 text-sm md:text-lg">
                  <DollarSign />
                  <p className="uppercase">Why choose Us</p>
                </span>
                <h2 className="text-2xl md:text-4xl xl:text-5xl font-semibold mb-9 leading-snug">
                  Why trust us{" "}
                  <span className="text-green-500">our finances</span>
                </h2>
              </span>
            </Animate>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-3 mt-2 px-1 md:px-2">
              <div className="gap-4 md:gap-7 flex flex-col group bg-gray-200 p-5 rounded-2xl">
                <div className="bg-green-500 group-hover:bg-black hover:scale-100 hover:transition hover:duration-5 rounded-xl w-[40px] justify-center p-2">
                  <Image
                    src={"/icon-why-choose-1.svg"}
                    alt=""
                    width={30}
                    height={30}
                  />
                </div>
                <h3 className="text-gray-600 text-xl md:text-2xl">Financial Strategies</h3>
                <p className="text-md md:text-lg">
                  Tailored plans to meet your unique financial needs and goals.
                </p>
              </div>
              <div className="gap-4 md:gap-7 flex flex-col group bg-green-300 p-5 rounded-2xl">
                <div className="bg-green-500 group-hover:bg-black hover:scale-100 hover:transition hover:duration-5 rounded-xl w-[40px] justify-center p-2">
                  <Image
                    src={"/icon-why-choose-2.svg"}
                    alt=""
                    width={30}
                    height={30}
                  />
                </div>
                <h3 className="text-gray-600 text-xl md:text-2xl">Tax Optimization</h3>
                <p className="text-md md:text-lg">
                  Tailored plans to meet your unique financial needs and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* --------right--------- */}
        <div className="relative mx-auto px-7 py-10 h-[75vh] md:h-[90vh] w-full max-w-lg flex">
        {/* sm:h-[90vh] md:h-[90vh] */}
          <div className="absolute right-4 w-70 md:w-90 lg:w-100">
          {/* w-70 md:w-80 lg:w-100 xl:w-110 */}
            <Animate type="fade-up">
              <Image
                src="/fin2.jpg"
                alt="Team working"
                width={350}
                height={100}
                className="object-cover rounded-2xl"
              />
            </Animate>
          </div>
          <div className="absolute top-[300px] left-1 w-40 lg:w-60">
          {/* w-50 md:w-60 lg:w-70 xl:w-90 */}
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
