"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ServerCrash, 
  TrendingDown, 
  Clock,        
  FileWarning,  
  Workflow,     
  ShieldAlert,  
  Activity,
  ArrowRight
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

        {/* --- The Resolution Bridge (Footer) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 relative p-1 rounded-3xl bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-indigo-500/30"
        >
          <div className="bg-gray-950 rounded-[22px] py-12 px-6 md:px-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-indigo-500/10 blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                We turn these liabilities <span className="text-blue-700 font-extrabold">into assets.</span>
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Datronyx architects solutions that ensure your data becomes scalable, reliable, and a primary driver of revenue.
              </p>
              
              <button className="group inline-flex items-center justify-center text-indigo-300 font-bold hover:text-white transition-colors">
                <span className="border-b border-indigo-500/50 group-hover:border-white pb-1">Let's have Talk</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}