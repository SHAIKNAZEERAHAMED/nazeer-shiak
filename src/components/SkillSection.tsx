
import React from 'react';
import { motion } from 'framer-motion';
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

const SkillSection: React.FC<SkillSectionProps> = ({
  title,
  description,
  skills,
  className,
  glowColor = "rgba(155, 135, 245, 0.2)"
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <div className={cn("glass-card p-6 relative overflow-hidden", className)}>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor} 0%, transparent 70%)`
        }}
      />
      
      <h3 className="text-xl font-bold mb-3 relative z-10 gradient-text">{title}</h3>
      <p className="text-white/60 mb-6 relative z-10">{description}</p>
      
      <motion.div
        className="flex flex-wrap gap-2 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skills.map((skill, index) => (
          <motion.div key={index} variants={itemVariants}>
            <SkillBadge name={skill.name} level={skill.level} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillSection;
