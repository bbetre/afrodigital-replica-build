import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Check, ArrowRight, Code2, Database, Cloud, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ApplicationDevelopment = () => {
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
                <Code className="w-6 h-6 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Application & Software Development
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
                Custom Enterprise Solutions
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                We specialize in building bespoke software solutions from the ground up. Our process involves a deep dive into your business logic to create applications that are not just functional, but also scalable, secure, and perfectly aligned with your operational needs.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Comprehensive Development Solutions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12">
                Whether it's a complex enterprise system or a streamlined internal tool, we deliver robust software that powers your growth. Our expertise spans across web applications, mobile apps, enterprise software, and cloud-native solutions.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <Code2 className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Web Applications</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Build scalable, high-performance web applications using modern frameworks and technologies. From single-page applications to complex enterprise systems.
                  </p>
                </div>
                
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <Zap className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Mobile Applications</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Native and cross-platform mobile app development for iOS and Android. Deliver exceptional user experiences across all devices.
                  </p>
                </div>
                
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <Database className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Enterprise Software</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Custom enterprise solutions tailored to your business needs. Integrate seamlessly with existing systems and scale as you grow.
                  </p>
                </div>
                
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <Cloud className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Cloud-Native Apps</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Leverage cloud infrastructure for scalable, resilient applications. Built for modern cloud environments with microservices architecture.
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
                  "Custom Web Applications",
                  "Mobile App Development (iOS & Android)",
                  "Enterprise Software Solutions",
                  "API Development & Integration",
                  "Cloud-Native Applications",
                  "Legacy System Modernization",
                  "Microservices Architecture",
                  "Real-time Applications",
                  "Progressive Web Apps (PWAs)",
                  "Serverless Applications",
                  "API Gateway Integration",
                  "Third-party Service Integration",
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Technologies We Use</h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                We leverage cutting-edge technologies and frameworks to build robust, scalable solutions
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {["React", "Node.js", "Python", "Java", "Swift", "Kotlin", "Go", "TypeScript", "Next.js", "Vue.js", "Angular", "Django", "Flask", "Spring Boot", "Express.js", "GraphQL", "REST APIs", "MongoDB", "PostgreSQL", "Redis"].map((tech, idx) => (
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
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Development Process</h2>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Discovery & Planning", description: "We analyze your requirements, define project scope, and create a detailed roadmap for development." },
                  { step: "02", title: "Design & Architecture", description: "Our team designs intuitive interfaces and creates scalable architecture that supports your business goals." },
                  { step: "03", title: "Development & Testing", description: "We build your application using agile methodologies, with continuous testing and quality assurance." },
                  { step: "04", title: "Deployment & Launch", description: "We deploy your application to production with zero downtime and provide comprehensive documentation." },
                  { step: "05", title: "Support & Maintenance", description: "Ongoing support and maintenance to ensure your application remains secure, updated, and performant." },
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
              Ready to Build Your Next Application?
            </h2>
            <p className="text-xl text-accent-foreground/90 max-w-2xl mx-auto mb-8">
              Let's discuss how we can help you build a custom solution that drives your business forward.
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

export default ApplicationDevelopment;

