import OurStorySection from '@/components/OurStorySection';
import SectionSeparator from '@/components/SectionSeparator';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import MissionVisionValues from '@/components/MissionVision';
import OurValuesSection from '@/components/OurValuesSection'
import FAQSection from '@/components/FaqSection';
import DatronyxTeam from '@/components/DatronyxTeam';
import TechStackSlide from '@/components/TechStackSlide'
import AboutHero from './_components/AboutHero';

export default function AboutUsPage() {
    const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Datronyx",
    description:
      "Learn about Datronyx, our mission, our team, and how we build enterprise AI, ML, and data engineering systems.",
    mainEntity: {
      "@type": "Organization",
      name: "Datronyx",
      url: "https://datronyx.com/aboutus",
      logo: "https://datronyx.com/Datronyx_Logo.png",
      description:
        "Datronyx transforms raw data into intelligent systems. We offer advanced data analytics, data engineering, predictive modeling, AI development, and intelligence layers built for scale."
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0F17]">
      <main> 
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
        />
        <AboutHero/>
        <CapabilitiesSection/>
        <DatronyxTeam/>
        <OurStorySection />
        <OurValuesSection />
        <MissionVisionValues />
        <SectionSeparator />
        <FAQSection />
      </main>
    </div>
  );
}