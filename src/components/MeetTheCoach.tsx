import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Founder from '../assets/founder.jpg';

const MeetTheCoach = () => {
  return (
    <section className="min-h-screen bg-[#1a1a1a] py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-yellow-500/10 to-red-600/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Meet the <span className="text-yellow-300">Visionary</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-200">
                Amb Dayan Nzereogu, Creator of Soccer Fiesta
              </p>
            </div>

            <div className="relative">
              <Quote className="absolute -left-2 sm:-left-4 -top-2 sm:-top-4 w-8 h-8 sm:w-12 sm:h-12 text-yellow-300/20" />
              <div className="space-y-4 sm:space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  The worn leather of the football felt familiar beneath my young hands, a comforting weight against my palm. Lagos, my playground, pulsed with the rhythm of life – the honking of car horns, the vibrant chatter of street vendors, and the echoing shouts of children playing.
                </p>
                <p>
                  I was one of them, a blur of motion in the dusty streets, my feet a whirlwind, mimicking the dazzling moves of Rivaldo, the grace of Bebeto, the thunderous strikes of Ronaldo. My dream, as clear as the midday sun, was to wear the green and white of the Super Eagles, to soar like an eagle on the world stage.
                </p>
                <p>
                  Soccer Fiesta is my redemption, a testament to the belief that every dream deserves a chance to take flight. It is a beacon of hope for those who, like me, dared to dream big, only to face insurmountable obstacles.
                </p>
              </div>
              <Quote className="absolute -right-2 sm:-right-4 bottom-0 w-6 h-6 sm:w-10 sm:h-10 text-yellow-300/20 transform rotate-180" />
            </div>

            <div className="flex items-center space-x-4">
              <div className="h-1 w-12 bg-yellow-300"></div>
              <span className="text-yellow-300 font-semibold">Our Story</span>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mt-8 lg:mt-0"
          >
            {/* Decorative Elements */}
            <div className="absolute -right-8 top-8 w-32 h-32 sm:w-48 sm:h-48 bg-yellow-300/10 rounded-lg transform rotate-12 blur-2xl" />
            <div className="absolute -left-8 bottom-8 w-32 h-32 sm:w-48 sm:h-48 bg-green-500/10 rounded-lg transform -rotate-12 blur-2xl" />
            
            {/* Main Image */}
            <div className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={Founder}
                  alt="Amb Dayan Nzereogu"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            
            </div>
          </motion.div>
        </div>

        {/* Vision Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20 lg:mt-24"
        >
          {[
            {
              title: "Our Vision",
              description: "To create an accessible platform for talented footballers to showcase their skills without financial barriers."
            },
            {
              title: "Our Mission",
              description: "To revolutionize football talent discovery in Nigeria through transparency, technology, and equal opportunity."
            },
            {
              title: "Our Promise",
              description: "To provide a fair chance for every aspiring footballer to pursue their dreams of professional football."
            }
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">{card.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{card.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheCoach;
