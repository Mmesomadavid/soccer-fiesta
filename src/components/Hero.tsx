import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import heroImg from '../assets/throw-no-bg.png';
import { VideoModal } from './videoPlayer';
import { PlayButton } from './PlayButton';

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#333333] text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen flex items-center"
      >
        <div className="relative z-20 p-6 md:p-12 flex flex-col justify-between h-full">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-20"
          >
            <div className="flex items-center space-x-4 mb-4 opacity-80">
              <span className="text-sm uppercase tracking-wider">Introducing</span>
              <span className="text-sm uppercase tracking-wider">Soccer</span>
              <span className="text-sm uppercase tracking-wider">Fiesta</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-none tracking-tighter relative">
              <motion.span
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="relative z-20 text-yellow-300"
              >
                SOCC<span className="text-green-400">ER</span>
              </motion.span>
              <br />
              <motion.span
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="relative z-20 text-red-600"
              >
                FIESTA
              </motion.span>{' '}
              <motion.span
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="relative z-20 text-gray-100"
              >
                1st Eleven
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mb-12 flex items-center space-x-4"
          >
            <Link
              to="/register"
              className="px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-colors"
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
          className=" right-0 top-1/2 transform -translate-y-1/2 w-[80%] md:w-[50%] h-[90vh] z-10 relative"
        >
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[140%] aspect-square bg-gradient-to-br from-green-400/20 via-yellow-300/20 to-red-600/20 rounded-full blur-3xl" />
          <img
            src={heroImg}
            alt="Soccer player performing bicycle kick"
            className="relative z-20 w-full h-full object-contain object-right-center transform scale-125"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-12 right-12 flex items-center space-x-4 text-sm opacity-60"
        >
          <span>Play Hard, Dream Big</span>
          <div className="w-12 h-[1px] bg-white"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute left-6 bottom-24 text-xs opacity-40 writing-vertical"
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

