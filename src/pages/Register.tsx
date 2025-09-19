"use client"

import { useState } from "react"
import type React from "react"
import { motion } from "framer-motion"

const SoccerFiestaForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    secondaryPhone: "",
    email: "",
    instagram: "",
    video: null as File | null,
    reason: "",
    country: "",
    state: "",
    height: "",
    weight: "",
    preferredFoot: "",
    preferredWing: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, files } = e.target as HTMLInputElement
    if (name === "video" && files) {
      setFormData({ ...formData, video: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate send (EmailJS or other service)
    await new Promise((r) => setTimeout(r, 2000))
    console.log(formData)
    alert("Soccer Fiesta registration submitted!")
    setIsSubmitting(false)
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex items-center justify-center p-6">
      <motion.form
        onSubmit={handleSubmit}
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="w-full max-w-3xl bg-slate-900/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl space-y-6"
      >
        <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-400">
          Soccer Fiesta Registration
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First & Last Name */}
          <motion.div variants={itemVariants}>
            <label className="text-sm text-gray-300">First Name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-slate-700/50 border border-blue-500/30 text-white"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label className="text-sm text-gray-300">Last Name</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-slate-700/50 border border-blue-500/30 text-white"
            />
          </motion.div>

          {/* Phones */}
          <motion.div variants={itemVariants}>
            <label className="text-sm text-gray-300">Phone</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-slate-700/50 border border-blue-500/30 text-white"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label className="text-sm text-gray-300">Secondary Phone (Optional)</label>
            <input
              name="secondaryPhone"
              type="tel"
              value={formData.secondaryPhone}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-slate-700/50 border border-blue-500/30 text-white"
            />
          </motion.div>

          {/* Email & Instagram */}
          <motion.div variants={itemVariants}>
            <label className="text-sm text-gray-300">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-slate-700/50 border border-blue-500/30 text-white"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label className="text-sm text-gray-300">Instagram Username</label>
            <input
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              placeholder="@handle"
              className="w-full p-3 rounded-xl bg-slate-700/50 border border-blue-500/30 text-white"
            />
          </motion.div>

          {/* Video Upload */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <label className="text-sm text-gray-300 mb-1 block">Video of Yourself (MP4/MOV up to 100 MB)</label>
            <input
              name="video"
              type="file"
              accept="video/mp4,video/quicktime"
              onChange={handleChange}
              required
              className="w-full text-white file:mr-4 file:rounded-xl file:border-0 file:bg-lime-400 file:text-slate-900 file:px-4 file:py-2 hover:file:bg-lime-300"
            />
          </motion.div>

          {/* Motivation */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <label className="text-sm text-gray-300">Why do you want to join Soccer Fiesta?</label>
            <textarea
              name="reason"
              rows={4}
              value={formData.reason}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-slate-700/50 border border-blue-500/30 text-white"
            />
          </motion.div>

          {/* Country & State */}
          <motion.div variants={itemVariants}>
            <label className="text-sm text-gray-300">Country</label>
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-slate-700/50 border border-blue-500/30 text-white"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label className="text-sm text-gray-300">State</label>
            <input
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-slate-700/50 border border-blue-500/30 text-white"
            />
          </motion.div>

          {/* Height & Weight */}
          <motion.div variants={itemVariants}>
            <label className="text-sm text-gray-300">Height (cm)</label>
            <input
              name="height"
              type="number"
              value={formData.height}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-slate-700/50 border border-blue-500/30 text-white"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label className="text-sm text-gray-300">Weight (kg)</label>
            <input
              name="weight"
              type="number"
              value={formData.weight}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-slate-700/50 border border-blue-500/30 text-white"
            />
          </motion.div>

          {/* Preferred Foot & Wing */}
          <motion.div variants={itemVariants}>
            <label className="text-sm text-gray-300">Preferred Foot</label>
            <select
              name="preferredFoot"
              value={formData.preferredFoot}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-slate-700/50 border border-blue-500/30 text-white"
            >
              <option value="">Select Foot</option>
              <option>Left</option>
              <option>Right</option>
              <option>Both</option>
            </select>
          </motion.div>
          <motion.div variants={itemVariants}>
            <label className="text-sm text-gray-300">Preferred Wing</label>
            <select
              name="preferredWing"
              value={formData.preferredWing}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-slate-700/50 border border-blue-500/30 text-white"
            >
              <option value="">Select Wing</option>
              <option>Left</option>
              <option>Right</option>
              <option>Center</option>
            </select>
          </motion.div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 mt-4 bg-gradient-to-r from-lime-400 to-blue-400 text-slate-900 font-bold text-lg rounded-xl hover:from-lime-300 hover:to-blue-300 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit Registration"}
        </motion.button>
      </motion.form>
    </div>
  )
}

export default SoccerFiestaForm
