
import React from 'react';
import type { Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-900/50 rounded-lg border border-cyan-500/30 transition-all duration-300 hover:bg-cyan-900/40 hover:border-cyan-400 hover:-translate-y-2 group">
      <div className="w-16 h-16 mb-4 text-cyan-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-glow">
        {skill.icon}
      </div>
      <h4 className="text-lg font-semibold text-gray-200">{skill.name}</h4>
    </div>
  );
};

export default SkillBadge;
