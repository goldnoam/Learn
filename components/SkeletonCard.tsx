import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="relative flex flex-col p-6 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 h-[240px] overflow-hidden">
      {/* Shimmer overlay */}
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-slate-100/50 dark:via-slate-700/20 to-transparent z-10 pointer-events-none" />
      
      <div className="flex justify-between items-start mb-6 relative">
        <div className="w-14 h-14 rounded-2xl bg-slate-200 dark:bg-slate-700/50" />
        <div className="w-5 h-5 rounded bg-slate-200 dark:bg-slate-700/50" />
      </div>
      
      <div className="mt-auto space-y-3 relative">
        <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-700/50 rounded-lg" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-slate-200 dark:bg-slate-700/50 rounded-lg" />
          <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-700/50 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;