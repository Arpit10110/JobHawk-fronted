import React from "react";
import HeroSection from "@/components/home/HeroSection";
import SocialProofStrip from "@/components/home/SocialProofStrip";
import ContrastSection from "@/components/home/ContrastSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TelemetryDashboardSection from "@/components/home/TelemetryDashboardSection";
import FeatureBreakdownSection from "@/components/home/FeatureBreakdownSection";
import AutomationPipelineSection from "@/components/home/AutomationPipelineSection";
import PricingSection from "@/components/home/PricingSection";
import FaqSection from "@/components/home/FaqSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="w-full bg-white min-h-screen overflow-x-hidden">
      <HeroSection />
      <SocialProofStrip />
      <ContrastSection />
      <HowItWorksSection />
      <TelemetryDashboardSection />
      <FeatureBreakdownSection />
      <AutomationPipelineSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}