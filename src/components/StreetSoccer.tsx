"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const StreetSoccer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    teamName: "",
    members: [
      { firstName: "", lastName: "", email: "", phone: "" },
      { firstName: "", lastName: "", email: "", phone: "" },
      { firstName: "", lastName: "", email: "", phone: "" },
      { firstName: "", lastName: "", email: "", phone: "" },
    ],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx?: number, field?: string) => {
    if (idx !== undefined && field) {
      const updated = [...formData.members]
      updated[idx][field as keyof typeof updated[0]] = e.target.value
      setFormData({ ...formData, members: updated })
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData) // Replace with actual submission logic
    alert("Application submitted!")
  }

  return (
    <div className="bg-white text-gray-800">
      {/* Hero / Intro */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-50 via-white to-red-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider text-white bg-red-500 rounded-full">
              NEW EVENT
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Street Soccer – <span className="text-red-500">Rep Your Street</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              A revolution in street football where raw talent meets opportunity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-12 space-y-6 max-w-4xl mx-auto text-gray-700 leading-relaxed"
          >
            <p>I want you to close your eyes for a moment and picture a dusty street, a makeshift goal, and a worn-out football. For me, that image is not just a memory; it’s my childhood.</p>
            <p>Growing up, like every other African boy with dreams of playing professionally, I started on the street. We didn’t need fancy stadiums or expensive coaches. We organized the games in our own little ways…</p>
            <p>Today, I still see young boys and girls playing with that same fire… They are the true heartbeat of the game. And they deserve a platform.</p>
            <p>
              That’s why I’m introducing <strong>3-a-side Street Football</strong> and our rallying cry:{" "}
              <strong>Rep Your Street</strong>. We’re creating a bridge from the streets to the world stage.
            </p>
            <p>This is our game. This is our time. Assemble your team. Get your boots ready. And get ready to rep your street!</p>
          </motion.div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-600">Rules of 3-a-side Street Soccer</h2>
          <ol className="space-y-6 list-decimal list-inside text-gray-700 leading-relaxed">
            <li><strong>The Teams:</strong> 3 players on pitch, no goalkeepers. Two subs allowed anytime.</li>
            <li><strong>The Playing Area:</strong> Any flat surface (asphalt, concrete). Pitch ~15–20m long. Small goals or cones.</li>
            <li><strong>The Ball:</strong> Durable street ball size 4 or 5.</li>
            <li><strong>Game Duration:</strong> 10–15 mins per half or first to 5 goals. Continuous clock.</li>
            <li><strong>Start of Play:</strong> Coin toss decides first possession. Kick-off from center.</li>
            <li><strong>Scoring:</strong> Goal counts when entire ball crosses the line.</li>
            <li><strong>No Offsides</strong></li>
            <li><strong>Fouls:</strong> No slide tackles, minimal contact, indirect free kicks, opponents 2m away.</li>
            <li><strong>Out of Bounds:</strong> Kick-in from where it went out. No throw-ins.</li>
            <li><strong>Sportsmanship:</strong> Respect opponents; no verbal abuse.</li>
            <li><strong>Winning:</strong> Most goals win. Tie → sudden death first goal wins.</li>
          </ol>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Apply to Join Street Soccer</h3>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text" name="firstName" placeholder="First Name" required
                value={formData.firstName} onChange={handleChange}
                className="border p-3 rounded-md w-full"
              />
              <input
                type="text" name="lastName" placeholder="Last Name" required
                value={formData.lastName} onChange={handleChange}
                className="border p-3 rounded-md w-full"
              />
              <input
                type="email" name="email" placeholder="Email" required
                value={formData.email} onChange={handleChange}
                className="border p-3 rounded-md w-full"
              />
              <input
                type="text" name="teamName" placeholder="Team Name" required
                value={formData.teamName} onChange={handleChange}
                className="border p-3 rounded-md w-full"
              />
            </div>

            <h4 className="text-xl font-semibold mt-6">Team Members</h4>
            {formData.members.map((member, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                <input
                  type="text" placeholder={`Member ${idx + 1} First Name`} required
                  value={member.firstName}
                  onChange={(e) => handleChange(e, idx, "firstName")}
                  className="border p-3 rounded-md"
                />
                <input
                  type="text" placeholder="Last Name" required
                  value={member.lastName}
                  onChange={(e) => handleChange(e, idx, "lastName")}
                  className="border p-3 rounded-md"
                />
                <input
                  type="email" placeholder="Email" required
                  value={member.email}
                  onChange={(e) => handleChange(e, idx, "email")}
                  className="border p-3 rounded-md"
                />
                <input
                  type="tel" placeholder="Phone" required
                  value={member.phone}
                  onChange={(e) => handleChange(e, idx, "phone")}
                  className="border p-3 rounded-md"
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-black hover:bg-black/90 text-white font-semibold py-3 rounded-md transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default StreetSoccer
