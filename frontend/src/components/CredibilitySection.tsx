"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  TrendingUp, 
  Activity, 
  ShoppingCart, 
  ShieldCheck, 
  BrainCircuit,
  Database,
  ArrowUpRight,
  Stethoscope,
  Landmark,
  Store
} from 'lucide-react'; 

// --- TYPES ---
interface ImpactMetric {
  label: string;
  value: string;
  trend: string;
  color: string; // Tailwind class for text color
  graphColor: string; // Hex for SVG stroke
  graphPath: string;
}

interface IndustryData {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  metrics: ImpactMetric[];
  accentColor: string; // For gradients/glows
}

// --- DATA: INDUSTRY SPECIFIC ---
const industries: IndustryData[] = [
  {
    id: 'finance',
    name: 'Finance & Banking',
    icon: Landmark,
    description: "Detecting fraud in milliseconds and optimizing portfolio risk with predictive modeling.",
    accentColor: "from-emerald-500 to-teal-500",
    metrics: [
      { 
        label: "Fraud Intercepted", value: "$42M", trend: "99.8% Accuracy", 
        color: "text-emerald-400", graphColor: "#34D399", 
        graphPath: "M0 15 L20 18 L40 10 L60 12 L80 5 L100 8" 
      },
      { 
        label: "Risk Assessment", value: "-30%", trend: "Faster Processing", 
        color: "text-teal-400", graphColor: "#2DD4BF", 
        graphPath: "M0 5 L20 8 L40 15 L60 12 L80 18 L100 15" 
      },
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Bio',
    icon: Stethoscope,
    description: "Accelerating diagnostics and personalizing patient care plans through data synthesis.",
    accentColor: "from-blue-500 to-indigo-500",
    metrics: [
      { 
        label: "Diagnostic Speed", value: "3x", trend: "Faster Analysis", 
        color: "text-blue-400", graphColor: "#60A5FA", 
        graphPath: "M0 18 L20 15 L40 5 L60 8 L80 4 L100 2" 
      },
      { 
        label: "Patient Adherence", value: "+24%", trend: "AI Monitoring", 
        color: "text-indigo-400", graphColor: "#818CF8", 
        graphPath: "M0 15 L20 15 L40 12 L60 10 L80 8 L100 5" 
      },
    ]
  },
  {
    id: 'retail',
    name: 'Retail & E-Com',
    icon: Store,
    description: "Optimizing supply chains and creating hyper-personalized shopping experiences.",
    accentColor: "from-fuchsia-500 to-pink-500",
    metrics: [
      { 
        label: "Inventory Waste", value: "-18%", trend: "Smart Stocking", 
        color: "text-fuchsia-400", graphColor: "#E879F9", 
        graphPath: "M0 5 L20 8 L40 15 L60 18 L80 15 L100 12" 
      },
      { 
        label: "Conversion Rate", value: "+12%", trend: "Personalized Recs", 
        color: "text-pink-400", graphColor: "#F472B6", 
        graphPath: "M0 18 L20 16 L40 12 L60 8 L80 5 L100 2" 
      },
    ]
  },
];

// --- UNIVERSAL FEATURES (LEFT SIDE) ---
const universalFeatures = [
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "Predictive Intelligence",
    description: "Whether it's stock prices, patient risk, or inventory demand—our models foresee the future so you can prepare for it.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Unified Data Architecture",
    description: "We break down silos. Financial ledgers, patient records, or supply chains—we engineer a single source of truth.",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Real-Time Decisioning",
    description: "Batch processing is too slow. Our pipelines deliver insights in milliseconds, critical for fraud detection and acute care.",
  },
];

// Animation variants
const containerVariants: Variants = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }, 
};
const itemVariants: Variants = { 
    hidden: { opacity: 0, x: -30 }, 
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }, 
};

export default function DatronyxImpact() {
  const [activeTab, setActiveTab] = useState(industries[0]);

  return (
    <section className="w-full bg-[#020617] text-white py-20 md:py-28 px-4 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10"> 
        
        {/* --- HEADER --- */}
        <div className="mb-20 max-w-3xl">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-4"
            >
                <div className="h-[2px] w-8 bg-indigo-500" />
                <span className="text-indigo-400 font-mono text-xs tracking-[0.2em] uppercase">Multi-Industry Impact</span>
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
                Data is Universal.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
                    The Impact is Specific.
                </span>
            </motion.h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                Datronyx adapts to your domain. From securing financial transactions to optimizing patient care pathways, our engineering core drives results across sectors.
            </p>
        </div>
        
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"> 
          
          {/* --- LEFT: UNIVERSAL CAPABILITIES --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {universalFeatures.map((feature, index) => (
              <motion.div 
                variants={itemVariants} 
                key={index} 
                className="flex items-start space-x-6 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] transition-all duration-300 group"
              >
                <div className="flex-shrink-0 p-3 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:text-white group-hover:bg-indigo-500 transition-colors duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* --- RIGHT: INTERACTIVE INDUSTRY CARD --- */}
          <div className="relative lg:sticky lg:top-32">
            
            {/* 1. Industry Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
              {industries.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border
                    ${activeTab.id === ind.id 
                      ? 'bg-slate-800 text-white border-slate-600 shadow-lg' 
                      : 'bg-transparent text-slate-500 border-transparent hover:bg-slate-900 hover:text-slate-300'}
                  `}
                >
                  <span className="flex items-center gap-2">
                    <ind.icon size={14} />
                    {ind.name}
                  </span>
                </button>
              ))}
            </div>

            {/* 2. Dynamic Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative bg-gradient-to-br from-slate-900 to-[#0B0F19] rounded-3xl p-8 border border-slate-800/80 shadow-2xl overflow-hidden"
              >
                {/* Background Glow based on industry color */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${activeTab.accentColor} opacity-10 blur-[80px] rounded-full pointer-events-none`} />

                {/* Card Header */}
                <div className="relative z-10 mb-8">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${activeTab.accentColor} mb-4 shadow-lg`}>
                    <activeTab.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{activeTab.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {activeTab.description}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid gap-4 relative z-10">
                  {activeTab.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-white/5 rounded-xl p-4 flex items-center justify-between border border-white/5 hover:border-white/10 transition-colors">
                      
                      <div>
                        <p className="text-slate-400 text-sm font-medium mb-1">{metric.label}</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-white">{metric.value}</span>
                          <span className={`text-xs font-bold ${metric.color} bg-white/5 px-1.5 py-0.5 rounded flex items-center gap-1`}>
                             <ArrowUpRight size={10} /> {metric.trend}
                          </span>
                        </div>
                      </div>

                      {/* Mini Sparkline Graph */}
                      <div className="w-24 h-12">
                         <svg width="100%" height="100%" viewBox="0 0 100 20" fill="none">
                            <motion.path
                              d={metric.graphPath}
                              stroke={metric.graphColor}
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{ pathLength: 1, opacity: 1 }}
                              transition={{ duration: 1.5, delay: 0.2 }}
                            />
                         </svg>
                      </div>

                    </div>
                  ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center relative z-10">
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Case Study Available</span>
                  <Link 
                    href="/industries" 
                    className="text-sm text-white font-medium hover:text-indigo-400 transition-colors flex items-center gap-1"
                  >
                    View Details <ArrowUpRight size={14} />
                  </Link>
                </div>


              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}