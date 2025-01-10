import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import heroImg from '../assets/throw-no-bg.png';
import { VideoPlayer } from './videoPlayer';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/#about' },
    { title: 'Program', href: '/#program' },
    { title: 'Meet the Founder', href: '/#Meet the Founder' },
    { title: 'Objectives', href: '/#objectives' },
    { title: 'Rewards', href: '/#rewards' },
    { title: 'Contact', href: '/contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
    
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#333333] text-white overflow-hidden">
      {/* Navigation and UI Elements */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/95 z-40"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="hover:text-yellow-300 transition-colors"
                      onClick={(e) => scrollToSection(e, item.href)}
                    >
                      {item.title}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen flex items-center"
      >
        {/* Text Content */}
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
            <h1 className="text-[4rem] md:text-[8rem] font-bold leading-none tracking-tighter relative">
              <motion.span
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="relative z-20 text-yellow-300"
              >
                SOCC<span className='text-green-400'>ER</span>
              </motion.span>
              <br />
              <motion.span
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="relative z-20 text-red-600"
              >
                FIESTA 
              </motion.span> 
              {' '}
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
            className="mb-12"
          >
            <Link
              to="/register"
              className="px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-colors"
            >
              Register Now
            </Link>
          </motion.div>
        </div>

        {/* Player Image with Video Player */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[80%] md:w-[50%] h-[90vh] z-10"
        >
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[140%] aspect-square bg-gradient-to-br from-green-400/20 via-yellow-300/20 to-red-600/20 rounded-full blur-3xl" />
          <img
            src={heroImg}
            alt="Soccer player performing bicycle kick"
            className="relative z-20 w-full h-full object-contain object-right-center transform scale-125"
          />
          <VideoPlayer />
        </motion.div>

        {/* Additional UI Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-12 right-12 flex items-center space-x-4 text-sm opacity-60"
        >
          <span>Play Hard, Dream Big</span>
          <div className="w-12 h-[1px] bg-white"></div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute left-6 bottom-24 text-xs opacity-40 writing-vertical"
        >
          © 2024 Soccer Fiesta
        </motion.div>
      </motion.div>

      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-yellow-300/10 to-red-600/10 z-5"></div>
    </div>
  );
};

export default Hero;

