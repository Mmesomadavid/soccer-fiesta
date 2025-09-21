"use client"

import { Button } from "./ui/button"
import { Play, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { useState } from "react"
import Logo from "./logo"
import heroImg from "../assets/kick-ball.png"
import heroVid from "../assets/vid/soccer-fiest-vid.mp4"
import streetLogo from "../assets/street-soccer.png"

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url('/football-stadium-at-night-with-bright-lights-and-c.jpg')` }}
      />

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 w-full"
      >
        <nav className="flex justify-between items-center px-4 md:px-8 py-6">
          {/* Main Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link to="/register">
              <Button className="bg-lime-400 text-black hover:bg-lime-300 font-bold px-4 lg:px-6 text-sm lg:text-base">
                Join Soccer Fiesta
              </Button>
            </Link>

            <Link to="/street-soccer">
              <Button className="flex items-center gap-2 bg-lime-400 text-black hover:bg-lime-300 font-bold px-4 lg:px-6 text-sm lg:text-base shadow-md">
                <img
                  src={streetLogo}
                  alt="Street Soccer Logo"
                  className="w-6 h-6 md:w-8 md:h-8 object-contain"
                />
                Street Soccer
              </Button>
            </Link>
          </div>

          {/* ✅ Mobile quick buttons side by side */}
          <div className="md:hidden flex gap-2">
            <Link to="/register">
              <Button className="bg-lime-400 text-black hover:bg-lime-300 font-semibold px-3 py-2 text-xs">
                Join Soccer Fiesta
              </Button>
            </Link>

            <Link to="/street-soccer">
              <Button className="flex items-center gap-1 bg-lime-400 text-black hover:bg-lime-300 font-semibold px-3 py-2 text-xs">
                <img
                  src={streetLogo}
                  alt="Street Soccer Logo"
                  className="w-4 h-4 object-contain"
                />
                Street Soccer
              </Button>
            </Link>
          </div>
        </nav>
      </motion.header>

      {/* ---------- Hero Section ---------- */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 md:mb-8"
            >
              UNLEASHING THE <span className="text-lime-400">FIRE</span> OF{" "}
              <span className="text-blue-400">FOOTBALL</span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-white/80 text-base md:text-lg mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Every match, every goal, every moment ignites a fire that burns in the hearts of our
              players and fans alike.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold rounded-lg">
                Discover More
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <Button
                size="icon"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-lime-400 hover:bg-lime-300 text-black shadow-2xl"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="currentColor" />
              </Button>
            </motion.div>

            <div className="relative">
              <img
                src={heroImg}
                alt="Football player celebrating"
                className="w-full max-w-xs md:max-w-md h-auto object-cover"
                draggable="false"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-black rounded-lg overflow-hidden max-w-4xl w-full aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
                onClick={() => setIsVideoModalOpen(false)}
              >
                <X className="w-6 h-6" />
              </Button>
              <video className="w-full h-full object-cover" controls autoPlay src={heroVid}>
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Hero
