"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { 
  BrainCircuit, 
  Database, 
  Workflow, 
  CloudCog, 
  LineChart, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight,
  Code2
} from "lucide-react";

// --- Data: Refined for Datronyx Strategy ---
const capabilitiesData = [
  {
    icon: Database,
    title: "Intelligent Data Eng",
    description: "Architecting self-healing pipelines and modern lakehouses that turn raw chaos into pristine assets.",
    color: "text-blue-400",
    border: "border-blue-500",
    bg: "from-blue-500/10",
  },
  {
    icon: BrainCircuit,
    title: "Generative AI Agents",
    description: "Deploying autonomous LLM agents that handle complex workflows, from doc analysis to customer support.",
    color: "text-purple-400",
    border: "border-purple-500",
    bg: "from-purple-500/10",
  },
  {
    icon: LineChart,
    title: "Decision Science",
    description: "Moving beyond basic reporting. We build predictive engines that forecast market shifts and risks.",
    color: "text-emerald-400",
    border: "border-emerald-500",
    bg: "from-emerald-500/10",
  },
  {
    icon: CloudCog,
    title: "Cloud Native Scale",
    description: "Serverless, elastic infrastructure design ensuring your systems handle 10x growth without refactoring.",
    color: "text-cyan-400",
    border: "border-cyan-500",
    bg: "from-cyan-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Governance & Security",
    description: "Zero-trust architectures and automated compliance frameworks for highly regulated industries.",
    color: "text-rose-400",
    border: "border-rose-500",
    bg: "from-rose-500/10",
  },
  {
    icon: Code2,
    title: "MLOps & Automation",
    description: "Industrializing AI. We build the CI/CD pipelines that keep models accurate and deployed in minutes.",
    color: "text-amber-400",
    border: "border-amber-500",
    bg: "from-amber-500/10",
  },
];

// --- Card Component ---
const CapabilityCard = ({ item }: { item: typeof capabilitiesData[0] }) => {
  const Icon = item.icon;
  return (
    <div className={`
      group h-full relative p-6 rounded-2xl border border-white/10 bg-[#0B0F19] 
      overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1
    `}>
      {/* Top Gradient Fade */}
      <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${item.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Bottom Color Bar */}
      <div className={`absolute bottom-0 left-0 w-full h-1 ${item.bg.replace('from-', 'bg-').replace('/10', '')} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div className={`
          w-12 h-12 rounded-lg flex items-center justify-center mb-5 
          bg-slate-900 border border-slate-800 ${item.color} 
          group-hover:scale-110 group-hover:bg-slate-800 transition-all duration-300
        `}>
          <Icon size={24} strokeWidth={1.5} />
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
          {item.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
          {item.description}
        </p>
      </div>
    </div>
  );
};

// --- Main Slider Component ---
const CapabilitiesSlider = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [mounted, setMounted] = useState(false);

  // Robust Resize Logic
  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerPage(1);      // Mobile: 1 card
      else if (width < 1024) setItemsPerPage(2); // Tablet: 2 cards
      else setItemsPerPage(3);                   // Desktop: 3 cards
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, capabilitiesData.length - itemsPerPage);

  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  // Reset index if screen resize makes current index invalid
  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [itemsPerPage, maxIndex, index]);

  // Determine slide width percentage based on items per page
  const slideWidth = 100 / itemsPerPage;

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <section className="relative w-full bg-[#020617] py-16 overflow-hidden border-t border-white/5">
      
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Core Capabilities</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              The technical pillars enabling your digital transformation.
            </p>
          </div>

          {/* Controls */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={index === 0}
              className={`p-3 rounded-lg border border-white/10 transition-all ${
                index === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/5 hover:border-white/30 text-white"
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              disabled={index === maxIndex}
              className={`p-3 rounded-lg border border-white/10 transition-all ${
                index === maxIndex ? "opacity-30 cursor-not-allowed" : "hover:bg-white/5 hover:border-white/30 text-white"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
            <motion.div
                className="flex"
                animate={{ x: `-${index * slideWidth}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag="x"
                dragConstraints={{ right: 0, left: -((capabilitiesData.length - itemsPerPage) * (window.innerWidth / itemsPerPage)) }}
                dragElastic={0.1}
                onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -100) next();
                    else if (swipe > 100) prev();
                }}
            >
                {capabilitiesData.map((item, i) => (
                    <motion.div
                        key={i}
                        className="flex-shrink-0 px-3"
                        style={{ width: `${slideWidth}%` }}
                    >
                        <CapabilityCard item={item} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
        
        {/* Mobile Progress Dots */}
        <div className="flex md:hidden justify-center mt-6 gap-2">
            {Array.from({ length: capabilitiesData.length }).map((_, i) => (
                <div 
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === index ? "w-6 bg-blue-500" : "w-1.5 bg-slate-700"
                    }`}
                />
            ))}
        </div>

      </div>
    </section>
  );
};

export default CapabilitiesSlider;