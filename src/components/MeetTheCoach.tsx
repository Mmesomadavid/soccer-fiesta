import { motion } from 'framer-motion';
import coachImg from '../assets/throw-bg.jpg';
import { Quote } from 'lucide-react';

const MeetTheCoach = () => {
  return (
    <section className="min-h-screen bg-[#1a1a1a] py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-yellow-500/10 to-red-600/10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Meet the <span className="text-yellow-300">Visionary</span>
              </h2>
              <p className="text-xl text-gray-400">
                Amb Dayan Nzereogu, Creator of Soccer Fiesta
              </p>
            </div>

            <div className="relative">
              <Quote className="absolute -left-4 -top-4 w-8 h-8 text-yellow-300/20" />
              <div className="space-y-6 text-gray-300 leading-relaxed">
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
              <Quote className="absolute -right-4 bottom-0 w-8 h-8 text-yellow-300/20 transform rotate-180" />
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
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -right-8 top-8 w-48 h-48 bg-yellow-300/10 rounded-lg transform rotate-12 blur-2xl" />
            <div className="absolute -left-8 bottom-8 w-48 h-48 bg-green-500/10 rounded-lg transform -rotate-12 blur-2xl" />
            
            {/* Main Image */}
            <div className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={coachImg}
                  alt="Amb Dayan Nzereogu"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              
              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-4xl font-bold text-yellow-300">11</p>
                    <p className="text-sm text-gray-400">Players Selected</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-green-400">2024</p>
                    <p className="text-sm text-gray-400">Launch Year</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Vision Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
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
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-400">{card.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheCoach;

