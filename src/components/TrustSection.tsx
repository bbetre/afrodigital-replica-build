import { useState } from "react";
import { Star, Quote } from "lucide-react";

const TrustSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const clients = [
    {
      name: "Microsoft",
      logo: "Microsoft",
      testimonial: "AfroDigital's cloud migration strategy saved us 40% in infrastructure costs",
      author: "Sarah Chen, Cloud Architect",
      metric: "40% cost reduction",
    },
    {
      name: "AWS",
      logo: "AWS",
      testimonial: "Their serverless architecture expertise accelerated our product launch by 6 months",
      author: "James Wilson, VP Engineering",
      metric: "6 months faster",
    },
    {
      name: "Google Cloud",
      logo: "Google Cloud",
      testimonial: "Best-in-class security implementation that exceeded our compliance requirements",
      author: "Maria Garcia, CISO",
      metric: "100% compliance",
    },
    {
      name: "Salesforce",
      logo: "Salesforce",
      testimonial: "Seamless integration that unified our entire sales pipeline",
      author: "David Kim, Sales Director",
      metric: "3x efficiency",
    },
    {
      name: "Adobe",
      logo: "Adobe",
      testimonial: "Revolutionary AI-powered analytics transformed our customer insights",
      author: "Emma Thompson, Head of Data",
      metric: "10x insights",
    },
    {
      name: "IBM",
      logo: "IBM",
      testimonial: "Enterprise-grade solutions with startup-level agility",
      author: "Robert Chang, CTO",
      metric: "99.99% uptime",
    },
  ];
  
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-sm font-medium mb-6">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-accent">Trusted Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From startups to Fortune 500 companies, we help organizations innovate faster and scale with confidence
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="professional-card p-8 rounded-xl hover:shadow-elevated transition-all duration-300 flex items-center justify-center h-28 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-xl font-bold text-foreground/40 group-hover:text-foreground/80 transition-colors">
                  {client.logo}
                </div>
              </div>

              {/* Hover Card */}
              {hoveredIndex === index && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-72 z-50 animate-fade-in-up">
                  <div className="professional-card p-6 rounded-xl shadow-elevated">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-border rotate-45"></div>
                    
                    <Quote className="w-6 h-6 text-accent/30 mb-3" />
                    
                    <p className="text-sm text-foreground mb-4 leading-relaxed">
                      "{client.testimonial}"
                    </p>
                    
                    <div className="border-t pt-3">
                      <div className="text-xs font-semibold text-foreground">
                        {client.author}
                      </div>
                      <div className="text-xs text-accent font-bold mt-2">
                        {client.metric}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { value: "250+", label: "Enterprise Clients" },
            { value: "15+", label: "Years Experience" },
            { value: "98%", label: "Client Retention" },
            { value: "50+", label: "Countries Served" },
          ].map((stat, i) => (
            <div key={i} className="text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.1 + 0.6}s` }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
