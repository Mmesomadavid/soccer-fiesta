"use client"

import { useEffect, useState } from "react"
import kickBallImg from "../assets/kick-ball.png"

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      // taller than a single viewport
      className="relative min-h-[120vh] overflow-hidden bg-white"
    >
      {/* Horizontal “mountain-style” geometric background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-red-700"
          style={{
            clipPath:
              "polygon(0 60%, 20% 55%, 40% 65%, 60% 50%, 80% 62%, 100% 55%, 100% 100%, 0 100%)",
          }}
        />
      </div>

      {/* Wide FOOTBALL text behind image */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h1 className="text-[10rem] lg:text-[14rem] xl:text-[18rem] font-black leading-none tracking-[-0.05em] text-yellow-500 opacity-80 uppercase">
          football
        </h1>
      </div>

      {/* Foreground content */}
      <div className="relative z-20 flex flex-col justify-between min-h-[110vh] px-6 lg:px-12">
        <div className="flex flex-1 items-center justify-center">
          <img
            src={kickBallImg}
            alt="Footballer performing bicycle kick"
            className="w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl object-contain will-change-transform"
            style={{ transform: `translateY(${offsetY * 0.3}px)` }}
            draggable="false"
          />
        </div>

        {/* Play button at the bottom */}
        <div className="flex justify-center mb-16">
          <button className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition">
            <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
