import React, { useState, useEffect, useRef, useMemo } from 'react';
import { LEARNING_MODULES } from './constants';
import ModuleCard from './components/ModuleCard';
import SkeletonCard from './components/SkeletonCard';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { Search, ArrowUp, ArrowDown, Sun, Moon, Type, Languages, X, Download } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { translations } from './translations';
import { Language, FontSize } from './types';

// Simple TTS Helper
export const speak = (text: string, lang: Language) => {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  // Map our language keys to BCP 47 codes
  const langMap: Record<Language, string> = {
    he: 'he-IL', en: 'en-US', zh: 'zh-CN', hi: 'hi-IN', de: 'de-DE', es: 'es-ES', fr: 'fr-FR'
  };
  utterance.lang = langMap[lang];
  window.speechSynthesis.speak(utterance);
};

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const firstRender = useRef(true);
  
  // States
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('lang') as Language) || 'he';
  });
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    return (localStorage.getItem('fontSize') as FontSize) || 'md';
  });
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  });

  const t = translations[language];

  // Language Persistence & Direction
  useEffect(() => {
    localStorage.setItem('lang', language);
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  // Font Size Persistence
  useEffect(() => {
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  // Theme Persistence
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
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Scroll visibility
  useEffect(() => {
    const handleScroll = () => setShowScrollButtons(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Search Logic
  const filteredModules = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return LEARNING_MODULES;
    return LEARNING_MODULES.filter(m => 
      m.title.toLowerCase().includes(term) || 
      m.description.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const suggestions = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return LEARNING_MODULES.filter(m => 
      m.title.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 5);
  }, [searchTerm]);

  // Actions
  const toggleTheme = () => setTheme(p => p === 'dark' ? 'light' : 'dark');
  const toggleFontSize = () => {
    const sizes: FontSize[] = ['sm', 'md', 'lg'];
    setFontSize(p => sizes[(sizes.indexOf(p) + 1) % sizes.length]);
  };
  const toggleLanguage = () => {
    const langs: Language[] = ['he', 'en', 'es', 'fr', 'de', 'zh', 'hi'];
    setLanguage(p => langs[(langs.indexOf(p) + 1) % langs.length]);
  };

  const exportData = () => {
    const blob = new Blob([JSON.stringify(filteredModules, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lomdim-search-results-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const text = e.dataTransfer.getData('text');
    if (text) setSearchTerm(text);
  };

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-sans selection:bg-purple-500/30 transition-colors duration-300 font-size-${fontSize}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Navigation / Actions Bar */}
        <div className="fixed top-4 left-4 right-4 z-50 flex justify-between pointer-events-none">
          <div className="flex gap-2 pointer-events-auto">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform active:scale-95"
              aria-label={t.themeToggle}
              onMouseEnter={() => speak(t.themeToggle, language)}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>
            <button
              onClick={toggleFontSize}
              className="p-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform active:scale-95 flex items-center gap-1"
              aria-label={t.fontToggle}
              onMouseEnter={() => speak(t.fontToggle, language)}
            >
              <Type className="w-5 h-5" />
              <span className="text-xs font-bold uppercase">{fontSize}</span>
            </button>
            <button
              onClick={toggleLanguage}
              className="p-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform active:scale-95 flex items-center gap-1"
              aria-label={t.langToggle}
              onMouseEnter={() => speak(t.langToggle, language)}
            >
              <Languages className="w-5 h-5" />
              <span className="text-xs font-bold uppercase">{language}</span>
            </button>
          </div>
        </div>
        
        <Hero language={language} />

        {/* Search Bar Enhanced */}
        <div className="relative max-w-xl mx-auto mb-12 z-20" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
          <div className="relative">
            <div className={`absolute inset-y-0 ${language === 'he' ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className={`block w-full ${language === 'he' ? 'pr-10 pl-16' : 'pl-10 pr-16'} py-4 border border-slate-200 dark:border-slate-700 rounded-2xl leading-5 bg-white dark:bg-slate-800/80 backdrop-blur text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all shadow-xl`}
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              autoComplete="off"
              role="combobox"
              aria-expanded={showSuggestions}
            />
            
            <div className={`absolute inset-y-0 ${language === 'he' ? 'left-0 pl-2' : 'right-0 pr-2'} flex items-center gap-1`}>
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')} 
                  className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  aria-label={t.clear}
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              <button 
                onClick={exportData} 
                className="p-2 text-slate-400 hover:text-purple-500"
                aria-label={t.export}
                title={t.export}
              >
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Auto-complete Suggestions */}
          <AnimatePresence>
            {showSuggestions && suggestions.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50"
              >
                <div className="px-4 py-2 bg-slate-50 dark:bg-slate-900/50 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {t.suggestions}
                </div>
                {suggestions.map(s => (
                  <button
                    key={s.id}
                    className="w-full text-right px-4 py-3 hover:bg-purple-50 dark:hover:bg-purple-900/20 text-slate-700 dark:text-slate-200 transition-colors flex items-center justify-between"
                    onClick={() => {
                      setSearchTerm(s.title);
                      setShowSuggestions(false);
                    }}
                  >
                    <span>{s.title}</span>
                    <s.icon className="w-4 h-4 opacity-50" />
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Main Grid */}
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10 pb-12" role="list">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          ) : filteredModules.length > 0 ? (
            filteredModules.map((module, index) => (
              <ModuleCard 
                key={module.id} 
                module={module} 
                index={index} 
                language={language}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-slate-500 dark:text-slate-400">
              <p className="text-xl italic">{t.noResults} "{searchTerm}"</p>
            </div>
          )}
        </main>
        
        {/* Safety Callout */}
        <div className="max-w-4xl mx-auto mt-8 mb-16 p-1 rounded-2xl bg-gradient-to-r from-red-500/20 to-orange-500/20">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 text-center border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-black text-slate-800 dark:text-slate-200 mb-2">{t.emergencyTitle}</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-6">{t.emergencySubtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://911il.vercel.app/"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold transition-all shadow-lg hover:scale-105 active:scale-95"
                onMouseEnter={() => speak(t.emergencyBtn, language)}
              >
                {t.emergencyBtn}
              </a>
              <a 
                href="https://bohrim-bahaim.vercel.app/"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-lg hover:scale-105 active:scale-95"
                onMouseEnter={() => speak(t.preventionBtn, language)}
              >
                {t.preventionBtn}
              </a>
              <a 
                href="https://not-smoking.vercel.app/"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-zinc-700 hover:bg-zinc-800 text-white font-bold transition-all shadow-lg hover:scale-105 active:scale-95"
                onMouseEnter={() => speak(t.smokingBtn, language)}
              >
                {t.smokingBtn}
              </a>
            </div>
          </div>
        </div>

        <Footer language={language} />
        
        {/* Scroll Buttons */}
        <AnimatePresence>
          {showScrollButtons && (
            <div className="fixed bottom-8 left-8 right-8 z-50 flex justify-between pointer-events-none">
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="pointer-events-auto p-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full shadow-2xl border border-white/20 transition-all group"
                aria-label="Scroll Down"
              >
                <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="pointer-events-auto p-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full shadow-2xl border border-white/20 transition-all group"
                aria-label="Scroll Up"
              >
                <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;