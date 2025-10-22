import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Globe, Shield, Sparkles, TrendingUp, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Code,
    title: "Application & Software Development",
    description: "Custom enterprise solutions built with cutting-edge technology and scalable architecture.",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Custom web applications",
      "Mobile app development (iOS & Android)",
      "Enterprise software solutions",
      "API development & integration",
      "Cloud-native applications",
      "Legacy system modernization",
    ],
    technologies: ["React", "Node.js", "Python", "Java", "Swift", "Kotlin"],
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Stunning, high-performance websites that captivate audiences and drive conversions.",
    color: "from-purple-500 to-pink-500",
    features: [
      "Responsive web design",
      "E-commerce platforms",
      "Content management systems",
      "Progressive web apps",
      "SEO optimization",
      "Website maintenance & support",
    ],
    technologies: ["WordPress", "Shopify", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Enterprise-grade security infrastructure protecting your digital assets 24/7.",
    color: "from-red-500 to-orange-500",
    features: [
      "Security audits & assessments",
      "Penetration testing",
      "Data encryption solutions",
      "Identity & access management",
      "Compliance management",
      "24/7 security monitoring",
    ],
    technologies: ["SSL/TLS", "OAuth", "JWT", "Firewall", "VPN", "SIEM"],
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description: "Intelligent automation and machine learning solutions that transform operations.",
    color: "from-green-500 to-emerald-500",
    features: [
      "Machine learning models",
      "Natural language processing",
      "Computer vision solutions",
      "Chatbot development",
      "Predictive analytics",
      "AI-powered automation",
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "LangChain"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven strategies that amplify your brand and accelerate growth.",
    color: "from-amber-500 to-yellow-500",
    features: [
      "SEO & SEM strategies",
      "Social media marketing",
      "Content marketing",
      "Email campaign management",
      "Analytics & reporting",
      "Conversion optimization",
    ],
    technologies: ["Google Analytics", "SEMrush", "HubSpot", "Mailchimp", "Meta Ads"],
  },
];

const Services = () => {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block glass-card px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Our Services
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Comprehensive
            <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            End-to-end technology services designed to transform your business and drive sustainable growth
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section ref={sectionRef} className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={isEven ? "order-1" : "order-1 md:order-2"}>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-6`}>
                      <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="glass-card px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button className="bg-gradient-to-r from-accent to-primary text-white hover:shadow-glow">
                      Learn More
                    </Button>
                  </div>

                  <div className={isEven ? "order-2" : "order-2 md:order-1"}>
                    <div className="relative glass-card p-8 rounded-2xl hover-lift">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 rounded-2xl`} />
                      <img 
                        src={`https://images.unsplash.com/photo-${
                          index === 0 ? '1461749280216-8abb86b95e53' :
                          index === 1 ? '1467232004584-a241ec91a2c5' :
                          index === 2 ? '1563013544-824ae1b704d3' :
                          index === 3 ? '1677442136019-162473f315a3' :
                          '1460925895917-afdab827c52f'
                        }?w=800&h=600&fit=crop`}
                        alt={service.title}
                        className="rounded-xl w-full"
                      />
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

export default Services;
