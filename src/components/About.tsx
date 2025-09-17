import { useState } from "react"
import { motion } from "framer-motion"
import aboutImg from "../assets/no-bg1.png"

const About = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const cards = [
    {
      number: 1,
      title: "Upload Your Profile",
      description:
        "Showcase your skills and statistics to a global audience of scouts and clubs.",
      color: "bg-red-600",
    },
    {
      number: 2,
      title: "Get Noticed",
      description:
        "Connect with scouts and clubs worldwide, increasing your chances of being discovered.",
      color: "bg-yellow-500",
    },
    {
      number: 3,
      title: "Start Your Journey",
      description:
        "Begin your professional football career with guidance from industry experts.",
      color: "bg-green-600",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="about"
      className="relative min-h-screen overflow-hidden bg-white py-12 lg:py-24"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6 lg:space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6 text-gray-900">
              Ready to
              <br />
              <span className="text-red-600">Get Scouted</span>
            </h2>

            <p className="text-gray-700 text-base lg:text-lg max-w-xl mb-4 lg:mb-6">
              Soccer Fiesta: The First Eleven (Talent Go Pro) is a groundbreaking
              platform designed to revolutionize football talent discovery in Africa.
              We provide a unique opportunity for aspiring footballers to showcase
              their skills, connect with professional clubs, and turn their dreams
              into reality.
            </p>
            <p className="text-gray-700 text-base lg:text-lg max-w-xl">
              Our innovative scouting system combines cutting-edge technology, expert
              evaluation, and nationwide exposure to help talented players bridge the
              gap between grassroots football and professional opportunities.
            </p>

            {/* Steps */}
            <div className="space-y-4 lg:space-y-6">
              {cards.map((card, index) => (
                <motion.div
                  key={card.number}
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/70 backdrop-blur-md border border-gray-200 shadow-md cursor-pointer relative overflow-hidden"
                >
                  <div
                    className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full ${card.color} flex items-center justify-center shrink-0`}
                  >
                    <span className="text-white font-bold text-sm lg:text-base">
                      {card.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-base">
                      {card.description}
                    </p>
                  </div>

                  {hoveredCard === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[140%] aspect-square bg-gradient-to-br from-green-400/20 via-yellow-300/20 to-red-600/20 rounded-full blur-3xl" />
            <img
              src={aboutImg}
              alt="Soccer player in action"
              className="relative z-10 w-full h-auto rounded-lg"
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-white/70 backdrop-blur-md rounded-lg p-3 lg:p-4 z-20 border border-gray-200 shadow-md"
            >
              <div className="flex items-center space-x-3 lg:space-x-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-300 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg lg:text-xl">⚽</span>
                </div>
                <div>
                  <p className="text-xs lg:text-sm font-semibold text-gray-800">
                    Next Scouting Event
                  </p>
                  <p className="text-[10px] lg:text-xs text-gray-600">
                    Coming Soon
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
