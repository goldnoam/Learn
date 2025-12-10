import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax transforms for background blobs
  const yBackground1 = useTransform(scrollY, [0, 500], [0, 150]);
  const yBackground2 = useTransform(scrollY, [0, 500], [0, -150]);

  const titleText = "בחר את ההרפתקה הבאה שלך";
  const titleWords = titleText.split(" ");

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const descVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.0 + (i * 0.2), // Start after title finishes
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      {/* Background decorative elements with Parallax */}
      <motion.div 
        style={{ y: yBackground1 }}
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 mix-blend-multiply dark:mix-blend-normal pointer-events-none" 
      />
      <motion.div 
        style={{ y: yBackground2 }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 mix-blend-multiply dark:mix-blend-normal pointer-events-none" 
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
          <span>עולם של ידע והעשרה</span>
        </motion.div>
        
        {/* Staggered Word Title */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-6 leading-tight flex flex-wrap justify-center gap-x-2 md:gap-x-4"
        >
          {titleWords.map((word, index) => (
            <motion.span key={index} variants={wordVariants}>
              {word}
            </motion.span>
          ))}
        </motion.h1>
        
        {/* Staggered Description Lines */}
        <div className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto flex flex-col items-center gap-1">
          <motion.p
            custom={0}
            variants={descVariants}
            initial="hidden"
            animate="visible"
          >
            פורטל הלימודים המקיף לילדים, נוער ומבוגרים.
          </motion.p>
          <motion.p
            custom={1}
            variants={descVariants}
            initial="hidden"
            animate="visible"
          >
            ממדעים מדויקים ועד אומנות ויצירה – הכל במקום אחד.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;