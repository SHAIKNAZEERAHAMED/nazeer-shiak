import React, { memo } from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ParallaxCard from './ParallaxCard';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
	title: string;
	description: string;
	imageSrc?: string;
	videoSrc?: string; // <-- Added videoSrc prop
	tags: string[];
	demoLink?: string;
	codeLink?: string;
	className?: string;
	type: 'tech' | 'editing';
}

const ProjectCard: React.FC<ProjectCardProps> = memo(
	({
		title,
		description,
		imageSrc,
		videoSrc, // <-- Destructure videoSrc
		tags,
		demoLink,
		codeLink,
		className,
		type,
	}) => {
		const glowColor =
			type === 'tech'
				? 'rgba(155, 135, 245, 0.3)'
				: 'rgba(30, 174, 219, 0.3)';

		return (
			<ParallaxCard
				glowColor={glowColor}
				className={cn(
					'h-full group hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300 ease-out will-change-transform',
					className
				)}
			>
				<Card className="h-full overflow-hidden bg-gradient-to-br from-secondary/80 to-secondary/40 border-white/5 transition-shadow duration-300 group-hover:shadow-xl">
					{type === 'editing' && videoSrc ? (
						<div className="w-full h-48 overflow-hidden flex items-center justify-center bg-black">
							<video
								src={videoSrc}
								controls
								className={
									`max-h-full max-w-full transition-transform duration-500 group-hover:scale-105 will-change-transform bg-black ` +
									`[data-orientation='vertical']:h-full [data-orientation='vertical']:w-auto [data-orientation='horizontal']:w-full [data-orientation='horizontal']:h-auto`
								}
								poster={imageSrc}
								// Dynamically set data-orientation based on video aspect ratio
								onLoadedMetadata={e => {
									const video = e.currentTarget;
									const orientation =
										video.videoHeight > video.videoWidth
											? 'vertical'
											: 'horizontal';
									video.setAttribute('data-orientation', orientation);
								}}
							/>
						</div>
					) : imageSrc && (
						<div className="w-full h-48 overflow-hidden flex items-center justify-center bg-black">
							<img
								src={imageSrc}
								alt={title}
								loading="lazy"
								decoding="async"
								className={
									`max-h-full max-w-full transition-transform duration-500 group-hover:scale-105 will-change-transform bg-black ` +
									`[data-orientation='vertical']:h-full [data-orientation='vertical']:w-auto [data-orientation='horizontal']:w-full [data-orientation='horizontal']:h-auto`
								}
								onLoad={e => {
									const img = e.currentTarget;
									const orientation =
										img.naturalHeight > img.naturalWidth
											? 'vertical'
											: 'horizontal';
									img.setAttribute('data-orientation', orientation);
								}}
								onError={() =>
									console.error(`Failed to load image: ${imageSrc}`)
								}
							/>
						</div>
					)}

					<CardHeader>
						<CardTitle className="text-xl font-bold">{title}</CardTitle>
						<div className="flex flex-wrap gap-2 mt-2">
							{tags.map((tag, index) => (
								<span
									key={index}
									className="text-xs px-2 py-1 rounded-full bg-solo-dark/50 border border-solo-purple/20 text-solo-accent transition-colors duration-300 group-hover:bg-solo-purple/20"
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
								className="border-solo-purple/30 hover:bg-solo-purple/10 hover:text-solo-accent transition-colors duration-300"
								asChild
							>
								<a
									href={demoLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									View Demo
								</a>
							</Button>
						)}

						{codeLink && (
							<Button
								variant="outline"
								size="sm"
								className="border-solo-purple/30 hover:bg-solo-purple/10 hover:text-solo-accent transition-colors duration-300"
								asChild
							>
								<a
									href={codeLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									View Code
								</a>
							</Button>
						)}
					</CardFooter>
				</Card>
			</ParallaxCard>
		);
	}
);

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;