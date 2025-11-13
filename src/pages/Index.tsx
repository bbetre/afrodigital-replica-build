import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import TechnologyStackSection from "@/components/TechnologyStackSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import TechRadar from "@/components/TechRadar";
import CtaSection from "@/components/CtaSection";
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
        <TechnologyStackSection />
        <ProcessTimeline />
        <TechRadar />
        <StatsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
