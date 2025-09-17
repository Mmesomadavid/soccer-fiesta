"use client"

import { useEffect, useState } from "react"
import kickBallImg from "../assets/kick-ball.png"
import myVideo from "../assets/vid/soccer-fiest-vid.mp4"

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-[120vh] overflow-hidden bg-white">
      {/* Geometric background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-red-700"
          style={{
            clipPath:
              "polygon(0 60%, 20% 55%, 40% 65%, 60% 50%, 80% 62%, 100% 55%, 100% 100%, 0 100%)",
          }}
        />
      </div>

      {/* Large FOOTBALL text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h1 className="text-[10rem] lg:text-[14rem] xl:text-[18rem] font-black leading-none tracking-[-0.05em] text-yellow-500 opacity-80 uppercase">
          football
        </h1>
      </div>

      {/* Foreground content */}
      <div className="relative z-20 flex flex-col justify-between min-h-[110vh] px-6 lg:px-12">
        <div className="flex flex-1 items-center justify-center relative">
          <img
            src={kickBallImg}
            alt="Footballer performing bicycle kick"
            className="w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl object-contain will-change-transform"
            style={{ transform: `translateY(${offsetY * 0.3}px)` }}
            draggable="false"
          />
          {/* Play button now positioned over the image */}
          <button
            onClick={() => setShowVideo(true)}
            className="absolute bottom-10 z-30 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition"
          >
            <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-[90%] max-w-3xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-gray-300"
            >
              ×
            </button>
            <video
              src={myVideo}
              controls
              autoPlay
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
