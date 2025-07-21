
import React from 'react';
import Section from './Section';
import { SECTION_IDS } from '../constants';

const About: React.FC = () => {
  return (
    <Section id={SECTION_IDS.about} title="About Me">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-purple-500 rounded-full blur-2xl opacity-40"></div>
                <img 
                    src="profile-pic.png" 
                    alt="Nafiz" 
                    className="relative w-full h-full rounded-full object-cover border-4 border-purple-500 shadow-lg" 
                />
            </div>
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Hey there! I’m Nafiz Ali—a self‑confessed tech geek who’s built a rock‑solid foundation in Python, C, C++, Matlab and loves bringing ideas to life in the browser with frontend development.          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I’m an aspiring Data Scientist with a genuine passion for using Python to uncover insights in real‑world datasets, build and refine machine‑learning models, and automate tedious workflows. I love diving into messy data, experimenting with new algorithms, and crafting clear visualizations that tell a story—turning complex numbers into actionable solutions that make an impact.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Outside of code, I craft visuals with Figma and Canva, and keep my projects on track using Git & GitHub. My goal is to blend logical rigor with creative design to build solutions that matter.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
