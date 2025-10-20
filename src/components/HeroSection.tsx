import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-0 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
      
      {/* Parallax shape */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full opacity-30 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-primary/30 backdrop-blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in-up shadow-glow">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Next-Generation Digital Solutions
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent bg-200% animate-gradient-shift">
              Designed to Innovate.
            </span>
            <br />
            <span className="text-foreground">
              Built to Transform.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Transform your business with cutting-edge software development, AI solutions, and digital marketing. 
            Fully integrated security and seamless deployment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-accent to-primary text-white hover:shadow-glow font-medium px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="glass-card font-medium px-8 py-6 text-lg hover-lift"
            >
              View Our Work
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-default">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
