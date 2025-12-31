import React from 'react';
import { ExternalLink, Star, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { LearningModule } from '../types';

interface ModuleCardProps {
  module: LearningModule;
  index: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, index }) => {
  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const shareData = {
      title: module.title,
      text: `${module.description}\n\nנשלח דרך פורטל הלמידה:`,
      url: module.url,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback for browsers that don't support Web Share API
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${module.title}: ${module.url}`)}`;
        window.open(whatsappUrl, '_blank');
      }
    } catch (err) {
      // Ignore abort errors from the user cancelling the share dialog
      if ((err as Error).name !== 'AbortError') {
        console.error('Sharing failed:', err);
      }
    }
  };

  return (
    <motion.a
      href={module.url}
      target="_blank"
      rel="noopener noreferrer"
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
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 20
        }
      }}
      className={`group relative flex flex-col p-6 rounded-3xl bg-white dark:bg-slate-800/50 transition-all duration-300 overflow-visible ${
        module.featured 
          ? 'border-2 border-amber-400 dark:border-amber-500 shadow-xl shadow-amber-500/10 dark:shadow-amber-900/20 hover:shadow-amber-500/30 dark:hover:shadow-amber-900/40' 
          : 'border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/80'
      }`}
    >
      {/* Featured Badge */}
      {module.featured && (
        <div className="absolute -top-3 left-6 z-30">
          <div className="relative">
             <div className="absolute inset-0 bg-amber-400 blur-md rounded-full opacity-40 animate-pulse"></div>
             <div className="relative flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg border border-amber-300">
               <Star className="w-3 h-3 fill-white" />
               <span>מומלץ</span>
             </div>
          </div>
        </div>
      )}

      {/* Background Gradient Splash (Visible on Hover) */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
        <div 
          className={`absolute inset-0 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${module.gradient}`} 
        />
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${module.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right`} />
      </div>

      <div className="relative z-10 flex items-start justify-between mb-4">
        {/* Icon Wrapper with Tooltip */}
        <div className="relative group/tooltip">
          <div className={`p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-inner group-hover:scale-110 transition-transform duration-300`}>
            <module.icon className={`w-8 h-8 ${module.textColor}`} strokeWidth={1.5} />
          </div>
          
          {/* Tooltip */}
          <div className="absolute -top-12 right-1/2 translate-x-1/2 px-3 py-1.5 bg-slate-800 dark:bg-slate-900 text-white dark:text-slate-200 text-xs font-medium rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-slate-700 shadow-xl z-50">
            {module.title}
            <div className="absolute -bottom-1 right-1/2 translate-x-1/2 w-2 h-2 bg-slate-800 dark:bg-slate-900 border-b border-l border-slate-700 transform -rotate-45"></div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Share Button */}
          <button
            onClick={handleShare}
            className="p-2 rounded-xl bg-slate-100/50 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white dark:hover:bg-slate-700 transition-all opacity-0 group-hover:opacity-100 border border-transparent hover:border-purple-200 dark:hover:border-purple-900/50"
            title="שתף נושא זה"
          >
            <Share2 className="w-4 h-4" />
          </button>
          
          <ExternalLink className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors opacity-0 group-hover:opacity-100" />
        </div>
      </div>

      <div className="relative z-10 mt-auto">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-500 dark:group-hover:from-white dark:group-hover:to-slate-300 transition-all">
          {module.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed group-hover:text-slate-600 dark:group-hover:text-slate-300">
          {module.description}
        </p>
      </div>
    </motion.a>
  );
};

export default ModuleCard;