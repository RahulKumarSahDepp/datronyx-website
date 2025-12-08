// components/DataStrategy/DataStrategyGovernance.jsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Target } from "lucide-react";
import { SectionHeader, offerings } from "./DataStrategyUtilities";

// --- CUSTOM COLOR THEMES ---
// We define 4 distinct themes. The cards will cycle through these colors.
const cardThemes = [
  {
    id: "blue",
    iconColor: "text-blue-400",
    iconBgHover: "group-hover:bg-blue-600",
    borderColor: "group-hover:border-blue-500/50",
    shineColor: "bg-blue-500", // The top-right shine
  },
  {
    id: "rose",
    iconColor: "text-rose-400",
    iconBgHover: "group-hover:bg-rose-600",
    borderColor: "group-hover:border-rose-500/50",
    shineColor: "bg-rose-500",
  },
  {
    id: "emerald",
    iconColor: "text-emerald-400",
    iconBgHover: "group-hover:bg-emerald-600",
    borderColor: "group-hover:border-emerald-500/50",
    shineColor: "bg-emerald-500",
  },
  {
    id: "amber",
    iconColor: "text-amber-400",
    iconBgHover: "group-hover:bg-amber-600",
    borderColor: "group-hover:border-amber-500/50",
    shineColor: "bg-amber-500",
  },
];

export default function DataStrategyGovernance() {
  return (
    <>
      {/* --- WHY IT MATTERS (Unchanged) --- */}
      <section className="px-6 md:px-12 lg:px-24 py-20 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why data strategy <span className="text-blue-500">fails</span> without governance.
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Organizations often invest in expensive tools but lack the operational rituals to make data trustworthy. A robust strategy ensures your data lake doesn't become a data swamp.
            </p>
            
            <ul className="space-y-4">
              {[
                "Enterprise data roadmap aligned to business KPIs",
                "Clear ownership & accountability models",
                "Automated data quality & lifecycle management",
                "Compliance readiness (GDPR, HIPAA, SOC2)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
             {/* Abstract Visual Representation of Governance */}
             <div className="relative rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-white/10 p-8 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
                
                {/* Simulated Dashboard List */}
                <div className="space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${i === 0 ? 'bg-indigo-500/20 text-indigo-400' : 'bg-gray-800 text-gray-500'}`}>
                        <Target className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-24 bg-gray-700 rounded mb-2" />
                        <div className="h-2 w-full bg-gray-800 rounded" />
                      </div>
                      <div className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                        COMPLIANT
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- OFFERINGS GRID --- */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            badge="Our Capabilities"
            title="Strategic Interventions"
            subtitle="From high-level roadmaps to granular policy implementation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((item, idx) => {
              const theme = cardThemes[idx % cardThemes.length];

              return (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className={`group relative overflow-hidden p-6 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-white/10 ${theme.borderColor} transition-colors duration-500`}
                >
                  {/* --- TOP RIGHT SHINING EFFECT --- */}
                  <div 
                    className={`absolute -top-12 -right-12 w-32 h-32 ${theme.shineColor} opacity-0 group-hover:opacity-20 blur-[60px] transition-opacity duration-700 pointer-events-none`} 
                  />

                  {/* --- ICON --- */}
                  <div className={`w-12 h-12 rounded-lg bg-gray-800/50 flex items-center justify-center mb-6 transition-colors duration-300 ${theme.iconColor} ${theme.iconBgHover} group-hover:text-white`}>
                    <item.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                  </div>

                  {/* --- CONTENT --- */}
                  <h3 className="text-xl font-bold text-white-500 mb-3 group-hover:text-blue-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}