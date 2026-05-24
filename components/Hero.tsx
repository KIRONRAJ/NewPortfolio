import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Download, Globe, Volume2, VolumeX } from 'lucide-react';
import { RESUME_DATA, SOCIALS, SKILLS, PROJECTS } from '../constants';
import { CyberTheme } from '../App';

interface HeroProps {
  setTheme: (theme: CyberTheme) => void;
}

interface LogLine {
  type: 'input' | 'output' | 'error' | 'success';
  text: string;
  isHtml?: boolean;
  htmlContent?: React.ReactNode;
}

const MatrixRain: React.FC<{ onExit: () => void }> = ({ onExit }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onExit();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onExit]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || 600;
      canvas.height = canvas.parentElement?.clientHeight || 300;
    };
    resizeCanvas();

    const katakana = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+{}|:<>?";
    const alphabet = katakana.split("");

    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);

    const rainDrops: number[] = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const accentColorHex = getComputedStyle(document.documentElement).getPropertyValue('--accent-hex').trim() || '#64ffda';

    let intervalId: ReturnType<typeof setInterval>;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = accentColorHex;
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    intervalId = setInterval(draw, 35);

    window.addEventListener('resize', resizeCanvas);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div 
      onClick={onExit}
      className="absolute inset-0 bg-black/95 p-4 font-mono flex flex-col justify-between overflow-hidden z-20 cursor-pointer"
    >
      <canvas ref={canvasRef} className="absolute inset-0 opacity-80 pointer-events-none" />
      <div className="relative z-30 flex flex-col justify-between h-full pointer-events-none select-none">
        <div className="text-center text-xs bg-black/70 p-2.5 rounded border border-accent/20 max-w-md mx-auto mt-4">
          <p className="text-accent font-bold tracking-widest animate-pulse">!!! PENETRATION SEQUENCE DEPLOYED !!!</p>
          <p className="text-slate-400 mt-1">Simulated Decryption Grid Active.</p>
        </div>
        <div className="text-center pb-4">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onExit();
            }}
            className="pointer-events-auto px-4 py-2 bg-accent/20 border border-accent text-accent text-xs font-semibold hover:bg-accent/35 rounded transition-all shadow-[0_0_15px_rgba(var(--color-accent),0.1)]"
          >
            TERMINATE_SEQUENCE (ESC / CLICK)
          </button>
        </div>
      </div>
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({ setTheme }) => {
  const [terminalHistory, setTerminalHistory] = useState<LogLine[]>([]);
  const [booting, setBooting] = useState(true);
  const [currentBootText, setCurrentBootText] = useState('');
  const [bootLineIndex, setBootLineIndex] = useState(0);
  const [inputVal, setInputVal] = useState('');
  const [isHacking, setIsHacking] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('kironraj-typing-sound');
      return saved !== 'false';
    }
    return true;
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const bootLines = [
    'Initializing Kironraj_Portfolio...',
    'Loading Cyber Security Modules...',
    'Access Authorized. System Ready.',
    'Kironraj OS [Version 1.0.0] (Web Console CLI Ready)'
  ];

  useEffect(() => {
    localStorage.setItem('kironraj-typing-sound', String(soundEnabled));
  }, [soundEnabled]);

  const playTypingSound = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const bufferSize = audioCtx.sampleRate * 0.012;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      
      const noise = audioCtx.createBufferSource();
      noise.buffer = buffer;
      
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1800, audioCtx.currentTime);
      filter.Q.setValueAtTime(3, audioCtx.currentTime);
      
      const gainNode = audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.03, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.01);
      
      noise.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      noise.start();
      
      if (Math.random() > 0.7) {
        const osc = audioCtx.createOscillator();
        const oscGain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(140, audioCtx.currentTime);
        
        oscGain.gain.setValueAtTime(0.02, audioCtx.currentTime);
        oscGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.012);
        
        osc.connect(oscGain);
        oscGain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.015);
      }
    } catch (err) {}
  };

  // Character typewriter effect for booting instructions
  useEffect(() => {
    if (bootLineIndex < bootLines.length) {
      const fullText = bootLines[bootLineIndex];
      if (currentBootText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setCurrentBootText(prev => prev + fullText[currentBootText.length]);
          playTypingSound();
        }, 25);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTerminalHistory(prev => [
            ...prev,
            { type: 'success', text: `> ${fullText}` }
          ]);
          setCurrentBootText('');
          setBootLineIndex(prev => prev + 1);
        }, 200);
        return () => clearTimeout(timeout);
      }
    } else {
      setBooting(false);
      setTerminalHistory(prev => [
        ...prev,
        { type: 'output', text: 'Type "help" to view list of secure commands.' }
      ]);
    }
  }, [bootLineIndex, currentBootText, soundEnabled]);

  // Handle scrolling to bottom of terminal content without causing the browser page to scroll
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [terminalHistory, currentBootText, booting]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const helpOutput = (
    <div className="space-y-1 text-slate-300 font-mono mt-1 text-xs md:text-sm">
      <div className="text-accent border-b border-accent/20 pb-0.5 mb-1.5 font-semibold">AVAILABLE_COMMANDS_MATRIX:</div>
      <div><span className="text-accent font-bold inline-block w-28">about</span>- Display biography &amp; professional overview</div>
      <div><span className="text-accent font-bold inline-block w-28">skills</span>- Read technical stack &amp; sub-specialties</div>
      <div><span className="text-accent font-bold inline-block w-28">projects</span>- Display cyber security &amp; IoT projects</div>
      <div><span className="text-accent font-bold inline-block w-28">theme &lt;name&gt;</span>- Swap color profiles (green, purple, amber, monochrome)</div>
      <div><span className="text-accent font-bold inline-block w-28">hack</span>- Initialize network decryption visual waterfall</div>
      <div><span className="text-accent font-bold inline-block w-28">clear</span>- Purge terminal console history logs</div>
      <div><span className="text-accent font-bold inline-block w-28">help</span>- Display this manual guide</div>
    </div>
  );

  const aboutOutput = (
    <div className="space-y-1.5 mt-1 text-slate-300 font-mono text-xs md:text-sm leading-relaxed">
      <p className="text-accent font-bold uppercase">&gt; IDENTITY: {RESUME_DATA.name}</p>
      <p className="text-slate-200">{RESUME_DATA.title}</p>
      <p className="text-slate-400 text-xs">{RESUME_DATA.about}</p>
      <p className="text-[11.5px] text-slate-500">Location target: {RESUME_DATA.location}</p>
    </div>
  );

  const skillsOutput = (
    <div className="space-y-2.5 mt-1 text-xs md:text-sm font-mono">
      {SKILLS.map((cat, idx) => (
        <div key={idx} className="border-l border-accent/20 pl-2">
          <p className="text-accent font-bold text-xs uppercase tracking-wider">// {cat.category}</p>
          <p className="text-slate-300 text-xs mt-0.5 leading-relaxed">
            {cat.items.join(' • ')}
          </p>
        </div>
      ))}
    </div>
  );

  const projectsOutput = (
    <div className="space-y-2 mt-1 text-xs md:text-sm font-mono">
      {PROJECTS.map((proj, idx) => (
        <div key={idx} className="bg-primary/20 border border-accent/10 p-2 rounded">
          <p className="text-accent font-bold flex flex-wrap justify-between gap-1">
            <span>{proj.title}</span>
            <span className="text-[10px] font-normal text-slate-500">[{proj.technologies.join(', ')}]</span>
          </p>
          <p className="text-[11.5px] text-slate-400 mt-0.5 leading-relaxed">{proj.description}</p>
          <div className="mt-1 flex gap-3 text-[10px]">
            {proj.github && <a href={proj.github} target="_blank" rel="noreferrer" className="text-accent hover:underline">Github &gt;</a>}
          </div>
        </div>
      ))}
    </div>
  );

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const cmdClean = inputVal.trim();
    const cmdTokens = cmdClean.split(' ');
    const primaryCmd = cmdTokens[0].toLowerCase();
    const argument = cmdTokens.slice(1).join(' ').toLowerCase();

    const historyLine: LogLine = {
      type: 'input',
      text: `user@kironraj:~$ ${cmdClean}`
    };

    let responseLine: LogLine;

    switch (primaryCmd) {
      case 'clear':
        setTerminalHistory([]);
        setInputVal('');
        return;
      case 'help':
        responseLine = {
          type: 'output',
          text: '',
          isHtml: true,
          htmlContent: helpOutput
        };
        break;
      case 'about':
        responseLine = {
          type: 'output',
          text: '',
          isHtml: true,
          htmlContent: aboutOutput
        };
        break;
      case 'skills':
        responseLine = {
          type: 'output',
          text: '',
          isHtml: true,
          htmlContent: skillsOutput
        };
        break;
      case 'projects':
        responseLine = {
          type: 'output',
          text: '',
          isHtml: true,
          htmlContent: projectsOutput
        };
        break;
      case 'hack':
        setIsHacking(true);
        responseLine = {
          type: 'success',
          text: '[SYSTEM] Initiating decryption waterfall overlay sequence...'
        };
        break;
      case 'theme': {
        const supported = ['green', 'purple', 'amber', 'monochrome'];
        if (!argument) {
          responseLine = {
            type: 'error',
            text: 'Error: Must provide theme parameter. Usage: theme <green | purple | amber | monochrome>'
          };
        } else if (supported.includes(argument)) {
          setTheme(argument as CyberTheme);
          responseLine = {
            type: 'success',
            text: `[SYSTEM] Color theme updated dynamically to "${argument}".`
          };
        } else {
          responseLine = {
            type: 'error',
            text: `Error: Theme "${argument}" not supported. Allowed: green, purple, amber, monochrome`
          };
        }
        break;
      }
      default:
        responseLine = {
          type: 'error',
          text: `Command not found: "${primaryCmd}". Reference "help" manual syntax.`
        };
    }

    setTerminalHistory(prev => [...prev, historyLine, responseLine]);
    setInputVal('');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12 w-full">
        
        {/* Terminal / Text Side */}
        <div className="flex-1 w-full animate-fade-in-up flex flex-col gap-6">
          
          <div className="space-y-3">
            <div className="text-xs font-mono text-accent tracking-widest uppercase select-none">// IDENTITY_MANIFEST</div>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-100 leading-tight">
              {RESUME_DATA.title}
            </h2>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xl">
              {RESUME_DATA.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 pl-1">
            <a 
              href={RESUME_DATA.resumeLink} 
              download="Kironraj_Odatt_Resume.pdf"
              className="group relative px-5 py-2.5 bg-transparent overflow-hidden rounded border border-accent text-accent text-xs font-semibold transition-all hover:bg-accent/10"
            >
               <span className="relative flex items-center gap-2">
                 Download_Resume <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform"/>
               </span>
            </a>

            <div className="flex items-center gap-6">
               {SOCIALS.map((social) => {
                 const Icon = social.platform === 'GitHub' ? Github : 
                              social.platform === 'LinkedIn' ? Linkedin : 
                              social.platform === 'Website' ? Globe : Mail;
                 return (
                   <a key={social.platform} href={social.url} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition-colors transform hover:-translate-y-0.5 duration-200">
                     <Icon className="w-4.5 h-4.5" />
                   </a>
                 );
               })}
            </div>
          </div>

          <div className="bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-lg overflow-hidden shadow-2xl shadow-accent/5 relative mt-2">
            
            {/* Matrix Rain Decryption Layer */}
            {isHacking && <MatrixRain onExit={() => setIsHacking(false)} />}

            {/* Terminal Header */}
            <div className="bg-primary/90 p-3 border-b border-accent/20 flex items-center gap-2 select-none">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs text-slate-500 font-mono flex-1">visitor@kironraj-desktop:~/portfolio</span>
              {!booting && (
                <span className="text-[10px] text-accent/50 mr-4 font-mono hidden sm:inline select-none">TYPE 'help' FOR UTILITIES</span>
              )}
              
              {/* Audio Mechanical Click Enable/Disable Toggle */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSoundEnabled(!soundEnabled);
                }}
                className="p-1 px-2 border border-accent/20 text-accent hover:bg-accent/10 transition-colors flex items-center gap-1.5 text-[10px] font-mono rounded"
                title={soundEnabled ? "Mute mechanical key sounds" : "Unmute mechanical key sounds"}
              >
                {soundEnabled ? (
                  <>
                    <Volume2 className="w-3 h-3 text-accent animate-pulse-slow" />
                    <span>SOUND_ON</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3 h-3 text-slate-500" />
                    <span className="text-slate-500">SOUND_OFF</span>
                  </>
                )}
              </button>
            </div>
            
            {/* Terminal Console Stream */}
            <div 
              ref={scrollContainerRef}
              onClick={focusInput}
              className="p-5 md:p-6 font-mono text-xs md:text-sm bg-primary/20 h-[320px] overflow-y-auto cursor-text select-text scrollbar-thin"
              id="terminal-scroll-area"
              style={{ contentVisibility: 'auto' }}
            >
              <div className="space-y-1.5 flex flex-col justify-end min-h-full">
                {terminalHistory.map((line, idx) => (
                  <div key={idx} className="leading-relaxed">
                    {line.isHtml ? (
                      line.htmlContent
                    ) : (
                      <div className={
                        line.type === 'input' ? 'text-slate-300' :
                        line.type === 'error' ? 'text-red-400' :
                        line.type === 'success' ? 'text-accent' :
                        'text-slate-400'
                      }>
                        {line.text}
                      </div>
                    )}
                  </div>
                ))}

                {booting && (
                  <div className="text-accent flex items-center">
                    <span>&gt;&nbsp;{currentBootText}</span>
                    <span className="w-1.5 h-3.5 bg-accent animate-[blink_1s_infinite] ml-0.5" />
                  </div>
                )}

                {!booting && (
                  <form onSubmit={handleCommandSubmit} className="flex items-center gap-1.5 text-slate-300 mt-1">
                    <span className="text-accent text-[13px] font-bold">user@kironraj:~$</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputVal}
                      onChange={(e) => {
                        setInputVal(e.target.value);
                        playTypingSound();
                      }}
                      className="bg-transparent border-none outline-none flex-1 text-slate-100 font-mono min-w-0"
                      autoFocus
                      maxLength={50}
                    />
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Visual / Image Side */}
        <div className="flex-1 relative animate-fade-in-up flex justify-center" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 group">
                {/* Spinning borders */}
                <div className="absolute inset-0 rounded-full border border-accent/20 border-dashed animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute -inset-4 rounded-full border border-accent/10 animate-[spin_15s_linear_infinite_reverse]"></div>
                
                {/* Image Container with Glitch/Scanline effect hint */}
                <div className="absolute inset-2 rounded-full overflow-hidden bg-secondary border border-accent/30 shadow-[0_0_20px_rgba(var(--color-accent),0.15)]">
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