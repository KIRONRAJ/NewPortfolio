import React from 'react';
import { RESUME_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Built with React, Tailwind, and Gemini AI.
        </p>
      </div>
    </footer>
  );
};

export default Footer;