import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import heroImg from '../assets/throw-no-bg.png';
import { VideoModal } from './videoPlayer';
import { PlayButton } from './PlayButton';
import HamburgerMenu from './HamburgerMenu';

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#333333] text-white overflow-hidden">
      <HamburgerMenu />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-12"
      >
        <div className="relative z-20 text-center lg:text-left mb-8 lg:mb-0">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6 lg:mb-10"
          >
            <div className="flex flex-wrap justify-center lg:justify-start items-center space-x-2 lg:space-x-4 mb-4 opacity-80">
              <span className="text-xs lg:text-sm uppercase tracking-wider">Introducing</span>
              <span className="text-xs lg:text-sm uppercase tracking-wider">Soccer</span>
              <span className="text-xs lg:text-sm uppercase tracking-wider">Fiesta</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold leading-none tracking-tighter">
              <motion.span
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="relative z-20 text-yellow-300 block lg:inline"
              >
                SOCC<span className="text-green-400">ER</span>
              </motion.span>
              <br className="lg:hidden" />
              <motion.span
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="relative z-20 text-red-600 block lg:inline"
              >
                FIESTA
              </motion.span>{' '}
              <motion.span
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="relative z-20 text-gray-100 block lg:inline"
              >
                1st Eleven
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link
              to="/register"
              className="px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-colors w-full sm:w-auto text-center"
            >
              Register Now
            </Link>
            <PlayButton onClick={() => setIsVideoModalOpen(true)} />
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative w-full lg:w-1/2 h-[50vh] lg:h-[90vh] mt-8 lg:mt-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-yellow-300/20 to-red-600/20 rounded-full blur-3xl" />
          <img
            src={heroImg}
            alt="Soccer player performing bicycle kick"
            className="relative z-20 w-full h-full object-contain object-center lg:object-right-center transform scale-110 lg:scale-125"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-4 lg:bottom-12 right-4 lg:right-12 flex items-center space-x-2 lg:space-x-4 text-xs lg:text-sm opacity-60"
        >
          <span>Play Hard, Dream Big</span>
          <div className="w-8 lg:w-12 h-[1px] bg-white"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute left-4 lg:left-6 bottom-12 lg:bottom-24 text-[10px] lg:text-xs opacity-40 writing-vertical"
        >
          © 2024 Soccer Fiesta
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-yellow-300/10 to-red-600/10 z-5"></div>

      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </div>
  );
};

export default Hero;

