import React, { useState } from 'react';
import type { Theme } from '../types';
import { NAV_LINKS, SECTION_IDS } from '../constants';

interface HeaderProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  activeSection: string;
}

const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
);

const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
);

export const Header: React.FC<HeaderProps> = ({ theme, setTheme, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light-dark' : 'dark');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-cyan-500/20">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href={`#${SECTION_IDS.home}`} onClick={(e) => handleLinkClick(e, SECTION_IDS.home)} className="text-2xl font-bold text-cyan-400 text-glow tracking-widest">
          NAFIZ ALI
        </a>

        <div className="hidden md:flex items-center space-x-2">
          {NAV_LINKS.map(link => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              onClick={(e) => handleLinkClick(e, link.id)} 
              className={`px-4 py-2 rounded-lg text-lg font-medium transition-colors duration-300 hover:text-cyan-300 hover:bg-cyan-500/10 ${activeSection === link.id ? 'bg-cyan-500/20 text-cyan-200' : 'text-gray-300'}`}
            >
              {link.title}
            </a>
          ))}
           <a href="/nafiz-ali-resume.pdf" download="Nafiz Ali - Resume.pdf" className="ml-4 bg-transparent border border-cyan-400 text-cyan-400 font-bold py-2 px-4 rounded-lg text-sm transition-all duration-300 button-glow hover:text-white hover:bg-cyan-400/20">
            Download CV
          </a>
        </div>

        <div className="flex items-center">
          <button onClick={toggleTheme} className="mr-4 text-cyan-400 hover:text-cyan-300 transition-colors">
            {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
          </button>
          
          <button className="md:hidden text-gray-200" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-black/80 backdrop-blur-lg`}>
        <div className="flex flex-col items-center px-4 py-2">
          {NAV_LINKS.map(link => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`block w-full text-center px-4 py-3 text-lg transition-colors duration-300 hover:text-cyan-300 hover:bg-cyan-500/20 rounded-md ${activeSection === link.id ? 'text-cyan-300 bg-cyan-500/20' : 'text-gray-300'}`}
            >
              {link.title}
            </a>
          ))}
          <a href="/nafiz-ali-resume.pdf" download="Nafiz Ali - Resume.pdf" className="mt-4 w-full text-center bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 button-glow">
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
};