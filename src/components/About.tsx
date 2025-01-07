import { useState } from 'react'
import aboutImg from '../assets/no-bg1.png'
import { motion } from 'framer-motion'

const About = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const cards = [
    {
      number: 1,
      title: "Upload Your Profile",
      description: "Showcase your skills and statistics to a global audience of scouts and clubs.",
      color: "bg-red-600",
    },
    {
      number: 2,
      title: "Get Noticed",
      description: "Connect with scouts and clubs worldwide, increasing your chances of being discovered.",
      color: "bg-yellow-500",
    },
    {
      number: 3,
      title: "Start Your Journey",
      description: "Begin your professional football career with guidance from industry experts.",
      color: "bg-green-600",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#1a1a1a] py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-yellow-500/10 to-red-600/10" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                Ready to
                <br />
                <span className="text-yellow-300">Get Scouted</span>
              </h2>
              <p className="text-gray-200 text-lg max-w-xl mb-6">
                Soccer Fiesta: The First Eleven (Talent Go Pro) is a groundbreaking platform designed to revolutionize football talent discovery in Nigeria. We provide a unique opportunity for aspiring footballers to showcase their skills, connect with professional clubs, and turn their dreams into reality.
              </p>
              <p className="text-gray-200 text-lg max-w-xl">
                Our innovative scouting system combines cutting-edge technology, expert evaluation, and nationwide exposure to help talented players bridge the gap between grassroots football and professional opportunities. Join us on this exciting journey to shape the future of Nigerian football!
              </p>
            </div>

            <div className="space-y-6">
              {cards.map((card, index) => (
                <motion.div
                  key={card.number}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 cursor-pointer overflow-hidden relative"
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <div className={`w-12 h-12 rounded-full ${card.color} flex items-center justify-center shrink-0`}>
                    <span className="text-white font-bold">{card.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="text-gray-300">{card.description}</p>
                  </div>
                  {hoveredCard === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-45deg] animate-shine" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[140%] aspect-square bg-gradient-to-br from-green-400/20 via-yellow-300/20 to-red-600/20 rounded-full blur-3xl" />
            <img
              src={aboutImg}
              alt="Soccer player in action"
              className="relative z-10 w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md rounded-lg p-4 z-20 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">⚽</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">Next Scouting Event</p>
                  <p className="text-xs text-gray-300">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About