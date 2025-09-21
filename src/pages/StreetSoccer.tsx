"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Play, Users, Trophy, Target, Clock, Upload, ChevronLeft } from "lucide-react"
import streetSoccerImg1 from '../assets/street-soccer2.jpg'
import {Link} from 'react-router-dom';
import streetLogo from "../assets/street-soccer.png"

interface Player {
  name: string
  phone: string
  photo: File | null
}

const StreetSoccer = () => {
  const [formData, setFormData] = useState({
    clubName: "",
    clubEmail: "",
    clubAddress: "",
    clubPhone: "",
    players: [
      { name: "", phone: "", photo: null as File | null },
      { name: "", phone: "", photo: null as File | null },
      { name: "", phone: "", photo: null as File | null },
      { name: "", phone: "", photo: null as File | null },
      { name: "", phone: "", photo: null as File | null },
    ] as Player[],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, idx?: number, field?: string) => {
    if (idx !== undefined && field) {
      const updated = [...formData.players]
      if (field === "photo" && e.target instanceof HTMLInputElement && e.target.files) {
        updated[idx] = { ...updated[idx], photo: e.target.files[0] }
      } else if (field === "name" || field === "phone") {
        updated[idx] = { ...updated[idx], [field]: e.target.value }
      }
      setFormData({ ...formData, players: updated })
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    alert("Club registration submitted!")
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
    {
      icon: Target,
      title: "The Playing Area",
      desc: "Any flat surface (asphalt, concrete). Pitch ~15–20m long. Small goals or cones.",
    },
    { icon: Play, title: "The Ball", desc: "Durable street ball size 4 or 5." },
    { icon: Clock, title: "Game Duration", desc: "10–15 mins per half or first to 5 goals. Continuous clock." },
    { icon: Trophy, title: "Winning", desc: "Most goals win. Tie → sudden death first goal wins." },
  ]

  return (
    <div className=" bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent text-white min-h-screen">
      {/* 🔹 HEADER with Back-to-Home link */}
      <header className="w-full  bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent flex justify-between items-center">
        <img src={streetLogo} alt="Street Soccer Logo"  className="w-28 h-28 object-contain" />
        <Link
          to="/"
          className="text-lime-500 flex items-center text-sm hover:text-lime-400 font-light transition-colors"
        >
          <ChevronLeft /> Back
        </Link>
      </header>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/street-soccer-hero.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent" />

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
            className="text-6xl md:text-8xl font-black mb-8 leading-tight"
          >
            STREET
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-400">SOCCER</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl mb-12 text-blue-100 font-light max-w-3xl mx-auto"
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

        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-16 h-16 bg-lime-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-blue-400 rounded-full opacity-15"
        />
      </section>

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
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-400">
                FROM THE STREETS TO THE WORLD STAGE
              </h2>

              <div className="space-y-6 text-lg text-blue-100 leading-relaxed">
                <p>
                  I want you to close your eyes for a moment and picture a dusty street, a makeshift goal, and a
                  worn-out football. For me, that image is not just a memory; it's my childhood.
                </p>
                <p>
                  Growing up, like every other African boy with dreams of playing professionally, I started on the
                  street. We didn't need fancy stadiums or expensive coaches. We organized the games in our own little
                  ways…
                </p>
                <p>
                  Today, I still see young boys and girls playing with that same fire… They are the true heartbeat of
                  the game. And they deserve a platform.
                </p>
                <p className="text-lime-400 font-semibold">
                  That's why I'm introducing 3-a-side Street Football and our rallying cry: REP YOUR STREET. We're
                  creating a bridge from the streets to the world stage.
                </p>
              </div>
            </motion.div>

           <motion.div
            variants={itemVariants}
            className="relative flex justify-center items-center h-full" // sets overall height
          >

            <div className="absolute inset-0">
            <img
              src={streetSoccerImg1}
              alt="Street soccer community"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            
            </div>

          </motion.div>

          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-400">
              RULES OF THE GAME
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
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

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 grid md:grid-cols-3 gap-8"
          >
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1721506931381-3ba300ad71f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHN0cmVldCUyMHNvY2NlciUyMGFmcmljYXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Street soccer skills"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold text-lg">SKILL DEVELOPMENT</h4>
                <p className="text-blue-200">Master the fundamentals</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1553778562-8121e4c332a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RyZWV0JTIwc29jY2VyJTIwYWZyaWNhfGVufDB8fDB8fHww"
                alt="Street soccer team"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold text-lg">TEAM BUILDING</h4>
                <p className="text-blue-200">Unity through football</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="https://media.istockphoto.com/id/157724371/photo/football-in-africa.jpg?s=612x612&w=0&k=20&c=-A1rzn4fJGdVWbGcZtJ8bfl8IVrsCH-xlf0GfMFx7TY="
                alt="Street soccer action"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold text-lg">GAME TIME</h4>
                <p className="text-blue-200">Where legends are born</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-400">
              JOIN THE REVOLUTION
            </h3>
            <p className="text-xl text-blue-200">
              Register your club or team. Get your players ready. Rep your street.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-8 bg-slate-700/30 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-blue-500/20"
          >
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-lime-400">Club Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="clubName"
                  placeholder="Club/Team Name"
                  required
                  value={formData.clubName}
                  onChange={handleChange}
                  className="bg-slate-600/50 border border-blue-500/30 p-4 rounded-xl w-full text-white placeholder-blue-300 focus:border-lime-400 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  name="clubEmail"
                  placeholder="Club Email"
                  required
                  value={formData.clubEmail}
                  onChange={handleChange}
                  className="bg-slate-600/50 border border-blue-500/30 p-4 rounded-xl w-full text-white placeholder-blue-300 focus:border-lime-400 focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  name="clubPhone"
                  placeholder="Club Phone Number"
                  required
                  value={formData.clubPhone}
                  onChange={handleChange}
                  className="bg-slate-600/50 border border-blue-500/30 p-4 rounded-xl w-full text-white placeholder-blue-300 focus:border-lime-400 focus:outline-none transition-colors"
                />
                <textarea
                  name="clubAddress"
                  placeholder="Club Address"
                  required
                  value={formData.clubAddress}
                  onChange={handleChange}
                  rows={3}
                  className="bg-slate-600/50 border border-blue-500/30 p-4 rounded-xl w-full text-white placeholder-blue-300 focus:border-lime-400 focus:outline-none transition-colors resize-none"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-lime-400">Players (Up to 5 players)</h4>
              {formData.players.map((player, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-slate-600/20 rounded-2xl border border-blue-500/10"
                >
                  <input
                    type="text"
                    placeholder={`Player ${idx + 1} Full Name`}
                    required
                    value={player.name}
                    onChange={(e) => handleChange(e, idx, "name")}
                    className="bg-slate-600/50 border border-blue-500/30 p-3 rounded-lg text-white placeholder-blue-300 focus:border-lime-400 focus:outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={player.phone}
                    onChange={(e) => handleChange(e, idx, "phone")}
                    className="bg-slate-600/50 border border-blue-500/30 p-3 rounded-lg text-white placeholder-blue-300 focus:border-lime-400 focus:outline-none transition-colors"
                  />
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleChange(e, idx, "photo")}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      id={`photo-${idx}`}
                    />
                    <label
                      htmlFor={`photo-${idx}`}
                      className="flex items-center justify-center gap-2 bg-slate-600/50 border border-blue-500/30 p-3 rounded-lg text-white hover:border-lime-400 transition-colors cursor-pointer"
                    >
                      <Upload className="w-4 h-4" />
                      {player.photo ? player.photo.name : "Upload Photo"}
                    </label>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-lime-400 to-blue-400 hover:from-lime-300 hover:to-blue-300 text-slate-900 font-bold text-lg py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              REGISTER CLUB/TEAM
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  )
}

export default StreetSoccer
