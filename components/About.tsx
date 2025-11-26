import React from 'react';
import { SKILLS, RESUME_DATA, CERTIFICATIONS, EDUCATION } from '../constants';
import { Code2, Server, Shield, Award, GraduationCap, Calendar, MapPin, Terminal } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const containerRef = useScrollAnimation();

  const getIcon = (category: string) => {
    switch (category) {
      case 'Infrastructure & Security': return <Shield className="w-5 h-5 text-accent" />;
      case 'Development': return <Code2 className="w-5 h-5 text-purple-400" />;
      default: return <Server className="w-5 h-5 text-green-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex items-center gap-4 mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 flex items-center">
            <span className="text-accent text-xl mr-2">02.</span> About Me
          </h2>
          <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
            <div className="space-y-6 text-slate-400 leading-relaxed text-sm md:text-base font-sans">
              <p>{RESUME_DATA.about}</p>
              <div className="flex items-center gap-2 text-accent font-mono text-sm">
                <MapPin className="w-4 h-4" />
                <span>{RESUME_DATA.location}</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-200 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-accent" />
                Education_History
              </h3>
              <div className="space-y-4">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="bg-secondary p-4 rounded border border-transparent hover:border-accent/30 transition-colors">
                    <h4 className="text-slate-200 font-bold text-sm">{edu.degree}</h4>
                    <p className="text-accent text-xs mt-1 font-mono">{edu.institution}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-slate-500 font-mono">
                      <Calendar className="w-3 h-3" />
                      <span>{edu.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
             <div>
               <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
                 <Terminal className="w-5 h-5 text-accent" />
                 Technical_Proficiency
               </h3>
               <div className="space-y-6">
                {SKILLS.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <div className="flex items-center gap-2 mb-3">
                      {getIcon(skillGroup.category)}
                      <h4 className="text-sm font-semibold text-slate-300 font-mono">{skillGroup.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {skillGroup.items.map((skill) => (
                        <div key={skill} className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                          <span className="text-accent">▹</span>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
               </div>
             </div>

            <div>
              <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                Certifications
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.name} className="flex justify-between items-start border-l-2 border-slate-700 pl-4 hover:border-accent transition-colors py-1">
                    <div>
                        <h4 className="text-slate-300 font-medium text-xs leading-snug">{cert.name}</h4>
                        <span className="text-[10px] text-slate-500">{cert.issuer}</span>
                    </div>
                    <span className="text-[10px] text-accent font-mono">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;