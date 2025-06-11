export const projects = [
  // Technical Projects
  {
    title: 'Looped',
    description: "A social media platform revolutionizing short-form video content. Built with React and Node.js, it features a dynamic feed system, real-time interactions, and AI-powered content recommendations. Users can create, edit, and share short videos with custom filters and effects.",
    imageSrc: '/projects/looped-thumb.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'Redux'],
    demoLink: 'https://looped-demo.vercel.app',
    codeLink: 'https://github.com/your-username/looped',
    type: 'tech' as const
  },
  {
    title: 'Asha Seva',
    description: "A platform bridging NGOs with volunteers, facilitating social impact projects. Features include real-time project matching, volunteer tracking, and impact measurement dashboards. Built with modern web technologies focusing on accessibility and user experience.",
    imageSrc: '/projects/asha-seva-thumb.jpg',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    demoLink: 'https://asha-seva.vercel.app',
    codeLink: 'https://github.com/your-username/asha-seva',
    type: 'tech' as const
  },

  // Editing Projects
  {
    title: 'Cinematic Wedding Highlights',
    description: "Professional wedding highlight reels with cinematic color grading and emotional storytelling. Created using premium editing software with advanced color correction techniques.",
    imageSrc: '/projects/wedding-edit.jpg',
    tags: ['Premiere Pro', 'Color Grading', 'Wedding'],
    type: 'editing' as const
  },
  {
    title: 'Commercial Product Showcase',
    description: "High-end product advertisements with stunning visual effects and motion graphics. Incorporating 3D elements and dynamic transitions.",
    imageSrc: '/projects/commercial-edit.jpg',
    tags: ['After Effects', 'Motion Graphics', 'Commercial'],
    type: 'editing' as const
  },
  {
    title: 'Music Video Production',
    description: "Creative music video edits with synchronized visual effects and beat-matching transitions. Features dynamic color schemes and innovative visual storytelling.",
    imageSrc: '/projects/music-video-edit.jpg',
    tags: ['Music Video', 'Visual Effects', 'Color Grading'],
    type: 'editing' as const
  },
  {
    title: 'Corporate Training Series',
    description: "Professional educational content editing for corporate training programs. Clean cuts, engaging transitions, and clear information presentation.",
    imageSrc: '/projects/corporate-edit.jpg',
    tags: ['Corporate', 'Educational', 'Training'],
    type: 'editing' as const
  },
  {
    title: 'Social Media Content',
    description: "Engaging short-form content for various social media platforms. Quick-paced editing with trending styles and effects.",
    imageSrc: '/projects/social-edit.jpg',
    tags: ['Social Media', 'Short Form', 'Trending'],
    type: 'editing' as const
  },
  {
    title: 'Event Aftermovie',
    description: "Dynamic event highlight videos capturing the essence of large-scale events. Featuring aerial shots and synchronized music editing.",
    imageSrc: '/projects/event-edit.jpg',
    tags: ['Events', 'Aftermovie', 'Highlights'],
    type: 'editing' as const
  }
];
