import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
// static profile image from assets folder
import profilePic from '../assets/Photo.jpeg';

export default function Landing() {
  // using static profile image; no upload functionality needed
  const imagePreview = profilePic;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const imageVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.2 }
    }
  };

  return (
    <section id="landing" className="relative min-h-[80vh] flex items-center justify-center px-4 py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob dark:opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300 to-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob dark:opacity-10 animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob dark:opacity-10 animation-delay-4000" />
      
      <motion.div
        className="relative z-10 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side - Profile Picture */}
        <motion.div
          className="flex flex-col items-center justify-center"
          variants={imageVariants}
        >
          <div className="relative group">
            {/* Animated Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition duration-500" />
            
            <div
              className="relative w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-1 shadow-premium-lg"
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-2 flex items-center justify-center overflow-hidden">
                <img
                  src={imagePreview}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Social Links */}
          <motion.div
            className="flex gap-6 mt-8"
            variants={itemVariants}
          >
            <motion.a
              href="https://www.linkedin.com/in/usman-zxt/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-premium hover:shadow-premium-lg transition-all duration-300"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="text-2xl" />
            </motion.a>
            <motion.a
              href="https://github.com/FxZeox"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-600 dark:to-gray-700 text-white shadow-premium hover:shadow-premium-lg transition-all duration-300"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="text-2xl" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side - Bio & Data */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Usman Ahmad
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-semibold">
              Cloud & DevOps Engineer
            </h2>
          </motion.div>

          <motion.p
            className="text-base text-gray-600 dark:text-gray-400 leading-relaxed"
            variants={itemVariants}
          >
            Passionate about building scalable cloud infrastructure, CI/CD pipelines, and Kubernetes deployments. Specializing in AWS, Docker, and modern DevOps practices.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-3 gap-3 py-6"
            variants={itemVariants}
          >
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
              whileHover={{ y: -5 }}
            >
              <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">10</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 font-medium">Months Experience</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
              whileHover={{ y: -5 }}
            >
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">3+</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 font-medium">Projects</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
              whileHover={{ y: -5 }}
            >
              <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">12+</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 font-medium">Technologies</p>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-3 pt-4"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="px-6 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white text-sm rounded-lg font-semibold shadow-premium-lg hover:shadow-premium-lg transition-all duration-300"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-2 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 text-sm rounded-lg font-semibold hover:bg-indigo-50 dark:hover:bg-gray-800 hover:shadow-premium transition-all duration-300"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
