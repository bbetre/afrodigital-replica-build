import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Cloud, Database, Lock, Zap, Smartphone, ShoppingCart, 
  BarChart, Mail, Search, Users, MessageSquare, Briefcase,
  Cpu, Network, FileText, Video, Headphones, Rocket,
  Globe, Code, Shield, Sparkles, TrendingUp, Settings,
  ArrowRight
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const solutionCategories = [
  {
    category: "Development Solutions",
    icon: Code,
    solutions: [
      { icon: Globe, name: "Web Development", description: "Custom websites & web applications" },
      { icon: Smartphone, name: "Mobile Apps", description: "iOS & Android native apps" },
      { icon: Code, name: "Custom Software", description: "Tailored enterprise solutions" },
      { icon: Database, name: "API Development", description: "RESTful & GraphQL APIs" },
      { icon: Cloud, name: "Cloud Solutions", description: "AWS, Azure, Google Cloud" },
      { icon: Settings, name: "DevOps", description: "CI/CD & infrastructure automation" },
    ]
  },
  {
    category: "Digital Services",
    icon: Sparkles,
    solutions: [
      { icon: ShoppingCart, name: "E-commerce", description: "Online stores & marketplaces" },
      { icon: Search, name: "SEO Services", description: "Search engine optimization" },
      { icon: TrendingUp, name: "Digital Marketing", description: "Social media & content marketing" },
      { icon: Mail, name: "Email Marketing", description: "Campaign management & automation" },
      { icon: BarChart, name: "Analytics", description: "Data analysis & insights" },
      { icon: Video, name: "Content Creation", description: "Video, graphics & copywriting" },
    ]
  },
  {
    category: "Security & Infrastructure",
    icon: Shield,
    solutions: [
      { icon: Lock, name: "Cybersecurity", description: "Threat protection & monitoring" },
      { icon: Shield, name: "Data Protection", description: "Encryption & backup solutions" },
      { icon: Network, name: "Network Security", description: "Firewall & VPN setup" },
      { icon: Users, name: "Identity Management", description: "SSO & access control" },
      { icon: FileText, name: "Compliance", description: "GDPR, HIPAA, SOC 2" },
      { icon: Database, name: "Disaster Recovery", description: "Backup & recovery planning" },
    ]
  },
  {
    category: "AI & Automation",
    icon: Cpu,
    solutions: [
      { icon: Sparkles, name: "Machine Learning", description: "Custom ML models & training" },
      { icon: MessageSquare, name: "Chatbots", description: "AI-powered customer service" },
      { icon: Zap, name: "Process Automation", description: "RPA & workflow automation" },
      { icon: BarChart, name: "Predictive Analytics", description: "Forecasting & insights" },
      { icon: FileText, name: "Document Processing", description: "OCR & data extraction" },
      { icon: Video, name: "Computer Vision", description: "Image & video analysis" },
    ]
  },
  {
    category: "Business Solutions",
    icon: Briefcase,
    solutions: [
      { icon: Users, name: "CRM Systems", description: "Customer relationship management" },
      { icon: Briefcase, name: "ERP Solutions", description: "Enterprise resource planning" },
      { icon: BarChart, name: "Business Intelligence", description: "Dashboards & reporting" },
      { icon: Mail, name: "Collaboration Tools", description: "Team communication platforms" },
      { icon: FileText, name: "Document Management", description: "Digital file systems" },
      { icon: Headphones, name: "Help Desk", description: "Support ticket systems" },
    ]
  },
  {
    category: "Consulting & Strategy",
    icon: Rocket,
    solutions: [
      { icon: Rocket, name: "Digital Transformation", description: "Technology roadmap planning" },
      { icon: BarChart, name: "IT Consulting", description: "Strategy & architecture" },
      { icon: Users, name: "Training & Support", description: "Team education & onboarding" },
      { icon: TrendingUp, name: "Growth Strategy", description: "Scaling & optimization" },
      { icon: Settings, name: "System Integration", description: "Third-party integrations" },
      { icon: FileText, name: "Technical Audits", description: "Code & security reviews" },
    ]
  },
];

const Solutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">
                Complete Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Every Technology Solution
              <br />
              <span className="text-accent">Your Business Needs</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              From development to deployment, security to strategy - we provide comprehensive technology solutions for modern businesses
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section ref={sectionRef} className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] animate-float" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto space-y-24">
              {solutionCategories.map((category, categoryIndex) => {
                const CategoryIcon = category.icon;
                const delay = `${categoryIndex * 0.1}s`;
                
                return (
                  <div
                    key={categoryIndex} 
                    className={`transition-opacity duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: delay }}
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <CategoryIcon className="w-6 h-6 text-accent" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">
                        {category.category}
                      </h2>
                    </div>

                    {/* Solutions Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.solutions.map((solution, index) => {
                        const SolutionIcon = solution.icon;
                        return (
                          <div
                            key={index}
                            className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:bg-primary/5 transition-colors"
                          >
                            <SolutionIcon className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground text-base mb-1">
                                {solution.name}
                              </h3>
                              <p className="text-sm text-muted-foreground leading-snug">
                                {solution.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-32 bg-accent text-accent-foreground">
          <div className="container mx-auto text-center px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent-foreground">
                Don't See What You're Looking For?
              </h2>
              <p className="text-xl text-accent-foreground/90 max-w-2xl mx-auto mb-8">
                We specialize in custom solutions. Let's discuss your unique needs and create something extraordinary together.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-background text-accent font-semibold px-8 py-4 rounded-lg hover:bg-background/90 transition-colors group"
              >
                Get Custom Solution
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;
