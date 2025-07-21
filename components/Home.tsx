
import React from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { SECTION_IDS } from '../constants';

const Home: React.FC = () => {
  const introText = useTypingEffect(" Hi, I'm Nafiz Ali", 100);
  const roleText = useTypingEffect("  Aspiring Data Scientist & Web Developer", 50);
  const [showRole, setShowRole] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowRole(true);
    }, 1800); // Start typing role after intro
    return () => clearTimeout(timer);
  }, []);
  
  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(SECTION_IDS.projects)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SECTION_IDS.home} className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'linear-gradient(theme(colors.cyan.900) 1px, transparent 1px), linear-gradient(to right, theme(colors.cyan.900) 1px, transparent 1px)', backgroundSize: '2rem 2rem'}}></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/0 via-black/50 to-black"></div>
        
        <div className="z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wider">
                <span className="text-white">{introText}</span>
                <span className="text-cyan-400 inline-block border-r-4 border-cyan-400 typing-cursor"></span>
            </h1>
            <h2 className="text-xl md:text-3xl text-purple-400 font-light text-glow tracking-wide h-10">
                {showRole && (
                    <span>{roleText}<span className="inline-block border-r-2 border-purple-400 typing-cursor"></span></span>
                )}
            </h2>
            <p className="max-w-2xl mx-auto mt-8 text-lg text-gray-300">
                Uncovering insights through data science and building tools that bring them to life.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href={`#${SECTION_IDS.projects}`} 
                  onClick={handleScrollDown}
                  className="bg-transparent border border-cyan-400 text-cyan-400 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-cyan-400/20 hover:text-white w-full sm:w-auto button-glow">
                    View My Work
                </a>
                <a
                  href="/nafiz-ali-resume.pdf"
                  download="Nafiz Ali - Resume.pdf"
                  className="bg-transparent border border-purple-400 text-purple-400 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-purple-400/20 hover:text-white w-full sm:w-auto button-glow-purple"
                >
                    Download CV
                </a>
            </div>
        </div>
    </section>
  );
};

export default Home;
