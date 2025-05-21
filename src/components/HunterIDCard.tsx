
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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

  // Enhanced transform values for more dramatic 3D effect
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [25, -25]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5], [10, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.8, 1, 1.08, 1, 0.8]);
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [5, 20, 5]);

  return (
    <div ref={cardRef} className="relative py-8 w-full flex justify-center perspective-1000 z-10">
      <motion.div 
        className={cn(
          "solo-card-golden max-w-md w-full p-6 relative z-10 shadow-golden overflow-visible",
          className
        )}
        initial={{ opacity: 0, y: 50, rotateX: 20 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
        style={{
          rotateX,
          rotateY,
          scale,
          translateY,
          opacity,
          transformStyle: 'preserve-3d',
          boxShadow: useTransform(glow, (value) => `0 0 ${value}px rgba(255, 215, 0, 0.6)`),
        }}
      >
        {/* Golden shine animation overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-yellow-500/40 to-amber-500/10 z-0 overflow-hidden rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Card Header - Hunter Information */}
        <div className="flex items-start justify-between mb-4 relative z-10">
          <div className="flex items-center gap-4">
            <motion.div 
              className="relative h-20 w-20 rounded-lg overflow-hidden border-2 border-yellow-500 shadow-golden flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {imageSrc ? (
                <img src={imageSrc} alt={name} className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full bg-gray-800/80 flex items-center justify-center">
                  <User className="h-12 w-12 text-yellow-500/80" />
                </div>
              )}
              <div className="absolute inset-0 border-2 border-yellow-400/30"></div>
            </motion.div>
            
            <div>
              <motion.h2 
                className="text-2xl font-bold golden-text"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {name}
              </motion.h2>
              <motion.div 
                className="flex items-center gap-2 mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <SoloBadge 
                  text={`Rank ${rank}`} 
                  type={rank === 'S' ? 'legendary' : rank === 'A' ? 'epic' : 'rare'} 
                />
                <span className="text-xs bg-yellow-500/20 text-yellow-400 py-1 px-2 rounded">
                  Lv. {level}
                </span>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="absolute top-0 right-0 w-32 h-32 opacity-20"
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ 
              duration: 20, 
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" className="text-yellow-500"/>
            </svg>
          </motion.div>
        </div>
        
        {/* Card Body - Hunter Status */}
        <div className="space-y-2 mt-4 relative z-10">
          <motion.div 
            className="solo-status-golden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <span className="solo-status-label">Guild</span>
            <span className="solo-status-value golden-glow">Solo</span>
          </motion.div>
          
          <motion.div 
            className="solo-status-golden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <span className="solo-status-label">National Rank</span>
            <span className="solo-status-value golden-glow">#1</span>
          </motion.div>
          
          <motion.div 
            className="solo-status-golden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <span className="solo-status-label">Cleared Dungeons</span>
            <span className="solo-status-value golden-glow">521</span>
          </motion.div>
          
          <motion.div 
            className="mt-4 pt-2 border-t border-yellow-500/20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-white/70">Level Progress</span>
              <span className="text-yellow-400 font-mono golden-glow">{level} / {level + 1}</span>
            </div>
            <div className="h-2 bg-black/20 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-yellow-600 to-yellow-300"
                style={{ width: '85%' }}
                initial={{ width: '0%' }}
                animate={{ width: '85%' }}
                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Card glow effects */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/50 to-amber-400/50 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 -z-10"></div>
        
        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-400"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-400"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-400"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-400"></div>
      </motion.div>
    </div>
  );
};

export default HunterIDCard;
