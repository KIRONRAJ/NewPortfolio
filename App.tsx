import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

export type CyberTheme = 'green' | 'purple' | 'amber' | 'monochrome';

const App: React.FC = () => {
  const [theme, setTheme] = useState<CyberTheme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('kironraj-portfolio-theme');
      if (saved === 'green' || saved === 'purple' || saved === 'amber' || saved === 'monochrome') {
        return saved;
      }
    }
    return 'green';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kironraj-portfolio-theme', theme);
  }, [theme]);

  return (
    <div className="bg-primary min-h-screen text-slate-300 font-mono selection:bg-accent selection:text-primary relative transition-colors duration-300">
      <ParticleBackground />
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="relative z-10">
        <Hero setTheme={setTheme} />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;