
import React from 'react'; 
import Section from './Section'; 
import { SECTION_IDS } from '../constants'; 
import type { Experience } from '../types'; 

const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => ( 
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"> 
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /> 
    </svg> 
); 


const experienceData: Experience[] = [ 
    { 
        id: 1, 
        title: 'Data Analysis Intern', 
        company: 'Imaginnnovate Techsolutions (India) Pvt Ltd.', 
        date: 'June 2025 - July 2025 (46 Days)', 
        details: [ 
            'Engineered a domain-specific Generative AI solution leveraging specialized EDI X12 v4010 datasets.', 
            'Analyzed datasets to support data-driven decision-making processes.',
            'Received hands-on training in implementing Generative AI solutions.', 
        ], 
        icon: <BriefcaseIcon className="w-12 h-12" />, 
        certificateUrl: 'https://drive.google.com/file/d/144YIKULN8oysTotH5LH2ATR3g2plZsad/view?usp=sharing', 
    } 
]; 

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => ( 
    <a  
        href={experience.certificateUrl} 
        target="_blank" // 14-8-2025
        rel="noopener noreferrer" 
        className="block bg-gray-900/50 rounded-lg border border-purple-500/30 p-6 flex flex-col sm:flex-row items-start gap-6 card-glow" 
    > 
        <div className="flex-shrink-0 text-cyan-400 mx-auto sm:mx-0 pt-1"> 
            {experience.icon} 
        </div> 
        <div className="flex-grow"> 
            <h3 className="text-xl font-bold text-pink-400">{experience.title}</h3> 
            <p className="text-purple-400 text-sm mb-1">{experience.company}</p> 
            <p className="text-purple-400 text-sm mb-4">{experience.date}</p> 
            <ul className="list-disc list-inside space-y-2 text-gray-300"> 
                {experience.details.map((detail, index) => ( 
                    <li key={index}>{detail}</li> 
                ))} 
            </ul> 
        </div> 
    </a> 
); 


const Experience: React.FC = () => { 
    return ( 
        <Section id={SECTION_IDS.experience} title="Work Experience"> 
            <div className="max-w-4xl mx-auto space-y-8"> 
                {experienceData.map(exp => ( 
                    <ExperienceCard key={exp.id} experience={exp} /> 
                ))} 
            </div> 
        </Section> 
    ); 
}; 

export default Experience; 
