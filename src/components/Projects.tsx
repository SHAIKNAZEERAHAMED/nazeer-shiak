import React, { useMemo } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projectsData';

const Projects: React.FC = () => {
  // Memoize filtered projects to prevent unnecessary recalculation
  const techProjects = useMemo(() => projects.filter(p => p.type === 'tech'), []);
  const editingProjects = useMemo(() => projects.filter(p => p.type === 'editing'), []);

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Projects
        </h2>
        <p className="text-center text-white/60 mb-12">
          Showcasing my technical and creative work
        </p>
        
        {/* Technical Projects */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-white/90">
            Technical Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techProjects.length > 0 ? (
              techProjects.map((project, idx) => (
                <ProjectCard 
                  key={`tech-${project.title}`} 
                  {...project} 
                />
              ))
            ) : (
              <p className="text-white">No technical projects available.</p>
            )}
          </div>
        </div>

        {/* Editing Projects */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-white/90">
            Editing Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {editingProjects.length > 0 ? (
              editingProjects.map((project, idx) => (
                <ProjectCard 
                  key={`edit-${project.title}`} 
                  {...project} 
                />
              ))
            ) : (
              <p className="text-white">No editing projects available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;