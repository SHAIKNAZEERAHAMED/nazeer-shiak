
import React from 'react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { Sword } from 'lucide-react';

interface StatusProps {
  label: string;
  value: string | number;
}

interface SoloStatusCardProps {
  title: string;
  className?: string;
  icon?: React.ReactNode;
  stats: StatusProps[];
  level?: number;
  rank?: string;
}

const SoloStatusCard: React.FC<SoloStatusCardProps> = ({ 
  title, 
  className, 
  icon = <Sword className="h-5 w-5 text-solo-accent" />,
  stats = [],
  level = 100,
  rank = "S"
}) => {
  return (
    <div className={cn("solo-card p-5", className)}>
      <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-lg font-medium text-white">{title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/60">Level</span>
          <span className={cn(
            "text-xs px-2 py-0.5 rounded font-mono",
            "bg-solo-purple/20 text-solo-accent"
          )}>
            {level}
          </span>
          <span className={cn(
            "text-xs px-2 py-0.5 rounded font-mono",
            rank === "S" ? "bg-purple-500/50 text-white" : "bg-white/10"
          )}>
            {rank}
          </span>
        </div>
      </div>
      
      <div className="space-y-3">
        {stats.map((stat, index) => (
          <div key={index} className="solo-status">
            <span className="solo-status-label">{stat.label}</span>
            <span className="solo-status-value">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoloStatusCard;
