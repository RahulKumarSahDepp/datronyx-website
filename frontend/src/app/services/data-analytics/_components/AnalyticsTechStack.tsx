"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Database, 
  BarChart4, 
  Server, 
  Workflow, 
  Cpu, 
  Layers, 
  Code2, 
  Terminal
} from "lucide-react";

// --- DATA ---
const techCategories = [
  { 
    id: "viz",
    category: "Visualization Layer", 
    desc: "Executive Dashboards",
    items: ["Tableau", "PowerBI", "Looker", "Metabase"], 
    icon: BarChart4,
    color: "text-pink-400",
    gradient: "from-pink-500/20 to-rose-500/5",
    border: "group-hover:border-pink-500/50"
  },
  { 
    id: "proc",
    category: "Processing Engine", 
    desc: "Transformation & Logic",
    items: ["Python (Pandas)", "Spark", "dbt", "SQL"], 
    icon: Cpu,
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 to-sky-500/5",
    border: "group-hover:border-cyan-500/50"
  },
  { 
    id: "store",
    category: "Modern Warehousing", 
    desc: "Storage & Lakehouse",
    items: ["Snowflake", "BigQuery", "Redshift", "Databricks"], 
    icon: Database,
    color: "text-indigo-400",
    gradient: "from-indigo-500/20 to-violet-500/5",
    border: "group-hover:border-indigo-500/50"
  },
  { 
    id: "orch",
    category: "Orchestration", 
    desc: "Pipeline Management",
    items: ["Airflow", "Dagster", "Prefect", "Fivetran"], 
    icon: Workflow,
    color: "text-amber-400",
    gradient: "from-amber-500/20 to-orange-500/5",
    border: "group-hover:border-amber-500/50"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AnalyticsTechStack() {
  return (
    <section className="relative py-24 bg-[#050914] overflow-hidden border-t border-white/5">
      
      {/* --- BACKGROUND FX --- */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-slate-900 border border-slate-700 backdrop-blur-md">
             <Code2 size={14} className="text-indigo-400" />
             <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Architecture Stack</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">Modern Standards.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            We don't rely on legacy black-boxes. We engineer your intelligence layer using the best-in-class, open-standard tools that define the modern data stack.
          </p>
        </div>

        {/* --- TECH GRID --- */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {techCategories.map((tech, idx) => {
            const Icon = tech.icon;
            
            return (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className={`
                  group relative h-full bg-[#0B0F19] rounded-2xl border border-slate-800 
                  overflow-hidden transition-all duration-500 hover:-translate-y-2
                  ${tech.border} hover:shadow-2xl hover:shadow-black/50
                `}
              >
                {/* 1. Background Gradient Flash */}
                <div className={`absolute inset-0 bg-gradient-to-b ${tech.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* 2. Top Scan Line */}
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out`} />

                <div className="relative p-6 z-10 flex flex-col h-full">
                  
                  {/* Header Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-xl bg-slate-900 border border-slate-700 ${tech.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon size={24} />
                    </div>
                    {/* Status Dot */}
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                        <div className={`w-1.5 h-1.5 rounded-full ${tech.color.replace('text-', 'bg-')} animate-pulse`} />
                    </div>
                  </div>

                  {/* Titles */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:tracking-wide transition-all">{tech.category}</h3>
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">{tech.desc}</p>
                  </div>

                  {/* Tool Chips */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {tech.items.map((item, i) => (
                      <span 
                        key={i} 
                        className="
                          px-2.5 py-1.5 rounded-md text-xs font-medium font-mono
                          bg-slate-900/80 border border-slate-700/50 text-slate-300
                          group-hover:border-white/10 group-hover:text-white group-hover:bg-slate-800
                          transition-colors cursor-default
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- BOTTOM DECORATION --- */}
        <div className="mt-16 flex justify-center items-center gap-4 opacity-50">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-slate-700" />
            <Terminal size={16} className="text-slate-600" />
            <span className="text-xs font-mono text-slate-600 uppercase tracking-widest">Seamless Integration</span>
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-slate-700" />
        </div>

      </div>
    </section>
  );
}