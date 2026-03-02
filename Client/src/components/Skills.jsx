import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';

const categories = {
  'Cloud & DevOps': {
    icon: FaCloud,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'GitHub Actions', level: 70 }
    ]
  },
  Backend: {
    icon: FaServer,
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Go', level: 80 },
      { name: 'Express', level: 70 }
    ]
  },
  Frontend: {
    icon: FaCode,
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'React', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Next.js', level: 70 }
    ]
  },
  Databases: {
    icon: FaDatabase,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'Redis', level: 70 }
    ]
  }
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiency across different domains
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(categories).map(([catName, catData]) => {
            const Icon = catData.icon;
            return (
              <motion.div
                key={catName}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all"
                variants={categoryVariants}
                whileHover={{ y: -5 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className={`bg-gradient-to-br ${catData.color} p-3 rounded-lg text-white`}>
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {catName}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {catData.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-semibold">
                          {skill.name}
                        </span>
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${catData.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
