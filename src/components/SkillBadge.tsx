
import React from 'react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

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

  const getLevelValue = () => {
    switch(level) {
      case 'beginner': return 25;
      case 'intermediate': return 50;
      case 'advanced': return 75;
      case 'expert': return 100;
      default: return 50;
    }
  };

  const getLevelText = () => {
    switch(level) {
      case 'beginner': return 'Lv.1';
      case 'intermediate': return 'Lv.2';
      case 'advanced': return 'Lv.3';
      case 'expert': return 'Lv.S';
      default: return 'Lv.2';
    }
  };

  return (
    <div 
      className={cn(
        "px-3 py-2 rounded-md text-white",
        "bg-gradient-to-r shadow-md backdrop-blur-sm",
        "transition-all duration-300 ease-out hover:scale-105 hover:shadow-glow",
        "border border-white/10",
        "flex flex-col gap-1",
        className
      )}
    >
      <div className="flex justify-between items-center w-full">
        <span className="font-medium text-sm">{name}</span>
        <span className={cn(
          "text-xs px-1.5 py-0.5 rounded-md font-mono",
          level === 'expert' ? "bg-purple-500/50 text-white" : "bg-white/10"
        )}>
          {getLevelText()}
        </span>
      </div>
      <Progress 
        value={getLevelValue()} 
        className={cn(
          "h-1.5 w-full bg-white/10",
          level === 'expert' ? "bg-white/20" : ""
        )}
        indicatorClassName={cn(
          "bg-gradient-to-r",
          getLevelColor()
        )}
      />
    </div>
  );
};

export default SkillBadge;
