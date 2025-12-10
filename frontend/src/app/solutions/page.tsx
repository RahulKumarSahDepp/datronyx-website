import SolutionsHero from "./components/heroSection";
import IndustryProblems from './components/problemsSection';
import CoreSolutions from './components/solutionSection';
import TechStackSlide from './components/TechStackSlide';

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Datronyx AI & Data Solutions",
    itemListElement: [
      {
        "@type": "Product",
        name: "Predictive Intelligence Platform",
        description:
          "AI-powered system for forecasting, anomaly detection, and decision intelligence."
      },
      {
        "@type": "SoftwareApplication",
        name: "Datronyx DataOps Automation",
        applicationCategory: "Data Engineering Automation"
      },
      {
        "@type": "Product",
        name: "Customer 360 Insights System"
      }
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
      <SolutionsHero/>
      <IndustryProblems/>
      <CoreSolutions/>
    </main>
  );
}