import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import heroImg from '../assets/throw-no-bg.png'

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#333333] text-white overflow-hidden">
      {/* Navigation and UI Elements */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        {/* Navigation content remains the same */}
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="p-2 hover:bg-white/10 rounded-full transition-colors z-50"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/95 z-40">
            <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
              <a href="#" className="hover:text-yellow-300 transition-colors">Home</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">About</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Meet the Coach</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Players</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Program</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Scattered UI Elements */}
      <div className="absolute right-6 top-1/4 flex flex-col space-y-4 z-30">
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-screen flex items-center">
        {/* Text Content */}
        <div className="relative z-20 p-6 md:p-12 flex flex-col justify-between h-full">
          <div className="mt-20">
            <div className="flex items-center space-x-4 mb-4 opacity-80">
              <span className="text-sm uppercase tracking-wider">Introducing</span>
              <span className="text-sm uppercase tracking-wider">Soccer</span>
              <span className="text-sm uppercase tracking-wider">Fiesta</span>
            </div>
            <h1 className="text-[4rem] md:text-[8rem] font-bold leading-none tracking-tighter relative">
              <span className="relative z-20 text-yellow-300">SOCC
                <span className='text-green-400'>ER</span>
              </span>
              <br />
              <span className="relative z-20 text-red-600">FIESTA</span>
            </h1>
          </div>

          <div className="mb-12">
            <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-colors">
              I am a Player
            </button>
          </div>
        </div>

        {/* Player Image with matching gradient background */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[80%] md:w-[50%] h-[100%] z-10">
          {/* Matching gradient background */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[140%] aspect-square bg-gradient-to-br from-green-400/20 via-yellow-300/20 to-red-600/20 rounded-full blur-3xl" />
          <img
            src={heroImg}
            alt="Soccer player performing bicycle kick"
            className="relative z-20 w-full h-full object-contain object-center"
          />
        </div>

        {/* Additional UI Elements */}
        <div className="absolute bottom-12 right-12 flex items-center space-x-4 text-sm opacity-60">
          <span>Play Hard, Dream Big</span>
          <div className="w-12 h-[1px] bg-white"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-6 bottom-24 text-xs opacity-40 writing-vertical">
          © 2024 Soccer Fiesta
        </div>
      </div>

      {/* Updated Background Gradients to match About section */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-yellow-300/10 to-red-600/10 z-5"></div>
    </div>
  )
}

export default Hero