import Image from "next/image";
import Animate from "../Animate";
import { CurrencyIcon, PhoneCallIcon, CircleArrowRight } from "lucide-react";

export default function About() {
  return (
    <>
      <div className="flex flex-col px-3 py-7 md:px-7 md:py-10 gap-4 justify-between md:flex-row">
        {/* left section */}
        <div className="relative mx-auto px-7 py-3 h-[70vh] md:h-[80vh] w-full max-w-lg flex">
          <div className="absolute left-1 w-70 md:w-90 lg:w-100">
          {/* w-70 md:w-80 lg:w-100 xl:w-110 */}
            <Animate type="fade-up">
              <Image
                src="/fin1.jpg"
                alt="Team working"
                width={350}
                height={100}
                className="object-cover rounded-2xl"
              />
            </Animate>
          </div>
          <div className="absolute top-[250px] right-1 w-40 lg:w-60">
          {/* w-50 md:w-60 lg:w-70 xl:w-90 */}
            <Animate type="fade-left" delay={300}>
              <Image
                src="/fin2.jpg"
                alt="Business meeting"
                width={250}
                height={100}
                className="object-cover rounded-2xl"
              />
            </Animate>
          </div>
          {/* </div> */}
        </div>

        {/* right */}
        <div className="lg:col-span-2 mx-auto flex flex-col gap-5 max-w-[600px]">
          <p className="capitalize flex items-center gap-2 text-xl tracking-wide">
            <span className="bg-green-500  rounded-full p-2">
              <Image src="/arrow-white.svg" alt="logo" height="15" width="15" />
            </span>
            <span>About Us</span>
          </p>
          <Animate type="fade-right" delay={400}>
            <h2 className="text-2xl md:text-4xl xl:text-5xl font-semibold mb-4 leading-snug">
              Trusted guidance for{" "}
              <span className="text-green-500">financial growth</span>
            </h2>
          </Animate>
          <p className="text-gray-600 text-lg md:text-xl max-w-xl">
            With years of expertise in finance and consulting, we provide
            tailored strategies to help you achieve sustainable growth. Our
            commitment is to guide you with integrity, insight, and a
            personalized approach.
          </p>

          <div className="flex flex-col justify-between gap-9 md:gap-5 items-center md:flex-row">
            <div className="max-w-full md:max-w-[400px]">
              <div className="flex flex-col items-start gap-3 mb-6">
                <span className="p-2 text-2xl bg-green-100 text-green-600 rounded-lg">
                  <CurrencyIcon size={30} />
                </span>
                <div>
                  <h4 className="font-semibold text-xl">
                    Financial Strategies
                  </h4>
                  <p className="text-gray-600 text-base">
                    Tailored plans to meet your unique financial needs and
                    goals.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 text-lg font-medium text-green-600">
                <span className="p-2 bg-green-100 text-xl rounded-full">
                  <PhoneCallIcon size={30} />
                </span>
                <span className="text-2xl">(+658) 456-975</span>
              </div>
            </div>

            <div className="bg-gray-200 shadow-2xl in-hover:bg-green-300 px-7 py-5 flex flex-col gap-10 rounded-2xl w-full md:max-w-max">
              <div className="flex gap-3 items-center">
                <Image
                  src="/fin1.jpg"
                  alt=""
                  width={70}
                  height={50}
                  className="rounded-xl"
                />
                <div className="flex flex-col gap-0.5 font-semibold text-lg">
                  <h2 className="text-gray-700">John Felix</h2>
                  <p>CO Founder</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-lg text-gray-600">
                <span className="flex items-center gap-1">
                  <CircleArrowRight size={20} className=" text-green-600" />
                  <p>Risk management</p>
                </span>
                <span className="flex items-center gap-1">
                  <CircleArrowRight size={20} className=" text-green-600" />
                  <p>Communication</p>
                </span>
                <span className="flex items-center gap-1">
                  <CircleArrowRight size={20} className=" text-green-600" />
                  <p>24/7 support</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
