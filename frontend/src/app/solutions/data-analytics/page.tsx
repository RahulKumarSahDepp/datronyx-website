import React from 'react';
import SolutionHero from './_components/SolutionHero';
import TheTransformation from './_components/TheTransformation';
import WhyChoose from './_components/WhyChoose';
import ImpactGrid from './_components/ImpactGrid';
import IncludedModules from './_components/IncludedModules';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function DataAnalyticsSolutionPage() {
  return (
    <main className="bg-[#020617] min-h-screen">
      
      <SolutionHero />
      <TheTransformation />
      <ImpactGrid />
      <WhyChoose />
      <IncludedModules />

      {/* CTA */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-900/10 blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Engineer Smarter?
          </h2>
          <p className="text-slate-300 mb-10 text-lg">
            Stop letting your data collect dust. Turn it into your competitive force.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-950 rounded-full font-bold transition-all hover:bg-cyan-50 hover:scale-105"
          >
            Get Executive Clarity <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}