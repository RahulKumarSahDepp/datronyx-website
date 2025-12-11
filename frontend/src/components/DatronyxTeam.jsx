"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

// --- 1. UPDATED TEAM DATA WITH LINKS ---
const teamMembers = [
  { 
    name: "Rahul Kumar Sah", 
    role: "CEO & Founder", 
    image: "/images/profile_picture.png",
    linkedin: "https://www.linkedin.com/in/way-to-tech/",
    twitter: "https://twitter.com/your-handle"
  },
  { 
    name: "ARRIVING SOON", 
    role: "CO-FOUNDER", 
    image: "https://placehold.co/400x400/1e1b4b/6366f1?text=?",
    linkedin: "#", 
    twitter: "#"  
  },
  { 
    name: "ARRIVING SOON", 
    role: "Lead Software Engineer", 
    image: "https://placehold.co/400x400/1e1b4b/6366f1?text=?",
    linkedin: "#",
    twitter: "#"
  },
  { 
    name: "ARRIVING SOON", 
    role: "Security Analyst", 
    image: "https://placehold.co/400x400/1e1b4b/6366f1?text=?",
    linkedin: "#",
    twitter: "#"
  },
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  },
};

const DatronyxTeam = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 10,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative w-full py-24 px-4 overflow-hidden min-h-screen flex flex-col justify-center bg-[#020617]">
      
      {/* ================= BACKGROUND LAYERS ================= */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.15),transparent_70%)]" />
      <div 
        className="absolute inset-0 z-10 opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-cyan-500/30 rounded-full w-1 h-1 blur-[1px]"
          style={{ top: p.top, left: p.left }}
          animate={{
            y: [0, -40, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-20 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-2xl"
        >
          <div className="inline-block px-3 py-1 mb-4 border border-cyan-900/30 rounded-full bg-cyan-950/10 backdrop-blur-md">
            <span className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase">The Architects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight mb-6">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Datronyx</span> Team
          </h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            Merging deep industry intelligence with advanced data science to engineer the future of security.
          </p>
        </motion.div>

        {/* TEAM GRID - UPDATED TO MAX 4 COLS */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative h-full bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-xl overflow-hidden transition-all duration-500 hover:border-cyan-500/30 hover:bg-slate-800/40 hover:shadow-2xl hover:shadow-cyan-900/10">
                
                {/* IMAGE AREA */}
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-50 transition-opacity duration-500" />
                  
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />

                  {/* SOCIAL ICONS OVERLAY - UPDATED TO USE <a> TAGS */}
                  <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    
                    {/* LinkedIn Link */}
                    {member.linkedin && (
                      <a 
                        href={member.linkedin}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-950/50 backdrop-blur-md rounded-full text-slate-300 hover:text-white hover:bg-blue-600 transition-colors flex items-center justify-center"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}

                    {/* Twitter Link */}
                    {member.twitter && (
                      <a 
                        href={member.twitter}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-950/50 backdrop-blur-md rounded-full text-slate-300 hover:text-white hover:bg-cyan-500 transition-colors flex items-center justify-center"
                      >
                        <Twitter size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="p-5 text-center relative z-20 -mt-6">
                  <h3 className="text-white font-medium text-lg tracking-wide group-hover:text-blue-700 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="relative inline-block mt-1">
                    <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                      {member.role}
                    </p>
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-700 transition-all duration-300 group-hover:w-full" />
                  </div>
                </div>

                {/* Decorative Tech Corners */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/10 group-hover:border-blue-700/50 transition-colors duration-500" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/10 group-hover:border-blue-700/50 transition-colors duration-500" />
                
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default DatronyxTeam;