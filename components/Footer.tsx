import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 text-center text-slate-500 dark:text-slate-500 border-t border-slate-200 dark:border-slate-800/50 mt-20 space-y-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm">
        <p className="font-medium">
          (C) Noam Gold AI 2025
        </p>
        <div className="hidden md:block w-px h-4 bg-slate-300 dark:bg-slate-700"></div>
        <a 
          href="mailto:goldnoamai@gmail.com" 
          className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group"
        >
          <Mail className="w-4 h-4 group-hover:animate-bounce" />
          <span>שלחו משוב: goldnoamai@gmail.com</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;