import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import soccerVideo from '../assets/vid/soccer-fiest-vid.mp4'; // Update this path to your video file

export const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setIsPlaying(true)}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 
                   w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg
                   hover:scale-110 transition-transform duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Play className="w-8 h-8 text-green-500 ml-1" />
      </motion.button>

      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          >
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 p-2 text-white hover:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>
            <video
              autoPlay
              controls
              className="max-w-4xl w-full mx-4 rounded-lg shadow-2xl"
            >
              <source src={soccerVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
