import teamCollaboration from "@/assets/team-collaboration.jpg";
import { CheckCircle2 } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Enterprise-grade infrastructure and security",
    "Scalable solutions that grow with your business",
    "24/7 support and maintenance",
    "Agile development with rapid deployment"
  ];
  
  return (
    <section id="about" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-accent h-1 w-16 mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Business Benefits.
              So Does Your Entire Team.
            </h2>
            
            <div className="bg-accent/10 border-l-4 border-accent p-6 mb-8 rounded-r-lg">
              <p className="text-lg leading-relaxed mb-4">
                "AfroDigital transformed our digital presence completely. Their AI-powered solutions 
                reduced our operational costs by 60% while improving customer satisfaction dramatically."
              </p>
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-sm opacity-80">Chief Technology Officer, TechCorp</div>
            </div>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-medium">
              <img 
                src={teamCollaboration} 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-medium">
              <div className="text-4xl font-bold">98%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
