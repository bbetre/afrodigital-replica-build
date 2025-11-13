import { Code2, Database, Cloud, Shield, Cpu, Zap } from "lucide-react";

const TechStackShowcase = () => {
  const technologies = [
    { 
      icon: Code2, 
      name: "Frontend", 
      techs: ["React", "Next.js", "Vue.js", "TypeScript"],
      color: "from-primary to-accent"
    },
    { 
      icon: Database, 
      name: "Backend", 
      techs: ["Node.js", "Python", "Go", "PostgreSQL"],
      color: "from-slate-600 to-slate-700"
    },
    { 
      icon: Cloud, 
      name: "Cloud", 
      techs: ["AWS", "Azure", "GCP", "Docker"],
      color: "from-gray-600 to-gray-700"
    },
    { 
      icon: Shield, 
      name: "Security", 
      techs: ["OAuth", "JWT", "SSL/TLS", "Encryption"],
      color: "from-zinc-600 to-zinc-700"
    },
    { 
      icon: Cpu, 
      name: "AI/ML", 
      techs: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"],
      color: "from-neutral-600 to-neutral-700"
    },
    { 
      icon: Zap, 
      name: "DevOps", 
      techs: ["CI/CD", "Kubernetes", "Jenkins", "Terraform"],
      color: "from-primary to-slate-700"
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Background elements */}
      <div className="absolute inset-0 bg-accent/3" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Cpu className="w-4 h-4 text-accent" />
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Technology Stack
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Powered by Cutting-Edge
            <br />
            <span className="text-accent">Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage the latest technologies to build scalable, secure, and high-performance solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover-lift group relative overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 group-hover:bg-accent/15 group-hover:border-accent/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <tech.icon className="w-8 h-8 text-accent" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {tech.name}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {tech.techs.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-background/50 backdrop-blur-sm border border-border group-hover:border-accent/50 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-[80px] animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: "3s" }} />
      </div>
    </section>
  );
};

export default TechStackShowcase;
