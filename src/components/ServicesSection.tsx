import { Code, Globe, Shield, Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "Application & Software Development",
    description: "Custom enterprise solutions built with cutting-edge technology and scalable architecture.",
    color: "from-blue-500 to-cyan-500",
    delay: "0s",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Stunning, high-performance websites that captivate audiences and drive conversions.",
    color: "from-purple-500 to-pink-500",
    delay: "0.1s",
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Enterprise-grade security infrastructure protecting your digital assets 24/7.",
    color: "from-red-500 to-orange-500",
    delay: "0.2s",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description: "Intelligent automation and machine learning solutions that transform operations.",
    color: "from-green-500 to-emerald-500",
    delay: "0.3s",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven strategies that amplify your brand and accelerate growth.",
    color: "from-amber-500 to-yellow-500",
    delay: "0.4s",
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
    <section ref={sectionRef} id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-block glass-card px-4 py-2 rounded-full text-sm font-medium mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Our Services
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
            Comprehensive Digital Solutions
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            From concept to deployment, we deliver excellence across every digital touchpoint
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link to="/services" key={index} className="h-full">
                <div
                  className={`group relative glass-card p-8 rounded-2xl hover-lift transition-all duration-500 border border-border/50 hover:border-accent/50 h-full ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: service.delay }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent group-hover:text-primary transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover arrow */}
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
