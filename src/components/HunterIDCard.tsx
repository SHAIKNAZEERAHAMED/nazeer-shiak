
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import SoloBadge from './SoloBadge';
import { User } from 'lucide-react';

interface HunterIDCardProps {
  name: string;
  rank: string;
  level: number;
  imageSrc?: string;
  className?: string;
}

const HunterIDCard: React.FC<HunterIDCardProps> = ({
  name,
  rank = 'S',
  level = 100,
  imageSrc,
  className,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start']
  });

  // Transform values for 3D effect
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, -15]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5], [5, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.8, 1, 1.05, 1, 0.8]);
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <div ref={cardRef} className="relative py-8 w-full flex justify-center perspective-1000">
      <motion.div 
        className={cn(
          "solo-card max-w-md w-full p-6 relative z-10 shadow-glow overflow-visible",
          className
        )}
        style={{
          rotateX,
          rotateY,
          scale,
          translateY,
          opacity,
          transformStyle: 'preserve-3d',
          boxShadow: '0 0 30px rgba(155, 135, 245, 0.5)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-solo-purple/10 to-transparent opacity-40 z-0"></div>
        
        {/* Card Header - Hunter Information */}
        <div className="flex items-start justify-between mb-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 rounded-lg overflow-hidden border-2 border-solo-accent shadow-glow flex-shrink-0">
              {imageSrc ? (
                <img src={imageSrc} alt={name} className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full bg-solo-dark/60 flex items-center justify-center">
                  <User className="h-12 w-12 text-solo-accent/70" />
                </div>
              )}
              <div className="absolute inset-0 border-2 border-solo-purple/30"></div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold gradient-text">{name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <SoloBadge 
                  text={`Rank ${rank}`} 
                  type={rank === 'S' ? 'legendary' : rank === 'A' ? 'epic' : 'rare'} 
                />
                <span className="text-xs bg-solo-purple/20 text-solo-accent py-1 px-2 rounded">
                  Lv. {level}
                </span>
              </div>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" className="text-solo-accent"/>
            </svg>
          </div>
        </div>
        
        {/* Card Body - Hunter Status */}
        <div className="space-y-2 mt-4 relative z-10">
          <div className="solo-status">
            <span className="solo-status-label">Guild</span>
            <span className="solo-status-value">Solo</span>
          </div>
          <div className="solo-status">
            <span className="solo-status-label">National Rank</span>
            <span className="solo-status-value">#1</span>
          </div>
          <div className="solo-status">
            <span className="solo-status-label">Cleared Dungeons</span>
            <span className="solo-status-value">521</span>
          </div>
          
          <div className="mt-4 pt-2 border-t border-white/10">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-white/70">Level Progress</span>
              <span className="text-solo-accent font-mono">{level} / {level + 1}</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-solo-purple to-solo-accent"
                style={{ width: '85%' }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Card glow effects */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-solo-purple/30 to-solo-accent/30 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 -z-10"></div>
      </motion.div>
    </div>
  );
};

export default HunterIDCard;
