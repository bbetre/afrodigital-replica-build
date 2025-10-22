import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import TechStackShowcase from "@/components/TechStackShowcase";
import ProcessTimeline from "@/components/ProcessTimeline";
import CtaSection from "@/components/CtaSection";
import BenefitsSection from "@/components/BenefitsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TechStackShowcase />
        <ProcessTimeline />
        <TrustSection />
        <BenefitsSection />
        <TestimonialsCarousel />
        <FeaturesSection />
        <StatsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
