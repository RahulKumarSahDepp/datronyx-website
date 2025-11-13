"use client";

import { motion } from 'framer-motion';
import { Variants, Transition } from "framer-motion";
import Link from 'next/link';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as any, 
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary text-light relative overflow-hidden p-4">
      
      {/* Background Neon Grid/Glow Effect */}
      <div className="absolute inset-0 bg-repeat opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#0A1D3F 1px, transparent 1px)' }}>
      </div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

      {/* Main Content (using framer-motion) */}
      <motion.div
        className="text-center z-10 p-8 bg-primary/70 backdrop-blur-sm rounded-xl shadow-glow-accent"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-display text-7xl md:text-8xl font-bold mb-4 text-accent"
          variants={itemVariants}
        >
          DATRONYX
        </motion.h1>
        
        <motion.h2
          className="font-sans text-3xl md:text-4xl text-light mb-8 font-light"
          variants={itemVariants}
        >
          Architecting Your Data's Future
        </motion.h2>

        <motion.p
          className="text-lg text-neutral max-w-xl mx-auto mb-10"
          variants={itemVariants}
        >
          We are currently building the enterprise-grade platform for AI-driven data intelligence. The future is coming soon.
        </motion.p>
        
        <motion.p
          className="text-lg text-neutral max-w-xl mx-auto mb-10"
          variants={itemVariants}
        >
         COMING SOOON.
        </motion.p>
        
        {/* Simple Social Icons (non-animated) */}
        <motion.div className="mt-8 space-x-6" variants={itemVariants}>
            <Link href="https://www.linkedin.com/company/datronyx" className="text-neutral hover:text-accent transition-colors">LinkedIn</Link>
        </motion.div>
      </motion.div>
    </div>
  );
}