import ServiceHeroSection from './_components/ServiceHeroSection';
import FaqSection from '@/components/FaqSection';
import PredictiveModelingBenefits from './_components/PredictiveModeling/PredictiveModelingBenefits';
import PredictiveModelingHero from './_components/PredictiveModeling/PredictiveModelingHero';
import PredictiveModelingDeliverables from './_components/PredictiveModeling/PredictiveModelingDeliverables';
import DataStrategyHero from './_components/DataStrategy/DataStrategyHero';
import DataStrategyGovernance from './_components/DataStrategy/DataStrategyGovernance';
import DataStrategyProcessCTA from './_components/DataStrategy/DataStrategyProcessCTA';
import DataEngineeringHero from './_components/DataEngineering/DataEngineeringHero';
import DataEngineeringFeatures from './_components/DataEngineering/DataEngineeringFeatures';
import DataEngineeringProcess from './_components/DataEngineering/DataEngineeringProcess';
import BIAnalyticsHero from './_components/BIAnalytics/BIAnalyticsHero';
import BIAnalyticsFeatures from './_components/BIAnalytics/BIAnalyticsFeatures';
import BIAnalyticsProcess from './_components/BIAnalytics/BIAnalyticsProcess';
import MLOpsHero from './_components/MlOps/MLOpsHero';
import MLOpsCapabilities from './_components/MlOps/MLOpsCapabilities';
import MLOpsDeliverables from './_components/MlOps/MLOpsDeliverables';
import MLOpsProcess from './_components/MlOps/MLOpsProcess';
import SectionSeparator from '@/components/SectionSeparator';
import ServicesSection from '@/components/ServicesSection';
import WhyDatronyx from '@/components/BenefitsSection';
import AI_MachineLearning from './_components/AI_MachineLearning';
import CTA_Goldmine from './_components/CTA_Goldmine';
import ServicesGridSection from './_components/ServicesGrid';
import IndustrySolutions from './_components/IndustryServices';

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Datronyx Services",
    itemListElement: [
      {
        "@type": "Service",
        name: "Data Analytics Services",
        url: "https://datronyx.com/services" // data-analytics
      },
      {
        "@type": "Service",
        name: "Data Engineering Pipelines",
        url: "https://datronyx.com/services" // /data-engineering
      },
      {
        "@type": "Service",
        name: "AI & Predictive Modeling",
        url: "https://datronyx.com/services" // /ai-ml
      },
      {
        "@type": "Service",
        name: "Business Intelligence Dashboards",
        url: "https://datronyx.com/services" // /bi
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

      <ServiceHeroSection />
      <ServicesGridSection />
      <IndustrySolutions />
      <WhyDatronyx/>
      <ServicesSection/>
      <CTA_Goldmine/>
      {/* <AI_MachineLearning/> */}
      {/* <PredictiveModelingHero/>
      <PredictiveModelingBenefits/>
      <PredictiveModelingDeliverables/>
      <DataStrategyHero/>
      <DataStrategyGovernance/>
      <DataStrategyProcessCTA/>
      <DataEngineeringHero/>
      <DataEngineeringFeatures/>
      <DataEngineeringProcess/>
      <BIAnalyticsHero/>
      <BIAnalyticsFeatures/>
      <BIAnalyticsProcess/>
      <MLOpsHero/>
      <MLOpsCapabilities/>
      <MLOpsDeliverables/>
      <MLOpsProcess/> */}
      <SectionSeparator/>
      <FaqSection />
    </main>
  );
}