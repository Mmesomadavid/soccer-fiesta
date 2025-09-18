"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Play, Users, Trophy, Target, Clock } from "lucide-react"
import streetSoccer2 from '../assets/street-soccer2.jpg'

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
      updated[idx][field as keyof (typeof updated)[0]] = e.target.value
      setFormData({ ...formData, members: updated })
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    alert("Application submitted!")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const rules = [
    { icon: Users, title: "The Teams", desc: "3 players on pitch, no goalkeepers. Two subs allowed anytime." },
    { icon: Target, title: "The Playing Area", desc: "Any flat surface (asphalt, concrete). Pitch ~15–20m long. Small goals or cones." },
    { icon: Play, title: "The Ball", desc: "Durable street ball size 4 or 5." },
    { icon: Clock, title: "Game Duration", desc: "10–15 mins per half or first to 5 goals. Continuous clock." },
    { icon: Trophy, title: "Winning", desc: "Most goals win. Tie → sudden death first goal wins." },
  ]

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: "url(/street-soccer-hero.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block px-6 py-2 mb-8 text-sm font-bold tracking-wider text-blue-900 bg-lime-400 rounded-full"
          >
            NEW EVENT
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
          >
            STREET
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-400">SOCCER</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl mb-12 text-blue-100 font-light max-w-3xl mx-auto"
          >
            REP YOUR STREET • UNLEASH YOUR FIRE • MAKE YOUR MARK
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="px-8 py-4 bg-lime-400 text-blue-900 font-bold text-lg rounded-full hover:bg-lime-300 transition-all duration-300 transform hover:scale-105">
              JOIN THE REVOLUTION
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300">
              WATCH HIGHLIGHTS
            </button>
          </motion.div>
        </motion.div>

        {/* Decorative Circles */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-16 h-16 bg-lime-400 rounded-full opacity-20 pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-blue-400 rounded-full opacity-15 pointer-events-none"
        />
      </section>

      {/* STORY SECTION */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-400">
                FROM THE STREETS TO THE WORLD STAGE
              </h2>

              <div className="space-y-6 text-lg sm:text-xl text-blue-100 leading-relaxed">
                <p>
                  I want you to close your eyes for a moment and picture a dusty street, a makeshift goal, and a worn-out football. For me, that image is not just a memory; it's my childhood.
                </p>
                <p>
                  Growing up, like every other African boy with dreams of playing professionally, I started on the street. We didn't need fancy stadiums or expensive coaches. We organized the games in our own little ways…
                </p>
                <p>
                  Today, I still see young boys and girls playing with that same fire… They are the true heartbeat of the game. And they deserve a platform.
                </p>
                <p className="text-lime-400 font-semibold">
                  That's why I'm introducing 3-a-side Street Football and our rallying cry: REP YOUR STREET. We're creating a bridge from the streets to the world stage.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <img
                src={streetSoccer2}
                alt="Street soccer training"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* RULES SECTION */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-400">
              RULES OF THE GAME
            </h2>
            <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto">
              Simple rules, maximum intensity. This is street football at its purest form.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {rules.map((rule, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover:border-lime-400/50 transition-all duration-300 group"
              >
                <rule.icon className="w-12 h-12 text-lime-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-4 text-white">{rule.title}</h3>
                <p className="text-blue-200 leading-relaxed">{rule.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* JOIN FORM SECTION */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-400">
              JOIN THE REVOLUTION
            </h3>
            <p className="text-lg sm:text-xl text-blue-200">Assemble your team. Get your boots ready. Rep your street.</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-8 bg-slate-700/30 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-blue-500/20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="bg-slate-600/50 border border-blue-500/30 p-4 rounded-xl w-full text-white placeholder-blue-300 focus:border-lime-400 focus:outline-none transition-colors"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="bg-slate-600/50 border border-blue-500/30 p-4 rounded-xl w-full text-white placeholder-blue-300 focus:border-lime-400 focus:outline-none transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-slate-600/50 border border-blue-500/30 p-4 rounded-xl w-full text-white placeholder-blue-300 focus:border-lime-400 focus:outline-none transition-colors"
              />
              <input
                type="text"
                name="teamName"
                placeholder="Team Name"
                required
                value={formData.teamName}
                onChange={handleChange}
                className="bg-slate-600/50 border border-blue-500/30 p-4 rounded-xl w-full text-white placeholder-blue-300 focus:border-lime-400 focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-lime-400">Team Members</h4>
              {formData.members.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-600/20 rounded-2xl border border-blue-500/10"
                >
                  <input
                    type="text"
                    placeholder={`Member ${idx + 1} First Name`}
                    required
                    value={member.firstName}
                    onChange={(e) => handleChange(e, idx, "firstName")}
                    className="bg-slate-600/50 border border-blue-500/30 p-3 rounded-lg text-white placeholder-blue-300 focus:border-lime-400 focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    value={member.lastName}
                    onChange={(e) => handleChange(e, idx, "lastName")}
                    className="bg-slate-600/50 border border-blue-500/30 p-3 rounded-lg text-white placeholder-blue-300 focus:border-lime-400 focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={member.email}
                    onChange={(e) => handleChange(e, idx, "email")}
                    className="bg-slate-600/50 border border-blue-500/30 p-3 rounded-lg text-white placeholder-blue-300 focus:border-lime-400 focus:outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    required
                    value={member.phone}
                    onChange={(e) => handleChange(e, idx, "phone")}
                    className="bg-slate-600/50 border border-blue-500/30 p-3 rounded-lg text-white placeholder-blue-300 focus:border-lime-400 focus:outline-none transition-colors"
                  />
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-lime-400 to-blue-400 hover:from-lime-300 hover:to-blue-300 text-slate-900 font-bold text-lg py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              SUBMIT APPLICATION
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  )
}

export default StreetSoccer
