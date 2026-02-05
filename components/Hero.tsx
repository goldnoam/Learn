import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { translations } from '../translations.ts';
import { Language } from '../types.ts';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language];
  const { scrollY } = useScroll();
  
  const yBackground1 = useTransform(scrollY, [0, 500], [0, 150]);
  const yBackground2 = useTransform(scrollY, [0, 500], [0, -150]);

  const titleWords = t.title.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      <motion.div 
        style={{ y: yBackground1 }}
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" 
      />
      <motion.div 
        style={{ y: yBackground2 }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" 
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4 text-yellow-500" />
          <span>{t.badgesTitle}</span>
        </motion.div>
        
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-6 leading-tight flex flex-wrap justify-center gap-x-2 md:gap-x-4"
        >
          {titleWords.map((word, index) => (
            <motion.span key={index} variants={wordVariants}>{word}</motion.span>
          ))}
        </motion.h1>
        
        <div className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto flex flex-col items-center gap-1">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>{t.subtitle}</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>{t.subtitle2}</motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;