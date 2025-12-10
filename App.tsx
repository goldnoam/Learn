import React, { useState, useEffect } from 'react';
import { LEARNING_MODULES } from './constants';
import ModuleCard from './components/ModuleCard';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { Search, ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-purple-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Hero />

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-12 relative z-20">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pr-10 pl-3 py-3 border border-slate-700 rounded-xl leading-5 bg-slate-800/50 text-slate-100 placeholder-slate-400 focus:outline-none focus:bg-slate-800 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
            placeholder="חיפוש נושא לימוד..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoComplete="off"
          />
        </div>

        {/* Main Grid */}
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10 pb-12">
          {filteredModules.length > 0 ? (
            filteredModules.map((module, index) => (
              <ModuleCard 
                key={module.id} 
                module={module} 
                index={index} 
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-slate-400">
              <p className="text-xl">לא נמצאו תוצאות עבור "{searchTerm}"</p>
            </div>
          )}
        </main>
        
        {/* Safety Badge / Emergency Callout */}
        <div className="max-w-4xl mx-auto mt-8 mb-16 p-1 rounded-2xl bg-gradient-to-r from-red-500/20 to-orange-500/20">
          <div className="bg-slate-900 rounded-xl p-6 text-center border border-slate-800">
            <h2 className="text-xl font-bold text-slate-200 mb-2">זקוקים לעזרה דחופה?</h2>
            <p className="text-slate-400 mb-4">לגישה מהירה למספרי חירום ומידע מציל חיים</p>
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
        
        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 p-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full shadow-lg shadow-purple-900/50 border border-purple-400/30 backdrop-blur-sm transition-colors group"
              aria-label="גלול לראש העמוד"
            >
              <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;