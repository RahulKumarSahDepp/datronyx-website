"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Eye, Users } from "lucide-react";

const impacts = [
  {
    label: "Real-Time Decisioning",
    desc: "Dashboards with millisecond latency keep teams aligned with the now.",
    icon: Zap,
    stat: "Latency",
    value: "<100ms"
  },
  {
    label: "Improved Profitability",
    desc: "Identify demand spikes and revenue leaks instantly.",
    icon: TrendingUp,
    stat: "Revenue",
    value: "Optimized"
  },
  {
    label: "Executive Visibility",
    desc: "Crystal-clear insights that increase strategic confidence.",
    icon: Eye,
    stat: "Clarity",
    value: "100%"
  },
  {
    label: "Data-Driven Culture",
    desc: "No inconsistencies. No bias. Just one single source of truth.",
    icon: Users,
    stat: "Adoption",
    value: "High"
  },
];

export default function ImpactMetrics() {
  return (
    <section className="py-24 bg-[#050914] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
           <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-2 block">ROI Analysis</span>
           <h2 className="text-4xl font-bold text-white">The Business Impact.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-[#0B0F19] rounded-2xl border border-slate-800 hover:border-slate-600 transition-colors"
            >
              <div className="flex justify-between items-start mb-6">
                 <div className="p-3 bg-slate-900 rounded-lg text-slate-300">
                    <item.icon size={20} />
                 </div>
                 <div className="text-right">
                    <p className="text-xs text-slate-500 uppercase font-bold">{item.stat}</p>
                    <p className="text-lg font-bold text-white">{item.value}</p>
                 </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.label}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}