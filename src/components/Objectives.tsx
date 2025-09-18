"use client"

import { Target, Search, Users, Database, Eye, Shield, Zap, Feather, Crosshair } from "lucide-react"
import { motion } from "framer-motion"

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
  { icon: Users, title: "Equal Opportunities", description: "Provide fair chances for all aspiring players" },
  { icon: Database, title: "Comprehensive Database", description: "Build extensive records of African footballers" },
]

const scoutingCriteria = [
  {
    position: "Goalkeeper",
    icon: Eye,
    criteria: ["Commanding presence", "Shot-stopping ability", "Distribution", "Aerial ability"],
  },
  {
    position: "Defense",
    icon: Shield,
    criteria: ["Tackling technique", "Marking ability", "Aerial ability", "Pace and agility", "Technical ability"],
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
    criteria: ["Pace and agility", "Dribbling skills", "Crossing ability", "Finishing ability", "Defensive work rate"],
  },
  {
    position: "Attackers",
    icon: Crosshair,
    criteria: ["Finishing ability", "Movement and positioning", "Hold-up play", "Link-up play", "Aerial ability"],
  },
]

const Objectives = () => {
  return (
    <section
      id="objectives"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24 relative overflow-hidden"
    >
      {/* Nike-inspired background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            Aims & <span className="text-blue-600">Objectives</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Our mission is to revolutionize football talent discovery in Africa
          </p>
        </div>

        {/* Objectives Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
          {objectives.map((objective, index) => (
            <motion.div
              key={objective.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-white/80 backdrop-blur-sm
                border border-blue-100
                shadow-lg
                rounded-2xl
                p-6 sm:p-8
                hover:bg-white/90 hover:scale-105
                transition-all duration-300
              "
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <objective.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{objective.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base">{objective.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Scouts Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            What Scouts <span className="text-blue-600">Look For</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Scouts assess various skills and attributes across different positions
          </p>
        </div>

        {/* Criteria Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {scoutingCriteria.map((position, index) => (
            <motion.div
              key={position.position}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-white/80 backdrop-blur-sm
                border border-blue-100
                shadow-lg
                rounded-2xl
                p-6 sm:p-8
                hover:bg-white/90 hover:scale-105
                transition-all duration-300
              "
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <position.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{position.position}</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1">
                {position.criteria.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Closing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Scouts also evaluate attitude, mentality, physical attributes, and potential for development.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Objectives
