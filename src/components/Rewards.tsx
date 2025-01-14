import { motion } from 'framer-motion'
import trophyAnimation from '../assets/trophy-animation.gif'
import { Link } from 'react-router-dom'

const Rewards = () => {
  return (
    <section className="min-h-screen bg-[#1a1a1a] py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden" id="rewards">
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-yellow-500/10 to-red-600/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Rewards & <span className="text-yellow-300">Benefits</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Your talent deserves recognition. At Soccer Fiesta, we offer more than just a chance to play – we offer a pathway to your dreams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Prize Money */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-black/30 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/10 transform hover:scale-105 transition-all duration-300"
          >
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Grand Prize</h3>
              <div className="text-4xl sm:text-6xl font-bold text-yellow-300 mb-4">CASH PRIZE</div>
              <p className="text-lg sm:text-xl text-gray-300">For each player in the final team</p>
            </div>
            <img src={trophyAnimation} alt="trophy" draggable="false" className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] mx-auto mt-4" />
          </motion.div>

          {/* International Exposure */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">International Exposure</h3>
            <div className="space-y-4">
              {[
                { color: "bg-green-400", text: "Direct exposure to international scouts" },
                { color: "bg-yellow-300", text: "Opportunity to play in friendly matches abroad" },
                { color: "bg-red-500", text: "Professional training and development" },
                { color: "bg-blue-500", text: "Media coverage and publicity" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 bg-black/30 backdrop-blur-md rounded-xl p-4 border border-white/10 transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${item.color} rounded-full flex items-center justify-center shrink-0`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <span className="text-base sm:text-lg text-gray-200">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6">
            Your journey to stardom begins here. Don't miss this once-in-a-lifetime opportunity!
          </p>
          <Link to="/register" className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-yellow-300 text-black rounded-full font-semibold text-base sm:text-lg hover:bg-yellow-400 transition-colors">
            Register Now
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Rewards

