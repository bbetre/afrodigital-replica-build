import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import CaseStudies from "./pages/CaseStudies";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";
import ApplicationDevelopment from "./pages/services/ApplicationDevelopment";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import SecuritySolutions from "./pages/services/SecuritySolutions";
import AIIntegration from "./pages/services/AIIntegration";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import AutomationCloudDevOps from "./pages/services/AutomationCloudDevOps";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import CookiePolicy from "./pages/CookiePolicy";
import Compliance from "./pages/Compliance";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/application-development" element={<ApplicationDevelopment />} />
            <Route path="/services/website-development" element={<WebsiteDevelopment />} />
            <Route path="/services/security-solutions" element={<SecuritySolutions />} />
            <Route path="/services/ai-integration" element={<AIIntegration />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/automation-cloud-devops" element={<AutomationCloudDevOps />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/compliance" element={<Compliance />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
