
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  className?: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ 
  name, 
  className,
  level = 'intermediate' 
}) => {
  const getLevelColor = () => {
    switch(level) {
      case 'beginner': return 'from-blue-400/80 to-blue-600/80';
      case 'intermediate': return 'from-green-400/80 to-green-600/80';
      case 'advanced': return 'from-amber-400/80 to-amber-600/80';
      case 'expert': return 'from-solo-purple/80 to-purple-600/80';
      default: return 'from-gray-400/80 to-gray-600/80';
    }
  };

  return (
    <div 
      className={cn(
        "px-3 py-1.5 rounded-md text-white text-sm font-medium",
        "bg-gradient-to-r shadow-lg backdrop-blur-sm",
        "transition-all duration-300 ease-out hover:scale-105",
        "border border-white/10",
        getLevelColor(),
        className
      )}
    >
      {name}
    </div>
  );
};

export default SkillBadge;
