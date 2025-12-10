"use client";

import React from "react";
import Link from "next/link"; // Imported Link
import { motion } from "framer-motion";
import { 
  ServerCrash, 
  TrendingDown, 
  Clock,        
  FileWarning,  
  Workflow,     
  ShieldAlert,  
  Activity,
  ArrowRight,
  XCircle,
  CheckCircle2,
  Zap
} from "lucide-react";

// --- Types ---

interface ChallengeTheme {
  iconColor: string;
  iconBg: string;
  iconBorder: string;
  shineColor: string;
  hoverBorder: string;
}

interface ChallengeItem {
  icon: React.ElementType;
  title: string;
  desc: string;
  riskLevel: string;
  theme: ChallengeTheme;
}

interface ProblemCardProps extends ChallengeItem {
  index: number;
}

// --- Data Configuration ---

const challenges: ChallengeItem[] = [
  {
    icon: ServerCrash,
    title: "Fragmented Data Silos",
    desc: "Critical intelligence is trapped in disconnected systems, making a unified view impossible.",
    riskLevel: "Critical",
    theme: {
      iconColor: "text-red-400",
      iconBg: "bg-red-500/10",
      iconBorder: "border-red-500/20",
      shineColor: "bg-red-500", 
      hoverBorder: "group-hover:border-red-500/50"
    }
  },
  {
    icon: TrendingDown,
    title: "Inaccurate Forecasting",
    desc: "Slow data processing leads to outdated reporting and missed opportunities.",
    riskLevel: "High",
    theme: {
      iconColor: "text-orange-400",
      iconBg: "bg-orange-500/10",
      iconBorder: "border-orange-500/20",
      shineColor: "bg-orange-500",
      hoverBorder: "group-hover:border-orange-500/50"
    }
  },
  {
    icon: Clock,
    title: "Latency in Operations",
    desc: "Lack of real-time insights means teams are reacting to yesterday’s problems.",
    riskLevel: "Medium",
    theme: {
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/10",
      iconBorder: "border-blue-500/20",
      shineColor: "bg-blue-500",
      hoverBorder: "group-hover:border-blue-500/50"
    }
  },
  {
    icon: FileWarning,
    title: "Manual & Error-Prone",
    desc: "Teams wasting hours on spreadsheet wrangling increases the risk of human error.",
    riskLevel: "High",
    theme: {
      iconColor: "text-pink-400",
      iconBg: "bg-pink-500/10",
      iconBorder: "border-pink-500/20",
      shineColor: "bg-pink-500",
      hoverBorder: "group-hover:border-pink-500/50"
    }
  },
  {
    icon: Workflow,
    title: "ML Deployment Gaps",
    desc: "Data science models stay stuck in notebooks and fail to scale into production.",
    riskLevel: "Medium",
    theme: {
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10",
      iconBorder: "border-emerald-500/20",
      shineColor: "bg-emerald-500",
      hoverBorder: "group-hover:border-emerald-500/50"
    }
  },
  {
    icon: ShieldAlert,
    title: "Governance & Risk",
    desc: "Weak compliance frameworks expose the enterprise to regulatory risk.",
    riskLevel: "Critical",
    theme: {
      iconColor: "text-purple-400",
      iconBg: "bg-purple-500/10",
      iconBorder: "border-purple-500/20",
      shineColor: "bg-purple-500",
      hoverBorder: "group-hover:border-purple-500/50"
    }
  },
];

// --- Sub-Components ---

