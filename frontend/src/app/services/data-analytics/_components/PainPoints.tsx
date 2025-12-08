"use client";

import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

const painPoints = [
  "Struggling with siloed data that doesn't translate to strategy.",
  "Dashboards that are 'pretty' but don't drive execution.",
  "Decisions made on gut-feeling or outdated spreadsheets.",
  "Lack of a single source of truth across departments.",
];

export default function PainPoints() {
  return (
    <section className="py-20 bg-[#0B0F19] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: The Struggle */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Is your data creating <span className="text-red-400">Noise</span> or <span className="text-emerald-400">Signal</span>?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            With high-speed markets and shifting behavior, slow decision cycles kill momentum. If you recognize these signs, your analytics stack is lagging:
          </p>
          
          <div className="space-y-4">
            {painPoints.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-red-500/5 border border-red-500/10"
              >
                <XCircle className="text-red-400 w-6 h-6 flex-shrink-0" />
                <span className="text-slate-300 text-sm">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: The Datronyx Solution */}
        <div className="relative">
           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10" />
           <div className="bg-slate-900/50 border border-slate-700 p-8 rounded-2xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400" />
                The Datronyx Standard
              </h3>
              <p className="text-slate-400 mb-6">
                Analytics is no longer a support function — it’s the nervous system of a modern business. We engineer systems that:
              </p>
              <ul className="space-y-3">
                {["Remove Ambiguity", "Accelerate Decision-Making", "Expose Hidden Opportunities", "Highlight Risks Early"].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-indigo-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      {item}
                   </li>
                ))}
              </ul>
           </div>
        </div>

      </div>
    </section>
  );
}