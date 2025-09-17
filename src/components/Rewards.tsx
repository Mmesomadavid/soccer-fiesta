import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import trophyAnimation from '../assets/trophy-animation.gif'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import comingSoonImage from '../assets/coming-soon.jpg'

const Rewards = () => {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <section
      id="rewards"
      className="min-h-screen bg-[#1a1a1a] py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/0 to-white/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Rewards & Benefits
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Your talent deserves recognition. We offer more than just a chance
            to play – we offer a pathway to your dreams.
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
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/10 hover:scale-105 transition-all duration-300"
          >
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Grand Prize</h3>
              <div className="text-4xl sm:text-6xl font-bold text-gray-100 mb-4">
                CASH PRIZE
              </div>
              <p className="text-lg sm:text-xl text-gray-300">
                For each player in the final team
              </p>
            </div>
            <img
              src={trophyAnimation || '/placeholder.svg'}
              alt="trophy"
              draggable="false"
              className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] mx-auto mt-4"
            />
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowPopup(true)}
                className="bg-white/20 backdrop-blur-sm text-gray-100 hover:bg-white/30 transition-colors px-6 py-2 rounded-full font-semibold"
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
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              International Exposure
            </h3>
            <div className="space-y-4">
              {[
                'Direct exposure to international scouts',
                'Opportunity to play in friendly matches abroad',
                'Professional training and development',
                'Media coverage and publicity',
              ].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:scale-105 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0 text-gray-100 font-bold">
                    {index + 1}
                  </div>
                  <span className="text-base sm:text-lg text-gray-200">
                    {text}
                  </span>
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
          <p className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6">
            Your journey to stardom begins here. Don&apos;t miss this
            once-in-a-lifetime opportunity!
          </p>
          <Link
            to="/register"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-sm text-gray-100 rounded-full font-semibold hover:bg-white/30 transition-colors"
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
              className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl relative max-w-md w-full mx-4 border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-300 hover:text-white"
                onClick={() => setShowPopup(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </button>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-100 mb-4">
                  Next Scouting Event
                </h3>
                <img
                  src={comingSoonImage || '/placeholder.svg'}
                  alt="Coming Soon"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-200">
                  Stay tuned for our next scouting event. We&apos;ll announce
                  the details soon!
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
