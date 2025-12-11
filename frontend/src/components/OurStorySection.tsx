"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Binary, 
  BrainCircuit, 
  Network, 
  ChevronRight, 
  Quote, 
  Layers, 
  Cpu 
} from 'lucide-react'; 

// --- TYPES ---
interface RoadmapItem {
  // Year removed from interface
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
}

// --- CONTENT STRATEGY ---
// 2025: THE ORIGIN (The "Why")
// THE EXPANSION (The "What Next")
// THE VISION (The "Ultimate Goal")

const futureSteps: RoadmapItem[] = [
  { 
    // Year removed
    title: "Predictive Ecosystems", 
    category: "Service Expansion",
    description: "Moving beyond data storage to advanced Data Science. We plan to roll out proprietary predictive modeling services that allow clients to forecast market trends with 99% accuracy.", 
    icon: Network 
  },
  { 
    // Year removed
    title: "Autonomous Intelligence", 
    category: "AI Evolution",
    description: "The shift from 'Human-in-the-loop' to 'Human-on-the-loop'. Deploying self-correcting AI agents that automate complex data engineering pipelines without manual oversight.", 
    icon: BrainCircuit 
  },
  { 
    // Year removed
    title: "The Neural Enterprise", 
    category: "Global Standard",
    description: "Establishing Datronyx as the global infrastructure standard where Data Analytics and AI converge into a single, seamless operating system for the Fortune 500.", 
    icon: Cpu 
  },
];

// --- ANIMATION VARIANTS ---
const textVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function DatronyxStory() {
  return (
    <section className="relative py-24 md:py-32 min-h-screen flex items-center bg-[#020617] overflow-hidden">
      
      {/* --- BACKGROUND FX --- */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[2px] w-8 bg-blue-500" />
            <span className="text-blue-400 font-mono text-xs tracking-[0.2em] uppercase">Genesis & Vision</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            From <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Foundation</span> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">Future.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* --- LEFT COLUMN: THE ORIGIN STORY --- */}
          <div className="lg:col-span-5 relative">
             <div className="lg:sticky lg:top-32">
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-xl overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <Quote className="absolute top-8 left-8 text-slate-700/50 w-16 h-16 transform -scale-x-100" />

                  <div className="relative z-10 pt-4">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-bold tracking-wider shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                        ORIGIN
                      </span>
                      <span className="text-slate-400 text-sm font-mono uppercase tracking-widest">The Inception</span>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                      The Data Reality Check.
                    </h3>

                    <div className="space-y-6 text-slate-300 leading-relaxed font-light text-lg">
                      <p>
                        In 2025, the tech world reached a tipping point. While AI models became commoditized, companies realized a harsh truth: 
                        <strong className="text-blue-400 font-medium"> Intelligence without architecture is just noise.</strong>
                      </p>
                      <p>
                        Datronyx was founded to solve this precise disconnect. We aren't just another analytics firm. We are the architects of the 
                        <span className="text-white font-medium"> Modern Data Stack</span>.
                      </p>
                      <p>
                        Our story begins here: transforming raw, chaotic enterprise data into a pristine engine that powers the next generation of decision-making.
                      </p>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4">
                      <div className="p-3 bg-slate-800 rounded-lg text-blue-400">
                        <Binary size={24} />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">Focus Area</p>
                        <p className="text-slate-500 text-xs uppercase">Data Engineering & Analytics</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-transparent" />
                </motion.div>
             </div>
          </div>

          {/* --- RIGHT COLUMN: THE ROADMAP --- */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="relative pl-6 md:pl-8 border-l border-slate-800 space-y-16">
              
              <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent opacity-50" />

              {futureSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute top-8 -left-[35px] md:-left-[43px] w-4 h-4 rounded-full bg-[#020617] border-2 border-indigo-500 group-hover:scale-125 group-hover:bg-indigo-500 transition-all duration-300 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />

                  <div className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl transition-all duration-300 hover:bg-white/[0.02] border border-transparent hover:border-white/5">
                    
                    <div className="shrink-0 p-4 bg-slate-900 rounded-xl border border-slate-800 text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-500 shadow-xl">
                      <step.icon size={28} />
                    </div>

                    <div>
                      {/* Year removed, Title layout adjusted */}
                      <div className="mb-2">
                        <h4 className="text-2xl font-bold text-slate-200 group-hover:text-indigo-300 transition-colors">
                          {step.title}
                        </h4>
                      </div>
                      
                      <p className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-3 flex items-center gap-1">
                        <Layers size={12} /> {step.category}
                      </p>
                      
                      <p className="text-slate-400 leading-relaxed text-base group-hover:text-slate-300 transition-colors">
                        {step.description}
                      </p>

                      <div className="mt-4 flex items-center text-sm text-slate-500 group-hover:text-indigo-400 transition-colors cursor-pointer w-max">
                        <span>Learn about the plan</span>
                        <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}