"use client";

import React from "react";
import { Zap, Eye, BarChart, FileCheck } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Actionable Speed",
    desc: "Dashboards that drive immediate execution, not just pretty visualization."
  },
  {
    icon: BarChart,
    title: "Revenue Alignment",
    desc: "KPIs that align directly with velocity, growth, and bottom-line profit."
  },
  {
    icon: Eye,
    title: "Predictive Visibility",
    desc: "See business shifts before they happen, not after the quarter ends."
  },
  {
    icon: FileCheck,
    title: "Executive Narrative",
    desc: "Clean, consistent reports that make stakeholders say: 'This changes everything.'"
  }
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
           <span className="text-cyan-500 font-mono text-sm uppercase tracking-widest">The Competitive Edge</span>
           <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">Why Leaders Choose Datronyx</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {reasons.map((item, i) => (
              <div key={i} className="group p-6 bg-slate-900/30 border border-slate-800 rounded-2xl hover:bg-slate-900 hover:border-cyan-500/30 transition-all duration-300">
                 <div className="w-12 h-12 bg-slate-950 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="text-cyan-400" size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
           ))}
        </div>

      </div>
    </section>
  );
}