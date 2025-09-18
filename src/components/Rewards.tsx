"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import trophyAnimation from "../assets/trophy-animation.gif"
import { Link } from "react-router-dom"
import { X } from "lucide-react"
import comingSoonImage from "../assets/coming-soon.jpg"

const Rewards = () => {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <section
      id="rewards"
      className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Nike-inspired geometric background */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300/10 rounded-lg transform rotate-45 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Rewards & <span className="text-blue-300">Benefits</span>
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Your talent deserves recognition. We offer more than just a chance to play – we offer a pathway to your
            dreams.
          </p>
        </motion.div>

        {/* main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Prize Money Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300 shadow-2xl"
          >
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Grand Prize</h3>
              <div className="text-4xl sm:text-6xl font-bold text-blue-200 mb-4">CASH PRIZE</div>
              <p className="text-lg sm:text-xl text-blue-100">For each player in the final team</p>
            </div>
            <img
              src={trophyAnimation || "/placeholder.svg?height=100&width=100&query=golden trophy"}
              alt="trophy"
              draggable="false"
              className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] mx-auto mt-4"
            />
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowPopup(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white transition-colors px-6 py-3 rounded-full font-semibold shadow-lg"
              >
                Next Scouting Event
              </button>
            </div>
          </motion.div>

          {/* International Exposure */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">International Exposure</h3>
            <div className="space-y-4">
              {[
                "Direct exposure to international scouts",
                "Opportunity to play in friendly matches abroad",
                "Professional training and development",
                "Media coverage and publicity",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center shrink-0 text-white font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <span className="text-base sm:text-lg text-blue-100">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-xl sm:text-2xl font-semibold text-blue-100 mb-6">
            Your journey to stardom begins here. Don&apos;t miss this once-in-a-lifetime opportunity!
          </p>
          <Link
            to="/register"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors shadow-lg"
          >
            Register Now
          </Link>
        </motion.div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl relative max-w-md w-full mx-4 border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-blue-200 hover:text-white"
                onClick={() => setShowPopup(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </button>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Next Scouting Event</h3>
                <img
                  src={comingSoonImage || "/placeholder.svg?height=160&width=320&query=coming soon football event"}
                  alt="Coming Soon"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p className="text-blue-100">
                  Stay tuned for our next scouting event. We&apos;ll announce the details soon!
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Rewards
