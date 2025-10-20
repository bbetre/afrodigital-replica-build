import { Zap, Lock, Cloud, Cpu, BarChart, Layers } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance delivering sub-second load times",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Lock,
    title: "Fort Knox Security",
    description: "Military-grade encryption and compliance standards",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Scalable infrastructure that grows with your needs",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    icon: Cpu,
    title: "AI-Powered",
    description: "Intelligent automation and predictive analytics",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: BarChart,
    title: "Real-Time Analytics",
    description: "Actionable insights driving data-informed decisions",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "Connect with your existing tools and workflows",
    gradient: "from-pink-500 to-rose-500",
  },
];

const FeaturesSection = () => {
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
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-block glass-card px-4 py-2 rounded-full text-sm font-medium mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Platform Features
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
            Built for the Future
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            Enterprise-grade features that power the world's most innovative companies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border border-border/50 bg-card hover:border-accent/50 transition-all duration-500 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 blur-xl`} />
                
                <div className="relative">
                  {/* Icon with gradient */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
