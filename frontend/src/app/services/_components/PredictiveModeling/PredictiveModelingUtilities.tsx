// components/PredictiveModeling/PredictiveModelingUtilities.jsx

"use client";

import React from "react";
import { motion } from "framer-motion"; 
import { ArrowRight } from "lucide-react";

// --- Abstract Visual Component for Hero (Forecasting theme) ---
export const ForecastingVisual = () => (
  <div className="relative w-full h-80 md:h-96 flex items-center justify-center">
    {/* Central Core */}
    <motion.div
        className="absolute w-24 h-24 bg-indigo-500 rounded-full blur-2xl opacity-50"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Animated Forecast Lines (representing time series) */}
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute w-full h-1/2 border-t-2 border-dashed border-cyan-400/50"
        style={{
          transformOrigin: 'bottom center',
          top: `${30 + i * 10}%`,
          opacity: 0.5 - i * 0.1,
          scaleX: 0.8
        }}
        animate={{
          rotate: [i * 5, i * 5 + 10, i * 5],
          opacity: [0.3, 0.6, 0.3],
          y: [0, -10, 0]
        }}
        transition={{
          duration: 4 + i,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.5
        }}
      />
    ))}
    
    {/* Floating Data Points */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={`node-${i}`}
        className="absolute w-3 h-3 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50"
        animate={{
            x: [0, Math.cos(i) * 150, 0],
            y: [0, Math.sin(i) * 150, 0],
            scale: [1, 1.5, 1]
        }}
        transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.8
        }}
      />
    ))}
  </div>
);

// --- Deliverable Item Component (Refined) ---
export const DeliverableItem: React.FC<{ title: string; desc?: string; Icon: React.ElementType }> = ({ title, desc, Icon }) => (
    <motion.li 
        className="group bg-gray-900/50 p-5 rounded-xl border border-gray-800 transition-all duration-300 hover:border-indigo-600/50 hover:shadow-2xl hover:shadow-indigo-600/10"
        whileHover={{ y: -3 }}
    >
        <div className="flex items-center mb-3">
            <Icon className="w-6 h-6 text-indigo-400 mr-3 transition-transform group-hover:scale-110" />
            <h4 className="font-semibold text-blue-400 text-lg">{title}</h4>
        </div>
        {desc && <p className="text-gray-400 mt-1 text-sm">{desc}</p>}
    </motion.li>
);