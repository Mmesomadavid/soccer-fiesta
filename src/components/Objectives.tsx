import { Target, Search, Users, Database } from 'lucide-react'

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

const Objectives = () => {
  return (
    <section className="min-h-screen bg-[#1a1a1a] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Aims & <span className="text-green-400">Objectives</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our mission is to revolutionize football talent discovery in Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {objectives.map((objective) => (
            <div
              key={objective.title}
              className="group bg-black/50 backdrop-blur-sm rounded-xl p-8 hover:bg-black/70 transition-all duration-300"
            >
              <objective.icon className="w-8 h-8 text-yellow-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{objective.title}</h3>
              <p className="text-gray-400">{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Objectives

