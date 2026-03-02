import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// static project images from assets
import project1Img from '../assets/Project1.png';
import project2Img from '../assets/Project2.png';

const initialProjects = [
  {
    id: 1,
    title: 'CitrusOps',
    desc: 'Kubernetes observability platform providing realtime CI/CD metrics, alerts, and dashboards.',
    tech: ['Next.js', 'GitLab' ,'Go', 'gRPC', 'Redis', 'MongoDB', 'Kubernetes', 'GitOps'],
    github: '#',
    live: 'https://citrusops.tech/',
    featured: true,
    image: project1Img
  },
  {
    id: 2,
    title: 'Task Management App',
    desc: 'Full-stack task tracker with a CI/CD pipeline and Kubernetes deployment demonstrating performance gains.',
    tech: ['React', 'Node.js', 'MongoDB' , 'Docker', 'Kubernetes', 'CI'],
    github: 'https://github.com',
    live: '#',
    image: project2Img
  },
];

export default function Projects() {
  const [projects] = useState(initialProjects); // static content, no upload/delete

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="relative py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Explore my latest work with modern technologies and innovative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-premium hover:shadow-premium-lg border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300"
              variants={projectVariants}
              whileHover={{ y: -10 }}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => {
                    const gradients = [
                      'from-blue-500 to-indigo-500',
                      'from-purple-500 to-pink-500',
                      'from-indigo-500 to-purple-500',
                      'from-pink-500 to-red-500'
                    ];
                    const gradient = gradients[idx % gradients.length];
                    return (
                      <motion.span
                        key={tech}
                        className={`px-3 py-1 bg-gradient-to-r ${gradient} text-white rounded-full text-xs font-semibold shadow-premium`}
                        whileHover={{ scale: 1.08, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    );
                  })}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-lg hover:shadow-premium transition-all duration-300 font-semibold"
                    whileHover={{ x: 5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-lg" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-premium transition-all duration-300 font-semibold"
                    whileHover={{ x: 5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
