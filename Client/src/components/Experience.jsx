import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';

const experiences = [
  {
    title: 'DevOps Trainee',
    company: 'Experts Cloud',
    period: 'Oct 2025 - Jan 2026',
    description: 'Building AWS-based CI/CD pipelines and Kubernetes clusters with focus on scalable infrastructure.',
    highlights: ['AWS', 'Kubernetes', 'CI/CD', 'Docker']
  },
  {
    title: 'Teaching Assistant',
    company: 'FAST National University',
    period: 'Aug 2024 - Jan 2025',
    description: 'Taught Docker, Helm, and Terraform; graded CI/CD assignments and mentored students on DevOps practices.',
    highlights: ['Docker', 'Helm', 'Terraform', 'Mentoring']
  }
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base max-w-2xl mx-auto">
            My journey in DevOps and cloud infrastructure engineering
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-8 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              className="relative"
              variants={itemVariants}
            >
              {/* Timeline Line */}
              {idx < experiences.length - 1 && (
                <div className="hidden md:block absolute left-6 top-16 w-0.5 h-24 bg-gradient-to-b from-indigo-500 to-transparent" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-3 w-10 h-10 md:w-10 md:h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <FaBriefcase className="text-white text-lg" />
              </div>

              {/* Content Card */}
              <div className="ml-12 md:ml-20 bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-base mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-semibold mt-4 md:mt-0 bg-indigo-50 dark:bg-indigo-900 px-3 py-1 rounded-lg">
                    <FaCalendar className="text-indigo-600 dark:text-indigo-400" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900 dark:to-blue-900 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
