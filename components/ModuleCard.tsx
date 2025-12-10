import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { LearningModule } from '../types';

interface ModuleCardProps {
  module: LearningModule;
  index: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, index }) => {
  return (
    <motion.a
      href={module.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group relative flex flex-col p-6 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-slate-500 transition-colors duration-300 hover:shadow-2xl hover:shadow-slate-900/80 overflow-visible"
    >
      {/* Background Gradient Splash (Visible on Hover) - Contained in a rounded div to prevent overflow while allowing tooltip to be visible */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
        <div 
          className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${module.gradient}`} 
        />
        {/* Bottom accent line moved inside clipped container */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${module.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right`} />
      </div>

      <div className="relative z-10 flex items-start justify-between mb-4">
        {/* Icon Wrapper with Tooltip */}
        <div className="relative group/tooltip">
          <div className={`p-3 rounded-2xl bg-slate-900/80 border border-slate-700/50 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
            <module.icon className={`w-8 h-8 ${module.textColor}`} strokeWidth={1.5} />
          </div>
          
          {/* Tooltip */}
          <div className="absolute -top-12 right-1/2 translate-x-1/2 px-3 py-1.5 bg-slate-900 text-slate-200 text-xs font-medium rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-slate-700 shadow-xl z-50">
            {module.title}
            {/* Tooltip Arrow */}
            <div className="absolute -bottom-1 right-1/2 translate-x-1/2 w-2 h-2 bg-slate-900 border-b border-l border-slate-700 transform -rotate-45"></div>
          </div>
        </div>

        <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-slate-300 transition-colors opacity-0 group-hover:opacity-100" />
      </div>

      <div className="relative z-10 mt-auto">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
          {module.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
          {module.description}
        </p>
      </div>
    </motion.a>
  );
};

export default ModuleCard;