import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SecurityDashboardDemo from "@/components/SecurityDashboardDemo";
import TrustSection from "@/components/TrustSection";
import TechStackShowcase from "@/components/TechStackShowcase";
import ProcessTimeline from "@/components/ProcessTimeline";
import TechRadar from "@/components/TechRadar";
import CtaSection from "@/components/CtaSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TrustSection />
        <TechStackShowcase />
        <ProcessTimeline />
        <SecurityDashboardDemo />
        <TechRadar />
        <FeaturesSection />
        <StatsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
