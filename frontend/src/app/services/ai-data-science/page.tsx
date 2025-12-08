import React from 'react';
import Link from 'next/link';
import { Bot } from 'lucide-react';
import AIHero from './_components/AIHero';
import IntelligenceSpectrum from './_components/IntelligenceSpectrum';
import UseCaseMatrix from './_components/UseCaseMatrix';
import NeuralSolutions from './_components/NeuralSolutions';
import AITechStack from './_components/AITechStack';

export default function DataSciencePage() {
  return (
    <main className="bg-[#020617] min-h-screen">
      
      {/* 1. Hero */}
      <AIHero />

      {/* 2. Predictive vs Generative */}
      <IntelligenceSpectrum />

      {/* 3. Who Needs This? (You can use the previous UseCaseMatrix, it fits the dark theme well) */}
      <UseCaseMatrix />

      {/* 4. Solutions List */}
      <NeuralSolutions />

      {/* 5. Tech Stack */}
      <AITechStack />

      {/* 6. CTA */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-900/10 blur-3xl -z-10" />
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Your Competitors Are Automating. <br/> Are You?
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            AI becomes your internal team member — one that works 24/7. Let's build your first agent today.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_30px_rgba(99,102,241,0.4)]"
          >
            Deploy Intelligence <Bot size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}