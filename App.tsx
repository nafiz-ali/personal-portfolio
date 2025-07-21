
import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import type { Theme } from './types';
import { SECTION_IDS } from './constants';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [activeSection, setActiveSection] = useState<string>(SECTION_IDS.home);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    }, {
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the viewport
      threshold: 0
    });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, []);

  return (
    <div className={`transition-colors duration-500 ${theme === 'dark' ? 'bg-black' : 'bg-gray-900'} text-gray-200`}>
      <Header theme={theme} setTheme={setTheme} activeSection={activeSection} />
      <main className="overflow-x-hidden">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer className="text-center py-8 bg-black/50 border-t border-t-cyan-900/50">
          <p className="text-xs text-gray-500 mb-4 px-4">
            Note: The "Download CV" button requires a file named <code>nafiz-ali-resume.pdf</code> placed in the root directory of the project.
          </p>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Nafiz Ali.<br /> All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;