const ProblemCard = ({ icon: Icon, title, desc, riskLevel, theme, index }: ProblemCardProps) => {
  const riskColor = riskLevel === 'Critical' ? 'bg-red-500' : 
                    riskLevel === 'High' ? 'bg-orange-500' : 'bg-blue-500';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-full"
    >
      {/* 1. TOP RIGHT SHINE */}
      <div 
        className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${theme.shineColor}`} 
      />
      
      {/* Card Content Container */}
      <div className={`relative h-full p-8 rounded-2xl bg-gray-900/40 border border-white/5 ${theme.hoverBorder} transition-colors duration-300 backdrop-blur-md overflow-hidden flex flex-col shadow-lg`}>
        
        {/* Header: Icon & Risk Badge */}
        <div className="flex justify-between items-start mb-6 relative z-10">
          {/* Icon Box with specific colors */}
          <div className={`p-3 rounded-xl border ${theme.iconBg} ${theme.iconBorder}`}>
            <Icon className={`w-7 h-7 ${theme.iconColor}`} />
          </div>
          
          {/* Risk Level Badge */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-950 border border-gray-800">
            <div className={`w-1.5 h-1.5 rounded-full ${riskColor} ${riskLevel === 'Critical' ? 'animate-pulse' : ''}`} />
            <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider">
              {riskLevel}
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex-grow">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {desc}
            </p>
        </div>

        {/* Bottom Decorative Line (Colored on Hover) */}
        <div className="relative z-10 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div 
            className={`h-full ${theme.shineColor} rounded-full opacity-50`} 
            initial={{ width: "20%" }}
            whileHover={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

// --- NEW: Transformation Bridge Component ---
const TransformationBridge = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="mt-24 relative"
    >
      {/* Glowing Backdrop */}
      <div className="absolute inset-0 bg-indigo-600/20 blur-[100px] rounded-full opacity-50 pointer-events-none" />

      {/* Main Container */}
      <div className="relative bg-[#020410] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Top Decorative Border Gradient */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 via-gray-700 to-indigo-500" />

        <div className="grid grid-cols-1 lg:grid-cols-11 gap-0 lg:gap-8 p-8 lg:p-12 items-center">
          
          {/* LEFT: The Pain Points (Current State) */}
          <div className="lg:col-span-4 space-y-6 relative z-10">
             <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-mono uppercase text-red-400 tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                  Current State
                </span>
             </div>
             <h3 className="text-2xl font-bold text-gray-300">Operational Friction</h3>
             
             <ul className="space-y-4">
                <li className="flex items-start gap-3 opacity-60 group hover:opacity-100 transition-opacity">
                   <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                   <span className="text-sm text-gray-400">Reactive decision making based on gut feeling</span>
                </li>
                <li className="flex items-start gap-3 opacity-60 group hover:opacity-100 transition-opacity">
                   <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                   <span className="text-sm text-gray-400">Data bottlenecks slowing down product launches</span>
                </li>
                <li className="flex items-start gap-3 opacity-60 group hover:opacity-100 transition-opacity">
                   <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                   <span className="text-sm text-gray-400">High maintenance costs for legacy pipelines</span>
                </li>
             </ul>
          </div>

          {/* CENTER: The Transformation Engine (Visual Divider) */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center py-8 lg:py-0 relative">
             {/* Animated Arrow Connector */}
             <div className="hidden lg:flex items-center justify-center w-full relative">
                 <div className="absolute w-full h-px bg-gradient-to-r from-red-900/50 to-indigo-900/50" />
                 <div className="relative z-10 w-16 h-16 rounded-full bg-[#0A0D1E] border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(79,70,229,0.3)]">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-t border-indigo-500 opacity-50"
                    />
                    <ArrowRight className="text-white w-6 h-6" />
                 </div>
             </div>
             
             {/* Mobile Arrow */}
             <ArrowRight className="lg:hidden text-gray-600 w-8 h-8 rotate-90 my-4" />
          </div>

          {/* RIGHT: The Datronyx Solution (Future State) */}
          <div className="lg:col-span-4 space-y-6 relative z-10">
             <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-mono uppercase text-indigo-400 tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                  Datronyx Standard
                </span>
             </div>
             <h3 className="text-2xl font-bold text-white">Autonomous Intelligence</h3>
             
             <ul className="space-y-4">
                <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                   <span className="text-sm text-gray-300">Predictive modeling <span className="text-indigo-400">before</span> revenue dips</span>
                </li>
                <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                   <span className="text-sm text-gray-300">Unified Data Lakehouse for <span className="text-indigo-400">single-source truth</span></span>
                </li>
                <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                   <span className="text-sm text-gray-300">Automated governance & <span className="text-indigo-400">self-healing pipelines</span></span>
                </li>
             </ul>
          </div>

        </div>

        {/* BOTTOM: Action Bar */}
        <div className="bg-indigo-950/20 border-t border-white/5 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
                <div className="p-2 bg-indigo-500/20 rounded-lg">
                    <Zap className="text-indigo-400 w-5 h-5 fill-current" />
                </div>
                <div>
                    <p className="text-white font-medium text-sm">Ready to upgrade your infrastructure?</p>
                    <p className="text-gray-500 text-xs">Free architecture audit included.</p>
                </div>
            </div>

            <Link href="/contact" className="group relative px-8 py-3 bg-white text-black font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-indigo-100 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <span className="relative flex items-center gap-2">
                    Initiate Transformation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
            </Link>
        </div>

      </div>
    </motion.div>
  );
};


export default function IndustryProblems() {
  const darkBg = "#0A0D1E";

  return (
    <section 
      className="relative w-full py-24 overflow-hidden"
      style={{ backgroundColor: darkBg }}
    >
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radar/Circle Effect in Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,#1e1b4b_0%,transparent_70%)] opacity-50" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Section Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-indigo-600/10 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Activity className="w-3 h-3 text-blue-400" />
            <span>The Diagnostic</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Your Challenges. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-700">
              Our Expertise.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            The modern enterprise generates more data than ever—yet most organizations struggle to turn that data into a competitive advantage.
          </motion.p>
        </div>

        {/* --- The Grid of Problems --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {challenges.map((challenge, idx) => (
            <ProblemCard key={idx} index={idx} {...challenge} />
          ))}
        </div>

        {/* --- The New Stunning CTA (Transformation Bridge) --- */}
        <TransformationBridge />

      </div>
    </section>
  );
}