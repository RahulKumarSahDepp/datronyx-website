"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Plus, Minus, MessageSquare, Terminal } from "lucide-react"; 

// --- FAQ DATA: STRATEGIC & ENGINEERING FOCUSED ---
const faqs = [
  {
    question: "Do you process data on your servers or ours?",
    answer:
      "We operate with a Zero-Trust architecture. In 95% of cases, we build and deploy pipelines directly within your existing cloud environment (AWS, Azure, GCP). Your data never leaves your governance perimeter, ensuring absolute security and compliance.",
  },
  {
    question: "How do you handle messy or unstructured data?",
    answer:
      "This is our core specialty. Before any AI touches your system, our Data Engineers implement rigorous ETL/ELT pipelines to sanitize, normalize, and structure your data. We turn 'data swamps' into pristine Data Lakes ready for high-performance modeling.",
  },
  {
    question: "Can your AI models integrate with legacy ERPs?",
    answer:
      "Yes. We build custom API wrappers and middleware connectors to bridge modern AI agents with legacy systems (SAP, Oracle, Mainframes). We enable two-way communication without requiring you to overhaul your entire tech stack.",
  },
  {
    question: "What separates 'Custom AI' from generic tools?",
    answer:
      "Generic tools are trained on public internet data. Datronyx trains models specifically on *your* proprietary historical data. This results in higher accuracy, specific domain knowledge, and a competitive moat that your rivals cannot copy.",
  },
  {
    question: "How long does a typical implementation take?",
    answer:
      "We prioritize velocity. A typical Data Audit & Roadmap takes 2 weeks. MVP deployment (Minimum Viable Pipeline) usually happens within 4-6 weeks, allowing you to see measurable ROI before we scale the solution across the enterprise.",
  },
  {
    question: "Do you offer post-deployment support?",
    answer:
      "Absolutely. We offer 'DataOps as a Service.' This includes 24/7 drift monitoring, model retraining cycles, and infrastructure scaling. We ensure your intelligence layer doesn't just launch, but evolves with your business.",
  },
];

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const answerVariants: Variants = {
  open: { opacity: 1, height: "auto", marginTop: 16, transition: { duration: 0.3, ease: "easeOut" } },
  collapsed: { opacity: 0, height: 0, marginTop: 0, transition: { duration: 0.2, ease: "easeIn" } },
};

export default function FAQSection() {
  // Allow multiple to be open, or single. Using single for compactness.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#020617] text-white py-20 px-4 relative overflow-hidden">
      
      {/* --- BACKGROUND FX --- */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-slate-900 border border-slate-700">
               <Terminal size={14} className="text-indigo-400" />
               <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Knowledge Base</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Architectural <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Clarity.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-sm leading-relaxed text-right md:text-right text-left">
            Answers to technical and strategic questions about deploying Datronyx infrastructure.
          </p>
        </div>

        {/* --- 2-COLUMN GRID --- */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`
                  group relative flex flex-col justify-center rounded-2xl border transition-all duration-300 overflow-hidden
                  ${isOpen 
                    ? "bg-[#0B0F19] border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.15)]" 
                    : "bg-[#0B0F19]/50 border-slate-800 hover:border-slate-700 hover:bg-[#0B0F19]"
                  }
                `}
              >
                {/* Active Indicator Strip */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-cyan-500 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />

                <button
                  className="flex items-start justify-between w-full p-6 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex gap-4">
                    <span className={`font-mono text-sm mt-1 transition-colors ${isOpen ? 'text-indigo-400' : 'text-slate-600'}`}>
                      0{index + 1}
                    
                    {/* Diagram of how AI models integrate with legacy ERPs for better understanding */}
                    
                    </span>
                    <span className={`font-bold text-lg pr-4 transition-colors ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Icon Toggle */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 
                    ${isOpen 
                      ? "bg-indigo-600 border-indigo-500 text-white rotate-180" 
                      : "bg-slate-900 border-slate-700 text-slate-500 group-hover:border-slate-500 group-hover:text-white"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={answerVariants}
                      className="px-6 pb-6 ml-8 md:ml-10 overflow-hidden"
                    >
                      <p className="text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-800/50 pt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}