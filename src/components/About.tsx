import aboutImg from '../assets/no-bg1.png'

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                Ready to
                <br />
                <span className="text-yellow-300">Get Scouted</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-xl">
                Soccer Fiesta provides a revolutionary platform for talented players 
                to showcase their skills directly to professional clubs worldwide. 
                Our innovative scouting system has helped numerous players achieve 
                their dreams of professional football.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Upload Your Profile</h3>
                  <p className="text-gray-400">Showcase your skills and statistics</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Get Noticed</h3>
                  <p className="text-gray-400">Connect with scouts and clubs worldwide</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Start Your Journey</h3>
                  <p className="text-gray-400">Begin your professional football career</p>
                </div>
              </div>
            </div>

            <button className="px-8 py-4 bg-yellow-300 text-black rounded-full font-semibold hover:bg-yellow-400 transition-colors">
              Join Soccer Fiesta
            </button>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[140%] aspect-square bg-gradient-to-br from-green-400/20 via-yellow-300/20 to-red-600/20 rounded-full blur-3xl" />
            <img
              src={aboutImg}
              alt="Soccer player in action"
              className="relative z-10 w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md rounded-lg p-4 z-20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">⚽</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">Next Scouting Event</p>
                  <p className="text-xs text-gray-300">Barcelona, Spain</p>
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

