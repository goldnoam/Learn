import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const yBackground1 = useTransform(scrollY, [0, 500], [0, 150]);
  const yBackground2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <motion.div 
        style={{ y: yBackground1 }}
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" 
      />
      <motion.div 
        style={{ y: yBackground2 }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" 
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium mb-6"
        >
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span>עולם של ידע והעשרה</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 leading-tight"
        >
          בחר את ההרפתקה הבאה שלך
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
        >
          פורטל הלימודים המקיף לילדים, נוער ומבוגרים.
          <br className="hidden md:block"/>
          ממדעים מדויקים ועד אומנות ויצירה – הכל במקום אחד.
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;