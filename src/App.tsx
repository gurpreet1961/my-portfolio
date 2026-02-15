import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import LeetCodeStats from './components/LeetCodeStats';


import About from './components/About';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Check system preference or localStorage
    if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
      setTheme('light');
      document.documentElement.classList.add('light');
    } else {
      setTheme('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.documentElement.classList.add('light');
      localStorage.theme = 'light';
    } else {
      setTheme('dark');
      document.documentElement.classList.remove('light');
      localStorage.theme = 'dark';
    }
  };

  return (
    <div className="bg-[var(--color-bg)] min-h-screen text-[var(--color-text)] font-sans selection:bg-[var(--color-primary)]/30 selection:text-[var(--color-text)] transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <About />
      <Skills />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <LeetCodeStats />
      </div>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
