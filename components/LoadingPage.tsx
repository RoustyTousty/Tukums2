import React from "react"
import Image from "next/image"

export default function loadingPage() {
    return (
      <div className="relative h-screen overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-full flex flex-col">
          <div className="bg-base-100 h-[67%]"></div>
          <div className="bg-success h-[8%]"></div>
          <div className="bg-accent h-[25%]"></div>
        </div>

        <div className="relative flex justify-center mt-[20%]">
          <Image src={"/tukums-2-logo.png"} width={250} height={250} alt={"Logo"} />
        </div>
      </div>
    )
} 