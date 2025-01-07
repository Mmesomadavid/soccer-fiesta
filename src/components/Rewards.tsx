import trophyAnimation from '../assets/trophy-animation.gif'

const Rewards = () => {
  return (
    <section className="min-h-screen bg-[#1a1a1a] py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-yellow-500/10 to-red-600/10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Rewards & <span className="text-yellow-300">Benefits</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your talent deserves recognition. At Soccer Fiesta, we offer more than just a chance to play – we offer a pathway to your dreams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Prize Money */}
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Grand Prize</h3>
              <div className="text-6xl font-bold text-yellow-300 mb-4">₦1,000,000</div>
              <p className="text-xl text-gray-300">For each player in the final team</p>
            </div>
            <img src={trophyAnimation} alt="trophy" draggable="false" className=' h-[100px], w-[100px]' />
          </div>

          {/* International Exposure */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-6">International Exposure</h3>
            <div className="space-y-4">
              {[
                { color: "bg-green-400", text: "Direct exposure to international scouts" },
                { color: "bg-yellow-300", text: "Opportunity to play in friendly matches abroad" },
                { color: "bg-red-500", text: "Professional training and development" },
                { color: "bg-blue-500", text: "Media coverage and publicity" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 bg-black/30 backdrop-blur-md rounded-xl p-4 border border-white/10 transform hover:scale-105 transition-all duration-300">
                  <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center shrink-0`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <span className="text-lg text-gray-200">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-semibold text-gray-300 mb-6">
            Your journey to stardom begins here. Don't miss this once-in-a-lifetime opportunity!
          </p>
          <button className="px-8 py-4 bg-yellow-300 text-black rounded-full font-semibold text-lg hover:bg-yellow-400 transition-colors">
            Register Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default Rewards