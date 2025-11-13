import { Code2, Database, Cloud, Shield, Cpu, Zap, Server, GitBranch, Layers, Rocket, Terminal, Box } from "lucide-react";

const TechnologyStackSection = () => {
  const technologies = [
    { 
      icon: Code2, 
      name: "Frontend Development", 
      techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Angular"],
      color: "from-primary to-accent",
      description: "Modern, responsive user interfaces built with cutting-edge frameworks"
    },
    { 
      icon: Server, 
      name: "Backend Development", 
      techs: ["Node.js", "Python", "Go", "Java", "Ruby", "PHP"],
      color: "from-slate-600 to-slate-700",
      description: "Scalable server-side solutions and robust API development"
    },
    { 
      icon: Database, 
      name: "Databases", 
      techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Cassandra"],
      color: "from-gray-600 to-gray-700",
      description: "High-performance data storage and management systems"
    },
    { 
      icon: Cloud, 
      name: "Cloud Platforms", 
      techs: ["AWS", "Azure", "GCP", "DigitalOcean", "Heroku", "Vercel"],
      color: "from-zinc-600 to-zinc-700",
      description: "Scalable cloud infrastructure and deployment solutions"
    },
    { 
      icon: Shield, 
      name: "Security", 
      techs: ["OAuth", "JWT", "SSL/TLS", "Firewall", "VPN", "SIEM"],
      color: "from-neutral-600 to-neutral-700",
      description: "Enterprise-grade security and compliance solutions"
    },
    { 
      icon: Cpu, 
      name: "AI & Machine Learning", 
      techs: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face", "Scikit-learn"],
      color: "from-slate-700 to-gray-700",
      description: "Advanced AI models and machine learning frameworks"
    },
    { 
      icon: Zap, 
      name: "DevOps & Automation", 
      techs: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "GitLab CI"],
      color: "from-primary to-slate-700",
      description: "CI/CD pipelines and infrastructure automation"
    },
    { 
      icon: GitBranch, 
      name: "Version Control", 
      techs: ["Git", "GitHub", "GitLab", "Bitbucket", "SVN"],
      color: "from-accent to-primary",
      description: "Collaborative code management and version control"
    },
    { 
      icon: Box, 
      name: "Containerization", 
      techs: ["Docker", "Kubernetes", "Podman", "Containerd", "Rancher"],
      color: "from-gray-700 to-zinc-700",
      description: "Container orchestration and microservices deployment"
    },
    { 
      icon: Layers, 
      name: "Microservices", 
      techs: ["Kubernetes", "Docker Swarm", "Istio", "Consul", "Kong"],
      color: "from-slate-700 to-neutral-700",
      description: "Distributed systems and service mesh architecture"
    },
    { 
      icon: Terminal, 
      name: "Infrastructure as Code", 
      techs: ["Terraform", "Ansible", "CloudFormation", "Pulumi", "Chef"],
      color: "from-zinc-700 to-gray-700",
      description: "Automated infrastructure provisioning and management"
    },
    { 
      icon: Rocket, 
      name: "Monitoring & Observability", 
      techs: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic", "Splunk"],
      color: "from-primary to-accent",
      description: "Real-time monitoring and performance analytics"
    },
  ];

  return (
    <section id="technology-stack" className="py-32 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-fade-in-up">
            <Cpu className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Our Technology Stack
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            The Foundation of Our Innovation
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            We leverage a robust and modern technology stack to build solutions that are scalable, secure, and ready for the future.
          </p>
        </div>

        {/* Scrolling Marquee */}
        <div className="[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex w-max animate-marquee items-center space-x-8 py-4">
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="flex items-center gap-4 professional-card p-4 rounded-xl border border-border/50">
                <tech.icon className="w-7 h-7 text-accent" />
                <span className="font-semibold text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
          <div className="flex w-max animate-marquee-reverse items-center space-x-8 py-4">
            {[...technologies, ...technologies].reverse().map((tech, index) => (
              <div key={index} className="flex items-center gap-4 professional-card p-4 rounded-xl border border-border/50">
                <tech.icon className="w-7 h-7 text-accent" />
                <span className="font-semibold text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStackSection;
