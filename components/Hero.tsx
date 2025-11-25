import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download, Globe } from 'lucide-react';
import { RESUME_DATA, SOCIALS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background decoration with Blob Animations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in-up">
          <div>
            <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-4 block">
              Hello, I'm
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {RESUME_DATA.name}
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-400 font-light">
              {RESUME_DATA.title}
            </h2>
          </div>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {RESUME_DATA.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#projects" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-primary bg-accent hover:opacity-90 transition-all duration-300 transform hover:scale-105">
              View Work
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
            <a 
              href={RESUME_DATA.resumeLink} 
              download="Kironraj_Odatt_Resume.pdf"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-base font-medium rounded-full text-white hover:bg-white/5 transition-all duration-300 group hover:border-accent"
            >
              Download Resume
              <Download className="ml-2 -mr-1 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
             {SOCIALS.map((social) => {
               const Icon = social.platform === 'GitHub' ? Github : 
                            social.platform === 'LinkedIn' ? Linkedin : 
                            social.platform === 'Website' ? Globe : Mail;
               return (
                 <a key={social.platform} href={social.url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-colors transform hover:scale-110 duration-200">
                   <Icon className="w-6 h-6" />
                 </a>
               );
             })}
          </div>
        </div>

        <div className="flex-1 relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
                <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-spin-slow" style={{ animationDuration: '15s' }}></div>
                <div className="absolute inset-4 rounded-full border-2 border-purple-500/30 animate-spin-reverse-slow" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-0 rounded-full overflow-hidden bg-gray-800 shadow-2xl ring-4 ring-white/5 hover:ring-accent/50 transition-all duration-500">
                    <img 
                        src="https://github.com/KIRONRAJ.png" 
                        alt={RESUME_DATA.name}
                        className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;