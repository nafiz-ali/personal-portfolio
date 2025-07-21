
import React from 'react';
import type { ReactNode } from 'react';
import Section from './Section';
import { SECTION_IDS } from '../constants';
import type { Certification } from '../types';

const BadgeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
);


const certificationData: Certification[] = [
    {
        id: 1,
        title: 'Google Developer Badge: Living Canvas (Generative AI Puzzle Game)',
        date: 'July 2025',
        details: [
            'Completed and launched code in a puzzle-based AI game developed by Google',
            'Demonstrated creativity, problem-solving, and understanding of Generative AI concepts'
        ],
        icon: <BadgeIcon className="w-12 h-12" />
    }
];

const CertificationCard: React.FC<{ certification: Certification }> = ({ certification }) => (
    <div className="bg-gray-900/50 rounded-lg border border-purple-500/30 p-6 flex flex-col sm:flex-row items-start gap-6 card-glow">
        <div className="flex-shrink-0 text-cyan-400 mx-auto sm:mx-0 pt-1">
            {certification.icon}
        </div>
        <div className="flex-grow">
            <h3 className="text-xl font-bold text-pink-400">{certification.title}</h3>
            <p className="text-purple-400 text-sm mb-4">{certification.date}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
                {certification.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
        </div>
    </div>
);


const Certifications: React.FC = () => {
    return (
        <Section id={SECTION_IDS.certifications} title="My Certifications">
            <div className="max-w-4xl mx-auto space-y-8">
                {certificationData.map(cert => (
                    <CertificationCard key={cert.id} certification={cert} />
                ))}
            </div>
        </Section>
    );
};

export default Certifications;
