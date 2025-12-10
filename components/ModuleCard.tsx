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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col p-6 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/50 hover:-translate-y-2 overflow-hidden"
    >
      {/* Background Gradient Splash (Visible on Hover) */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${module.gradient}`} 
      />

      <div className="relative z-10 flex items-start justify-between mb-4">
        <div className={`p-3 rounded-2xl bg-slate-900/80 border border-slate-700/50 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
          <module.icon className={`w-8 h-8 ${module.textColor}`} strokeWidth={1.5} />
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
      
      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${module.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right`} />
    </motion.a>
  );
};

export default ModuleCard;
