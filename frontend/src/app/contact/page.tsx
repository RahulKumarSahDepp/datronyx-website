import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FaqSection';
import SectionSeparator from '@/components/SectionSeparator';
import TechStackSlide from '@/components/TechStackSlide';

export const metadata = {
  title: 'Contact Us | DATRONYX',
  description: 'Unlock your data potential by contacting our data science and AI strategy experts.',
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Datronyx",
    description: "Get in touch with Datronyx for AI, ML, and data engineering services.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+977-XXXXXXXX",
      contactType: "sales",
      email: "contact@datronyx.com",
      availableLanguage: ["English"]
    }
  };


  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <div>
        <ContactForm />
        <TechStackSlide/>
        <SectionSeparator/>
        <FAQSection/>
      </div>
    </main>
  );
}