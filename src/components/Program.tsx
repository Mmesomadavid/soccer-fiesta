import { Trophy, Users, Video, Gamepad2 } from 'lucide-react'

const stages = [
  {
    icon: Users,
    title: "Registration",
    description: "Online sign-up for players",
    color: "bg-green-500",
  },
  {
    icon: Trophy,
    title: "Screening",
    description: "Trials to assess player potential",
    color: "bg-yellow-500",
  },
  {
    icon: Video,
    title: "Camping",
    description: "One-month live reality TV show with eliminations",
    color: "bg-red-500",
  },
  {
    icon: Gamepad2,
    title: "Friendly Games",
    description: "Matches with clubs in Nigeria, Africa, Europe, and America",
    color: "bg-blue-500",
  },
]

const Program = () => {
  return (
    <section className="min-h-screen bg-[#1a1a1a] py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-yellow-500/10 to-red-600/10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Program <span className="text-yellow-300">Stages</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our comprehensive program is designed to discover and nurture the next generation of football stars
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stages.map((stage, index) => (
            <div
              key={stage.title}
              className="group relative bg-black/50 backdrop-blur-sm rounded-xl p-6 hover:bg-black/70 transition-all duration-300"
            >
              <div className={`${stage.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <stage.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
              <p className="text-gray-400">{stage.description}</p>
              <div className="absolute top-4 right-4 text-4xl font-bold text-white/10">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Program

