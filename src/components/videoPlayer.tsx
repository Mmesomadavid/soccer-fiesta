import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import VideoPlay from '../assets/vid/soccer-fiest-vid.mp4'

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
        >
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 p-2 text-white hover:text-gray-300"
              aria-label="Close video"
            >
              <X size={24} />
            </button>
            <video
              ref={videoRef}
              className="w-full rounded-lg shadow-2xl"
              controls
              playsInline
            >
              <source src={VideoPlay} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

