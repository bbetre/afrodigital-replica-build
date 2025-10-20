import { BarChart3, Lock, Users, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Driven Automation",
      description: "Automate repetitive tasks and focus on innovation"
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Protect your data with military-grade encryption"
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Solutions designed around your users' needs"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Make informed decisions with analytics"
    }
  ];
  
  return (
    <section id="solutions" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for Scale, Designed for Ease
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're launching a new product or scaling existing systems, AfroDigital 
            keeps your business running efficiently with less complexity and more results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
