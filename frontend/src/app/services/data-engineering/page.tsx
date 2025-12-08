import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import EngineeringHero from './_components/EngineeringHero';
import ChaosVsOrder from './_components/ChaosVsOrder';
import ArchitectureDual from './_components/ArchitectureDual';
import InfrastructureStack from './_components/InfrastructureStack';
import UptimeMetrics from './_components/UptimeMetrics';

export default function DataEngineeringPage() {
  return (
    <main className="bg-[#020617] min-h-screen">
      
      {/* 1. Hero */}
      <EngineeringHero />

      {/* 2. Problem/Solution */}
      <ChaosVsOrder />

      {/* 3. The Core Services (Pipeline & Cloud) */}
      <ArchitectureDual />

      {/* 4. Impact Metrics */}
      <UptimeMetrics />

      {/* 5. Tech Stack */}
      <InfrastructureStack />

      {/* 6. CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Build a foundation that lasts.
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            Stop patching leaks. Start engineering a data ecosystem that scales with your ambition.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all hover:scale-105"
          >
            Audit My Infrastructure <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}