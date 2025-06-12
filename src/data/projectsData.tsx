export const projects = [
  // Technical Projects
  {
    title: 'Looped',
    description: "A social media platform revolutionizing short-form video content. Built with React and Node.js, it features a dynamic feed system, real-time interactions, and AI-powered content recommendations. Users can create, edit, and share short videos with custom filters and effects.",
    imageSrc: '/projects/looped.jpg',
    tags: ['React', 'Node.js', 'Firebase', 'AI', 'Redux','ML'],
    demoLink: 'https://looped-demo.vercel.app',
    codeLink: 'https://github.com/your-username/looped',
    type: 'tech' as const
  },
  {
    title: 'Asha Seva',
    description: "A platform bridging NGOs with volunteers, facilitating social impact projects. Features include real-time project matching, volunteer tracking, and impact measurement dashboards. Built with modern web technologies focusing on accessibility and user experience.",
    imageSrc: '/projects/asha seva.jpg',
    tags: ['Next.js', 'TypeScript', 'ML', 'PostgreSQL','AI'],
    demoLink: 'https://asha-seva.vercel.app',
    codeLink: 'https://github.com/your-username/asha-seva',
    type: 'tech' as const
  },

  // Editing Projects
  {
    title: 'Cinematic Reels',
    description: "Professional self highlighting reels with cinematic color grading and smooth transitions. Showcasing advanced editing techniques and visual storytelling.",
    imageSrc: '/projects/wedding-edit.jpg',
    videoSrc: '/projects/cheif.mp4', // <-- Place your video file in public/projects/ and set the path here
    tags: ['Premiere Pro', 'Color Grading', 'After Effects'],
    type: 'editing' as const
  },
  {
    title: 'aesthetic reels style 3d',
    description: "High-end Intro with stunning visual effects and motion graphics. Incorporating 3D elements and dynamic transitions.",
    imageSrc: '/projects/commercial-edit.jpg',
    videoSrc: '/projects/Fashion 2.mp4', // <-- Place your video file in public/projects/ and set the path here
    tags: ['After Effects', 'Motion Graphics', 'Commercial'],
    type: 'editing' as const
  },
  {
    title: 'Photo Editing',
    description: "Professional photo editing with advanced retouching, color correction, and creative enhancements. Ideal for portraits, product photography, and social media content.",
    imageSrc: '/projects/naz X Legi.jpg',
    tags: ['Cinematic Textures', 'PhotoShop', 'Color Grading'],
    type: 'editing' as const
  },
  {
    title: 'Kinetic Typography',
    description: "Engaging kinetic typography videos with animated text and dynamic transitions. Perfect for promotional content and social media engagement.",
    imageSrc: '/projects/corporate-edit.jpg',
    videoSrc: '/projects/GDG INTRO 2.mp4',
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
