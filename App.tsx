import React, { useState, useEffect } from 'react';
import { LEARNING_MODULES } from './constants';
import ModuleCard from './components/ModuleCard';
import SkeletonCard from './components/SkeletonCard';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { Search, ArrowUp, ArrowDown, Sun, Moon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  
  // Theme Toggle State with Persistence
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  // Theme Application Effect
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Initial Load Simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll visibility logic
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButtons(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Search debounce and loading simulation
  useEffect(() => {
    if (searchTerm) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Debounce delay
      return () => clearTimeout(timer);
    }
  }, [searchTerm]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  const filteredModules = LEARNING_MODULES.filter(module => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return true;
    
    return (
      module.title.toLowerCase().includes(term) ||
      module.description.toLowerCase().includes(term)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-sans selection:bg-purple-500/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Theme Toggle Button */}
        <div className="absolute top-4 left-4 z-50">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-200 shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform active:scale-95"
            aria-label="החלף ערכת נושא"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600" />
            )}
          </button>
        </div>
        
        <Hero />

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-12 relative z-20">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pr-10 pl-3 py-3 border border-slate-200 dark:border-slate-700 rounded-xl leading-5 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 shadow-sm"
            placeholder="חיפוש נושא לימוד..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoComplete="off"
          />
        </div>

        {/* Main Grid */}
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10 pb-12">
          {isLoading ? (
            // Show Skeletons when loading
            Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          ) : filteredModules.length > 0 ? (
            filteredModules.map((module, index) => (
              <ModuleCard 
                key={module.id} 
                module={module} 
                index={index} 
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-slate-500 dark:text-slate-400">
              <p className="text-xl">לא נמצאו תוצאות עבור "{searchTerm}"</p>
            </div>
          )}
        </main>
        
        {/* Safety Badge / Emergency Callout */}
        <div className="max-w-4xl mx-auto mt-8 mb-16 p-1 rounded-2xl bg-gradient-to-r from-red-500/20 to-orange-500/20">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center border border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">זקוקים לעזרה דחופה?</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-4">לגישה מהירה למספרי חירום ומידע מציל חיים</p>
            <a 
              href="https://911il.vercel.app/"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition-colors"
            >
              מעבר לאתר החירום
            </a>
          </div>
        </div>

        <Footer />
        
        {/* Scroll Buttons */}
        <AnimatePresence>
          {showScrollButtons && (
            <>
              {/* Scroll to Bottom (Left) */}
              <motion.button
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                onClick={scrollToBottom}
                className="fixed bottom-8 left-8 z-50 p-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full shadow-lg shadow-purple-900/50 dark:shadow-purple-900/50 border border-purple-400/30 backdrop-blur-sm transition-colors group"
                aria-label="גלול לתחתית העמוד"
              >
                <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
              </motion.button>

              {/* Scroll to Top (Right) */}
              <motion.button
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-50 p-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full shadow-lg shadow-purple-900/50 dark:shadow-purple-900/50 border border-purple-400/30 backdrop-blur-sm transition-colors group"
                aria-label="גלול לראש העמוד"
              >
                <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;