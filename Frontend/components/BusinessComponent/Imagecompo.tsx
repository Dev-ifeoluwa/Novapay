import Image from "next/image";
import Animate from "../Animate";
import { CurrencyIcon, PhoneCallIcon, CircleArrowRight } from "lucide-react";

import React from 'react'

const Imagecompo = () => {
  return (
    <div>
      <div className="lg:col-span-2 flex flex-col h-screen gap-5 max-w-[600px]">
            <p className="capitalize flex items-center gap-2 text-xl tracking-wide">
              <span className="bg-green-500  rounded-full p-2">
                  <Image src="/arrow-white.svg" alt="logo" height="15" width="15" />
              </span>
              <span>
              About Us
              </span>
            </p>
            <Animate type="fade-right" delay={400}>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 leading-snug">
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
                    <CurrencyIcon 
                    size={30}
                    />
                  </span>
                  <div>
                      <h4 className="font-semibold text-xl">Financial Strategies</h4>
                      <p className="text-gray-600 text-base">
                        Tailored plans to meet your unique financial needs and goals.
                      </p>
                  </div>
                </div>
              
                <div className="flex flex-col items-start gap-3 text-lg font-medium text-green-600">
                  <span className="p-2 bg-green-100 text-xl rounded-full">
                    <PhoneCallIcon 
                    size={30}
                    />
                  </span>
                  <span className="text-2xl">(+658) 456-975</span>
                </div>
              </div>
              
              <div className="bg-gray-200 shadow-2xl in-hoverr:bg-green-300 px-7 py-5 flex flex-col gap-10 rounded-2xl w-full md:max-w-max">
                <div className="flex gap-3 items-center">
                  <Image  
                    src="/fin1.jpg" 
                    alt="" 
                    width={70} 
                    height={50}
                    className="rounded-xl"
                  />
                  <div className="flex flex-col gap-0.5 font-semibold text-lg">
                    <h2 className="text-gray-700">Ifeoluwa Fowobaje</h2>
                    <p>CO Founder</p>
                  </div>
                </div>
              
                <div className="flex flex-col gap-2 text-lg text-gray-600">
                  <span className="flex items-center gap-1">
                    <CircleArrowRight 
                    size={20}
                    className=" text-green-600"/>
                    <p>Risk management</p>
                  </span>
                  <span className="flex items-center gap-1">
                    <CircleArrowRight 
                    size={20}
                    className=" text-green-600"/>
                    <p>Communication</p>
                  </span>
                  <span className="flex items-center gap-1">
                    <CircleArrowRight 
                    size={20}
                    className=" text-green-600"/>
                    <p>24/7 support</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Imagecompo
