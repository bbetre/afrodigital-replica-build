import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import { Target, Users, Zap, Award } from "lucide-react";
import betermariyamProfilePic from "@/assets/1728312666234.jpeg";

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
  { name: "BeterMariyam Yosef", role: "Founder and CEO", image: betermariyamProfilePic, linkedin: "https://www.linkedin.com/in/betremariyamyosef/" },
  { name: "Biruk Damtew", role: "Co-Founder", image: "https://source.boringavatars.com/beam/120/Biruk%20Damtew?colors=264653,2a9d8f,e9c46a,f4a261,e76f51" },
  { name: "Natnil Teklay", role: "Head of Design", image: "https://source.boringavatars.com/beam/120/Natnil%20Teklay?colors=264653,2a9d8f,e9c46a,f4a261,e76f51" },
  { name: "Adonial Alemayehu", role: "FullStack Developer", image: "https://source.boringavatars.com/beam/120/Adonial%20Alemayehu?colors=264653,2a9d8f,e9c46a,f4a261,e76f51" },
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
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-2xl text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p className="text-left md:text-center">
                  Founded in 2020, AfroDigital emerged from a vision to bridge the gap between businesses and transformative technology. What started as a small team of passionate developers has grown into a full-service digital agency serving clients worldwide.
                </p>
                <p className="text-left md:text-center">
                  We believe that technology should empower, not complicate. That's why we focus on creating solutions that are not only powerful and scalable but also intuitive and user-friendly.
                </p>
                <p className="text-left md:text-center">
                  Today, we're proud to have helped over 200+ businesses transform their digital presence, from startups to Fortune 500 companies.
                </p>
              </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {team.map((member, index) => (
              <div key={index} className="group text-center transition-all duration-500">
                {member.linkedin ? (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="relative inline-block mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-40 h-40 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-accent transition-all duration-500" />
                  </a>
                ) : (
                  <div className="relative inline-block mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-40 h-40 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-accent transition-all duration-500" />
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-accent font-semibold">{member.role}</p>
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
