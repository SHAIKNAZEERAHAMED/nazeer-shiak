
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxCardProps {
  className?: string;
  children: React.ReactNode;
  glowColor?: string;
  depth?: number;
}

const ParallaxCard = ({ 
  className, 
  children,
  glowColor = "rgba(155, 135, 245, 0.3)",
  depth = 40
}: ParallaxCardProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current || !isHovered) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const percentX = (e.clientX - centerX) / (rect.width / 2);
      const percentY = (e.clientY - centerY) / (rect.height / 2);
      
      setPosition({ 
        x: percentX * depth, 
        y: percentY * depth 
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered, depth]);
  
  return (
    <div
      ref={ref}
      className={cn(
        "relative transition-transform duration-200 ease-out transform-gpu",
        className
      )}
      style={{
        transform: isHovered ? `rotateY(${position.x * 0.05}deg) rotateX(${-position.y * 0.05}deg)` : 'none',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }}
    >
      <div
        className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${50 + position.x / 4}% ${50 + position.y / 4}%, ${glowColor} 0%, rgba(0,0,0,0) 60%)`,
          opacity: isHovered ? 0.8 : 0
        }}
      />
      {children}
    </div>
  );
};

export default ParallaxCard;
