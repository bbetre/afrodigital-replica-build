import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import LiveMetricsDashboard from "@/components/LiveMetricsDashboard";
import TrustSection from "@/components/TrustSection";
import TechStackShowcase from "@/components/TechStackShowcase";
import ProcessTimeline from "@/components/ProcessTimeline";
import SOCLabFeed from "@/components/SOCLabFeed";
import TechRadar from "@/components/TechRadar";
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
        <LiveMetricsDashboard />
        <ServicesSection />
        <TrustSection />
        <TechStackShowcase />
        <ProcessTimeline />
        <SOCLabFeed />
        <TechRadar />
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
