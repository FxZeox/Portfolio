import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaProjectDiagram, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';

const metrics = [
  { icon: FaProjectDiagram, label: 'Production Projects', value: 1, color: 'from-blue-500 to-cyan-500' },
  { icon: FaGitAlt, label: 'CI/CD Pipelines', value: 5, color: 'from-indigo-500 to-purple-500' },
  { icon: FaDocker, label: 'Kubernetes Deployments', value: 3, color: 'from-pink-500 to-rose-500' },
  { icon: FaAws, label: 'AWS Services Used', value: 15, color: 'from-yellow-500 to-orange-500' }
];

export default function Metrics() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const metricVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="metrics" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
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
            Key Metrics
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Highlights of my work and achievements in DevOps and cloud engineering
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
                variants={metricVariants}
                whileHover={{ y: -5 }}
              >
                <div className={`bg-gradient-to-br ${metric.color} p-4 rounded-lg w-fit mb-4`}>
                  <Icon className="text-3xl text-white" />
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    <motion.span
                      key={metric.value}
                      initial={{ opacity: 0 }}
                      whileInView={{
                        opacity: 1,
                        transition: { duration: 2 }
                      }}
                      viewport={{ once: true }}
                    >
                      <CountUp
                        end={metric.value}
                        duration={2}
                        preserveValue={true}
                      />
                    </motion.span>
                  </span>
                  <span className="text-2xl text-gray-600 dark:text-gray-400 font-semibold">+</span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  {metric.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
