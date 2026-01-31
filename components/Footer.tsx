
import React from 'react';
import { Mail } from 'lucide-react';
import { translations } from '../translations';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language];
  return (
    <footer className="py-12 text-center text-slate-500 dark:text-slate-500 border-t border-slate-200 dark:border-slate-800/50 mt-20 space-y-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm">
        <p className="font-medium">
          (C) Noam Gold AI 2026
        </p>
        <div className="hidden md:block w-px h-4 bg-slate-300 dark:bg-slate-700"></div>
        <div className="flex items-center gap-2">
          <span className="font-medium">Send Feedback</span>
          <a 
            href="mailto:goldnoamai@gmail.com" 
            className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group"
          >
            <Mail className="w-4 h-4 group-hover:animate-bounce" />
            <span>goldnoamai@gmail.com</span>
          </a>
        </div>
      </div>
      
      {/* Ready for Google Adsense */}
      <div className="max-w-4xl mx-auto mt-8 opacity-60 grayscale hover:grayscale-0 transition-all">
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-0274741291001288"
             data-ad-slot="footer-slot"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>
             {`
             (window.adsbygoogle = window.adsbygoogle || []).push({});
             `}
        </script>
      </div>
    </footer>
  );
};

export default Footer;
