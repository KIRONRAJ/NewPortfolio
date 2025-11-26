import React from 'react';
import { PROJECTS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Folder } from 'lucide-react';

const Projects: React.FC = () => {
  const containerRef = useScrollAnimation();

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex items-center gap-4 mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 flex items-center">
            <span className="text-accent text-xl mr-2">04.</span> Academic_Projects
          </h2>
          <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group bg-secondary rounded overflow-hidden border border-transparent hover:border-accent/30 hover:-translate-y-2 transition-all duration-300 ease-out animate-on-scroll opacity-0 translate-y-10 flex flex-col h-full relative"
            >
              {/* Folder Header */}
              <div className="p-6 flex justify-between items-start pb-0">
                <Folder className="w-10 h-10 text-accent/80" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-4 text-sm flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-auto">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-slate-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;