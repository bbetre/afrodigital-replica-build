import { Cpu, Sparkles, Layers, Brain, Shield, Zap } from "lucide-react";

const TechRadar = () => {
  const innovations = [
    {
      icon: Brain,
      title: "AI-Powered DevOps",
      status: "In Development",
      quarter: "Q2 2025",
      description: "Intelligent automation for deployment, monitoring, and optimization",
      progress: 65,
      color: "from-primary to-accent",
    },
    {
      icon: Cpu,
      title: "Edge Computing Platform",
      status: "In Development",
      quarter: "Q3 2025",
      description: "Distributed computing infrastructure for ultra-low latency",
      progress: 55,
      color: "from-accent to-primary",
    },
    {
      icon: Zap,
      title: "Real-Time Analytics Engine",
      status: "Beta Testing",
      quarter: "Q1 2025",
      description: "Process billions of events per second with sub-millisecond latency",
      progress: 80,
      color: "from-primary to-accent",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Beta Testing":
        return "bg-accent/10 text-accent border-accent/20";
      case "In Development":
        return "bg-accent/10 text-accent border-accent/20";
      case "Pilot Program":
        return "bg-accent/10 text-accent border-accent/20";
      case "Research Phase":
        return "bg-muted text-muted-foreground border-border";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent">Innovation Lab</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Technology Radar 2025
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pioneering next-generation technologies to keep you ahead of the curve
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {innovations.map((innovation, index) => (
            <div
              key={index}
              className="professional-card p-6 rounded-xl hover:shadow-elevated transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <innovation.icon className="w-6 h-6 text-accent" />
                </div>
                <div className={`text-xs font-semibold px-2 py-1 rounded-full border ${getStatusColor(innovation.status)}`}>
                  {innovation.status}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                {innovation.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {innovation.description}
              </p>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-medium">Progress</span>
                  <span className="font-bold text-accent">{innovation.progress}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent transition-all duration-1000"
                    style={{ width: `${innovation.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 pt-4 border-t flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Target Release</span>
                <span className="text-xs font-bold">{innovation.quarter}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Want to be part of our innovation journey?{" "}
            <a href="/contact" className="text-accent hover:underline font-semibold">
              Partner with us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechRadar;
