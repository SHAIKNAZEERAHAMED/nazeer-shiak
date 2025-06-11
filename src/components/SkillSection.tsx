import React, { memo, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import SkillBadge from './SkillBadge';

type Skill = {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
};

interface SkillSectionProps {
  title: string;
  description: string;
  skills: Skill[];
  className?: string;
  glowColor?: string;
}

const SkillSection: React.FC<SkillSectionProps> = memo(({
  title,
  description,
  skills,
  className,
  glowColor = "rgba(155, 135, 245, 0.2)"
}) => {
  const prefersReducedMotion = useReducedMotion();

  const animations = useMemo(() => ({
    containerVariants: {
      hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delayChildren: 0.2,
          staggerChildren: 0.1,
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1]
        }
      }
    },
    itemVariants: {
      hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1]
        }
      }
    }
  }), [prefersReducedMotion]);

  return (
    <div className={cn(
      "glass-card p-6 relative overflow-hidden transform-gpu",
      className
    )}>
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor} 0%, transparent 70%)`
        }}
      />
      
      <h3 className="text-xl font-bold mb-3 relative z-10 gradient-text">{title}</h3>
      <p className="text-white/60 mb-6 relative z-10">{description}</p>
      
      <motion.div
        className="flex flex-wrap gap-2 relative z-10"
        variants={animations.containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={skill.name}
            variants={animations.itemVariants}
            className="transform-gpu"
          >
            <SkillBadge name={skill.name} level={skill.level} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
});

SkillSection.displayName = 'SkillSection';

export default SkillSection;
