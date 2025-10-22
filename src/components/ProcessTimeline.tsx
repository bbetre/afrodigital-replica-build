import { Lightbulb, PenTool, Code, Rocket, CheckCircle } from "lucide-react";

const ProcessTimeline = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Discovery",
      description: "We analyze your business needs and define project scope",
      color: "from-yellow-500 to-amber-500",
      position: "left"
    },
    {
      icon: PenTool,
      title: "Design",
      description: "Creating intuitive interfaces and seamless user experiences",
      color: "from-pink-500 to-rose-500",
      position: "right"
    },
    {
      icon: Code,
      title: "Development",
      description: "Building scalable solutions with cutting-edge technologies",
      color: "from-blue-500 to-cyan-500",
      position: "left"
    },
    {
      icon: CheckCircle,
      title: "Testing",
      description: "Rigorous QA to ensure flawless performance and security",
      color: "from-green-500 to-emerald-500",
      position: "right"
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Deploying your solution and providing ongoing support",
      color: "from-purple-500 to-violet-500",
      position: "left"
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Rocket className="w-4 h-4 text-accent" />
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              From Concept to Reality
            </span>
            <br />
            <span className="text-foreground">In Five Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures your project is delivered on time, on budget, and exceeds expectations
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent transform -translate-x-1/2 hidden lg:block" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center animate-fade-in-up ${
                  step.position === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content card */}
                <div className={`flex-1 ${step.position === "left" ? "lg:pr-12" : "lg:pl-12"}`}>
                  <div className="glass-card p-8 rounded-2xl hover-lift group relative overflow-hidden">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                          <step.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.color} shadow-glow animate-pulse-glow border-4 border-background`} />
                </div>

                {/* Step number */}
                <div className={`hidden lg:block flex-1 ${step.position === "left" ? "pl-12" : "pr-12 text-right"}`}>
                  <div className={`inline-block text-6xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-20`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
    </section>
  );
};

export default ProcessTimeline;
