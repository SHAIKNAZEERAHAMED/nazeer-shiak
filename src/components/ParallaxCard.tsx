import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxCardProps {
  className?: string;
  children: React.ReactNode;
  glowColor?: string;
  depth?: number;
}

const ParallaxCard = memo(({ 
  className, 
  children,
  glowColor = "rgba(155, 135, 245, 0.3)",
  depth = 40
}: ParallaxCardProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current || !isHovered) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);
    
    requestAnimationFrame(() => {
      setPosition({ 
        x: percentX * depth, 
        y: percentY * depth 
      });
    });
  }, [isHovered, depth]);
  
  useEffect(() => {
    if (!isHovered) return;
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered, handleMouseMove]);
  
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);
  
  return (
    <div
      ref={ref}
      className={cn(
        "relative transition-transform duration-200 ease-out transform-gpu will-change-transform",
        className
      )}
      style={{
        transform: isHovered ? `rotateY(${position.x * 0.05}deg) rotateX(${-position.y * 0.05}deg)` : 'none',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + position.x / 4}% ${50 + position.y / 4}%, ${glowColor} 0%, rgba(0,0,0,0) 60%)`,
          opacity: isHovered ? 0.8 : 0
        }}
      />
      {children}
    </div>
  );
});

ParallaxCard.displayName = 'ParallaxCard';

export default ParallaxCard;
