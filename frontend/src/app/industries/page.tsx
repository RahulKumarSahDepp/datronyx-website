import IndustryPage from '@/components/IndustryPage';
import IndustriesHero from './components/HeroSection';
import IndustryIntro from './components/introduction';
import IndustriesPage from './components/IndustriesSection';
import FAQSection from '@/components/FaqSection';
import SectionSeparator from '@/components/SectionSeparator';
import IndustryCTA from './components/IndustryCTA';

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Industries Datronyx Serves",
    itemListElement: [
      { "@type": "Thing", name: "Finance & Banking" },
      { "@type": "Thing", name: "Healthcare" },
      { "@type": "Thing", name: "E-commerce" },
      { "@type": "Thing", name: "Manufacturing" },
      { "@type": "Thing", name: "Telecommunications" }
    ]
  };

  return (
    <main className="min-h-screen bg-[#0C0F17]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <IndustriesHero/>
      <IndustryIntro/>
      <IndustryPage />
      <IndustriesPage/>
      <IndustryCTA />
      <SectionSeparator/>
      <FAQSection/>
    </main>
  );
}
