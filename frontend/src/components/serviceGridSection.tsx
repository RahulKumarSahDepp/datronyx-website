"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Database,
  BarChart3,
  Cpu,
  Layers3,
  Sparkles,
} from "lucide-react";

// --- Type Definitions ---

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  shadow: string;
}

// --- Configuration Data ---

const serviceCards: ServiceCardProps[] = [
  {
    icon: TrendingUp,
    title: "Predictive Modeling",
    description:
      "Forecast trends and optimize outcomes with enterprise-grade ML models designed for accuracy.",
    color: "from-indigo-500 to-blue-500",
    shadow: "shadow-indigo-500/20",
  },
  {
    icon: Shield,
    title: "Data Governance",
    description:
      "Build a compliant, scalable foundation. We ensure your data strategy supports future growth.",
    color: "from-emerald-500 to-green-500",
    shadow: "shadow-emerald-500/20",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Modern pipelines, lakehouses, and real-time architectures that scale effortlessly with your needs.",
    color: "from-cyan-500 to-blue-500",
    shadow: "shadow-cyan-500/20",
  },
  {
    icon: BarChart3,
    title: "BI & Analytics",
    description:
      "Transform raw data into interactive dashboards and actionable business insights instantly.",
    color: "from-amber-500 to-orange-500",
    shadow: "shadow-amber-500/20",
  },
  {
    icon: Cpu,
    title: "MLOps Systems",
    description:
      "Deploy, monitor, and scale machine learning systems with automated, robust CI/CD pipelines.",
    color: "from-purple-500 to-pink-500",
    shadow: "shadow-purple-500/20",
  },
  {
    icon: Layers3,
    title: "Analytics as a Service",
    description:
      "Your dedicated analytics team delivering high-impact insights, dashboards, and reports monthly.",
    color: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-500/20",
  },
];

// --- Sub-Component: Service Card ---

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  color,
  shadow,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    radius.set(250);
  }

  function handleMouseLeave() {
    radius.set(0);
  }

  return (
    <motion.div
      className="group relative rounded-3xl border border-white/10 bg-gray-900/40 hover:bg-gray-900/60 transition-colors duration-500 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Spotlight Gradient Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Inner Content */}
      <div className="relative h-full p-8 flex flex-col z-10">
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} p-[1px] mb-6 transform group-hover:scale-110 transition-transform duration-500`}
        >
          <div className="w-full h-full rounded-2xl bg-gray-950/90 flex items-center justify-center backdrop-blur-sm">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">
          {title}
        </h3>

        <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">
          {description}
        </p>

        <div className="flex items-center text-sm font-semibold text-white/90">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-indigo-300 group-hover:to-cyan-300 transition-all duration-300">
            Explore Solution
          </span>
          <ArrowRight className="w-4 h-4 ml-2 text-indigo-400 transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>

      <div
        className={`absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br ${color} opacity-20 blur-2xl rounded-full group-hover:opacity-40 transition-opacity duration-500`}
      />
    </motion.div>
  );
};

// --- Main Component: ServiceGridSection ---

const ServiceGridSection: React.FC = () => {
  const darkBg = "#0A0D1E";

  return (
    <section
      className="relative w-full py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: darkBg }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-3 h-3" />
            <span>Core Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Data solutions built for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
              scale and intelligence.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            We bridge the gap between complex data infrastructure and actionable
            business growth with a comprehensive suite of AI and engineering
            services.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceCards.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-zinc-900 px-8 font-medium text-white transition-all duration-300 hover:bg-zinc-800 border border-white/10 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
            <span className="mr-2">Start Your Transformation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceGridSection;
