import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import { Target, Users, Zap, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import betermariyamProfilePic from "@/assets/1728312666234.jpeg";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Empowering businesses through innovative technology solutions that drive real results.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships through exceptional service.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Staying ahead of the curve with cutting-edge technologies and forward-thinking solutions.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering quality that exceeds expectations in every project we undertake.",
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
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">
                About AfroDigital
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Building the Future of
              <br />
              <span className="text-accent">Digital Innovation</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              We're a team of passionate innovators dedicated to transforming businesses through cutting-edge technology and strategic digital solutions.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="professional-card p-12 md:p-16 rounded-2xl border border-border/50">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                    <span className="text-sm font-medium text-accent">Our Story</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
                    Empowering Businesses Through Technology
                  </h2>
                </div>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    Founded in 2020, AfroDigital emerged from a vision to bridge the gap between businesses and transformative technology. What started as a small team of passionate developers has grown into a full-service digital agency serving clients worldwide.
                  </p>
                  <p>
                    We believe that technology should empower, not complicate. That's why we focus on creating solutions that are not only powerful and scalable but also intuitive and user-friendly.
                  </p>
                  <p>
                    Today, we're proud to have helped over 200+ businesses transform their digital presence, from startups to Fortune 500 companies. Our commitment to excellence and innovation drives everything we do.
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-12 pt-12 border-t grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">200+</div>
                    <div className="text-sm text-muted-foreground">Clients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={sectionRef} className="py-32 relative overflow-hidden bg-primary/5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-accent">
                  Our Values
                </span>
              </div>
              
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                Our Core Values
              </h2>
              
              <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className={`group relative professional-card p-8 rounded-2xl border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-elevated hover:-translate-y-2 overflow-hidden ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    {/* Accent line */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      {/* Icon Container */}
                      <div className="mb-6">
                        <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/15 group-hover:border-accent/30 p-3 group-hover:scale-110 transition-all duration-300 inline-flex items-center justify-center">
                          <Icon className="w-7 h-7 text-accent" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                        {value.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>

                    {/* Decorative corner element */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-accent/5 opacity-0 group-hover:opacity-100 rounded-tl-full transition-opacity duration-500" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Our Team
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Meet Our Team
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The brilliant minds behind AfroDigital
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group text-center professional-card p-8 rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
                >
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-block mb-6"
                    >
                      <div className="relative w-32 h-32 mx-auto">
                        <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                          src={member.image}
                          alt={member.name}
                          className="relative w-32 h-32 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 shadow-lg border-4 border-border/50 group-hover:border-accent/50 transition-colors"
                        />
                      </div>
                    </a>
                  ) : (
                    <div className="relative inline-block mb-6">
                      <div className="relative w-32 h-32 mx-auto">
                        <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                          src={member.image}
                          alt={member.name}
                          className="relative w-32 h-32 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 shadow-lg border-4 border-border/50 group-hover:border-accent/50 transition-colors"
                        />
                      </div>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                    {member.name}
                  </h3>
                  
                  <p className="text-accent font-semibold text-sm">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-accent text-accent-foreground">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent-foreground">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-accent-foreground/90 max-w-2xl mx-auto mb-8">
              Let's build something amazing together. Get in touch and let's discuss your next project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-background text-accent font-semibold px-8 py-4 rounded-lg hover:bg-background/90 transition-colors group"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
