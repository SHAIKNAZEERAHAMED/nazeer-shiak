import React, { memo, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

interface SkillBadgeProps {
  name: string;
  className?: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

const levelConfig = {
  beginner: {
    color: 'from-blue-400/80 to-blue-600/80',
    value: 25,
    text: 'Lv.1'
  },
  intermediate: {
    color: 'from-green-400/80 to-green-600/80',
    value: 50,
    text: 'Lv.2'
  },
  advanced: {
    color: 'from-amber-400/80 to-amber-600/80',
    value: 75,
    text: 'Lv.3'
  },
  expert: {
    color: 'from-solo-purple/80 to-purple-600/80',
    value: 100,
    text: 'Lv.S'
  }
} as const;

const SkillBadge: React.FC<SkillBadgeProps> = memo(({ 
  name, 
  className,
  level = 'intermediate' 
}) => {
  const config = useMemo(() => levelConfig[level], [level]);

  return (
    <div 
      className={cn(
        "px-3 py-2 rounded-md text-white",
        "bg-gradient-to-r shadow-md backdrop-blur-sm",
        "transition-transform duration-300 ease-out hover:scale-105 hover:shadow-glow will-change-transform",
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
          {config.text}
        </span>
      </div>
      <Progress 
        value={config.value} 
        className={cn(
          "h-1.5 w-full bg-white/10",
          level === 'expert' ? "bg-white/20" : ""
        )}
        indicatorClassName={cn(
          "bg-gradient-to-r",
          config.color
        )}
      />
    </div>
  );
});

SkillBadge.displayName = 'SkillBadge';

export default SkillBadge;
