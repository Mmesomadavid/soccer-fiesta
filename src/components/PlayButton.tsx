import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface PlayButtonProps {
  onClick: () => void;
}

export const PlayButton: React.FC<PlayButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-red-700 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Play size={40} className='bg-white text-black p-3 rounded-full ' />
      <span>Watch</span>
    </motion.button>
  );
};

