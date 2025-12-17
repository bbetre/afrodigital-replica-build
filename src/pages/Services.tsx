import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Globe, Shield, Sparkles, TrendingUp, CheckCircle2, ArrowRight, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const services = [
  {
    icon: Code,
    title: "Application & Software Development",
    description: "We specialize in building bespoke software solutions from the ground up. Our process involves a deep dive into your business logic to create applications that are not just functional, but also scalable, secure, and perfectly aligned with your operational needs.",
    features: [
      "Custom Web Applications",
      "Mobile App Development (iOS & Android)",
      "Enterprise Software Solutions",
      "API Development & Integration",
      "Cloud-Native Applications",
      "Legacy System Modernization",
    ],
    technologies: ["React", "Node.js", "Python", "Java", "Swift", "Kotlin", "Go"],
    slug: "application-development",
  },
  {
    icon: Globe,
    title: "Website Development & Digital Presence",
    description: "Your website is your digital storefront. We craft visually stunning and highly performant websites that provide an exceptional user experience. From corporate sites and e-commerce platforms to dynamic web applications.",
    features: [
      "Responsive Web Design",
      "E-commerce Platforms",
      "Content Management Systems (CMS)",
      "Progressive Web Apps (PWAs)",
      "Search Engine Optimization (SEO)",
      "Website Maintenance & Support",
    ],
    technologies: ["WordPress", "Shopify", "Next.js", "Tailwind CSS", "TypeScript", "Gatsby"],
    slug: "website-development",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Infrastructure",
    description: "In today's digital landscape, security is paramount. We provide comprehensive cybersecurity services to protect your critical assets from evolving threats. Our approach is proactive, involving continuous monitoring and rapid incident response.",
    features: [
      "Security Audits & Assessments",
      "Penetration Testing",
      "Data Encryption Solutions",
      "Identity & Access Management (IAM)",
      "Compliance Management (GDPR, HIPAA)",
      "24/7 Security Monitoring & Incident Response",
    ],
    technologies: ["SSL/TLS", "OAuth", "JWT", "Firewall", "VPN", "SIEM", "AWS Security Hub"],
    slug: "security-solutions",
  },
  {
    icon: Sparkles,
    title: "AI Integration & Automation",
    description: "Harness the power of Artificial Intelligence to revolutionize your business. We integrate cutting-edge AI and machine learning models to automate complex processes, derive actionable insights from your data, and create intelligent products.",
    features: [
      "Machine Learning Model Development",
      "Natural Language Processing (NLP)",
      "Computer Vision Solutions",
      "Chatbot & Virtual Assistant Development",
      "Predictive Analytics & Forecasting",
      "AI-Powered Process Automation (RPA)",
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI APIs", "Hugging Face", "LangChain", "Azure AI"],
    slug: "ai-integration",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & Growth Strategies",
    description: "A great product needs a great audience. Our data-driven digital marketing strategies are designed to amplify your brand's voice and accelerate growth. We create targeted campaigns and optimize your online presence.",
    features: [
      "SEO & SEM Strategies",
      "Social Media Marketing Campaigns",
      "Content Marketing & Strategy",
      "Email Marketing & Automation",
      "Analytics & Performance Reporting",
      "Conversion Rate Optimization (CRO)",
    ],
    technologies: ["Google Analytics", "SEMrush", "HubSpot", "Mailchimp", "Meta Ads", "CRM Integration"],
    slug: "digital-marketing",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Streamline your operations with our comprehensive cloud infrastructure and automation solutions. We help you migrate to the cloud, set up CI/CD pipelines, and implement Infrastructure as Code (IaC) to ensure scalability and reliability.",
    features: [
      "Cloud Migration & Strategy",
      "CI/CD Pipeline Setup",
      "Infrastructure as Code (IaC)",
      "Container Orchestration (Kubernetes, Docker)",
      "Automated Testing & Deployment",
      "Cloud Cost Optimization",
    ],
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI"],
    slug: "automation-cloud-devops",
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(services[0].slug);
  const activeServiceData = useMemo(() => services.find(s => s.slug === activeService), [activeService]);

  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent/5 rounded-full blur-[80px] md:blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-[60px] md:blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />

          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">
                Our Services
              </span>
            </div>

            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
              Comprehensive Digital
              <br />
              <span className="text-accent">Solutions</span>
            </h1>

            <p className={`text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
              From concept to deployment, we deliver excellence across every digital touchpoint with cutting-edge technology and expert craftsmanship.
            </p>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="pt-8 pb-32 md:pt-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] animate-float" />

          <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-3 gap-8 md:gap-16">

            {/* Mobile Service Selector */}
            <div className="block lg:hidden mb-4">
              <label className="text-sm font-medium text-muted-foreground mb-2 block">Select Service</label>
              <Select onValueChange={setActiveService} defaultValue={activeService}>
                <SelectTrigger className="w-full bg-card border-border/50">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.slug} value={service.slug}>{service.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sticky Nav */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-32">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Our Services</h3>
                <nav>
                  <ul className="space-y-2">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <button
                          onClick={() => setActiveService(service.slug)}
                          className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${activeService === service.slug
                            ? 'bg-accent/10 text-accent font-semibold'
                            : 'text-muted-foreground hover:bg-primary/5 hover:text-foreground'
                            } w-full text-left`}
                        >
                          <service.icon className="w-5 h-5 flex-shrink-0" />
                          <span className="text-sm">{service.title}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Services Content */}
            <div className="lg:col-span-2">
              {activeServiceData && (
                <div className="professional-card p-8 md:p-12 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <activeServiceData.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        {activeServiceData.title}
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-10">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {activeServiceData.description}
                    </p>

                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-accent">Key Features</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {activeServiceData.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 professional-card p-4 rounded-xl border border-border/50">
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-accent">Technologies We Use</h3>
                      <div className="flex flex-wrap gap-2">
                        {activeServiceData.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-primary/5 border border-border/50 rounded-full text-sm font-medium text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-6 border-t border-border/50">
                      <Link to={`/services/${activeServiceData.slug}`}>
                        <div className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg professional-card border border-border/50 hover:border-accent/50 hover:shadow-elevated transition-all duration-300">
                          <span className="text-foreground font-medium">See More Detail</span>
                          <ArrowRight className="w-5 h-5 text-accent transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-32 relative overflow-hidden bg-primary/5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-accent">
                  Our Process
                </span>
              </div>
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                Our Streamlined Process
              </h2>
              <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
                A clear, collaborative journey from concept to successful deployment
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {[
                { step: "01", title: "Discover", description: "We analyze your needs and define project scope and goals." },
                { step: "02", title: "Design", description: "Creating intuitive interfaces and seamless user experiences." },
                { step: "03", title: "Development", description: "Building scalable solutions with cutting-edge technologies." },
                { step: "04", title: "Testing", description: "Rigorous QA to ensure flawless performance and security." },
                { step: "05", title: "Launch", description: "Deploying your solution and providing ongoing support." },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`professional-card p-8 rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  <div className="relative z-10">
                    <div className="text-5xl font-bold text-accent/20 mb-4 group-hover:text-accent/30 transition-colors">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-accent text-accent-foreground">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-accent-foreground/90 max-w-2xl mx-auto mb-8">
              Let's discuss how AfroDigital can empower your organization with innovative technology solutions.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-background text-accent font-semibold px-8 py-4 rounded-lg hover:bg-background/90 transition-colors group">
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
