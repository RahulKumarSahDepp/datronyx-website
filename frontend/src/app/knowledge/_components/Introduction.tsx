"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { 
  FileText,    
  BookOpen,    
  BrainCircuit,
  LineChart,   
  Compass,     
  Lightbulb,
  ArrowRight
} from "lucide-react";

// --- TYPE DEFINITIONS ---

// 1. Define the shape of the data object
interface ResourceItem {
  icon: React.ElementType;
  title: string;
  desc: string;
  color: string;
}

// 2. Define the props for the component
interface ResourceCardProps {
  item: ResourceItem;
  index: number;
}

// --- Data Configuration ---

const resources: ResourceItem[] = [
  {
    icon: FileText,
    title: "In-Depth Research",
    desc: "Comprehensive whitepapers analyzing market trends and tech stacks.",
    color: "blue"
  },
  {
    icon: BookOpen,
    title: "Guides & Tutorials",
    desc: "Step-by-step walkthroughs for modern data engineering.",
    color: "emerald"
  },
  {
    icon: BrainCircuit,
    title: "AI & ML Case Studies",
    desc: "Real-world examples of generative AI solving enterprise problems.",
    color: "purple"
  },
  {
    icon: LineChart,
    title: "Analytics Best Practices",
    desc: "Proven frameworks for dashboard design and KPI modeling.",
    color: "amber"
  },
  {
    icon: Compass,
    title: "Data Strategy Insights",
    desc: "Executive-level advice on governance, teams, and roadmap.",
    color: "rose"
  }
];

// --- Sub-Component: Spotlight Card ---

// 3. Apply the interface here to fix the red marks
const ResourceCard = ({ item, index }: ResourceCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Dynamic Color Classes
  const colors: Record<string, string> = {
    blue: "text-blue-400 bg-blue-500/10 border-blue-500/20 group-hover:border-blue-500/50",
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 group-hover:border-emerald-500/50",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/20 group-hover:border-purple-500/50",
    amber: "text-amber-400 bg-amber-500/10 border-amber-500/20 group-hover:border-amber-500/50",
    rose: "text-rose-400 bg-rose-500/10 border-rose-500/20 group-hover:border-rose-500/50",
  };

  const theme = colors[item.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-2xl border bg-gray-900/40 p-6 overflow-hidden transition-colors duration-300 ${theme.split("group")[0]}`} 
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Hover Border Glow */}
      <div className={`absolute inset-0 border-2 border-transparent rounded-2xl transition-colors duration-300 pointer-events-none ${theme.split(" ").pop()}`} />

      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${theme.split("border")[0]} backdrop-blur-sm`}>
          <item.icon className="w-6 h-6" />
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
};

export default function IntroductionSection() {
  const darkBg = "#0A0D1E";

  return (
    <section 
      className="relative w-full py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: darkBg }}
    >
      {/* --- Background Ambient --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[800px] bg-indigo-900/10 blur-[120px] rounded-full" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* --- LEFT: Text Content --- */}
          <div className="sticky top-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-300 text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Lightbulb className="w-3 h-3" />
              <span>Center of Excellence</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
            >
              Your Resource for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Data Excellence.
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400 mb-8 leading-relaxed"
            >
              At Datronyx, knowledge is power. We believe that the right information, at the right time, transforms businesses.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <p className="text-gray-300 font-medium italic">
                "We help organizations translate complex data science concepts into actionable business strategies."
              </p>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-10"
            >
                <div className="flex items-center gap-4 text-sm font-semibold text-gray-500">
                    <div className="flex -space-x-3">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-700 flex items-center justify-center text-xs text-white">
                                {i === 4 ? '5k+' : ''}
                            </div>
                        ))}
                    </div>
                    <span>Join 5,000+ Leaders receiving our insights.</span>
                </div>
            </motion.div>
          </div>

          {/* --- RIGHT: The Knowledge Matrix (Grid) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {/* Column 1 */}
            <div className="space-y-6">
               <ResourceCard item={resources[0]} index={0} />
               <ResourceCard item={resources[2]} index={2} />
               <ResourceCard item={resources[4]} index={4} />
            </div>
            
            {/* Column 2 (Offset for visual interest) */}
            <div className="space-y-6 md:pt-12">
               <ResourceCard item={resources[1]} index={1} />
               <ResourceCard item={resources[3]} index={3} />
               
               {/* "More" Card */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="rounded-2xl border border-dashed border-gray-700 bg-gray-900/20 p-6 flex flex-col items-center justify-center text-center h-[200px] hover:bg-gray-800/40 transition-colors cursor-pointer group"
               >
                   <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                        <ArrowRight className="w-5 h-5 text-white" />
                   </div>
                   <span className="font-bold text-white">Explore Full Library</span>
               </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}