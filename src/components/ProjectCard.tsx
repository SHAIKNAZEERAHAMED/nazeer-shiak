
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ParallaxCard from './ParallaxCard';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
  className?: string;
  type: 'tech' | 'editing';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  tags,
  demoLink,
  codeLink,
  className,
  type
}) => {
  const glowColor = type === 'tech' 
    ? 'rgba(155, 135, 245, 0.3)'
    : 'rgba(30, 174, 219, 0.3)';
    
  return (
    <ParallaxCard glowColor={glowColor} className={cn("h-full", className)}>
      <Card className="h-full overflow-hidden bg-gradient-to-br from-secondary/80 to-secondary/40 border-white/5">
        {imageSrc && (
          <div className="w-full h-48 overflow-hidden">
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
            />
          </div>
        )}
        
        <CardHeader>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-solo-dark/50 border border-solo-purple/20 text-solo-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardHeader>
        
        <CardContent>
          <CardDescription className="text-sm text-white/70 line-clamp-3">
            {description}
          </CardDescription>
        </CardContent>
        
        <CardFooter className="flex justify-start gap-2">
          {demoLink && (
            <Button 
              variant="outline"
              size="sm"
              className="border-solo-purple/30 hover:bg-solo-purple/10 hover:text-solo-accent"
              asChild
            >
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                View Demo
              </a>
            </Button>
          )}
          
          {codeLink && (
            <Button 
              variant="outline"
              size="sm"
              className="border-solo-purple/30 hover:bg-solo-purple/10 hover:text-solo-accent"
              asChild
            >
              <a href={codeLink} target="_blank" rel="noopener noreferrer">
                View Code
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </ParallaxCard>
  );
};

export default ProjectCard;
