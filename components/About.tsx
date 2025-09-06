import Image from "next/image";
import Animate from "./Animate";



export default function About ()  {
  return (
    <div className="flex justify-between items-center w-full h-screen">
      {/* for left section */}
      <div className="relative flex flex-col">
        <div>
          <Animate type="fade-up" delay={200}>
            <Image 
              src="/fin1.jpg"
              alt="about img" 
              width="400" 
              height="300"
              className="rounded-xl"
              />
          </Animate>
        </div>
        <div className="absolute right-[-200px]">
          <Image 
          src="/fin3.svg"
          alt="about img" 
          width="150" 
          height="150"
          className="rounded-xl"
          />
        </div>
        <div className="absolute bottom-[-150px] right-[-250px]">
          <Animate type="fade-up" delay={400}>
            <Image 
              src="/fin2.jpg" 
              alt="about img" 
              width="300" 
              height="300"
              className="rounded-xl"/>
          </Animate>
        </div>
      </div>
      {/* for right section */}
      <div>

      </div>
    </div>
  )
}