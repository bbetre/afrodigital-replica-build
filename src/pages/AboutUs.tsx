import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import { Target, Users, Zap, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Empowering businesses through innovative technology solutions that drive real results.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships through exceptional service.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Staying ahead of the curve with cutting-edge technologies and forward-thinking solutions.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering quality that exceeds expectations in every project we undertake.",
    color: "from-green-500 to-emerald-500",
  },
];

const team = [
  { name: "Sarah Johnson", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
  { name: "Michael Chen", role: "CTO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
  { name: "Emily Rodriguez", role: "Head of Design", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" },
  { name: "David Kim", role: "Lead Developer", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" },
];

const AboutUs = () => {
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
              About AfroDigital
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Building the Future of
            <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            We're a team of passionate innovators dedicated to transforming businesses through cutting-edge technology and strategic digital solutions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020, AfroDigital emerged from a vision to bridge the gap between businesses and transformative technology. What started as a small team of passionate developers has grown into a full-service digital agency serving clients worldwide.
                </p>
                <p>
                  We believe that technology should empower, not complicate. That's why we focus on creating solutions that are not only powerful and scalable but also intuitive and user-friendly.
                </p>
                <p>
                  Today, we're proud to have helped over 200+ businesses transform their digital presence, from startups to Fortune 500 companies.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card p-8 rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                  alt="Team collaboration"
                  className="rounded-xl w-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full blur-3xl opacity-30 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={sectionRef} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Our Core Values
            </h2>
            <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`glass-card p-8 rounded-2xl hover-lift transition-all duration-500 border border-border/50 hover:border-accent/50 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} p-0.5 mb-6`}>
                    <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The brilliant minds behind AfroDigital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group glass-card p-6 rounded-2xl hover-lift transition-all duration-500"
              >
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
