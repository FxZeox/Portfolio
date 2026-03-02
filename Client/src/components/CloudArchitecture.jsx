import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaBalanceScale, FaLeaf, FaDatabase } from 'react-icons/fa';

const architectureItems = [
  {
    title: 'High Availability',
    description: 'Design systems that remain live across failures and zones with multi-AZ deployment strategies.',
    icon: FaDatabase,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Cost Optimization',
    description: 'Leverage reserved instances, right-sizing, and spot instances to maximize ROI.',
    icon: FaLeaf,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Security & IAM',
    description: 'Implement principle of least privilege, role-based access, and multi-factor authentication.',
    icon: FaShieldAlt,
    color: 'from-red-500 to-pink-500'
  },
  {
    title: 'Load Balancing',
    description: 'Distribute traffic efficiently across resources with application and network load balancers.',
    icon: FaBalanceScale,
    color: 'from-indigo-500 to-purple-500'
  }
];

export default function CloudArchitecture() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="architecture" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">
            Cloud Architecture & Design
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base max-w-2xl mx-auto">
            AWS Solutions Architect foundation covering resilient, scalable, and secure cloud designs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {architectureItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="group bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`bg-gradient-to-br ${item.color} p-4 rounded-lg text-white flex-shrink-0 shadow-lg`}>
                    <Icon className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-700 dark:to-blue-700 rounded-xl p-8 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-4">AWS Architecture Pillars</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold opacity-70">1.</span>
                <div>
                  <p className="font-semibold text-lg">Operational Excellence</p>
                  <p className="text-sm opacity-90 mt-1">Monitoring, automation, and continuous improvement</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold opacity-70">2.</span>
                <div>
                  <p className="font-semibold text-lg">Security</p>
                  <p className="text-sm opacity-90 mt-1">Data protection, least privilege, encryption</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold opacity-70">3.</span>
                <div>
                  <p className="font-semibold text-lg">Reliability</p>
                  <p className="text-sm opacity-90 mt-1">High availability, disaster recovery, scalability</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold opacity-70">4.</span>
                <div>
                  <p className="font-semibold text-lg">Performance & Cost</p>
                  <p className="text-sm opacity-90 mt-1">Optimization, efficiency, resource management</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
