"use client";

import React from "react";

const metrics = [
  { label: "Scalability", value: "Petabyte", desc: "Ready Architecture" },
  { label: "Reliability", value: "99.9%", desc: "Pipeline Uptime" },
  { label: "Latency", value: "<15m", desc: "Data Freshness" },
  { label: "Efficiency", value: "40%", desc: "Avg Cost Reduction" },
];

export default function UptimeMetrics() {
  return (
    <section className="py-20 bg-blue-950/10 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800/50">
          {metrics.map((m, i) => (
            <div key={i} className="px-4">
              <p className="text-slate-500 uppercase text-xs font-bold tracking-widest mb-2">{m.label}</p>
              <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">{m.value}</p>
              <p className="text-blue-400 text-sm">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}