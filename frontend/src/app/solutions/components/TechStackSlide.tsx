"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Scaling, 
  Target, 
  Users, 
  Layers, 
  Code2, 
  ArrowUpRight, 
  Database, 
  Cloud, 
  Box, 
  Cpu
} from "lucide-react";

// --- Types ---
interface TechItem {
  name: string;
  color: string;
  border: string;
  bg: string;
  icon: React.ElementType;
}

interface FeatureItem {
  title: string;
  desc: string;
  icon: React.ElementType;
  colSpan: string;
  theme: string;
  gradient: string;
  shadow: string;
}

// --- Data Configuration ---

// Mapping tech stack to specific brand colors for the "Creative" look
const techStack: TechItem[] = [
  { name: "Snowflake", color: "text-sky-400", border: "border-sky-500/30", bg: "bg-sky-500/10", icon: Database },
  { name: "Databricks", color: "text-orange-400", border: "border-orange-500/30", bg: "bg-orange-500/10", icon: Layers },
  { name: "AWS", color: "text-yellow-500", border: "border-yellow-500/30", bg: "bg-yellow-500/10", icon: Cloud },
  { name: "Azure", color: "text-blue-500", border: "border-blue-500/30", bg: "bg-blue-500/10", icon: Cloud },
  { name: "GCP", color: "text-red-400", border: "border-red-500/30", bg: "bg-red-500/10", icon: Cloud },
  { name: "dbt", color: "text-orange-600", border: "border-orange-600/30", bg: "bg-orange-600/10", icon: Box },
  { name: "Airflow", color: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10", icon: Box },
  { name: "Kubernetes", color: "text-blue-400", border: "border-blue-400/30", bg: "bg-blue-400/10", icon: Box },
  { name: "MLflow", color: "text-indigo-400", border: "border-indigo-500/30", bg: "bg-indigo-500/10", icon: Cpu },
  { name: "Terraform", color: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10", icon: Code2 },
  { name: "Python", color: "text-yellow-300", border: "border-yellow-300/30", bg: "bg-yellow-300/10", icon: Code2 },
  { name: "Spark", color: "text-orange-300", border: "border-orange-300/30", bg: "bg-orange-300/10", icon: Database },
];

const features: FeatureItem[] = [
  {
    title: "End-to-End Expertise",
    desc: "We bridge the gap between high-level strategy and low-level engineering. From the first whiteboard session to MLOps production.",
    icon: Layers,
    colSpan: "md:col-span-2",
    theme: "indigo", // Used for dynamic coloring
    gradient: "from-indigo-500 to-violet-500",
    shadow: "group-hover:shadow-indigo-500/40"
  },
  {
    title: "Scalable Architectures",
    desc: "Systems built to handle petabytes. We design for your growth phase, not just your current phase.",
    icon: Scaling,
    colSpan: "md:col-span-1",
    theme: "cyan",
    gradient: "from-cyan-500 to-blue-500",
    shadow: "group-hover:shadow-cyan-500/40"
  },
  {
    title: "Industry-Grade Security",
    desc: "Governance isn't an afterthought. We bake in SOC2/GDPR compliance, RBAC, and encryption from day one.",
    icon: ShieldCheck,
    colSpan: "md:col-span-1",
    theme: "emerald",
    gradient: "from-emerald-500 to-green-500",
    shadow: "group-hover:shadow-emerald-500/40"
  },
  {
    title: "Outcome-Focused Delivery",
    desc: "We trade in ROI, not hours. Every sprint is aligned to a measurable business KPI.",
    icon: Target,
    colSpan: "md:col-span-2",
    theme: "amber",
    gradient: "from-amber-500 to-orange-500",
    shadow: "group-hover:shadow-amber-500/40"
  },
  {
    title: "Radical Transparency",
    desc: "No black boxes. You get full access to our Jira, Slack, and code repositories. We work as an extension of your team.",
    icon: Users,
    colSpan: "md:col-span-3",
    theme: "pink",
    gradient: "from-pink-500 to-rose-500",
    shadow: "group-hover:shadow-pink-500/40"
  }
];

// --- Components ---

const TechChip = ({ tech }: { tech: TechItem }) => (
  <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${tech.border} ${tech.bg} backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-opacity-20`}>
    <tech.icon className={`w-4 h-4 ${tech.color}`} />
    <span className={`text-sm font-bold ${tech.color} tracking-wide`}>
      {tech.name}
    </span>
  </div>
);

const TechMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gray-900/30 border-y border-white/5 py-10">
      {/* Side Fade Effects */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0D1E] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0D1E] to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max">
        <motion.div 
          className="flex gap-6 px-6"
          animate={{ x: "-50%" }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {/* Duplicate list 3 times for seamless loop */}
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <TechChip key={i} tech={tech} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const BentoCard = ({ feature, index }: { feature: FeatureItem; index: number }) => {
  // Dynamic class construction based on theme prop
  const iconBg = `bg-${feature.theme}-500/10`;
  const iconBorder = `border-${feature.theme}-500/20`;
  const iconColor = `text-${feature.theme}-400`;
  const hoverBorder = `group-hover:border-${feature.theme}-500/50`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative rounded-3xl bg-gray-900/40 border border-white/5 overflow-hidden ${feature.colSpan} transition-all duration-500 hover:-translate-y-1 ${hoverBorder} ${feature.shadow}`}
    >
      {/* Background Gradient Splash (Subtle) */}
      <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full -mr-16 -mt-16 pointer-events-none`} />

      <div className="relative p-8 h-full flex flex-col z-10">
        
        {/* Header with Icon and Arrow */}
        <div className="flex justify-between items-start mb-6">
          <div className={`w-14 h-14 rounded-2xl ${iconBg} border ${iconBorder} flex items-center justify-center ${iconColor} group-hover:scale-110 group-hover:bg-${feature.theme}-500/20 transition-all duration-300 shadow-lg`}>
            <feature.icon className="w-7 h-7" />
          </div>
          
          <div className={`p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 bg-${feature.theme}-500/10`}>
            <ArrowUpRight className={`w-5 h-5 ${iconColor}`} />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
            {feature.title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed text-sm md:text-base font-medium">
          {feature.desc}
        </p>

        {/* Bottom decorative line */}
        <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
      </div>
    </motion.div>
  );
};

export default function TechStackSlide() {
  const darkBg = "#0A0D1E";

  return (
    <section 
      className="relative w-full pt-28 pb-0 overflow-hidden"
      style={{ backgroundColor: darkBg }}
    >
       {/* --- Background Ambient --- */}
       <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[20%] left-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px]" />
            <div className="absolute bottom-[20%] right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px]" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block mb-6"
            >
                <span className="py-2 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                    The Datronyx Advantage
                </span>
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
            >
                Why leading teams <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
                    trust us with their data.
                </span>
            </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, idx) => (
                <BentoCard key={idx} feature={feature} index={idx} />
            ))}
        </div>
      </div>

      {/* --- Tech Stack Section (Bottom Anchor) --- */}
      <div className="w-full relative">
        <div className="flex flex-col items-center justify-center mb-10">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
                Powered by the Modern Data Stack
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>
        
        {/* The Colorful Marquee */}
        <TechMarquee />
      </div>

    </section>
  );
}