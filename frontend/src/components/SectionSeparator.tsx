// components/SectionSeparator.tsx (FINAL REVISION: MINIMAL HEIGHT FOR BLENDING)
import React from 'react';

export default function SectionSeparator() {
  return (
    <div className="relative w-full h-2 -my-1 flex items-center justify-center overflow-hidden">
      
      {/* 1. Blurred layer for the glow effect */}
      <div className="relative w-3/4 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-70 blur-sm"></div>
      
      {/* 2. Sharper layer for the core light */}
      <div className="absolute w-3/4 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80"></div>
    </div>
  );
}