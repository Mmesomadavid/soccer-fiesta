import { Trophy, Users, Video, Gamepad2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const stages = [
  { icon: Users,   title: 'Registration', description: 'Online sign-up for players', color: 'bg-green-500' },
  { icon: Trophy,  title: 'Screening',    description: 'Trials to assess player potential', color: 'bg-yellow-500' },
  { icon: Video,   title: 'Camping',      description: 'One-month live reality TV show with eliminations', color: 'bg-red-500' },
  { icon: Gamepad2,title: 'Friendly Games',description:'Matches with clubs in Africa, Europe, and America', color: 'bg-blue-500' },
]

const Program = () => {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section
      id="program"
      className="min-h-screen py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-green-600 via-green-600  to-green-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          style={{
            transform: isInView ? 'none' : 'translateY(50px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Program <span className="text-yellow-300">Stages</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our comprehensive program is designed to discover and nurture the next generation of football stars
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="
                group relative
                bg-white/10              
                border border-white/20    
                rounded-2xl
                p-6
                hover:bg-white/20
                transition-all duration-300
              "
            >
              <div className={`${stage.color} w-12 h-12 rounded-lg flex items-center justify-center mb-5`}>
                <stage.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">{stage.title}</h3>
              <p className="text-gray-300 text-sm">{stage.description}</p>

              <div className="absolute top-4 right-4 text-4xl font-bold text-white/50">
                {index + 1}
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Program
