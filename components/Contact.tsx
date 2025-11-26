import React, { useState } from 'react';
import { RESUME_DATA, SOCIALS } from '../constants';
import { Mail, Github, Linkedin, Globe, Terminal, AlertTriangle, Check, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const containerRef = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'encrypting' | 'sending' | 'success' | 'error'>('idle');
  const [logs, setLogs] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'encrypting' || status === 'sending' || status === 'success') return;

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('ERROR: DATA CORRUPTION DETECTED. SECTOR EMPTY.');
      return;
    }

    // Start simulation
    setStatus('encrypting');
    setLogs([]);
    setErrorMessage('');

    const steps = [
      { msg: '> Initializing handshake protocol...', delay: 500 },
      { msg: '> Encrypting Payload... [||||      ] 40%', delay: 800 },
      { msg: '> Encrypting Payload... [||||||||  ] 80%', delay: 800 },
      { msg: '> Encrypting Payload... [||||||||||] 100%', delay: 500 },
      { msg: '> Establishing Secure Connection...', delay: 600 }
    ];

    for (const step of steps) {
      setLogs(prev => [...prev, step.msg]);
      await new Promise(resolve => setTimeout(resolve, step.delay));
    }

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData })
      });

      setStatus('success');
      setLogs(prev => [...prev, '> Message Sent Successfully.']);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage('ERROR: UPLINK FAILED. RETRY.');
      setLogs(prev => [...prev, '> Transmission Aborted.']);
    }
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'GitHub': return <Github size={20} />;
      case 'LinkedIn': return <Linkedin size={20} />;
      case 'Website': return <Globe size={20} />;
      default: return <Mail size={20} />;
    }
  };

  return (
    <section id="contact" className="py-24 relative min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full" ref={containerRef}>
        
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out space-y-8 mb-12 text-center">
          <p className="text-accent font-mono">05. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Get In Touch</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I am currently open to opportunities in Cyber Security and Full Stack Development.
            Initiate a secure connection below.
          </p>
        </div>

        {/* Terminal Form */}
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200">
          <div className="w-full max-w-3xl mx-auto bg-[#0a192f] rounded-lg border border-slate-700 shadow-2xl overflow-hidden font-mono text-sm md:text-base">
            
            {/* Terminal Header */}
            <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-slate-400 text-xs flex items-center gap-2">
                <Terminal size={12} />
                <span>contact_module.sh</span>
              </div>
              <div className="w-16"></div> {/* Spacer for centering */}
            </div>

            {/* Terminal Body */}
            <div className="p-6 md:p-8 space-y-4">
              
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Hidden Inputs for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Name Input */}
                <div className="flex flex-col md:flex-row md:items-baseline gap-2">
                  <label htmlFor="name" className="text-green-400 whitespace-nowrap shrink-0 select-none">
                    root@visitor:~$ Identity:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="off"
                    disabled={status === 'encrypting' || status === 'sending'}
                    className="bg-transparent border-none outline-none text-slate-100 flex-1 w-full caret-accent placeholder-slate-600 focus:ring-0 p-0"
                    placeholder="_"
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col md:flex-row md:items-baseline gap-2">
                  <label htmlFor="email" className="text-green-400 whitespace-nowrap shrink-0 select-none">
                    root@visitor:~$ Return_Address:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="off"
                    disabled={status === 'encrypting' || status === 'sending'}
                    className="bg-transparent border-none outline-none text-slate-100 flex-1 w-full caret-accent placeholder-slate-600 focus:ring-0 p-0"
                    placeholder="_"
                  />
                </div>

                {/* Message Input */}
                <div className="flex flex-col md:flex-row gap-2">
                   <label htmlFor="message" className="text-green-400 whitespace-nowrap shrink-0 select-none">
                    root@visitor:~$ Payload:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    disabled={status === 'encrypting' || status === 'sending'}
                    className="bg-transparent border-none outline-none text-slate-100 flex-1 w-full caret-accent placeholder-slate-600 focus:ring-0 p-0 resize-none"
                    placeholder="_"
                  />
                </div>

                {/* Status Logs / Error */}
                <div className="min-h-[60px] py-2">
                  {errorMessage && (
                     <div className="text-red-500 flex items-center gap-2 animate-pulse">
                        <AlertTriangle size={16} />
                        <span>{errorMessage}</span>
                     </div>
                  )}
                  {logs.map((log, index) => (
                    <div key={index} className="text-slate-400 text-sm">
                      {log}
                    </div>
                  ))}
                  {status === 'success' && (
                    <div className="text-accent flex items-center gap-2 mt-2">
                        <Check size={16} />
                        <span>Transmission Complete. Terminating Session...</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  {status === 'success' ? (
                     <button
                        type="button"
                        onClick={() => {
                            setStatus('idle');
                            setLogs([]);
                        }}
                        className="text-accent hover:text-white transition-colors text-sm"
                     >
                        &gt; [ START_NEW_SESSION ]
                     </button>
                  ) : (
                    <button
                        type="submit"
                        disabled={status !== 'idle' && status !== 'error'}
                        className={`
                            group relative inline-flex items-center gap-3 px-6 py-3 
                            bg-transparent border border-accent/50 rounded 
                            text-accent font-mono text-sm uppercase tracking-wider
                            hover:bg-accent hover:text-primary transition-all duration-300
                            disabled:opacity-50 disabled:cursor-not-allowed
                        `}
                    >
                        <span>./execute_send.sh</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>

              </form>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-16 flex justify-center gap-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300">
            {SOCIALS.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-accent hover:-translate-y-1 transition-all duration-300"
              >
                {getSocialIcon(social.platform)}
              </a>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;