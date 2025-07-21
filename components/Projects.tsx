
import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import type { Project } from '../types';
import { SECTION_IDS } from '../constants';

const projectData: Project[] = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'Designed and developed a fully responsive dark-themed portfolio website using React.js, Tailwind CSS, and TypeScript.',
    imageUrl: 'pp.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl:'#',
    repoUrl: 'https://github.com/nafiz-ali/personal-portfolio.git',
  },
  {
    id: 2,
    title: 'Netflix Clone',
    description: 'Built a full-stack Netflix clone with user authentication, real-time movie listings, and responsive UI — mimicking the original streaming experience.',
    imageUrl: '/netflix.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'MAS A to Z',
    description: 'Developed a multi-purpose business website for my fathers company handling construction services and food delivery orders.',
    imageUrl: '/random.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: '#',
  },
    {
    id: 4,
    title: 'Student Score Predictor',
    description: 'A concept for a blockchain-based social media platform, focusing on user privacy and data ownership. The interface is designed to be clean and intuitive.',
    imageUrl: '/studentscore.png',
    tags: ['Scikit-learn', 'Linear Regression'],
    repoUrl: '#',
  },
  // {
  //   id: 5,
  //   title: 'Interactive Portfolio API',
  //   description: 'A headless CMS and API for managing portfolio content. Built with Node.js and Express, it powers this very website with project and skill data.',
  //   imageUrl: 'https://picsum.photos/seed/cyber5/600/400',
  //   tags: ['Node.js', 'Express', 'MongoDB', 'REST API'],
  //   repoUrl: '#',
  // },
  // {
  //   id: 6,
  //   title: 'Project Pulsar',
  //   description: 'A collaborative code editor with real-time editing, chat, and syntax highlighting for various languages. Built with WebSockets for low-latency communication.',
  //   imageUrl: 'https://picsum.photos/seed/cyber6/600/400',
  //   tags: ['WebSockets', 'React', 'Monaco Editor', 'Auth0'],
  //   liveUrl: '#',
  // },
];

const Projects: React.FC = () => {
  return (
    <Section id={SECTION_IDS.projects} title="My Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
