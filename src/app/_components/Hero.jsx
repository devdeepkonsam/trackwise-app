import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Section } from "lucide-react";

function Hero() {
    return (
        <section className="bg-gray-50 flex items-center flex-col">
            <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Smarter Spending, Brighter Future<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                AI-Powered Financial Guidance
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/image.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
        </section>
    )
}


export default Hero;