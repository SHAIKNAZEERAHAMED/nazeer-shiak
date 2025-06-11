import React, { useRef } from 'react';
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
  guild?: string; // Added support for guild property
}

const HunterIDCard: React.FC<HunterIDCardProps> = ({
  name,
  rank = 'S',
  level = 100,
  imageSrc,
  className,
  guild = 'Solo', // Default value for guild
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 15]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [1, 1.05, 1.05, 0.95, 0.8]);
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.8, 0.4]);
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [20, 15, 5]);

  return (
    <div ref={cardRef} className="relative py-12 w-full flex justify-center perspective-1000 z-10">
      <motion.div
        className={cn(
          'relative max-w-md w-full rounded-xl border-4 border-yellow-400 bg-gradient-to-br from-gray-900 to-black text-white p-6 shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all duration-500',
          className
        )}
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
        <div className="flex items-center gap-4 mb-6">
          <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-yellow-400">
            {imageSrc ? (
              <img src={imageSrc} alt={name} className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full bg-gray-800 flex items-center justify-center">
                <User className="h-10 w-10 text-yellow-400" />
              </div>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-wide text-yellow-300">{name}</h2>
            <div className="flex items-center gap-2 mt-1">
              <SoloBadge
                text={`Rank ${rank}`}
                type={rank === 'S' ? 'legendary' : rank === 'A' ? 'epic' : 'rare'}
              />
              <span className="text-sm bg-yellow-600/20 text-yellow-400 py-1 px-2 rounded">
                Lv. {level}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-400">Guild</span>
            <span className="text-yellow-300">{guild}</span> {/* Display guild dynamically */}
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">National Rank</span>
            <span className="text-yellow-300">#1</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Cleared Dungeons</span>
            <span className="text-yellow-300">521</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>Level Progress</span>
            <span className="text-yellow-400">{level} / {level + 1}</span>
          </div>
          <div className="h-2 mt-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-yellow-400"
              style={{ width: '85%' }}
              initial={{ width: '0%' }}
              animate={{ width: '85%' }}
              transition={{ delay: 1, duration: 1.5, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Corner Borders */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-300"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-300"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-300"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-300"></div>
      </motion.div>
    </div>
  );
};

export default HunterIDCard;