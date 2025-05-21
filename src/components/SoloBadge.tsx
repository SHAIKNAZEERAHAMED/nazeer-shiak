
import React from 'react';
import { cn } from '@/lib/utils';
import { Shield } from 'lucide-react';

interface SoloBadgeProps {
  text: string;
  type?: 'normal' | 'rare' | 'epic' | 'legendary';
  className?: string;
  icon?: React.ReactNode;
}

const SoloBadge: React.FC<SoloBadgeProps> = ({ 
  text, 
  type = 'normal',
  className,
  icon = <Shield className="h-3 w-3" />
}) => {
  const getBadgeStyles = () => {
    switch(type) {
      case 'legendary':
        return 'from-purple-500 to-purple-700 text-white border-purple-400/50';
      case 'epic':
        return 'from-indigo-500 to-indigo-700 text-white border-indigo-400/50';
      case 'rare':
        return 'from-blue-500 to-blue-700 text-white border-blue-400/50';
      default:
        return 'from-gray-600 to-gray-800 text-gray-200 border-gray-500/50';
    }
  };
  
  return (
    <div className={cn(
      'px-2 py-1 rounded-md text-xs font-medium inline-flex items-center gap-1.5',
      'bg-gradient-to-r border shadow-sm',
      getBadgeStyles(),
      className
    )}>
      {icon}
      {text}
    </div>
  );
};

export default SoloBadge;
