import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const caseStudies = [
  {
    id: 1,
    title: "FinTech Revolution",
    client: "Global Banking Corp",
    category: "Financial Technology",
    challenge: "Legacy banking systems causing poor customer experience and operational inefficiencies",
    solution: "Built a modern cloud-native banking platform with real-time transactions and AI-powered fraud detection",
    results: [
      { metric: "Transaction Speed", value: "10x faster", icon: Zap },
      { metric: "Customer Growth", value: "+250%", icon: TrendingUp },
      { metric: "User Satisfaction", value: "98%", icon: Users },
    ],
    technologies: ["React", "Node.js", "AWS", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "E-Commerce Transformation",
    client: "RetailMax Inc",
    category: "E-Commerce",
    challenge: "Low conversion rates and abandoned carts due to poor user experience",
    solution: "Redesigned the entire shopping experience with personalized recommendations and one-click checkout",
    results: [
      { metric: "Conversion Rate", value: "+185%", icon: TrendingUp },
      { metric: "Cart Abandonment", value: "-65%", icon: Zap },
      { metric: "Revenue Growth", value: "+$2.5M", icon: Users },
    ],
    technologies: ["Next.js", "Shopify", "AI Recommendations", "Stripe"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Healthcare Innovation",
    client: "MediCare Solutions",
    category: "Healthcare",
    challenge: "Paper-based processes leading to delays and errors in patient care",
    solution: "Developed an integrated health management system with telemedicine capabilities and AI diagnostics",
    results: [
      { metric: "Patient Wait Time", value: "-70%", icon: Zap },
      { metric: "Diagnostic Accuracy", value: "96%", icon: TrendingUp },
      { metric: "Patient Reach", value: "+500K", icon: Users },
    ],
    technologies: ["React Native", "HIPAA Compliant", "AI/ML", "Cloud"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    color: "from-green-500 to-emerald-500",
  },
];

const CaseStudies = () => {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block glass-card px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Success Stories
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Transforming Businesses
            <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Through Innovation
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Real results from real partnerships. See how we've helped companies achieve breakthrough success.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section ref={sectionRef} className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {caseStudies.map((study, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={study.id}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={isEven ? "order-1" : "order-1 md:order-2"}>
                    <div className="inline-block glass-card px-3 py-1 rounded-full text-sm mb-4">
                      {study.category}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">{study.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{study.client}</p>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h3 className="font-bold mb-2 text-accent">Challenge</h3>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-bold mb-2 text-accent">Solution</h3>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {study.results.map((result, idx) => {
                        const Icon = result.icon;
                        return (
                          <div key={idx} className="glass-card p-4 rounded-xl text-center">
                            <Icon className="w-6 h-6 mx-auto mb-2 text-accent" />
                            <div className="font-bold text-lg mb-1">{result.value}</div>
                            <div className="text-xs text-muted-foreground">{result.metric}</div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.map((tech, idx) => (
                        <span key={idx} className="glass-card px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button className="bg-gradient-to-r from-accent to-primary text-white hover:shadow-glow group">
                      Read Full Story
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  <div className={isEven ? "order-2" : "order-2 md:order-1"}>
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${study.color} rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity`} />
                      <div className="relative glass-card p-4 rounded-2xl hover-lift">
                        <img 
                          src={study.image}
                          alt={study.title}
                          className="rounded-xl w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
