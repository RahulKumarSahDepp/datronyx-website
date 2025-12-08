"use client";

import React from "react";
import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

export default function ChaosVsOrder() {
  return (
    <section className="py-24 bg-[#050914] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT: The Problem (Chaos) */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="text-amber-500" />
              Signs of <span className="text-amber-500">Structural Decay</span>
            </h3>
            <p className="text-slate-400 mb-8">
              Is your data team spending more time fixing pipelines than building value? Technical debt in data engineering isn't just annoying—it kills AI initiatives.
            </p>
            <ul className="space-y-4">
              {[
                "Data Silos & Inconsistent Formats",
                "Pipelines that break silently at night",
                "Slow queries killing dashboard performance",
                "Inability to scale for AI/LLM workloads"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-4 rounded-lg bg-amber-950/10 border border-amber-900/30">
                  <div className="mt-1 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <span className="text-amber-200/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: The Solution (Order) */}
          <div className="relative">
             {/* Connector visual in the middle for desktop */}
             <div className="hidden lg:flex absolute top-1/2 -left-8 -translate-y-1/2 z-10 bg-slate-900 p-2 rounded-full border border-slate-700">
                <ArrowRight className="text-slate-500" />
             </div>

             <div className="h-full bg-gradient-to-br from-blue-900/10 to-transparent p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <CheckCircle className="text-blue-400" />
                  The Datronyx <span className="text-blue-400">Standard</span>
                </h3>
                <p className="text-slate-400 mb-8">
                  We engineer "Antifragile" systems. Our architectures are self-healing, automated, and built to handle petabyte-scale throughput without flinching.
                </p>
                <div className="grid gap-4">
                   <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <h4 className="text-blue-300 font-bold text-sm uppercase mb-1">99.9% Uptime</h4>
                      <p className="text-slate-400 text-sm">Self-healing pipelines that recover automatically.</p>
                   </div>
                   <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                      <h4 className="text-cyan-300 font-bold text-sm uppercase mb-1">Unified Lakehouse</h4>
                      <p className="text-slate-400 text-sm">One source of truth for both BI and AI workloads.</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}