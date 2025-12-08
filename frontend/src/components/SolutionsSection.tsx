"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  TrendingUp,
  ShieldAlert,
  Users,
  ShoppingCart,
  Factory,
  Stethoscope,
  ArrowRight,
  CheckCircle2,
  BarChart3
} from "lucide-react";

// --- Type Definitions ---
interface SolutionItem {
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  icon: React.ElementType;
  color: string;
}

// --- DATA: PROBLEM -> SOLUTION -> OUTCOME ---
const solutions: SolutionItem[] = [
  {
    industry: "FinTech & Banking",
    title: "Algorithmic Risk & Fraud",
    challenge: "Traditional rule-based fraud detection produces too many false positives and misses complex patterns.",
    solution: "We deploy real-time anomaly detection models trained on historical transaction variances.",
    outcome: "Fraud Interception +99.8%",
    icon: ShieldAlert,
    color: "text-emerald-400",
  },
  {
    industry: "Sales & Growth",
    title: "Predictive Lead Scoring",
    challenge: "Sales teams waste 60% of their time chasing leads that will never convert.",
    solution: "Our machine learning models analyze behavioral signals to rank leads by propensity-to-buy.",
    outcome: "Conversion Rate +35%",
    icon: TrendingUp,
    color: "text-blue-400",
  },
  {
    industry: "Human Resources",
    title: "Talent Retention Engines",
    challenge: "High employee turnover is costly, and reactive retention offers are often too late.",
    solution: "We analyze engagement metrics and performance data to predict churn risk months in advance.",
    outcome: "Attrition Reduced by 25%",
    icon: Users,
    color: "text-fuchsia-400",
  },
  {
    industry: "Retail & E-Commerce",
    title: "Hyper-Personalization",
    challenge: "Generic recommendations fail to engage customers, leading to cart abandonment.",
    solution: "We implement collaborative filtering and deep learning to tailor every storefront pixel.",
    outcome: "Avg Order Value +18%",
    icon: ShoppingCart,
    color: "text-pink-400",
  },
  {
    industry: "Manufacturing",
    title: "Predictive Maintenance",
    challenge: "Equipment failure causes expensive downtime and unpredictable supply chain breaks.",
    solution: "IoT sensor data analysis forecasts component failure before it happens.",
    outcome: "Downtime Reduced by 40%",
    icon: Factory,
    color: "text-orange-400",
  },
  {
    industry: "Healthcare",
    title: "Operational Flow",
    challenge: "Inefficient patient allocation and resource scheduling create bottlenecks in care.",
    solution: "AI-driven demand forecasting optimizes staff allocation and bed management.",
    outcome: "Patient Throughput +22%",
    icon: Stethoscope,
    color: "text-cyan-400",
  },
];

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// --- COMPONENT: SOLUTION CARD ---
// --- COMPONENT: SOLUTION CARD (FIXED) ---
const SolutionCard = ({ item }: { item: SolutionItem }) => {
  const Icon = item.icon;

  return (
    <motion.div
      variants={cardVariants}
      // CHANGE 1: Added 'flex flex-col' here to manage vertical stacking directly on the parent
      className="group relative h-full flex flex-col bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-colors duration-500"
    >
      {/* Hover Gradient Sweep Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
      
      {/* Top Banner / Industry Tag - Added 'flex-shrink-0' so it never shrinks */}
      <div className="flex-shrink-0 px-6 py-4 border-b border-slate-800/50 bg-slate-950/30 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-indigo-400 transition-colors">
          {item.industry}
        </span>
        <Icon className={`w-5 h-5 ${item.color} opacity-80`} />
      </div>

      {/* Main Content Body - CHANGE 2: Changed 'h-full' to 'flex-1 flex flex-col' 
          This ensures this section takes up available space but expands if text is long */}
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-indigo-200 transition-colors">
          {item.title}
        </h3>

        {/* The Problem */}
        <div className="mb-4 relative pl-4 border-l-2 border-red-500/20">
            <p className="text-xs text-red-400/80 uppercase font-bold mb-1">The Challenge</p>
            <p className="text-slate-400 text-sm leading-relaxed">
                {item.challenge}
            </p>
        </div>

        {/* The Datronyx Solution - Added 'mb-8' for spacing */}
        <div className="mb-8 relative pl-4 border-l-2 border-indigo-500">
            <p className="text-xs text-indigo-400 uppercase font-bold mb-1">The Datronyx Fix</p>
            <p className="text-slate-200 text-sm leading-relaxed font-medium">
                {item.solution}
            </p>
        </div>

        {/* The Outcome Badge (Bottom) - CHANGE 3: 'mt-auto' works perfectly now because the parent is flex-1 */}
        <div className="mt-auto pt-6 border-t border-slate-800 flex items-center justify-between">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 ${item.color}`}>
                <BarChart3 size={14} />
                <span className="text-sm font-bold">{item.outcome}</span>
            </div>

            <Link href="/solutions" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-indigo-600 transition-all duration-300">
                <ArrowRight size={16} />
            </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function SolutionsSection() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-[#020617]">
      
      {/* --- BACKGROUND LAYERS --- */}
      {/* Tech Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
      
      {/* Radial Glows */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-950/30 border border-blue-500/20 backdrop-blur-md">
             <CheckCircle2 size={14} className="text-blue-400" />
             <span className="text-xs font-bold tracking-widest text-blue-300 uppercase">Industry Accelerators</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Applied Intelligence for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">
              Real-World Problems.
            </span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            Data services are the tool. <strong>These are the results.</strong> <br className="hidden md:block"/>
            Select your industry to see how Datronyx transforms operations.
          </p>
        </motion.div>

        {/* --- SOLUTIONS GRID --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((item, index) => (
            <SolutionCard key={index} item={item} />
          ))}
        </motion.div>

        {/* --- BOTTOM CTA --- */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-20 text-center"
        >
            <p className="text-slate-500 text-sm mb-4 uppercase tracking-widest font-semibold">Don't see your industry?</p>
            <Link 
                href="/contact"
                className="inline-flex items-center text-indigo-400 font-semibold hover:text-white transition-colors border-b border-indigo-500/30 pb-1 hover:border-indigo-400"
            >
                View our custom enterprise solutions <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
        </motion.div>

      </div>
    </section>
  );
}