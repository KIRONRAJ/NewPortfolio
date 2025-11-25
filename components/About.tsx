import React from 'react';
import { SKILLS, RESUME_DATA, CERTIFICATIONS, EDUCATION } from '../constants';
import { Code2, Server, Shield, Award, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const containerRef = useScrollAnimation();

  const getIcon = (category: string) => {
    switch (category) {
      case 'Infrastructure & Security': return <Shield className="w-6 h-6 text-accent" />;
      case 'Development': return <Code2 className="w-6 h-6 text-purple-400" />;
      default: return <Server className="w-6 h-6 text-green-400" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>{RESUME_DATA.about}</p>
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="font-medium">{RESUME_DATA.location}</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-accent" />
                Education
              </h3>
              <div className="space-y-4">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <h4 className="text-white font-bold">{edu.degree}</h4>
                    <p className="text-accent text-sm mt-1">{edu.institution}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
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
               <h3 className="text-xl font-bold text-white mb-6">Technical Proficiency</h3>
               <div className="space-y-6">
                {SKILLS.map((skillGroup) => (
                  <div key={skillGroup.category} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-accent/50 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-white/5 rounded-lg">
                        {getIcon(skillGroup.category)}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-primary/50 text-gray-300 rounded-full text-sm font-medium border border-white/5">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
               </div>
             </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.name} className="bg-primary/40 p-3 rounded-lg border border-white/5 hover:border-accent/30 transition-colors">
                    <h4 className="text-white font-medium text-xs leading-snug">{cert.name}</h4>
                    <div className="flex justify-between items-center mt-2 text-[10px] text-gray-500">
                      <span>{cert.issuer}</span>
                      <span>{cert.year}</span>
                    </div>
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