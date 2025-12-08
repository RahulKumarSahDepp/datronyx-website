// components/DataStrategy/DataStrategyUtilities.tsx

import React from "react";
import { motion } from "framer-motion";
import { FileSearch, ShieldCheck, Library, Scale } from "lucide-react";

// --- Data Definitions ---

export const offerings = [
  {
    icon: FileSearch,
    title: "Maturity Assessment",
    desc: "We analyze your current people, processes, and platforms to identify gaps and build a 12-24 month strategic roadmap."
  },
  {
    icon: ShieldCheck,
    title: "Governance Operating Model",
    desc: "Define ownership, escalation workflows, and data contracts to ensure accountability across business lines."
  },
  {
    icon: Library,
    title: "Data Catalog & Lineage",
    desc: "Implementation of modern cataloging tools to make data discoverable, understandable, and trustworthy."
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    desc: "Frameworks for GDPR, CCPA, and industry-specific regulations to reduce risk without stifling innovation."
  },
];

export const processSteps = [
  {
    title: "Discovery & Assessment",
    desc: "We interview stakeholders, audit infrastructure, and map data flows to understand your baseline.",
    color: "bg-blue-500"
  },
  {
    title: "Strategy Formulation",
    desc: "We prioritize use-cases based on ROI and design the target operating model tailored to your culture.",
    color: "bg-indigo-500"
  },
  {
    title: "Governance Design",
    desc: "We establish the 'Rules of the Road' — defining policies, roles (Stewards/Owners), and quality standards.",
    color: "bg-purple-500"
  },
  {
    title: "Pilot & Scale",
    desc: "We launch a pilot domain to prove value, refine the model, and then roll out enterprise-wide.",
    color: "bg-emerald-500"
  }
];

// --- Shared Component ---

// 1. Define the interface for the props
interface SectionHeaderProps {
    title: string;
    subtitle: string;
    badge?: string; // Optional (indicated by ?)
}

// 2. Apply the interface to the component
export const SectionHeader = ({ title, subtitle, badge }: SectionHeaderProps) => (
  <div className="text-center max-w-3xl mx-auto mb-16">
    {badge && (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6"
      >
        {badge}
      </motion.div>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-extrabold text-blue-700 mb-6"
    >
      {title}
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-lg text-gray-400"
    >
      {subtitle}
    </motion.p>
  </div>
);