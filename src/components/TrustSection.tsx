import { useState } from "react";
import { Star, Quote } from "lucide-react";

const TrustSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const clients = [
    {
      name: "Tilexpharmalink",
      logo: "https://www.tilexpharmalink.com/wp-content/uploads/2025/07/cropped-logo-1-black-copy.png",
      testimonial: "AfroDigital's cloud migration and website building strategy saved us 40% in infrastructure costs",
      author: "Alemayehu, Founder",
      metric: "40% cost reduction",
    },
    {
      name: "Medhhanet",
      logo: "https://www.medhhanet.com/upload/site_settings/202201221117medhhanet_logo.png",
      testimonial: "Their serverless architecture expertise accelerated our product launch by 6 months",
      author: "Yohanes, Digital Director",
      metric: "6 months faster",
    },
    {
      name: "Ethio Pharma Link",
      logo: "https://www.ethiopharmalink.com/wp-content/uploads/2022/06/logo-new.png",
      testimonial: "Best-in-class security implementation that exceeded our compliance requirements",
      author: "Tigist, Owner",
      metric: "100% compliance",
    },
    {
      name: "Hawassa University",
      logo: "https://www.hu.edu.et//images/huimages/logos/hwu%20logo.png",
      testimonial: "Flexible IT structures for online and offline learning during challenging times",
      author: "Dr Dereba, IT Head",
      metric: "3x efficiency",
    },
    {
      name: "Cisco",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/640px-Cisco_logo_blue_2016.svg.png",
      testimonial: "Revolutionary AI-powered analytics transformed our customer insights",
      author: "Emma Thompson, Head of Data",
      metric: "10x insights",
    },
    {
      name: "Barok Consultancy",
      logo: "https://logowik.com/content/uploads/images/ibm-2022-new9399.logowik.com.webp",
      testimonial: "Enterprise-grade solutions with startup-level agility",
      author: "",
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
                <img src={client.logo} alt={`${client.name} logo`} className="h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition-all" />
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
            { value: "112+", label: "Enterprise Clients" },
            { value: "5+", label: "Years Experience" },
            { value: "98%", label: "Client Retention" },
            { value: "10+", label: "Countries Served" },
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
