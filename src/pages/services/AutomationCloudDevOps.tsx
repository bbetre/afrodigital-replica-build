import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cloud, Check, ArrowRight, Server, GitBranch, Layers, Zap, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const AutomationCloudDevOps = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-accent/5" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/10 border border-accent/20 mb-8">
                <Cloud className="w-6 h-6 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Automation, Cloud & DevOps
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
                Seamless Cloud Infrastructure
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Streamline your operations with our comprehensive cloud infrastructure and automation solutions. We help you migrate to the cloud, set up CI/CD pipelines, and implement Infrastructure as Code (IaC) to ensure scalability, reliability, and efficiency.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <button className="group inline-flex items-center bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-lg hover:bg-accent/90 transition-all">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link to="/services">
                  <button className="inline-flex items-center professional-card border border-border/50 font-semibold px-8 py-4 rounded-lg hover:border-accent/50 transition-all">
                    View All Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Comprehensive DevOps Solutions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12">
                Our DevOps expertise enables continuous integration, automated testing, and seamless deployments that accelerate your development cycles and reduce operational overhead. Build, deploy, and scale with confidence.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <Cloud className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Cloud Migration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Seamlessly migrate your infrastructure to the cloud. We handle the entire migration process, from planning to execution, ensuring minimal downtime.
                  </p>
                </div>
                
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <GitBranch className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">CI/CD Pipelines</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Set up automated continuous integration and deployment pipelines. Accelerate development cycles and ensure reliable, consistent deployments.
                  </p>
                </div>
                
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <Layers className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Infrastructure as Code</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Manage your infrastructure with code. Use Terraform, Ansible, and other IaC tools to provision and manage infrastructure efficiently.
                  </p>
                </div>
                
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <Server className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Container Orchestration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Deploy and manage containers at scale with Kubernetes and Docker. Build scalable, resilient microservices architectures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Key Features & Capabilities</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Cloud Migration & Strategy",
                  "CI/CD Pipeline Setup",
                  "Infrastructure as Code (IaC)",
                  "Container Orchestration (Kubernetes, Docker)",
                  "Automated Testing & Deployment",
                  "Cloud Cost Optimization",
                  "Multi-Cloud Strategies",
                  "Serverless Architecture",
                  "Microservices Deployment",
                  "Monitoring & Logging",
                  "Disaster Recovery",
                  "DevOps Consulting",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 professional-card p-4 rounded-xl border border-border/50">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">DevOps Technologies</h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                We use industry-leading cloud platforms and DevOps tools
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI", "Ansible", "Chef", "Puppet", "Prometheus", "Grafana", "ELK Stack", "CloudFormation", "Pulumi"].map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 professional-card border border-border/50 rounded-full text-sm font-medium hover:border-accent/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our DevOps Process</h2>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Assessment & Strategy", description: "We assess your current infrastructure and develop a comprehensive DevOps strategy that aligns with your business goals." },
                  { step: "02", title: "Cloud Migration", description: "We migrate your applications and infrastructure to the cloud, ensuring minimal disruption and maximum efficiency." },
                  { step: "03", title: "CI/CD Setup", description: "We set up automated CI/CD pipelines to streamline your development and deployment processes." },
                  { step: "04", title: "Infrastructure Automation", description: "We implement Infrastructure as Code to automate provisioning, configuration, and management of your infrastructure." },
                  { step: "05", title: "Monitoring & Optimization", description: "We set up comprehensive monitoring and logging to ensure optimal performance and continuous improvement." },
                ].map((item, idx) => (
                  <div key={idx} className="professional-card p-8 rounded-2xl border border-border/50 hover:border-accent/30 transition-all">
                    <div className="flex items-start gap-6">
                      <div className="text-5xl font-bold text-accent/20">{item.step}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-accent text-accent-foreground">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent-foreground">
              Ready to Streamline Your Operations?
            </h2>
            <p className="text-xl text-accent-foreground/90 max-w-2xl mx-auto mb-8">
              Let's discuss how cloud infrastructure and automation can accelerate your development and reduce operational costs.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-background text-accent font-semibold px-8 py-4 rounded-lg hover:bg-background/90 transition-colors group">
              Get DevOps Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AutomationCloudDevOps;

