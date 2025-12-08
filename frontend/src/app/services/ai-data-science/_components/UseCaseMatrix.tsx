"use client";

import React from "react";
import { Check, XCircle } from "lucide-react";

const signs = [
  { text: "Tasks require heavy manual cognitive effort", type: "pain" },
  { text: "Unstructured data (PDFs, emails) is ignored", type: "pain" },
  { text: "Competitors are moving faster than you", type: "pain" },
  { text: "Decision Automation & 24/7 Operations", type: "gain" },
  { text: "Demand Forecasting & Anomaly Detection", type: "gain" },
  { text: "Custom LLMs on Internal Knowledge Base", type: "gain" },
];

export default function UseCaseMatrix() {
  return (
    <section className="py-20 bg-[#020617] relative">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="bg-gradient-to-r from-slate-900 to-[#0B0F19] border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
           {/* Decorative Background */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-[80px]" />

           <div className="relative z-10 text-center mb-10">
              <h3 className="text-2xl font-bold text-white mb-4">Is your organization AI-Ready?</h3>
              <p className="text-slate-400">
                If you relate to the challenges on the left, you need the solutions on the right.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* The Pain */}
              <div className="space-y-4">
                 <h4 className="text-red-400 font-mono text-sm uppercase tracking-widest mb-4">Current Friction</h4>
                 {signs.filter(s => s.type === 'pain').map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-slate-400 bg-red-500/5 p-3 rounded-lg border border-red-500/10">
                       <XCircle className="text-red-500 shrink-0" size={20} />
                       <span>{item.text}</span>
                    </div>
                 ))}
              </div>

              {/* The Gain */}
              <div className="space-y-4">
                 <h4 className="text-emerald-400 font-mono text-sm uppercase tracking-widest mb-4">The Datronyx Shift</h4>
                 {signs.filter(s => s.type === 'gain').map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-white bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                       <Check className="text-emerald-500 shrink-0" size={20} />
                       <span className="font-medium">{item.text}</span>
                    </div>
                 ))}
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}