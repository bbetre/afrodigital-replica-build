import { Button } from "@/components/ui/button";
import heroShape from "@/assets/hero-shape.png";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-60">
        <img src={heroShape} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-medium mb-6">
            Digital Excellence
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Designed to Innovate.
            <br />
            Built to Transform.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Transform your business with cutting-edge software development, AI solutions, and digital marketing. 
            Fully integrated security and seamless deployment.
          </p>
          
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 py-6 text-lg">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
