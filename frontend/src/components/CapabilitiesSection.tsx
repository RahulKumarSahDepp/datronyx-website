"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Landmark,       // Fintech
  Factory,        // Manufacturing
  Briefcase,      // Private Equity
  ShoppingBag,    // Retail
  Stethoscope,    // Healthcare
  ChevronLeft, 
  ChevronRight,
  AlertTriangle,  // For Pain Point Highlight
  CheckCircle2    // For Solution Highlight
} from "lucide-react";

// --- Data: Industry Pain Points & Solutions ---
const industryChallenges = [
  {
    icon: Landmark,
    industry: "Fintech",
    painPoint: "False Positive Fatigue",
    description: "You're blocking 5% of legitimate users to stop 0.1% of fraud. Compliance reporting is a manual nightmare.",
    solution: "We build bank-grade AI risk engines that slash false declines and auto-generate audit trails.",
    color: "text-blue-400",
    bg: "from-blue-500/10",
    borderColor: "border-blue-500/50"
  },
  {
    icon: Factory,
    industry: "Manufacturing & Logistics",
    painPoint: "Unplanned Downtime",
    description: "Your IoT sensors are screaming, but you're still fixing machines only after they break.",
    solution: "Datronyx predicts failure 48 hours in advance. We turn sensor noise into a mechanic's schedule.",
    color: "text-amber-400",
    bg: "from-amber-500/10",
    borderColor: "border-amber-500/50"
  },
  {
    icon: Briefcase,
    industry: "Private Equity",
    painPoint: "Blind Acquisitions",
    description: "Buying a company based on messy Excel sheets? You don't know if their 'AI Tech' is real or smoke & mirrors.",
    solution: "Data Due Diligence. We audit the target's data assets to reveal the true valuation before you sign.",
    color: "text-emerald-400",
    bg: "from-emerald-500/10",
    borderColor: "border-emerald-500/50"
  },
  {
    icon: ShoppingBag,
    industry: "Retail & D2C",
    painPoint: "The 'Dead Stock' Trap",
    description: "Cash is tied up in winter inventory in April, while best-sellers are constantly out of stock.",
    solution: "Stop guessing. We connect trend data with velocity to automate re-orders and optimize warehouse placement.",
    color: "text-rose-400",
    bg: "from-rose-500/10",
    borderColor: "border-rose-500/50"
  },
  {
    icon: Stethoscope,
    industry: "Healthcare Ops",
    painPoint: "Revenue Leakage",
    description: "Staffing is chaotic and insurance claims are getting denied due to simple coding errors.",
    solution: "We forecast patient influx to optimize rostering and pre-screen claims to prevent denials.",
    color: "text-cyan-400",
    bg: "from-cyan-500/10",
    borderColor: "border-cyan-500/50"
  }
];

// --- Card Component ---
const PainPointCard = ({ item }: { item: typeof industryChallenges[0] }) => {
  const Icon = item.icon;
  return (
    <div className={`
      group h-full relative p-6 rounded-2xl border border-white/10 bg-[#0B0F19] 
      overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1
    `}>
      {/* Top Gradient Fade */}
      <div className={`absolute top-0 left-0 right-0 h-40 bg-gradient-to-b ${item.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Bottom Status Bar */}
      <div className={`absolute bottom-0 left-0 w-full h-1 ${item.bg.replace('from-', 'bg-').replace('/10', '')} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header: Icon & Industry */}
        <div className="flex items-center gap-3 mb-6">
            <div className={`
            p-2.5 rounded-lg border bg-slate-900/50 backdrop-blur-sm
            ${item.color} ${item.borderColor}
            `}>
            <Icon size={20} strokeWidth={2} />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                {item.industry}
            </h3>
        </div>

        {/* The Pain Point (The Hook) */}
        <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
                <AlertTriangle size={16} className="text-red-400" />
                <span className="text-xs font-bold text-red-400 uppercase tracking-wide">The Pain</span>
            </div>
            <h4 className="text-xl font-bold text-white leading-tight">
                {item.painPoint}
            </h4>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed border-l-2 border-white/10 pl-3">
                "{item.description}"
            </p>
        </div>

        <div className="flex-grow" /> {/* Spacer */}

        {/* The Solution (The Pitch) */}
        <div className="mt-6 pt-6 border-t border-white/5 relative">
            <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={16} className={item.color} />
                <span className={`text-xs font-bold uppercase tracking-wide ${item.color}`}>The Datronyx Fix</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
                {item.solution}
            </p>
        </div>
      </div>
    </div>
  );
};

// --- Main Slider Component ---
const IndustryPainPointsSlider = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerPage(1);      
      else if (width < 1024) setItemsPerPage(2); 
      else setItemsPerPage(3);                   
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, industryChallenges.length - itemsPerPage);

  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  // Reset index on resize
  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [itemsPerPage, maxIndex, index]);

  const slideWidth = 100 / itemsPerPage;

  if (!mounted) return null;

  return (
    <section className="relative w-full bg-[#020617] py-20 overflow-hidden border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020617] to-[#020617]" />
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Sector Expertise
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              We Don't Sell Dashboards. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                We Solve Expensive Problems.
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              Stop building tools nobody uses. We target the specific inefficiencies draining your margins and fix them with precision AI.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              disabled={index === 0}
              className={`p-4 rounded-full border border-white/10 transition-all ${
                index === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/5 hover:border-white/30 text-white"
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              disabled={index === maxIndex}
              className={`p-4 rounded-full border border-white/10 transition-all ${
                index === maxIndex ? "opacity-30 cursor-not-allowed" : "hover:bg-white/5 hover:border-white/30 text-white"
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="relative overflow-hidden cursor-grab active:cursor-grabbing -mx-4 px-4 py-4"> {/* Negative margin to allow hover effects not to clip */}
            <motion.div
                className="flex"
                animate={{ x: `-${index * slideWidth}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag="x"
                dragConstraints={{ right: 0, left: -((industryChallenges.length - itemsPerPage) * (window.innerWidth / itemsPerPage)) }}
                dragElastic={0.1}
                onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -100) next();
                    else if (swipe > 100) prev();
                }}
            >
                {industryChallenges.map((item, i) => (
                    <motion.div
                        key={i}
                        className="flex-shrink-0 px-3"
                        style={{ width: `${slideWidth}%` }}
                    >
                        <PainPointCard item={item} />
                    </motion.div>
                ))}
            </motion.div>
        </div>

        {/* Mobile Indicators */}
        <div className="flex md:hidden justify-center mt-8 gap-2">
            {Array.from({ length: industryChallenges.length }).map((_, i) => (
                <div 
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === index ? "w-8 bg-blue-500" : "w-1.5 bg-slate-800"
                    }`}
                />
            ))}
        </div>

      </div>
    </section>
  );
};

export default IndustryPainPointsSlider;