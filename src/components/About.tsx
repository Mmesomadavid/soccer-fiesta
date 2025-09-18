"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import aboutImg from '../assets/bg-1.jpg'

const About = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const cards = [
    {
      number: 1,
      title: "Upload Your Profile",
      description: "Showcase your skills and statistics to a global audience of scouts and clubs.",
      color: "bg-blue-600",
      icon: "📊",
    },
    {
      number: 2,
      title: "Get Noticed",
      description: "Connect with scouts and clubs worldwide, increasing your chances of being discovered.",
      color: "bg-blue-700",
      icon: "🔍",
    },
    {
      number: 3,
      title: "Start Your Journey",
      description: "Begin your professional football career with guidance from industry experts.",
      color: "bg-blue-800",
      icon: "🚀",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="about"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-12 lg:py-24"
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/15 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Nike-inspired large text */}
            <div className="space-y-2">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none"
              >
                FOOT
                <br />
                <span className="text-blue-400">BALL</span>
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 max-w-md"
              />
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-white">Ready to Get Scouted?</h3>
              <p className="text-gray-300 text-base lg:text-lg max-w-xl leading-relaxed">
                Soccer Fiesta: The First Eleven (Talent Go Pro) is a groundbreaking platform designed to revolutionize
                football talent discovery in Africa.
              </p>
              <p className="text-gray-400 text-sm lg:text-base max-w-xl leading-relaxed">
                Our innovative scouting system combines cutting-edge technology, expert evaluation, and nationwide
                exposure to help talented players bridge the gap between grassroots football and professional
                opportunities.
              </p>
            </motion.div>

            {/* Nike-inspired product showcase style steps */}
            <div className="space-y-3 lg:space-y-4">
              {cards.map((card, index) => (
                <motion.div
                  key={card.number}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group flex items-center space-x-4 p-4 lg:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-400/50 cursor-pointer relative overflow-hidden transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl ${card.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-white text-xl lg:text-2xl">{card.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg lg:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {card.title}
                    </h4>
                    <p className="text-gray-400 text-sm lg:text-base leading-relaxed">{card.description}</p>
                  </div>
                  <div className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  {hoveredCard === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 1.5,
                        ease: "linear",
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Start Your Journey
            </motion.button>
          </motion.div>

          {/* Right content - Nike-inspired visual */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative mt-8 lg:mt-0"
          >
            {/* Dynamic background shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-blue-600/20 rounded-3xl blur-2xl transform rotate-6" />

            {/* Main image container */}
            <div className="relative z-10 bg-gradient-to-br from-slate-800/50 to-blue-900/50 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <img
                src={aboutImg}
                alt="Football player celebrating"
                className="w-full h-auto rounded-2xl"
                draggable="false"
              />

              {/* Stats overlay */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">⚽</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">1000+ Players</p>
                    <p className="text-xs text-gray-600">Successfully Scouted</p>
                  </div>
                </div>
              </motion.div>

              {/* Additional floating elements */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -top-4 -left-4 bg-cyan-400 rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-sm font-bold">⭐</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
