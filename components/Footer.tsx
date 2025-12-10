import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-slate-500 dark:text-slate-500 border-t border-slate-200 dark:border-slate-800/50 mt-20">
      <p className="flex items-center justify-center gap-2 text-sm">
        נוצר באהבה עבור הלומדים
        <Heart className="w-4 h-4 text-red-500 fill-red-500/20" />
        <span>© {new Date().getFullYear()}</span>
      </p>
    </footer>
  );
};

export default Footer;