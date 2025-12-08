// src/app/page.tsx
"use client";

import { motion } from 'framer-motion';
import { Variants, Transition } from "framer-motion";
import Link from 'next/link';
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from '@/components/CapabilitiesSection';
import SolutionsSection from "@/components/SolutionsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TechStackSection from "@/components/TechStackSection";
import BenefitsSection from "@/components/BenefitsSection";
import SectionSeparator from "@/components/SectionSeparator";
import FaqSection from "@/components/FaqSection";
import IndustryPage from '@/components/IndustryPage';
import TechStackSlide from '@/components/TechStackSlide';
import CredibilitySection from '@/components/CredibilitySection';



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as any, 
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStackSlide/>
      <CapabilitiesSection/>
      <CredibilitySection />
      <ServicesSection />
      <SolutionsSection />
      <ProcessSection />
      <BenefitsSection />
      <TechStackSection />
      <SectionSeparator />
      <FaqSection />
    </>
  );
}