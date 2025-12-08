import React from 'react';
import AnalyticsHero from './_components/AnalyticsHero';
import PainPoints from './_components/PainPoints';
import AnalyticsDeepDive from './_components/AnalyticsDeepDive'; // The new detailed section
import AnalyticsTechStack from './_components/AnalyticsTechStack';
import Link from 'next/link';
import { ArrowRight, Terminal } from 'lucide-react';
import TechStackSlide from '@/components/TechStackSlide';

export default function DataAnalyticsPage() {
  return (
    <main className="bg-[#020617] min-h-screen">
      <AnalyticsHero />
      <TechStackSlide/>
      {/* Problem/Solution High Level */}
      <PainPoints />
      {/* The Core Services (Deep Dive) */}
      <AnalyticsDeepDive />
      {/*Tech Stack */}
      <AnalyticsTechStack />
      {/*Final CTA */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Gradient for CTA */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] to-indigo-950/30 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Stop Guessing. <span className="text-indigo-400">Start Knowing.</span>
          </h2>
          <p className="text-slate-300 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
            Your data is speaking. We help you listen. Schedule a discovery call to audit your current analytics maturity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-950 rounded-full font-bold transition-all hover:bg-indigo-50 hover:scale-105"
            >
              Book Discovery Call <ArrowRight size={20} />
            </Link>
            <Link 
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-slate-700 text-white rounded-full font-bold transition-all hover:bg-slate-800"
            >
              <Terminal size={20} className="text-indigo-400" />
              View Other Services
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}