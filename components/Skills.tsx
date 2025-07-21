import React from 'react';
import Section from './Section';
import SkillBadge from './SkillBadge';
import type { Skill } from '../types';
import { SECTION_IDS } from '../constants';

// SVG Icons as React Components
const FrontendDevIcon = () => (
    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 12" /></svg>
);
const PythonIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text x="5" y="16" fontSize="10" fill="currentColor">.py</text>
  </svg>
);

const CppIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text x="4" y="16" fontSize="10" fill="currentColor">.cpp</text>
  </svg>
);

const MatlabIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text x="5" y="16" fontSize="10" fill="currentColor">.m</text>
  </svg>
);

const CanvaIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <text x="8" y="16" fontSize="10" fill="currentColor">C</text>
  </svg>
);

const BootstrapIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 5h8a3 3 0 0 1 0 6H6Zm0 6h9a3 3 0 0 1 0 6H6Z"
    />
  </svg>
);

const ReactIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="1.5" />
    <ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(120 12 12)" />
  </svg>
);

const FigmaIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 3h3a3 3 0 1 1 0 6H9V3Zm0 6h3a3 3 0 1 1 0 6H9V9Zm0 6h3a3 3 0 1 1-3 3v-3Z"
    />
  </svg>
);



const skills: Skill[] = [
  { name: 'Frontend Dev', icon: <FrontendDevIcon /> },
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'C++', icon: <CppIcon /> },
  { name: 'MATLAB', icon: <MatlabIcon /> },
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Bootstrap', icon: <BootstrapIcon /> },
  { name: 'Figma', icon: <FigmaIcon /> },
  { name: 'Canva', icon: <CanvaIcon /> },
];

const Skills: React.FC = () => {
  return (
    <Section id={SECTION_IDS.skills} title="My Skills">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;