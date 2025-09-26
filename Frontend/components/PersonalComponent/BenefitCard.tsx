import Animate from "components/Animate";
import Image from "next/image";


export default function BenefitCard() {
    return(
        <> 
            <div className="grid grid-col lg:grid-cols-3 gap-5 px-2 md:p-4">
                <Animate type="fade-right" delay={300}>
                    <div className="p-5 bg-gray-500 rounded-2xl flex flex-col hover:bg-gray-100 group gap-4">
                        <div className="bg-gray-800 rounded w-10 p-1">
                            <Image 
                                src={"/icon-our-feature-1.svg"}
                                alt=""
                                width={40}
                                height={40}
                                className="rounded"
                            />
                        </div>
                        <h3 className="font-semibold mt-4">State-of-the-art security</h3>
                        <p className="text-gray-100 group-hover:text-gray-700">XelvioPay uses up-to-date cybersecurity
                             technology to protect your 
                             information and prevent unauthorized use
                        </p>
                    </div>
                </Animate>
                {/* --------second Image----------- */}
                <Animate type="fade-down-left" delay={300}>
                    <div className="p-5 flex flex-col gap-4 hover:bg-green-700 group hover:rounded-2xl">
                        <div className="bg-gray-800 rounded w-10 p-1">
                            <Image 
                                src={"/icon-our-feature-2.svg"}
                                alt=""
                                width={40}
                                height={40}
                                className="rounded"
                            />
                        </div>
                        <h3 className="font-semibold mt-4">Protection and peace of mind</h3>
                        <p className="text-gray-800 group-hover:text-white">Your funds are insured for up
                             to N250,000 by the Nigerian Deposit Insurance Corporation.
                        </p>
                    </div>
                </Animate>
                 {/* --------3 Image----------- */}
                 <Animate type="fade-down-right" delay={300}>
                    <div className="p-5 bg-gray-500 rounded-2xl hover:bg-orange-200 group flex flex-col gap-4">
                        <div className="bg-gray-800 rounded w-10 p-1">
                            <Image 
                                src={"/icon-our-feature-3.svg"}
                                alt=""
                                width={40}
                                height={40}
                                className="rounded"
                            />
                        </div>
                        <h3 className="font-semibold mt-4">Upgrade Your Limits Easily</h3>
                        <p className="text-gray-100 group-hover:text-gray-700">Reach for the Stars! Effortlessly upgrade
                             your transaction limits and explore new financial possibilities.</p>
                    </div>
                </Animate>
                 {/* --------4th Image----------- */}
                 <Animate type="fade-up-right" delay={300}>
                    <div className="p-5 flex flex-col  hover:bg-blue-200 group gap-4 hover:rounded-2xl">
                    <div className="bg-gray-800 rounded w-10 p-1">
                            <Image 
                                src={"/icon-our-feature-4.svg"}
                                alt=""
                                width={40}
                                height={40}
                                className="rounded"
                            />
                        </div>
                        <h3 className="font-semibold mt-4">Extra Layer of Security</h3>
                        <p className="text-gray-800 group-hover:text-green-800">Stay secure while shopping online with our virtual
                             card feature. Shop confidently, knowing your actual card details are protected.
                        </p>
                    </div>
                </Animate>
                 {/* --------5th Image----------- */}
                 <Animate type="fade-up-left" delay={300}> 
                    <div className="p-5 flex bg-gray-500 rounded-2xl hover:bg-gray-600 group  flex-col gap-4">
                        <div className="bg-gray-800 rounded w-10 p-1">
                            <Image 
                                src={"/icon-our-feature-5.svg"}
                                alt=""
                                width={40}
                                height={40}
                                className="rounded"
                            />
                        </div>
                        <h3 className="font-semibold mt-4">Say goodbye to downtimes</h3>
                        <p className="text-gray-100 group-hover:text-gray-300">Pay anywhere with confidence 
                            using a banking solution that always never goes offline
                        </p>
                    </div>
                </Animate>
                 {/* --------6th Image----------- */}
                <Animate type="flip-right" delay={300}> 
                    <div className="p-5 flex flex-col hover:bg-amber-100 hover:rounded-2xl group gap-4">
                        <div className="bg-gray-800 rounded w-10 p-1">
                            <Image 
                                src={"/icon-our-feature-6.svg"}
                                alt=""
                                width={40}
                                height={40}
                                className="rounded"
                            />
                        </div>
                        <h3 className="font-semibold mt-4">Round the Clock support</h3>
                        <p className="text-gray-700  group-hover:text-green-700">We’re always here to talk. Reach our support 
                            team however you need to -  by phone, email, in the app, or check out the Help Center.
                        </p>
                    </div>
                </Animate>
            </div>
        </>
    )
}