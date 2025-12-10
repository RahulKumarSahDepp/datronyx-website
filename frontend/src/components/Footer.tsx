"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Linkedin, Github, Mail, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // --- STATE MANAGEMENT FOR NEWSLETTER ---
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      // 1. Replace with your actual FastAPI endpoint URL
      // Ensure your FastAPI server is running and CORS is configured
      const response = await fetch('/api/subscribe', { 
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        // Handle server errors 
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || 'Subscription failed. Please try again.');
      }

      setStatus('success');
      setEmail(''); // Clear input
    } catch (error) {
      console.error("Newsletter error:", error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
      
      // Reset error state after 3 seconds so user can try again
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer className="relative bg-[#020617] text-slate-300 overflow-hidden border-t border-white/5 font-sans">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }} 
      />
      
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-black text-[15vw] leading-none text-white/[0.02] pointer-events-none select-none whitespace-nowrap z-0 tracking-tighter">
        DATRONYX
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        
        {/* --- TOP SECTION: BRANDING & NEWSLETTER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Identity (Cols 1-5) */}
          <div className="lg:col-span-5">
          
            <Link href="/" className="relative z-50 flex items-center gap-2 group"> 
              <div className="relative w-[120px] h-[50px] flex items-center justify-start">
                <Image
                    src="/images/Datronyxlogo.png"
                    alt="Datronyx Icon"
                    width={120}
                    height={50}
                    className="object-contain h-full w-auto transition-transform duration-300 group-hover:scale-105 brightness-110"
                    priority
                  />
                  <span className="text-2xl font-extrabold tracking-tighter text-white transition-colors duration-300 group-hover:text-blue-600 leading-none">
                    DATRONYX
                  </span>
              </div>
            </Link>

            <p className="text-slate-400 text-base leading-relaxed max-w-md mb-8 font-light">
              Architecting the <span className="text-indigo-400 font-medium">intelligence layer</span> for modern enterprises. We transform raw data into hardened assets that power autonomous AI.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: X, href: "https://twitter.com/datronyx", label: "X (Twitter)" },
                { icon: Linkedin, href: "https://linkedin.com/company/datronyx", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/datronyx", label: "GitHub" }
              ].map((social, idx) => (
                <Link 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300 group"
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Newsletter / CTA (Cols 8-12) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 rounded-2xl p-1 shadow-2xl shadow-black/50">
              <div className="bg-[#0B0F1C] rounded-xl p-8 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none"></div>

                <div className="flex items-center justify-between mb-4 relative z-10">
                  <h3 className="text-lg font-semibold text-white">Engineering Updates</h3>
                  <span className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Live
                  </span>
                </div>
                <p className="text-slate-400 mb-6 text-sm relative z-10">
                  Join 1,000+ engineers receiving our weekly deep dives on data architecture and AI patterns.
                </p>
                
                {/* --- FORM SECTION --- */}
                {status === 'success' ? (
                  <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg animate-in fade-in slide-in-from-bottom-2">
                    <CheckCircle size={20} />
                    <span className="text-sm font-medium">Welcome to the inner circle. Check your inbox.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="relative z-10">
                    <div className="relative flex flex-col gap-2">
                      <div className="relative flex items-center">
                        <Mail className="absolute left-3 text-slate-500" size={18} />
                        <input 
                          type="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="work@company.com" 
                          required
                          disabled={status === 'loading'}
                          className={`w-full bg-black/50 border rounded-lg py-3 pl-10 pr-24 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 transition-all text-sm disabled:opacity-50 ${status === 'error' ? 'border-red-500/50 focus:ring-red-500' : 'border-white/10 focus:ring-indigo-500 focus:border-indigo-500/50'}`}
                        />
                        <button 
                          type="submit"
                          disabled={status === 'loading'}
                          className="absolute right-1 top-1 bottom-1 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 text-white text-xs font-semibold px-4 rounded-md transition-colors shadow-lg shadow-indigo-500/20 flex items-center justify-center min-w-[70px]"
                        >
                          {status === 'loading' ? <Loader2 size={16} className="animate-spin" /> : 'Join'}
                        </button>
                      </div>
                      
                      {/* Error Message Display */}
                      {status === 'error' && (
                        <div className="flex items-center gap-2 text-red-400 text-xs animate-in fade-in slide-in-from-top-1 pl-1">
                          <AlertCircle size={12} />
                          <span>{errorMessage}</span>
                        </div>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* --- NAVIGATION LINKS --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 border-t border-white/5 pt-16">
          
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 opacity-80">Platform</h4>
            <ul className="space-y-4">
              {['Data Engineering', 'AI Agents', 'Intelligence Layer', 'Enterprise Security'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 opacity-80">Company</h4>
            <ul className="space-y-4">
              {['About Datronyx', 'Leadership', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="/aboutus" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 opacity-80">Resources</h4>
            <ul className="space-y-4">
              {['Knowledge Hub', 'Documentation', 'API Reference', 'System Status'].map((item) => (
                <li key={item}>
                  <Link href="/knowledge" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 opacity-80">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'Compliance'].map((item) => (
                <li key={item}>
                  <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs text-slate-500 font-medium">All Systems Operational</span>
          </div>
          
          <div className="text-xs text-slate-500 font-medium">
            &copy; {currentYear} Datronyx Inc. <span className="mx-2 text-slate-700">|</span> Made for the future.
          </div>
        </div>
      </div>
    </footer>
  );
}