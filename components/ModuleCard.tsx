import React from 'react';
import { ExternalLink, Star, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { LearningModule, Language } from '../types';
import { translations } from '../translations';
import { speak } from '../App';

interface ModuleCardProps {
  module: LearningModule;
  index: number;
  language: Language;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, index, language }) => {
  const t = translations[language];

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const shareData = {
      title: module.title,
      text: `${module.description}\n\nShared via Lomdim:`,
      url: module.url,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${module.title}: ${module.url}`)}`;
        window.open(whatsappUrl, '_blank');
      }
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        console.error('Sharing failed:', err);
      }
    }
  };

  const handleMouseEnter = () => {
    speak(module.title, language);
  };

  return (
    <motion.a
      href={module.url}
      target="_blank"
      rel="noopener noreferrer"
      role="listitem"
      aria-label={`${module.title}: ${module.description}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: {
          delay: index * 0.05,
          duration: 0.5,
          ease: "easeOut"
        }
      }}
      whileHover={{ 
        scale: 1.015, 
        y: -4,
        transition: { type: "spring", stiffness: 260, damping: 20 }
      }}
      onMouseEnter={handleMouseEnter}
      className={`group relative flex flex-col p-6 rounded-3xl bg-white dark:bg-slate-800/50 transition-all duration-300 overflow-visible outline-none ring-offset-transparent focus-within:ring-2 focus-within:ring-purple-500 ${
        module.featured 
          ? 'border-2 border-amber-400 dark:border-amber-500 shadow-xl shadow-amber-500/10 dark:shadow-amber-900/20 hover:shadow-amber-500/30 dark:hover:shadow-amber-900/40' 
          : 'border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/80'
      }`}
    >
      {/* Featured Badge */}
      {module.featured && (
        <div className={`absolute -top-3 ${language === 'he' ? 'left-6' : 'right-6'} z-30`}>
          <div className="relative">
             <div className="absolute inset-0 bg-amber-400 blur-md rounded-full opacity-40 animate-pulse"></div>
             <div className="relative flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg border border-amber-300">
               <Star className="w-3 h-3 fill-white" />
               <span>{t.featured}</span>
             </div>
          </div>
        </div>
      )}

      {/* Background Gradient Splash */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
        <div 
          className={`absolute inset-0 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${module.gradient}`} 
        />
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${module.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right`} />
      </div>

      <div className="relative z-10 flex items-start justify-between mb-4">
        <div className="relative">
          <div className={`p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-inner group-hover:scale-110 transition-transform duration-300`}>
            <module.icon className={`w-8 h-8 ${module.textColor}`} strokeWidth={1.5} />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="p-2 rounded-xl bg-slate-100/50 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white dark:hover:bg-slate-700 transition-all opacity-0 group-hover:opacity-100 border border-transparent hover:border-purple-200"
            title={t.share}
            aria-label={t.share}
          >
            <Share2 className="w-4 h-4" />
          </button>
          <ExternalLink className="w-5 h-5 text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-all" />
        </div>
      </div>

      <div className="relative z-10 mt-auto">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 transition-all">
          {module.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
          {module.description}
        </p>
      </div>
    </motion.a>
  );
};

export default ModuleCard;