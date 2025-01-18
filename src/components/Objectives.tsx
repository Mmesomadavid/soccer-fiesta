import { Target, Search, Users, Database, Eye, Shield, Zap, Feather, Crosshair } from 'lucide-react'
import { motion } from 'framer-motion'

const objectives = [
  {
    icon: Target,
    title: "Largest Televised Scouting Ground",
    description: "Create an unprecedented platform for talent discovery",
  },
  {
    icon: Search,
    title: "Discover Raw Talent",
    description: "Unearth exceptional football talent from local communities",
  },
  {
    icon: Users,
    title: "Equal Opportunities",
    description: "Provide fair chances for all aspiring players",
  },
  {
    icon: Database,
    title: "Comprehensive Database",
    description: "Build extensive records of Nigerian footballers",
  },
]

const scoutingCriteria = [
  {
    position: "Goalkeeper",
    icon: Eye,
    criteria: [
      "Commanding presence",
      "Shot-stopping ability",
      "Distribution",
      "Aerial ability",
    ],
  },
  {
    position: "Defense",
    icon: Shield,
    criteria: [
      "Tackling technique",
      "Marking ability",
      "Aerial ability",
      "Pace and agility",
      "Technical ability",
    ],
  },
  {
    position: "Midfield",
    icon: Zap,
    criteria: [
      "Technical ability",
      "Vision and creativity",
      "Energy and work rate",
      "Physicality",
      "Tactical awareness",
    ],
  },
  {
    position: "Wingers",
    icon: Feather,
    criteria: [
      "Pace and agility",
      "Dribbling skills",
      "Crossing ability",
      "Finishing ability",
      "Defensive work rate",
    ],
  },
  {
    position: "Attackers",
    icon: Crosshair,
    criteria: [
      "Finishing ability",
      "Movement and positioning",
      "Hold-up play",
      "Link-up play",
      "Aerial ability",
    ],
  },
]

const Objectives = () => {
  return (
    <section className="min-h-screen bg-[#1a1a1a] py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden" id="objectives">
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-yellow-500/10 to-red-600/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Aims & <span className="text-green-400">Objectives</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Our mission is to revolutionize football talent discovery in Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {objectives.map((objective, index) => (
            <motion.div
              key={objective.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-black/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 hover:bg-black/70 transition-all duration-300"
            >
              <objective.icon className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{objective.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{objective.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            What Scouts <span className="text-green-400">Look For</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Scouts assess various skills and attributes across different positions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {scoutingCriteria.map((position, index) => (
            <motion.div
              key={position.position}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-black/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 hover:bg-black/70 transition-all duration-300"
            >
              <position.icon className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{position.position}</h3>
              <ul className="text-gray-400 text-sm sm:text-base list-disc list-inside">
                {position.criteria.map((criterion, idx) => (
                  <li key={idx} className="mb-1">{criterion}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
            Remember, scouts look for more than just technical skills. They also assess a player's attitude, mentality, physical attributes, and potential for development.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Objectives

