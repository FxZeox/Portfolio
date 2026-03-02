import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CloudArchitecture from './components/CloudArchitecture';
import Experience from './components/Experience';
import Metrics from './components/Metrics';
import Contact from './components/Contact';
import About from './components/About';
import useTheme from './hooks/useTheme';

function App() {
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main className="pt-16">
        <Landing />
        <About />
        <Skills />
        <Projects />
        <CloudArchitecture />
        <Experience />
        <Metrics />
        <Contact />
      </main>
      <footer className="bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-8 text-gray-700 dark:text-gray-400">
        <p className="font-semibold">&copy; {new Date().getFullYear()} Usman Ahmad</p>
        <p className="text-sm mt-2">Cloud & DevOps Engineer Building Scalable Infrastructure</p>
      </footer>
    </div>
  );
}

export default App;