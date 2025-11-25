import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience: React.FC = () => {
  const containerRef = useScrollAnimation();

  return (
    <section id="experience" className="py-24 bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative border-l border-gray-700 ml-4 md:ml-10 space-y-12">
          {EXPERIENCE.map((job) => (
            <div key={job.id} className="relative pl-8 md:pl-12 group animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
              {/* Dot */}
              <div className="absolute -left-[9px] top-1 w-5 h-5 bg-primary border-4 border-accent rounded-full group-hover:bg-accent transition-colors duration-300"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                  {job.role}
                </h3>
                <span className="text-sm font-medium text-gray-500 bg-white/5 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                  {job.period}
                </span>
              </div>
              
              <div className="flex items-center gap-2 mb-4 text-gray-400">
                <Briefcase size={16} />
                <span className="text-lg font-medium">{job.company}</span>
              </div>

              <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors duration-300">
                <ul className="space-y-2">
                  {job.description.map((desc, index) => (
                    <li key={index} className="text-gray-300 flex items-start gap-2">
                      <span className="text-accent mt-1.5">•</span>
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