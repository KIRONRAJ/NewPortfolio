import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience: React.FC = () => {
  const containerRef = useScrollAnimation();

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex items-center gap-4 mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 flex items-center">
            <span className="text-accent text-xl mr-2">03.</span> Experience_Log
          </h2>
          <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
        </div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-10 space-y-12">
          {EXPERIENCE.map((job) => (
            <div key={job.id} className="relative pl-8 md:pl-12 group animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
              {/* Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-slate-600 rounded-full group-hover:bg-accent transition-colors duration-300"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-accent transition-colors duration-300">
                  {job.role}
                </h3>
                <span className="text-xs font-mono text-accent/80 mt-1 sm:mt-0">
                  {job.period}
                </span>
              </div>
              
              <div className="flex items-center gap-2 mb-4 text-slate-400 font-mono text-sm">
                <span className="text-accent">@</span>
                <span>{job.company}</span>
              </div>

              <div className="bg-secondary/50 p-6 rounded border border-transparent hover:border-accent/20 transition-all duration-300">
                <ul className="space-y-2">
                  {job.description.map((desc, index) => (
                    <li key={index} className="text-slate-400 text-sm flex items-start gap-2">
                      <span className="text-accent mt-1.5 text-xs">▹</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;