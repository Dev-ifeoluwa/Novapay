import Animate from "components/Animate";
import Image from "next/image";


export default function BenefitCard() {
    return(
        <> 
            <div className="grid grid-col lg:grid-cols-3 gap-5 px-2 md:p-4">
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
                        <h3 className="font-semibold mt-4">Currency Conversion</h3>
                        <p className="text-gray-100 group-hover:text-gray-300">No delays. Just instant, accurate currency conversions backed by real-time rates.
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
                        <h3 className="font-semibold mt-4">Data Bundle Subscriptions</h3>
                        <p className="text-gray-800 group-hover:text-white">Enjoy secure and instant data purchases with guaranteed delivery to your number.
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
                        <h3 className="font-semibold mt-4">Cable TV Subscriptions</h3>
                        <p className="text-gray-100 group-hover:text-gray-700">Enjoy uninterrupted entertainment 
                            with instant TV payments. Renew or subscribe in 
                            seconds and get back to watching what you love seamlessly.
                        </p>
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
                        <h3 className="font-semibold mt-4">Electricity Bill Payments</h3>
                        <p className="text-gray-800 group-hover:text-green-800">No queues, no delays just fast,
                             reliable payments that keep your lights on.
                             Manage your electricity subscription right from your phone, anytime.
                        </p>
                    </div>
                </Animate>
                 {/* --------5th Image----------- */}
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
                        <h3 className="font-semibold mt-4">Airtime Purchases</h3>
                        <p className="text-gray-100 group-hover:text-gray-700">ShalomPay makes airtime 
                            top-ups instant and reliable, 
                            ensuring your phone never runs out of balance when you need it most
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
                        <h3 className="font-semibold mt-4">Airtime to cash</h3>
                        <p className="text-gray-700  group-hover:text-green-700">convert your airtime to cash
                             as ease no delay just 
                            with few steps, if you have too many airtime worry no more.
                        </p>
                    </div>
                </Animate>
            </div>
        </>
    )
}