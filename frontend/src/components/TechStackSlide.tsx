"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Database,
  Cloud,
  Box,
  Cpu,
  Layers,
  Code2
} from "lucide-react";

// --- Data ---
const techStack = [
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

// --- Sub-Components ---
const TechChip = ({ tech }: { tech: any }) => (
  <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${tech.border} ${tech.bg} backdrop-blur-sm transition-all duration-300 hover:scale-105`}>
    <tech.icon className={`w-4 h-4 ${tech.color}`} />
    <span className={`text-sm font-bold ${tech.color} tracking-wide whitespace-nowrap`}>
      {tech.name}
    </span>
  </div>
);

// --- Main Component ---
export default function TechStackSlide() {
  return (
    <div className="w-full relative py-8 overflow-hidden">
      
      {/* Side Fade Effects (Gradients)
         Note: We use 'from-[#020617]' here assuming your main page BG is dark slate/navy (#020617).
         If your parent section changes color, change these hex codes to 'transparent' 
         or use a CSS mask-image for true transparency blending.
      */}
      <div 
        className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none" 
        style={{
            background: 'linear-gradient(to right, var(--bg-color, #020617) 0%, transparent 100%)'
        }}
      />
      <div 
        className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
        style={{
            background: 'linear-gradient(to left, var(--bg-color, #020617) 0%, transparent 100%)'
        }}
      />
      
      {/* Marquee Logic */}
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
}