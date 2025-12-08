"use client";

import React from "react";
import { motion } from "framer-motion";
// Using standard 'a' tag as requested for compatibility
// import Link from "next/link"; 
// Using standard 'img' tag for compatibility
// import Image from "next/image";
import { Book, FileText, Layers, Rss, ArrowLeft, Twitter, Github, Instagram } from "lucide-react";

const helpfulLinks = [
  {
    icon: <Book className="w-6 h-6 text-blue-400" />,
    title: "Documentation",
    description: "Learn how to integrate our tools with your app.",
    href: "/docs",
  },
  {
    icon: <Layers className="w-6 h-6 text-blue-400" />,
    title: "API Reference",
    description: "A complete API reference for our libraries.",
    href: "/api-reference",
  },
  {
    icon: <FileText className="w-6 h-6 text-blue-400" />,
    title: "Guides",
    description: "Installation guides that cover popular setups.",
    href: "/guides",
  },
  {
    icon: <Rss className="w-6 h-6 text-blue-400" />,
    title: "Blog",
    description: "Read our latest news and articles.",
    href: "/blog",
  },
];

export default function NotFoundPage() {
  const darkBg = "#0A0D1E"; // Consistent Datronyx dark background

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
      style={{ backgroundColor: darkBg, color: "white" }}
    >
      {/* Background Glow Effect - Subtle Datronyx Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Logo Area */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 flex flex-col items-center"
      >
        {/* Using the Datronyx Icon (from your uploaded assets context) */}
        <div className="relative w-20 h-20 mb-4">
             <img 
                src="/images/Untitled design.png" 
                alt="Datronyx Logo" 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
             />
        </div>
      </motion.div>

      {/* Error Code */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-indigo-400 font-mono text-base tracking-widest mb-4 font-semibold"
      >
        404 ERROR
      </motion.p>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-5xl md:text-7xl font-extrabold text-center mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400"
      >
        Page not found
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-gray-400 text-lg md:text-xl text-center mb-16 max-w-lg leading-relaxed"
      >
        Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
      </motion.p>

      {/* Helpful Links Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 w-full max-w-3xl gap-6 mb-12"
      >
        {helpfulLinks.map((link, index) => (
          <a key={index} href={link.href} className="group block">
            <div className="flex items-start p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-indigo-500/50 transition-all duration-300 h-full">
              <div className="p-3 bg-indigo-500/20 rounded-xl mr-4 group-hover:bg-indigo-500/30 transition-colors">
                {link.icon}
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                    <h3 className="text-white font-bold text-lg group-hover:text-indigo-300 transition-colors">
                    {link.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-indigo-400 transition-colors transform group-hover:translate-x-1" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{link.description}</p>
              </div>
            </div>
          </a>
        ))}
      </motion.div>

      {/* Back to Home Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mb-20"
      >
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg shadow-indigo-900/30 hover:bg-indigo-500 hover:-translate-y-0.5 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </a>
      </motion.div>

      {/* Footer */}
      <div className="w-full px-8 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm max-w-7xl mx-auto">
        <p>© Datronyx, Inc. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

// Helper icon component reused from link map
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}