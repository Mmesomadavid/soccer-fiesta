'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sendEmail } from '../actions/sendEmail';
import playerImg from '../assets/bg-4.jpg';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    phone2: '',
    email: '',
    instagram: '',
    video: null as File | null,
    reason: '',
    country: '',
    state: '',
    height: '',
    weight: '',
    preferredFoot: '',
    preferredWing: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prevState => ({ ...prevState, video: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        formDataToSend.append(key, value);
      }
    });
    
    const result = await sendEmail(formDataToSend);
    if (result.success) {
      alert('Registration successful!');
    } else {
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col lg:flex-row">
      {/* Left Panel */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2 relative overflow-hidden h-64 lg:h-auto"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent z-10" />
          <motion.img
            src={playerImg}
            alt="Soccer player"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Right Panel */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 flex flex-col justify-center p-4 sm:p-8 lg:p-16 bg-[#1a1a1a] overflow-y-auto"
      >
        <div className="max-w-md w-full mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Player Registration</h2>
            <p className="text-gray-400">Fill in your details to register for Soccer Fiesta</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Secondary Phone (Optional)</label>
                <input
                  type="tel"
                  name="phone2"
                  value={formData.phone2}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Instagram Username</label>
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="col-span-full">
                <label className="block text-sm font-medium text-gray-300 mb-1">Video of Yourself</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-white/20 rounded-lg">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-400">
                      <label className="relative cursor-pointer rounded-md font-medium text-yellow-500 hover:text-yellow-400">
                        <span>Upload a video</span>
                        <input
                          type="file"
                          name="video"
                          accept="video/*"
                          onChange={handleFileChange}
                          className="sr-only"
                          required
                        />
                      </label>
                    </div>
                    <p className="text-xs text-gray-400">MP4, MOV up to 100MB</p>
                  </div>
                </div>
              </div>
              <div className="col-span-full">
                <label className="block text-sm font-medium text-gray-300 mb-1">Why do you want to join Soccer Fiesta?</label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Height (cm)</label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Weight (kg)</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Preferred Foot</label>
                <select
                  name="preferredFoot"
                  value={formData.preferredFoot}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Foot</option>
                  <option value="right">Right</option>
                  <option value="left">Left</option>
                  <option value="both">Both</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Preferred Wing</label>
                <select
                  name="preferredWing"
                  value={formData.preferredWing}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Wing</option>
                  <option value="left">Left Wing</option>
                  <option value="right">Right Wing</option>
                  <option value="both">Both Wings</option>
                </select>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-yellow-500 to-red-600 rounded-lg hover:from-yellow-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300"
              >
                Submit Application
              </button>
            </div>

            <div className="text-center mt-6">
              <Link to="/" className="text-sm text-gray-400 hover:text-white">
                Back to Home
              </Link>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;

