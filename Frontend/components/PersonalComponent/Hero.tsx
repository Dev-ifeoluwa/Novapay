// import FancyHeading from "components/HeaderMirro";
import Image from "next/image";
import Link from "next/link";
import FancyHeading from "./HeroMirror";
import Animate from "components/Animate";

export default function Hero() {
  return (
    <section className="flex items-center justify-between overflow-hidden bg-green-900 flex-col md:flex-row mt-15 px-2 py-8 md:px-8 mx-auto md:py-8">
      <div className="flex flex-col gap-6 w-full max-w-2xl px-1 py-5 md:px-8">
         <FancyHeading />
        <p className="mt-4 max-w-2xl  text-white text-lg md:text-2xl cursor-default">
          Achieve financial growth, stability, and long-term success. Xelviopay
          offers you a reliable personal banking experience
        </p>
        {/* ----button section----- */}
        <div className="flex items-center gap-5 px-2 md:px-1">
          <div
            className="mt-8 flex hover:bg-black items-center gap-4 bg-green-600 md:font-medium
                text-white p-3 md:px-3 md:py-4 rounded-xl cursor-pointer 
                transition-colors duration-300"
            >
            <Link href={"/"} className="flex items-center">
              <Image src="/playstore.svg" alt="logo" height="30" width="30" />
              <span>
                <p className="text-sm md:text-xl font-medium">Get it on</p>
                <h2 className="text-md md:text-xl">Google Play</h2>
              </span>
            </Link>
          </div>
          {/*  */}
          <div
            className="mt-8 flex hover:bg-green-600 items-center gap-4 bg-black md:font-medium
                text-white p-3 md:px-3 md:py-4 rounded-xl cursor-pointer 
                transition-colors duration-300"
            >
            <Link href={"/"} className="flex items-center">
              <Image src="/apple.svg" alt="logo" height="30" width="30" />
              <span>
                <p className="text-sm md:text-xl font-medium">Get it on</p>
                <h2 className="text-md md:text-xl">Apple Store</h2>
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <h3 className="text-white font-serif text-lg mt-6 md:text-xl">
            We're Working With
          </h3>
          <div className="flex gap-5 items-center">
            <Image
              src={"/client-logo-1.svg"}
              className="animate-pulse"
              alt=""
              width={100}
              height={30}
            />
            <Image
              src={"/client-logo-2.svg"}
              className="animate-pulse"
              alt=""
              width={100}
              height={30}
            />
            <Image
              src={"/client-logo-3.svg"}
              className="animate-pulse"
              alt=""
              width={100}
              height={30}
            />
          </div>
        </div>
      </div>
      {/* -------------- */}
      <div className="relative px-5 -mb-10">
        {/* right section */}
        <Animate type="flip-right" delay={300}>
          <Image src={"/hero-img.png"} alt="" width={550} height={500} />
        </Animate>
        <div className="absolute bottom-15 md:bottom-25 lg:bottom-30 left-1 md:-left-15 px-6 py-3 animate-bounce bg-green-500 rounded-xl max-w-[350px] text-white flex items-center gap-2">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">15+</h2>
          <p className="text-md md:text-xl">
            {" "}
            Years of experience <br />
            in finance
          </p>
        </div>
      </div>
    </section>
  );
}
