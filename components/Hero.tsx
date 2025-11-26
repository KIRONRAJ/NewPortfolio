import React from 'react';
import { Github, Linkedin, Mail, Download, Globe } from 'lucide-react';
import { RESUME_DATA, SOCIALS } from '../constants';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero: React.FC = () => {
  const terminalText = useTypewriter([
    `> Initializing Kironraj_Portfolio...`,
    `> Loading Cyber Security Modules...`,
    `> System Ready.`,
    `> Hello, I'm ${RESUME_DATA.name}`
  ], 50, 2000);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12 w-full">
        
        {/* Terminal / Text Side */}
        <div className="flex-1 w-full animate-fade-in-up">
          <div className="bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-lg overflow-hidden shadow-2xl shadow-accent/5">
            {/* Terminal Header */}
            <div className="bg-primary/90 p-3 border-b border-accent/20 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs text-gray-500 font-mono">user@kironraj:~/portfolio</span>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 md:p-8 font-mono space-y-4 min-h-[300px] flex flex-col justify-center">
              <div className="text-accent text-lg md:text-xl">
                {terminalText}<span className="cursor-blink">_</span>
              </div>
              
              <div className="space-y-2 pt-4">
                 <h2 className="text-3xl md:text-5xl font-bold text-slate-100">
                  {RESUME_DATA.title}
                </h2>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
                  {RESUME_DATA.tagline}
                </p>
              </div>

              <div className="pt-6 flex flex-wrap gap-4">
                <a 
                  href={RESUME_DATA.resumeLink} 
                  download="Kironraj_Odatt_Resume.pdf"
                  className="group relative px-6 py-3 bg-transparent overflow-hidden rounded border border-accent text-accent font-semibold transition-all hover:bg-accent/10"
                >
                   <span className="relative flex items-center gap-2">
                     Download_Resume <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform"/>
                   </span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-8 pl-2">
             {SOCIALS.map((social) => {
               const Icon = social.platform === 'GitHub' ? Github : 
                            social.platform === 'LinkedIn' ? Linkedin : 
                            social.platform === 'Website' ? Globe : Mail;
               return (
                 <a key={social.platform} href={social.url} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition-colors transform hover:-translate-y-1 duration-200">
                   <Icon className="w-5 h-5" />
                 </a>
               );
             })}
          </div>
        </div>

        {/* Visual / Image Side */}
        <div className="flex-1 relative animate-fade-in-up flex justify-center" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
                {/* Spinning borders */}
                <div className="absolute inset-0 rounded-full border border-accent/30 border-dashed animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute -inset-4 rounded-full border border-accent/10 animate-[spin_15s_linear_infinite_reverse]"></div>
                
                {/* Image Container with Glitch/Scanline effect hint */}
                <div className="absolute inset-2 rounded-full overflow-hidden bg-secondary border-2 border-accent/50 shadow-[0_0_20px_rgba(100,255,218,0.2)]">
                    <img 
                        src="https://github.com/KIRONRAJ.png" 
                        alt={RESUME_DATA.name}
                        className="w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    {/* Scanline overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent opacity-50 pointer-events-none"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;