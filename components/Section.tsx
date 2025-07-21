import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  const [ref, isVisible] = useOnScreen<HTMLElement>({ threshold: 0.1 });

  return (
    <section 
        ref={ref} 
        id={id} 
        className={`container mx-auto px-6 py-28 md:py-36 min-h-[60vh] transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
        <span className="text-cyan-400 text-glow">{title.split(' ')[0]}</span>
        <span className="text-white"> {title.split(' ').slice(1).join(' ')}</span>
      </h2>
      {children}
    </section>
  );
};

export default Section;