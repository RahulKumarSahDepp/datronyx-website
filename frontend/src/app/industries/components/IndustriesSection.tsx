"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Landmark, 
    HeartPulse, 
    ShoppingCart, 
    Factory, 
    Signal, 
    Zap, 
    Briefcase, 
    AlertTriangle, 
    Lightbulb, 
    TrendingUp, 
    ChevronDown,
    Sparkles
} from "lucide-react";

// --- 1. SCOPED BACKGROUND COMPONENTS ---
// These are positioned 'absolute' to stay ONLY within this section

const StarBackground = () => {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: number; opacity: number }[]>([]);

  useEffect(() => {
    const starCount = 20; 
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-indigo-200 rounded-full"
          style={{ top: star.top, left: star.left, width: star.size, height: star.size, opacity: star.opacity }}
          animate={{ opacity: [star.opacity, 1, star.opacity] }}
          transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

const TechnicalGrid = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    <div 
      className="absolute inset-0 opacity-[0.07]" 
      style={{
        backgroundImage: `linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)`,
        backgroundSize: '40px 40px' 
      }}
    />
  </div>
);

const VintageOverlay = () => (
  <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
      <svg className="w-full h-full"><filter id="noiseFilterSection"><feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#noiseFilterSection)" /></svg>
    </div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]" />
  </div>
);

// --- 2. DATA ---

const industryData = [
    {
        title: "Finance & Banking",
        icon: Landmark,
        challenges: "Regulatory compliance, fraud detection, risk assessment.",
        solutions: "Predictive modeling, real-time fraud analytics, BI dashboards.",
        outcomes: "Improved risk management, higher compliance, faster insights.",
        color: "blue",
    },
    {
        title: "Healthcare & Life Sciences",
        icon: HeartPulse,
        challenges: "Patient care optimization, operational efficiency.",
        solutions: "Predictive analytics, AI diagnostics, data governance.",
        outcomes: "Enhanced care, reduced costs, compliance-ready data.",
        color: "emerald",
    },
    {
        title: "Retail & E-Commerce",
        icon: ShoppingCart,
        challenges: "Demand forecasting, inventory optimization, personalization.",
        solutions: "Sales models, recommendation engines, real-time dashboards.",
        outcomes: "Increased sales, reduced stockouts, better experiences.",
        color: "pink",
    },
    {
        title: "Manufacturing",
        icon: Factory,
        challenges: "Inefficiencies, equipment downtime, supply chain issues.",
        solutions: "Predictive maintenance, process optimization, IoT analytics.",
        outcomes: "Reduced downtime, optimized production, cost savings.",
        color: "amber",
    },
    {
        title: "Telecommunications",
        icon: Signal,
        challenges: "Network reliability, customer churn, service optimization.",
        solutions: "Predictive churn models, network analytics, MLOps.",
        outcomes: "Improved retention, enhanced performance, data-driven expansion.",
        color: "purple",
    },
    {
        title: "Energy & Utilities",
        icon: Zap,
        challenges: "Demand forecasting, resource optimization, compliance.",
        solutions: "Consumption models, AI-driven maintenance, sustainability analytics.",
        outcomes: "Optimized distribution, cost savings, compliance assurance.",
        color: "cyan",
    },
    {
        title: "Government",
        icon: Briefcase,
        challenges: "Efficient public services, data transparency, citizen engagement.",
        solutions: "Data strategy, predictive analytics for allocation.",
        outcomes: "Improved services, actionable insights, optimized resources.",
        color: "indigo",
    },
];

// --- 3. SUB-COMPONENTS ---

interface DetailBlockProps {
    Icon: React.ElementType;
    title: string;
    content: string;
    colorTheme: { text: string };
}

const DetailBlock: React.FC<DetailBlockProps> = ({ Icon, title, content, colorTheme }) => (
    <div className="flex items-start space-x-4 p-3 rounded-lg bg-slate-950/30 border border-slate-800/50 hover:border-slate-700 transition-colors">
        <div className={`mt-1 p-1.5 rounded bg-slate-900 ${colorTheme.text}`}>
            <Icon className="w-4 h-4" />
        </div>
        <div>
            <h5 className={`font-bold text-xs uppercase tracking-wider mb-1 ${colorTheme.text}`}>{title}</h5>
            <p className="text-slate-300 text-sm leading-relaxed">{content}</p>
        </div>
    </div>
);

