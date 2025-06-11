import React, { useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import ThreeScene from '@/components/ThreeScene';
import AnimatedText from '@/components/AnimatedText';
import ProjectCard from '@/components/ProjectCard';
import ParallaxCard from '@/components/ParallaxCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HunterIDCard from '@/components/HunterIDCard';
import RankingList from '@/components/RankingList';
import { projects } from '@/data/projectsData'; // Import the projects data
import SkillSection from '@/components/SkillSection';

// Technical skills data
const technicalSkills = [
  { name: "React.js", level: "expert" as const },
  { name: "Next.js", level: "advanced" as const },
  { name: "JavaScript", level: "expert" as const },
  { name: "TypeScript", level: "advanced" as const },
  { name: "Python", level: "intermediate" as const },
  { name: "Java", level: "intermediate" as const },
  { name: "C++", level: "intermediate" as const },
  { name: "C", level: "intermediate" as const },
  { name: "PostgreSQL", level: "advanced" as const },
  { name: "SQL", level: "advanced" as const },
  { name: "Firebase", level: "intermediate" as const },
  { name: "PyTorch", level: "beginner" as const },
  { name: "Pandas", level: "intermediate" as const },
];

// Editing skills data
const editingSkills = [
  { name: "After Effects", level: "expert" as const },
  { name: "Premiere Pro", level: "expert" as const },
  { name: "DaVinci Resolve", level: "advanced" as const },
  { name: "Blender", level: "intermediate" as const },
  { name: "Color Grading", level: "advanced" as const },
  { name: "VFX", level: "advanced" as const },
  { name: "Motion Graphics", level: "expert" as const },
  { name: "Photo Editing", level: "intermediate" as const },
  { name: "Graphic Design", level: "intermediate" as const },
  { name: "Title Animation", level: "advanced" as const },
];

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => setShowIntro(false), 4200); // Show intro for 4.2s
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div 
      className="min-h-screen bg-solo-dark text-white overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1.8, duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-gradient-to-br from-black via-solo-dark to-solo-purple/80"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, type: 'spring', bounce: 0.3 }}
              className="text-4xl md:text-6xl font-bold gradient-text drop-shadow-lg text-center"
              style={{ letterSpacing: '0.04em' }}
            >
              <span className="block">Shaik Nazeer</span>
              <span className="block text-lg md:text-2xl font-normal text-white/80 tracking-widest mt-2">PORTFOLIO</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7, ease: 'easeOut' }}
              className="mt-6"
            >
              <span className="text-solo-highlight text-lg md:text-xl font-mono tracking-widest animate-pulse">Leveling Up...</span>
            </motion.div>
          </div>
        </motion.div>
      )}
      
      <Navbar />
      
      {/* Hero Section with Solo Leveling-inspired Background */}
      <section 
        id="home" 
        className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-solo-leveling"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-solo-dark/0 via-solo-dark/80 to-solo-dark"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          {/* Hunter ID Card */}
          <HunterIDCard 
            name="Shaik Nazeer Ahamed"
            rank="S"
            level={100} // Provide a default or dynamic level value
            imageSrc="/saki-profile.ico"
          />
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="tech" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading mb-12 text-center">Technical Expertise</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <SkillSection
              title="Programming Languages"
              description="Core languages I'm proficient in for software development."
              skills={[
                { name: "JavaScript", level: "expert" },
                { name: "TypeScript", level: "advanced" },
                { name: "Python", level: "intermediate" },
                { name: "Java", level: "intermediate" },
                { name: "C++", level: "intermediate" },
                { name: "C", level: "intermediate" },
              ]}
              glowColor="rgba(155, 135, 245, 0.2)"
            />
            
            <SkillSection
              title="Web Technologies"
              description="Frameworks and libraries I use to build web applications."
              skills={[
                { name: "React.js", level: "expert" },
                { name: "Next.js", level: "advanced" },
                { name: "HTML/CSS", level: "expert" },
                { name: "Tailwind CSS", level: "advanced" },
                { name: "Redux", level: "intermediate" },
              ]}
              glowColor="rgba(30, 174, 219, 0.2)"
            />
            
            <SkillSection
              title="Databases & Backend"
              description="Data storage, management, and backend services."
              skills={[
                { name: "PostgreSQL", level: "advanced" },
                { name: "SQL", level: "advanced" },
                { name: "Firebase", level: "intermediate" },
                { name: "Node.js", level: "intermediate" },
                { name: "Express", level: "intermediate" },
              ]}
              glowColor="rgba(155, 135, 245, 0.2)"
            />
          </div>
          
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SkillSection
              title="Data Science & ML"
              description="Tools and frameworks for data analysis and machine learning."
              skills={[
                { name: "PyTorch", level: "beginner" },
                { name: "Pandas", level: "intermediate" },
              ]}
              glowColor="rgba(30, 174, 219, 0.2)"
            />
            
            <SkillSection
              title="DevOps & Tools"
              description="Tools and services for efficient development workflow."
              skills={[
                { name: "Git", level: "advanced" },
                { name: "GitHub", level: "advanced" },
                { name: "Docker", level: "beginner" },
                { name: "VS Code", level: "expert" },
                { name: "Linux", level: "intermediate" },
              ]}
              glowColor="rgba(155, 135, 245, 0.2)"
            />
          </div>
        </div>
      </section>
      
      {/* Editing Skills Section */}
      <section id="editing" className="py-20 relative bg-gradient-purple">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading mb-12 text-center">Editing Mastery</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <SkillSection
              title="Video Editing"
              description="Professional video editing skills and software expertise."
              skills={[
                { name: "Premiere Pro", level: "expert" },
                { name: "DaVinci Resolve", level: "advanced" },
                { name: "Video Composition", level: "expert" },
              ]}
              glowColor="rgba(30, 174, 219, 0.2)"
            />
            
            <SkillSection
              title="Visual Effects"
              description="Creating stunning visual effects and animations."
              skills={[
                { name: "After Effects", level: "expert" },
                { name: "VFX", level: "advanced" },
                { name: "Particle Systems", level: "intermediate" },
                { name: "Blender", level: "intermediate" },
              ]}
              glowColor="rgba(155, 135, 245, 0.2)"
            />
            
            <SkillSection
              title="Color & Audio"
              description="Color grading and audio enhancement techniques."
              skills={[
                { name: "Color Grading", level: "advanced" },
                { name: "Color Theory", level: "advanced" },
                { name: "Audio Mixing", level: "intermediate" },
                { name: "Sound Design", level: "intermediate" },
              ]}
              glowColor="rgba(30, 174, 219, 0.2)"
            />
          </div>
          
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SkillSection
              title="Motion Graphics"
              description="Creating dynamic motion graphics and animations."
              skills={[
                { name: "Motion Graphics", level: "expert" },
                { name: "Title Animation", level: "advanced" },
                { name: "Kinetic Typography", level: "advanced" },
                { name: "Logo Animation", level: "intermediate" },
              ]}
              glowColor="rgba(155, 135, 245, 0.2)"
            />
            
            <SkillSection
              title="Graphic Design"
              description="Design skills for thumbnails, posters, and visual elements."
              skills={[
                { name: "Photo Editing", level: "intermediate" },
                { name: "Graphic Design", level: "intermediate" },
                { name: "Typography", level: "intermediate" },
                { name: "Layout Design", level: "intermediate" },
              ]}
              glowColor="rgba(30, 174, 219, 0.2)"
            />
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading mb-8 text-center">Featured Projects</h2>
            <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
              A showcase of my technical and creative projects, combining development expertise and editing skills.
            </p>
          </motion.div>
          
          <Tabs defaultValue="tech" className="w-full">
            <TabsList className="grid grid-cols-2 max-w-xs mx-auto mb-10">
              <TabsTrigger value="tech" className="data-[state=active]:bg-solo-purple">
                Technical
              </TabsTrigger>
              <TabsTrigger value="editing" className="data-[state=active]:bg-solo-highlight">
                Editing
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="tech">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.type === 'tech')
                  .map((project, index) => (
                    <motion.div
                      key={`tech-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        imageSrc={project.imageSrc}
                        tags={project.tags}
                        demoLink={project.demoLink}
                        codeLink={project.codeLink}
                        type="tech"
                      />
                    </motion.div>
                  ))}
              </div>
              
              <div className="text-center mt-10">
                <p className="text-white/70 mb-4">
                  {/* These are placeholders. Add your projects here. */}
                </p>
                <Button variant="outline" className="border-solo-purple/50 text-white hover:bg-solo-purple/20">
                  View All Technical Projects
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="editing">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.type === 'editing')
                  .map((project, index) => (
                    <motion.div
                      key={`edit-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        imageSrc={project.imageSrc}
                        tags={project.tags}
                        demoLink={project.demoLink}
                        type="editing"
                      />
                    </motion.div>
                  ))}
              </div>
              
              <div className="text-center mt-10">
                <p className="text-white/70 mb-4">
                  {/* These are placeholders. Add your editing projects here. */}
                </p>
                <Button variant="outline" className="border-solo-highlight/50 text-white hover:bg-solo-highlight/20">
                  View All Editing Projects
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 relative bg-gradient-purple">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading mb-8 text-center">Get In Touch</h2>
            <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
              Interested in working together? Let's discuss your project or just say hello!
            </p>
          </motion.div>
          
          <ParallaxCard className="max-w-3xl mx-auto">
            <div className="glass-card p-8 w-full">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-solo-purple/20 rounded-md px-4 py-3 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-solo-purple/20 rounded-md px-4 py-3 text-white"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-solo-purple/20 rounded-md px-4 py-3 text-white"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2">Message</label>
                  <textarea 
                    className="w-full bg-white/5 border border-solo-purple/20 rounded-md px-4 py-3 text-white h-32"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <Button className="bg-solo-purple hover:bg-solo-accent text-white px-8 py-6" size="lg">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </ParallaxCard>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
