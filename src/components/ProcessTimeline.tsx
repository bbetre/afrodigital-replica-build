import { Lightbulb, PenTool, Code, Rocket, CheckCircle } from "lucide-react";

const ProcessTimeline = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Discovery",
      description: "We analyze your business needs and define project scope",
      color: "from-primary to-accent",
      position: "left",
      team: ["Product Manager", "Solutions Architect", "Business Analyst"],
      tools: ["Market Research", "Competitive Analysis", "Requirements Mapping"],
      milestone: "Strategic Blueprint",
      testimonial: "They understood our vision immediately",
    },
    {
      icon: PenTool,
      title: "Design",
      description: "Creating intuitive interfaces and seamless user experiences",
      color: "from-slate-600 to-slate-700",
      position: "right",
      team: ["UX Designer", "UI Designer", "Design Systems Lead"],
      tools: ["Figma", "User Testing", "Design Systems"],
      milestone: "Interactive Prototypes",
      testimonial: "Beautiful designs that users love",
    },
    {
      icon: Code,
      title: "Development",
      description: "Building scalable solutions with cutting-edge technologies",
      color: "from-gray-600 to-gray-700",
      position: "left",
      team: ["Frontend Devs", "Backend Devs", "DevOps Engineers"],
      tools: ["React", "Node.js", "Cloud Infrastructure"],
      milestone: "Production-Ready Code",
      testimonial: "Clean, scalable, and maintainable",
    },
    {
      icon: CheckCircle,
      title: "Testing",
      description: "Rigorous QA to ensure flawless performance and security",
      color: "from-zinc-600 to-zinc-700",
      position: "right",
      team: ["QA Engineers", "Security Experts", "Performance Specialists"],
      tools: ["Automated Testing", "Security Audits", "Load Testing"],
      milestone: "Quality Assurance",
      testimonial: "Zero compromises on quality",
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Deploying your solution and providing ongoing support",
      color: "from-primary to-slate-700",
      position: "left",
      team: ["DevOps", "Support Team", "Success Managers"],
      tools: ["CI/CD", "Monitoring", "24/7 Support"],
      milestone: "Live & Thriving",
      testimonial: "Smooth launch, exceptional support",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-sm font-medium mb-6">
            <Rocket className="w-4 h-4 text-accent" />
            <span className="text-accent">Client Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Your Success Journey
            <br />
            <span className="text-accent">Transparent, Collaborative, Results-Driven</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology delivering projects on time, on budget, and exceeding expectations every step of the way
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent transform -translate-x-1/2 hidden lg:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center animate-fade-in-up ${
                  step.position === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Content card */}
                <div className={`flex-1 ${step.position === "left" ? "lg:pr-12" : "lg:pl-12"}`}>
                  <div className="professional-card p-4 rounded-2xl hover-lift hover:shadow-elevated group relative overflow-hidden">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/15 group-hover:border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                          <step.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-1 group-hover:text-accent transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Team */}
                      <div className="mb-2">
                        <div className="text-[11px] font-semibold text-muted-foreground mb-2">TEAM ROLES</div>
                        <div className="flex flex-wrap gap-2">
                          {step.team.map((role, i) => (
                            <span key={i} className="text-xs px-2 py-1 rounded-full bg-secondary text-foreground">
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Tools */}
                      <div className="mb-2">
                        <div className="text-[10px] font-semibold text-muted-foreground mb-1">TOOLS & METHODS</div>
                        <div className="flex flex-wrap gap-2">
                          {step.tools.map((tool, i) => (
                            <span key={i} className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Milestone & Testimonial */}
                      <div className="pt-2 border-t flex items-start justify-between gap-3">
                        <div>
                          <div className="text-[10px] font-semibold text-muted-foreground mb-1">MILESTONE</div>
                          <div className="font-bold text-xs">{step.milestone}</div>
                        </div>
                        <div className="text-right max-w-[45%]">
                          <div className="text-xs italic text-muted-foreground">"{step.testimonial}"</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-5 h-5 rounded-full bg-accent border-4 border-background shadow-md" />
                </div>

                {/* Step number */}
                <div className={`hidden lg:block flex-1 ${step.position === "left" ? "pl-12" : "pr-12 text-right"}`}>
                  <div className="inline-block text-5xl font-bold text-accent/20">
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
