"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  BarChart3, 
  LayoutDashboard, 
  Smartphone, 
  Zap,
  Presentation,
  TrendingUp
} from "lucide-react";

// --- Animated Counter Component ---
const Counter = ({ value, label, suffix = "" }: { value: string; label: string; suffix?: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value); 
      if (start === end) return;
      
      let totalDuration = 2000;
      let incrementTime = (totalDuration / end) * 2;
      
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50 text-center hover:border-indigo-500/50 transition-colors duration-300">
      <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2">
        {isNaN(parseInt(value)) ? value : count}{suffix}
      </div>
      <div className="text-indigo-300 font-medium text-sm tracking-wide uppercase">{label}</div>
    </div>
  );
};

// --- Feature Card Component ---
const FeatureCard = ({ icon: Icon, title, description, color }: any) => (
    <motion.div 
        whileHover={{ y: -5 }}
        className="group relative p-6 rounded-2xl bg-gray-900/40 border border-gray-800 overflow-hidden"
    >
        <div className={`absolute top-0 right-0 w-20 h-20 bg-${color}-500/10 blur-xl rounded-full group-hover:bg-${color}-500/20 transition-all`} />
        
        <div className={`w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-4 text-${color}-400 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6" />
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
);

export default function BIAnalyticsFeatures() {
    const features = [
        { icon: LayoutDashboard, title: "Executive Dashboards", description: "High-level command centers giving leadership instant visibility into KPI performance.", color: "indigo" },
        { icon: Zap, title: "Self-Service BI", description: "Empower teams to explore data safely with governed datasets in Tableau, PowerBI, or Looker.", color: "yellow" },
        { icon: TrendingUp, title: "KPI Frameworks", description: "We define leading and lagging indicators that actually align with business strategy.", color: "emerald" },
        { icon: BarChart3, title: "Reporting Automation", description: "Replace manual Excel drudgery with automated, scheduled data pipelines.", color: "cyan" },
        { icon: Presentation, title: "Data Storytelling", description: "Workshops to help your teams present data in ways that drive action, not confusion.", color: "pink" },
        { icon: Smartphone, title: "Embedded Analytics", description: "Integrate customer-facing dashboards directly into your SaaS product or portal.", color: "purple" },
      ];

  return (
    <div className="bg-[#0A0D1E]">
        {/* --- STATS SECTION --- */}
        <section className="px-6 md:px-12 lg:px-24 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <Counter value="24" suffix="/7" label="Real-time Availability" />
                <Counter value="80" suffix="%" label="Query Speed Uplift" />
                <Counter value="95" suffix="+" label="User Adoption Score" />
            </div>
        </section>

        {/* --- DELIVERABLES (Bento Grid) --- */}
        <section className="px-6 md:px-12 lg:px-24 py-20 bg-black/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white-700 mb-4">What We <span className="text-blue-700 font-extrabold">Deliver</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A complete suite of analytics services, from backend data modeling to frontend visualization design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <FeatureCard key={i} {...f} />
                    ))}
                </div>
            </div>
        </section>
    </div>
  );
}