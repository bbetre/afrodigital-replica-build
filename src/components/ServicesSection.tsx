import { Code, Globe, Shield, Sparkles, TrendingUp, ArrowRight, CheckCircle2, Cloud } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "Application & Software Development",
    description: "Custom enterprise solutions built with cutting-edge technology and scalable architecture.",
    features: ["Custom Development", "Scalable Architecture", "API Integration", "Cloud Deployment"],
    color: "from-primary to-accent",
    bgColor: "from-primary/5 to-accent/5",
    delay: "0s",
    slug: "application-development",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Stunning, high-performance websites that captivate audiences and drive conversions.",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Modern UI/UX"],
    color: "from-slate-600 to-slate-700",
    bgColor: "from-slate-500/5 to-slate-600/5",
    delay: "0.1s",
    slug: "website-development",
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Enterprise-grade security infrastructure protecting your digital assets 24/7.",
    features: ["Threat Protection", "Data Encryption", "Compliance", "24/7 Monitoring"],
    color: "from-gray-700 to-gray-800",
    bgColor: "from-gray-600/5 to-gray-700/5",
    delay: "0.2s",
    slug: "security-solutions",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description: "Intelligent automation and machine learning solutions that transform operations.",
    features: ["Machine Learning", "Process Automation", "Data Analytics", "AI Consultation"],
    color: "from-zinc-700 to-zinc-800",
    bgColor: "from-zinc-600/5 to-zinc-700/5",
    delay: "0.3s",
    slug: "ai-integration",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven strategies that amplify your brand and accelerate growth.",
    features: ["SEO & SEM", "Social Media", "Content Strategy", "Analytics & Reporting"],
    color: "from-neutral-700 to-neutral-800",
    bgColor: "from-neutral-600/5 to-neutral-700/5",
    delay: "0.4s",
    slug: "digital-marketing",
  },
  {
    icon: Cloud,
    title: "Automation, Cloud & DevOps",
    description: "Seamless cloud infrastructure and automation solutions that scale with your business.",
    features: ["Cloud Migration", "CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration"],
    color: "from-primary to-slate-700",
    bgColor: "from-primary/5 to-slate-600/5",
    delay: "0.5s",
    slug: "automation-cloud-devops",
  },
];

const ServicesSection = () => {
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
    <section ref={sectionRef} id="services" className="py-32 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">
              Our Services
            </span>
          </div>
          
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
            Comprehensive Digital
            <br />
            <span className="text-accent">Solutions</span>
          </h2>
          
          <p className={`text-xl text-muted-foreground leading-relaxed ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            From concept to deployment, we deliver excellence across every digital touchpoint with cutting-edge technology and expert craftsmanship.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link 
                to={`/services/${service.slug}`}
                key={index} 
                className="h-full block group"
              >
                <div
                  className={`relative h-full professional-card rounded-2xl p-8 border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-elevated hover:-translate-y-2 overflow-hidden ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: service.delay }}
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Accent line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="mb-6 flex items-start justify-between">
                      <div className="relative w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 group-hover:bg-accent/15 group-hover:border-accent/30 p-2 group-hover:scale-110 transition-all duration-300">
                        <div className="w-full h-full rounded-xl flex items-center justify-center">
                          <Icon className="w-7 h-7 text-accent group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                      
                      {/* Service number badge */}
                      <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 opacity-0 group-hover:opacity-100 flex items-center justify-center text-accent text-xs font-bold transition-opacity duration-300">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          <CheckCircle2 className={`w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ transitionDelay: `${idx * 50}ms` }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Arrow */}
                    <div className="flex items-center gap-2 text-accent font-medium text-sm mt-6 pt-6 border-t border-border/50 group-hover:border-accent/30 transition-colors">
                      <span className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                        Learn More
                      </span>
                      <ArrowRight className="w-4 h-4 transform translate-x-[-10px] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent/5 opacity-0 group-hover:opacity-100 rounded-tl-full transition-opacity duration-500" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.5s" }}>
          <Link to="/services">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full professional-card border border-border/50 hover:border-accent/50 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <span className="text-foreground font-medium">Explore All Services</span>
              <ArrowRight className="w-5 h-5 text-accent transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
