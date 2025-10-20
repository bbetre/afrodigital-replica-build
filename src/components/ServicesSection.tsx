import { Code2, Globe, Shield, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code2,
    title: "Application & Software Development",
    description: "Custom software solutions built with modern technologies to drive your business forward.",
    color: "text-blue-500"
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Responsive, fast, and beautiful websites that convert visitors into customers.",
    color: "text-green-500"
  },
  {
    icon: Shield,
    title: "Security",
    description: "Enterprise-grade security solutions to protect your data and infrastructure.",
    color: "text-red-500"
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    description: "Leverage artificial intelligence to automate processes and gain insights.",
    color: "text-purple-500"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that grow your brand and increase revenue.",
    color: "text-orange-500"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent h-1 w-16 mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Five Powerful Services.
            <br />
            One Seamless Experience.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-accent/20"
            >
              <div className={`${service.color} mb-4`}>
                <service.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="font-medium px-8">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
