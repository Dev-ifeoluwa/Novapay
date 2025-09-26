import { DollarSign } from "lucide-react";
import Animate from "../Animate";

export default function Service() {
  return (
    <div className="flex relative gap-6 flex-col bg-gray-200 justify-between px-2 py-7 md:px-7 md:py-10 md:flex-row">
      {/* for left */}
      <div className="flex flex-col gap-3">
        <Animate type="flip-up" delay={300}>
            <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2 p-3 text-sm md:text-lg">
                <DollarSign
                size={30}
                className="text-green-800 bg-green-100 rounded-2xl"
                />
                <p className="uppercase text-lg">Service</p>
            </span>
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold">
                Expert finance & consult services{" "}
                <span className="text-green-600">for success</span>
            </h1>
            </div>
        </Animate>
      </div>
      {/* for right */}
      <div className="gap-10 text-center bg-white px-2 py-3 md:p-7 rounded-2xl grid grid-cols md:grid-cols-2">
      <Animate type="fade-up" delay={400}>
            <div className="relative rounded-2xl overflow-hidden group">
                <div className="flex flex-col gap-4 bg-gray-400 p-5 rounded-2xl relative z-10">
                    <h2 className="text-xl md:text-2xl">Investment Management</h2>
                    <p className="text-lg">
                    Financial planing involve creating strategy to manage your income,
                    expenses, term financial goals.
                    </p>
                    <span className="absolute inset-0 bg-green-600 opacity-30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 zoom-in-down"></span>
                </div>
            </div>
        </Animate>
        {/* ----------------------222222 */}
        <Animate type="fade-right" delay={400}>
            <div className="relative rounded-2xl overflow-hidden group">
                <div className="flex flex-col gap-4 bg-green-400 p-5 rounded-2xl">
                    <h2 className="text-xl md:text-2xl">Investment Management</h2>
                    <p className="text-lg">
                    Financial planing involve creating strategy to manage your income,
                    expenses, term financial goals.
                    </p>
                    <span className="absolute inset-0 bg-gray-600 opacity-30 translate-x-full group-hover:translate-x-0 transition-transform duration-500 zoom-in-down"></span>
                </div>
            </div>
        </Animate>
        {/* ------------------------3333-3--------- */}
        <Animate type="flip-up" delay={400}>
            <div className="relative rounded-2xl overflow-hidden group">
                <div className="flex flex-col gap-4 p-5 bg-orange-200 rounded-2xl">
                    <h2 className="text-xl md:text-2xl">Investment Management</h2>
                    <p className="text-lg">
                    Financial planing involve creating strategy to manage your income,
                    expenses, term financial goals.
                    </p>
                    <span className="absolute inset-0 bg-green-600 opacity-30 translate-x-full group-hover:translate-x-0 transition-transform duration-500 zoom-in-down"></span>
                </div>
            </div>
        </Animate>
        {/* --------------------444444----------------- */}
        <Animate type="flip-left" delay={400}>
            <div className="relative rounded-2xl overflow-hidden group">
                <div className="flex flex-col gap-4 p-5 rounded-2xl">
                    <h2 className="text-xl md:text-2xl">Investment Management</h2>
                    <p className="text-lg">
                    Financial planing involve creating strategy to manage your income,
                    expenses, term financial goals.
                    </p>
                    <span className="absolute inset-0 bg-green-600 opacity-30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 zoom-in-down"></span>
                </div>
            </div>
        </Animate>
        {/* --------------------5555555----------------- */}
        <Animate type="flip-right" delay={400}>
            <div className="relative rounded-2xl overflow-hidden group">
                <div className="flex flex-col gap-4 bg-gray-400 p-5 rounded-2xl">
                    <h2 className="text-xl md:text-2xl">Investment Management</h2>
                    <p className="text-lg">
                    Financial planing involve creating strategy to manage your income,
                    expenses, term financial goals.
                    </p>
                    <span className="absolute inset-0 bg-green-600 opacity-30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 zoom-in-down"></span>
                </div>
            </div>
        </Animate>
        {/* --------------------66666666---------------- */}
        <Animate type="zoom-out" delay={300}>
            <div className="relative rounded-2xl overflow-hidden group">
                <div className="flex flex-col gap-4 p-5 bg-amber-200 rounded-2xl">
                    <h2 className="text-xl md:text-2xl">Investment Management</h2>
                    <p className="text-lg">
                    Financial planing involve creating strategy to manage your income,
                    expenses, term financial goals.
                    </p>
                    <span className="absolute inset-0 bg-green-600 opacity-30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 zoom-in-down"></span>
                </div>
            </div>
        </Animate>
      </div>
    </div>
  );
}