// Define the shape of our theme object for TypeScript safety
interface ThemeStyles {
    border: string;
    bg: string;
    text: string;
    glow: string;
}

interface IndustryCardProps {
    data: typeof industryData[0];
    isActive: boolean;
    onToggle: () => void;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ data, isActive, onToggle }) => {
    
    // 1. Define the color map
    // We explicitly type the keys to match the possible colors in your data
    const colorStyles: Record<string, ThemeStyles> = {
        blue:    { border: 'border-blue-500',    bg: 'bg-blue-500/10',    text: 'text-blue-400',    glow: 'shadow-blue-500/20' },
        emerald: { border: 'border-emerald-500', bg: 'bg-emerald-500/10', text: 'text-emerald-400', glow: 'shadow-emerald-500/20' },
        pink:    { border: 'border-pink-500',    bg: 'bg-pink-500/10',    text: 'text-pink-400',    glow: 'shadow-pink-500/20' },
        amber:   { border: 'border-amber-500',   bg: 'bg-amber-500/10',   text: 'text-amber-400',   glow: 'shadow-amber-500/20' },
        purple:  { border: 'border-purple-500',  bg: 'bg-purple-500/10',  text: 'text-purple-400',  glow: 'shadow-purple-500/20' },
        cyan:    { border: 'border-cyan-500',    bg: 'bg-cyan-500/10',    text: 'text-cyan-400',    glow: 'shadow-cyan-500/20' },
        indigo:  { border: 'border-indigo-500',  bg: 'bg-indigo-500/10',  text: 'text-indigo-400',  glow: 'shadow-indigo-500/20' },
    };

    // 2. Safe Access with Fallback
    // If data.color is not found in colorStyles, default to 'blue' to prevent crashes/errors
    const theme = colorStyles[data.color] || colorStyles.blue;

    return (
        <motion.div
            layout 
            onClick={onToggle}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ layout: { duration: 0.3, type: "spring", stiffness: 300, damping: 30 } }}
            className={`
                relative overflow-hidden rounded-xl border cursor-pointer backdrop-blur-md h-fit
                ${isActive 
                    ? `${theme.border} bg-slate-900/80 shadow-lg ${theme.glow}` 
                    : `border-slate-800 bg-slate-900/40 hover:border-slate-600 hover:bg-slate-900/60`
                }
            `}
        >
            {/* Header */}
            <div className={`p-5 flex items-center justify-between ${isActive ? theme.bg : 'bg-transparent'}`}>
                <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg bg-slate-950 border border-slate-800 ${theme.text}`}>
                        <data.icon className="w-6 h-6" />
                    </div>
                    <h3 className={`text-lg font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-200'}`}>
                        {data.title}
                    </h3>
                </div>
                <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${isActive ? `rotate-180 ${theme.text}` : 'text-slate-500'}`} 
                />
            </div>

            {/* Accordion Body */}
            <AnimatePresence mode="wait">
                {isActive && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="p-5 pt-0 space-y-4 border-t border-slate-800/50 mt-2">
                             {/* Separator */}
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-4" />
                            
                            <DetailBlock 
                                Icon={AlertTriangle} 
                                title="Challenges" 
                                content={data.challenges} 
                                colorTheme={theme}
                            />
                            <DetailBlock 
                                Icon={Lightbulb} 
                                title="Solutions" 
                                content={data.solutions} 
                                colorTheme={theme}
                            />
                            <DetailBlock 
                                Icon={TrendingUp} 
                                title="Outcomes" 
                                content={data.outcomes} 
                                colorTheme={theme}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// --- 4. MAIN COMPONENT ---

export default function IndustriesSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="relative w-full py-24 overflow-hidden bg-[#020617]">
            
            {/* --- Scoped Background Layers --- */}
            <TechnicalGrid />
            <StarBackground />
            <VintageOverlay />
            
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none" />

            {/* --- Content --- */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md mb-6"
                    >
                        <Sparkles className="w-3 h-3 text-indigo-400" />
                        <span className="text-xs font-semibold text-indigo-200 uppercase tracking-widest">
                            Sectors We Serve
                        </span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Tailored Solutions for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                            Every Industry Vertical
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        Datronyx architects intelligent, compliant, and high-impact solutions customized for the unique regulatory and operational needs of your industry.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                {/* 'items-start' is crucial here: prevents adjacent cards from stretching when one opens */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
                    {industryData.map((data, index) => (
                        <IndustryCard
                            key={index}
                            data={data}
                            isActive={activeIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}