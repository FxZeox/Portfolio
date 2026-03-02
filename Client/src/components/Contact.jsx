import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('SUCCESS');
    setFormData({ user_name: '', user_email: '', message: '' });
    setTimeout(() => setStatus(null), 3000);
  };

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'usmanjee522@example.com', color: 'from-blue-500 to-cyan-500' },
    { icon: FaPhone, label: 'Phone', value: '+92 3205491539', color: 'from-indigo-500 to-purple-500' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Lahore, Pakistan', color: 'from-pink-500 to-rose-500' }
  ];

  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
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
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base max-w-2xl mx-auto">
            Have a question or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Contact Info Cards */}
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.label}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`bg-gradient-to-br ${info.color} p-3 rounded-lg w-fit mb-4`}>
                  <Icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {info.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {info.value}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                name="user_name"
                type="text"
                value={formData.user_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all"
                placeholder="Your name"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all"
                placeholder="your.email@example.com"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all resize-none"
                placeholder="Your message here..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane className="text-lg" />
              Send Message
            </motion.button>

            {/* Status Message */}
            {status === 'SUCCESS' && (
              <motion.div
                className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg text-center font-semibold"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
