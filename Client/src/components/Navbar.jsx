import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const links = [
  { href: '#landing', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

export default function Navbar({ theme, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl z-50 border-b border-gray-200 dark:border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          UA
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-1">
          {links.map((link) => (
            <motion.li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === 'light' ? <FaMoon className="text-lg" /> : <FaSun className="text-lg" />}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileHover={{ scale: 1.1 }}
          >
            {mobileOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <ul className="px-4 py-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
