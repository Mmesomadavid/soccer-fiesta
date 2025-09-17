import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Founder from '../assets/founder.png';
import Rita from '../assets/Rita.png';

const MeetTheCoach = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
      id="meet-the-coach"
    >
      {/* Soft decorative background gradient */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Visionary Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                Meet the <span className="text-yellow-500">Visionary</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-700">
                Amb Dayan Nzereogu, Creator of Soccer Fiesta
              </p>
            </div>

            <div className="relative">
              <Quote className="absolute -left-2 sm:-left-4 -top-2 sm:-top-4 w-8 h-8 sm:w-12 sm:h-12 text-yellow-400/30" />
              <div className="space-y-4 sm:space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
                <p>
                  The worn leather of the football felt familiar beneath my young hands, a comforting weight against my palm…
                </p>
                <p>
                  I was one of them, a blur of motion in the dusty streets…
                </p>
                <p>
                  Soccer Fiesta is my redemption, a testament to the belief that every dream deserves a chance to take flight.
                </p>
              </div>
              <Quote className="absolute -right-2 sm:-right-4 bottom-0 w-6 h-6 sm:w-10 sm:h-10 text-yellow-400/30 transform rotate-180" />
            </div>

            <div className="flex items-center space-x-4">
              <div className="h-1 w-12 bg-yellow-400"></div>
              <span className="text-yellow-500 font-semibold">Our Story</span>
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
            <div className="absolute -right-8 top-8 w-32 h-32 sm:w-48 sm:h-48 bg-yellow-200/40 rounded-lg transform rotate-12 blur-2xl" />
            <div className="absolute -left-8 bottom-8 w-32 h-32 sm:w-48 sm:h-48 bg-green-200/40 rounded-lg transform -rotate-12 blur-2xl" />

            <div className="relative z-10 rounded-2xl overflow-hidden">
              <img
                src={Founder || "/placeholder.svg"}
                alt="Amb Dayan Nzereogu"
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] object-cover object-top"
              />
            </div>
          </motion.div>
        </div>

        {/* Rita Nwadike Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mt-8 lg:mt-0 order-2 lg:order-1"
          >
            <div className="absolute -left-8 top-8 w-32 h-32 sm:w-48 sm:h-48 bg-yellow-200/40 rounded-lg transform -rotate-12 blur-2xl" />
            <div className="absolute -right-8 bottom-8 w-32 h-32 sm:w-48 sm:h-48 bg-green-200/40 rounded-lg transform rotate-12 blur-2xl" />

            <div className="relative z-10 rounded-2xl overflow-hidden">
              <img
                src={Rita || "/placeholder.svg"}
                alt="Rita Nwadike"
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                Meet the <span className="text-yellow-500">Female Coach</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-700">
                Rita Nwadike, Soccer Fiesta The First Eleven
              </p>
            </div>

            <div className="relative">
              <Quote className="absolute -left-2 sm:-left-4 -top-2 sm:-top-4 w-8 h-8 sm:w-12 sm:h-12 text-yellow-400/30" />
              <div className="space-y-4 sm:space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Rita Nwadike was the first African footballer to score in a FIFA Women's World Cup…
                </p>
                <p>
                  Born on November 3, 1974, in Africa, Rita played as a midfielder for Rivers Angels in 2004…
                </p>
                <p>
                  Rita's historic goal in the 1995 FIFA Women's World Cup in Sweden marked a significant milestone…
                </p>
              </div>
              <Quote className="absolute -right-2 sm:-right-4 bottom-0 w-6 h-6 sm:w-10 sm:h-10 text-yellow-400/30 transform rotate-180" />
            </div>

            <div className="flex items-center space-x-4">
              <div className="h-1 w-12 bg-yellow-400"></div>
              <span className="text-yellow-500 font-semibold">Trailblazer</span>
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
            { title: "Our Vision", description: "To create an accessible platform for talented footballers to showcase their skills without financial barriers." },
            { title: "Our Mission", description: "To revolutionize football talent discovery in Africa through transparency, technology, and equal opportunity." },
            { title: "Our Promise", description: "To provide a fair chance for every aspiring footballer to pursue their dreams of professional football." }
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 sm:p-6 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-gray-900">{card.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base">{card.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MeetTheCoach;
