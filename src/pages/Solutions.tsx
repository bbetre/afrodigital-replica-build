import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Cloud, Database, Lock, Zap, Smartphone, ShoppingCart, 
  BarChart, Mail, Search, Users, MessageSquare, Briefcase,
  Cpu, Network, FileText, Video, Headphones, Rocket,
  Globe, Code, Shield, Sparkles, TrendingUp, Settings
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block glass-card px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Complete Solutions
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Every Technology Solution
            <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Your Business Needs
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            From development to deployment, security to strategy - we provide comprehensive technology solutions for modern businesses
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section ref={sectionRef} className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {solutionCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              
              return (
                <div
                  key={categoryIndex}
                  className={`glass-card p-8 rounded-2xl hover-lift transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary p-0.5">
                      <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                        <CategoryIcon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold">{category.category}</h2>
                  </div>

                  {/* Solutions List */}
                  <ul className="space-y-5">
                    {category.solutions.map((solution, index) => {
                      const SolutionIcon = solution.icon;
                      return (
                        <li key={index} className="flex items-start gap-4 group">
                          <SolutionIcon className="w-5 h-5 text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <div>
                            <h3 className="font-semibold group-hover:text-accent transition-colors">
                              {solution.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {solution.description}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We specialize in custom solutions. Let's discuss your unique needs and create something extraordinary together.
          </p>
          <button className="bg-gradient-to-r from-accent to-primary text-white px-8 py-4 rounded-lg font-medium hover:shadow-glow transition-all duration-300 hover:scale-105">
            Get Custom Solution
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
