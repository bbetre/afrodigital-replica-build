import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Globe, Shield, Sparkles, TrendingUp, Check, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "Application & Software Development",
    description: "We specialize in building bespoke software solutions from the ground up. Our process involves a deep dive into your business logic to create applications that are not just functional, but also scalable, secure, and perfectly aligned with your operational needs. Whether it's a complex enterprise system or a streamlined internal tool, we deliver robust software that powers your growth.",
    features: [
      "Custom Web Applications",
      "Mobile App Development (iOS & Android)",
      "Enterprise Software Solutions",
      "API Development & Integration",
      "Cloud-Native Applications",
      "Legacy System Modernization",
    ],
    technologies: ["React", "Node.js", "Python", "Java", "Swift", "Kotlin", "Go"],
  },
  {
    icon: Globe,
    title: "Website Development & Digital Presence",
    description: "Your website is your digital storefront. We craft visually stunning and highly performant websites that provide an exceptional user experience. From corporate sites and e-commerce platforms to dynamic web applications, we focus on responsive design, fast load times, and intuitive navigation to convert visitors into loyal customers and build a powerful brand presence.",
    features: [
      "Responsive Web Design",
      "E-commerce Platforms",
      "Content Management Systems (CMS)",
      "Progressive Web Apps (PWAs)",
      "Search Engine Optimization (SEO)",
      "Website Maintenance & Support",
    ],
    technologies: ["WordPress", "Shopify", "Next.js", "Tailwind CSS", "TypeScript", "Gatsby"],
  },
  {
    icon: Shield,
    title: "Cybersecurity & Infrastructure",
    description: "In today's digital landscape, security is paramount. We provide comprehensive cybersecurity services to protect your critical assets from evolving threats. Our approach is proactive, involving continuous monitoring, vulnerability assessments, and rapid incident response. We design and manage robust, scalable infrastructure to ensure your operations are always secure, compliant, and resilient.",
    features: [
      "Security Audits & Assessments",
      "Penetration Testing",
      "Data Encryption Solutions",
      "Identity & Access Management (IAM)",
      "Compliance Management (GDPR, HIPAA)",
      "24/7 Security Monitoring & Incident Response",
    ],
    technologies: ["SSL/TLS", "OAuth", "JWT", "Firewall", "VPN", "SIEM", "AWS Security Hub"],
  },
  {
    icon: Sparkles, // Changed to a more generic icon for AI
    title: "AI Integration & Automation",
    description: "Harness the power of Artificial Intelligence to revolutionize your business. We integrate cutting-edge AI and machine learning models to automate complex processes, derive actionable insights from your data, and create intelligent products. From predictive analytics to natural language processing, we help you unlock new levels of efficiency and innovation.",
    features: [
      "Machine Learning Model Development",
      "Natural Language Processing (NLP)",
      "Computer Vision Solutions",
      "Chatbot & Virtual Assistant Development",
      "Predictive Analytics & Forecasting",
      "AI-Powered Process Automation (RPA)",
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI APIs", "Hugging Face", "LangChain", "Azure AI"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & Growth Strategies",
    description: "A great product needs a great audience. Our data-driven digital marketing strategies are designed to amplify your brand's voice and accelerate growth. We create targeted campaigns, optimize your online presence for search engines, and engage your community on social media to build a loyal customer base and drive measurable results.",
    features: [
      "SEO & SEM Strategies",
      "Social Media Marketing Campaigns",
      "Content Marketing & Strategy",
      "Email Marketing & Automation",
      "Analytics & Performance Reporting",
      "Conversion Rate Optimization (CRO)",
    ],
    technologies: ["Google Analytics", "SEMrush", "HubSpot", "Mailchimp", "Meta Ads", "CRM Integration"],
  },
];

const clientLogos = [
  "Tilexpharmalink",
  "Medhhanet",
  "Ethio Pharma Link",
  "Hawassa University",
  "Cisco",
  "Barok Consultancy",
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-block glass-card px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Our Expertise
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Comprehensive Digital
              <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              We offer a full spectrum of technology services designed to innovate, optimize, and secure your digital landscape.
            </p>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="space-y-32">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className="grid md:grid-cols-2 gap-12 items-center"
                  >
                    <div className={`relative ${isEven ? "md:order-1" : "md:order-2"}`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl" />
                      <div className="relative glass-card p-12 rounded-2xl flex items-center justify-center aspect-square">
                        <Icon className="w-32 h-32 text-accent" />
                      </div>
                    </div>

                    <div className={isEven ? "md:order-2" : "md:order-1"}>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{service.description}</p>
                      
                      <h3 className="text-xl font-semibold mb-4 text-accent">Key Features</h3>
                      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-accent">Technologies We Use</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <span 
                              key={idx} 
                              className="glass-card px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link to="/contact">
                        <button className="group inline-flex items-center bg-gradient-to-r from-accent to-primary text-white font-semibold px-6 py-3 rounded-lg hover:shadow-glow transition-all">
                          Discuss Your Project
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-24 px-6 bg-primary/5">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Streamlined Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
              A clear, collaborative journey from concept to successful deployment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
              <div className="glass-card p-8 rounded-xl hover-lift">
                <div className="text-5xl font-bold text-accent mb-4">01</div>
                <h3 className="text-xl font-bold mb-2">Discover</h3>
                <p className="text-muted-foreground text-sm">We analyze your needs and define project scope and goals.</p>
              </div>
              <div className="glass-card p-8 rounded-xl hover-lift">
                <div className="text-5xl font-bold text-accent mb-4">02</div>
                <h3 className="text-xl font-bold mb-2">Design</h3>
                <p className="text-muted-foreground text-sm">Creating intuitive interfaces and seamless user experiences.</p>
              </div>
              <div className="glass-card p-8 rounded-xl hover-lift">
                <div className="text-5xl font-bold text-accent mb-4">03</div>
                <h3 className="text-xl font-bold mb-2">Development</h3>
                <p className="text-muted-foreground text-sm">Building scalable solutions with cutting-edge technologies.</p>
              </div>
              <div className="glass-card p-8 rounded-xl hover-lift">
                <div className="text-5xl font-bold text-accent mb-4">04</div>
                <h3 className="text-xl font-bold mb-2">Testing</h3>
                <p className="text-muted-foreground text-sm">Rigorous QA to ensure flawless performance and security.</p>
              </div>
              <div className="glass-card p-8 rounded-xl hover-lift">
                <div className="text-5xl font-bold text-accent mb-4">05</div>
                <h3 className="text-xl font-bold mb-2">Launch</h3>
                <p className="text-muted-foreground text-sm">Deploying your solution and providing ongoing support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-primary to-accent">
          <div className="container mx-auto text-center py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Let's discuss how AfroDigital can empower your organization with innovative technology solutions.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-primary-foreground text-primary font-semibold px-8 py-3 rounded-lg hover:bg-primary-foreground/90 transition-colors group">
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
