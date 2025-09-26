import Image from "next/image";
import Animate from "../Animate";

export default function FeatureImageCard() {
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
                        <h3 className="font-semibold mt-4">Financial Solution</h3>
                        <p className="text-gray-100 group-hover:text-gray-700">Our Financial Solutions offer tailored and strategies 
                            to meet your unique goals, from and risk management.
                        </p>
                    </div>
                </Animate>
                {/* --------second Image----------- */}
                <Animate type="fade-down-left" delay={300}>
                    <div className="p-5 flex flex-col gap-4 hover:bg-green-700 hover:rounded-2xl">
                        <div className="bg-gray-800 rounded w-10 p-1">
                            <Image 
                                src={"/icon-our-feature-2.svg"}
                                alt=""
                                width={40}
                                height={40}
                                className="rounded"
                            />
                        </div>
                        <h3 className="font-semibold mt-4">Financial Solution</h3>
                        <p className="text-gray-100">Our Financial Solutions offer tailored and strategies 
                            to meet your unique goals, from and risk management.
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
                        <h3 className="font-semibold mt-4">Financial Solution</h3>
                        <p className="text-gray-100 group-hover:text-gray-700">Our Financial Solutions offer tailored and strategies 
                            to meet your unique goals, from and risk management.
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
                        <h3 className="font-semibold mt-4">Financial Solution</h3>
                        <p className="text-gray-100 group-hover:text-gray-700">Our Financial Solutions offer tailored and strategies 
                            to meet your unique goals, from and risk management.
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
                        <h3 className="font-semibold mt-4">Financial Solution</h3>
                        <p className="text-gray-100 group-hover:text-gray-300">Our Financial Solutions offer tailored and strategies 
                            to meet your unique goals, from and risk management.
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
                        <h3 className="font-semibold mt-4">Financial Solution</h3>
                        <p className="text-gray-100  group-hover:text-gray-700">Our Financial Solutions offer tailored and strategies 
                            to meet your unique goals, from and risk management.
                        </p>
                    </div>
                </Animate>
            </div>
        </>
    )
}