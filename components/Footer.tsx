import React from 'react';
import { RESUME_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-slate-500 text-xs font-mono">
          Designed & Built by {RESUME_DATA.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;