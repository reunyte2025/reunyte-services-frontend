// component/loading.tsx
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-b from-[#0a1628] via-[#162952] to-[#1e3a5f]">
      <div className="relative">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-blue-500/30 rounded-full blur-3xl animate-pulse" 
               style={{ animationDuration: '2s' }} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-blue-400/40 rounded-full blur-2xl animate-pulse" 
               style={{ animationDuration: '2.5s', animationDelay: '0.3s' }} />
        </div>
        
        {/* Logo container */}
        <div className="relative z-10 flex flex-col items-center gap-6">
          {/* Reunyte logo representation */}
          <div className="relative w-16 h-16">
            <div className="absolute top-0 left-0 w-10 h-10 bg-white rounded-sm animate-pulse" 
                 style={{ animationDuration: '1.5s' }} />
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-blue-500 rounded-full animate-pulse" 
                 style={{ animationDuration: '1.5s', animationDelay: '0.2s' }} />
          </div>
          
          {/* Loading text */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-white text-lg font-medium tracking-wide">Loading</p>
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                  style={{ 
                    animationDuration: '1.4s',
                    animationDelay: `${i * 0.2}s` 
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;