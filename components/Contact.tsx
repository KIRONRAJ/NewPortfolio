import React from 'react';
import { RESUME_DATA, SOCIALS } from '../constants';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const containerRef = useScrollAnimation();

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'GitHub': return <Github size={20} />;
      case 'LinkedIn': return <Linkedin size={20} />;
      case 'Twitter': return <Twitter size={20} />;
      default: return <Mail size={20} />;
    }
  };

  return (
    <section id="contact" className="py-24 bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I am currently open to opportunities in Cyber Security and Full Stack Development.
            Based in Wellington, I am available for both local and remote roles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/5 space-y-6">
               <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <a href={`mailto:${RESUME_DATA.email}`} className="text-gray-400 hover:text-accent transition-colors">
                      {RESUME_DATA.email}
                    </a>
                  </div>
               </div>
               
               <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <a href={`tel:${RESUME_DATA.phone}`} className="text-gray-400 hover:text-accent transition-colors">
                      {RESUME_DATA.phone}
                    </a>
                  </div>
               </div>

               <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                    <p className="text-gray-400">{RESUME_DATA.location}</p>
                  </div>
               </div>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              {SOCIALS.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>

          {/* Visual Form (Stateless for demo) */}
          <form className="space-y-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea id="message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors" placeholder="Hello, I'd like to talk about..."></textarea>
            </div>
            <button className="w-full bg-accent text-primary font-bold py-4 rounded-lg hover:opacity-90 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 transform hover:scale-[1.02]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;