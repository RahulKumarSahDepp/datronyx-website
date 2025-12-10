// src/app/knowledge/page.tsx
import TechStackSlide from '@/components/TechStackSlide';
import KnowledgeHero from './_components/HeroSection';
import IntroductionSection from './_components/Introduction';
import BlogListing from './_components/BlogListing';
import SectionSeparator from '@/components/SectionSeparator';
import FAQSection from '@/components/FaqSection';

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Datronyx Knowledge Hub",
    description: "Latest insights on AI, Machine Learning, Data Engineering, and Analytics.",
    publisher: {
      "@type": "Organization",
      name: "Datronyx"
    }
  };

  return (
    <main className="min-h-screen bg-[#0C0F17] overflow-hidden selection:bg-cyan-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />  
        <KnowledgeHero />
        <BlogListing /> 
        <SectionSeparator/>
        <SectionSeparator/>
        <FAQSection/>
    </main>
  );
}