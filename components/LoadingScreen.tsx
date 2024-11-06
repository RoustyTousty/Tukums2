import React from "react"
import Image from "next/image"

export default function loadingScreen() {
    return (
      <div className="relative h-screen overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-full flex flex-col">
          <div className="bg-primary h-[67%]"></div>
          <div className="bg-secondary h-[8%]"></div>
          <div className="bg-accent h-[25%]"></div>
        </div>

        <div className="relative flex justify-center mt-[10%]">
          <Image src={"/tukums-2-logo.png"} width={250} height={250} alt={"Logo"} />
        </div>
      </div>
    )
} 