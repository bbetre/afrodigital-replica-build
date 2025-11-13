import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Check, ArrowRight, Lock, Eye, FileCheck, AlertTriangle, Server } from "lucide-react";
import { Link } from "react-router-dom";

const SecuritySolutions = () => {
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
                <Shield className="w-6 h-6 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Security Solutions
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
                Enterprise-Grade Security
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                In today's digital landscape, security is paramount. We provide comprehensive cybersecurity services to protect your critical assets from evolving threats. Our approach is proactive, involving continuous monitoring, vulnerability assessments, and rapid incident response.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Comprehensive Security Services</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12">
                We design and manage robust, scalable infrastructure to ensure your operations are always secure, compliant, and resilient. Our security solutions protect your digital assets 24/7.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <Lock className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Data Encryption</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Protect sensitive data with industry-standard encryption at rest and in transit. Ensure your data remains secure and compliant with regulations.
                  </p>
                </div>
                
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <Eye className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">24/7 Monitoring</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Continuous security monitoring and threat detection. Real-time alerts and rapid response to security incidents to minimize impact.
                  </p>
                </div>
                
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <FileCheck className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Compliance Management</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ensure compliance with GDPR, HIPAA, PCI DSS, and other regulatory requirements. Regular audits and compliance reporting.
                  </p>
                </div>
                
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <AlertTriangle className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Threat Protection</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Advanced threat protection against malware, ransomware, phishing, and other cyber attacks. Multi-layered security defense strategies.
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
                  "Security Audits & Assessments",
                  "Penetration Testing",
                  "Data Encryption Solutions",
                  "Identity & Access Management (IAM)",
                  "Compliance Management (GDPR, HIPAA)",
                  "24/7 Security Monitoring & Incident Response",
                  "Vulnerability Scanning",
                  "Firewall Configuration",
                  "VPN Setup & Management",
                  "SIEM Implementation",
                  "Security Training & Awareness",
                  "Incident Response Planning",
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Security Technologies</h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                We use industry-leading security technologies and tools to protect your infrastructure
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {["SSL/TLS", "OAuth", "JWT", "Firewall", "VPN", "SIEM", "AWS Security Hub", "Azure Security Center", "WAF", "IDS/IPS", "DDoS Protection", "Multi-Factor Authentication", "PKI", "Encryption", "Key Management", "Security Information"].map((tech, idx) => (
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
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Security Process</h2>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Security Assessment", description: "We conduct comprehensive security audits to identify vulnerabilities and assess your current security posture." },
                  { step: "02", title: "Strategy & Planning", description: "We develop a tailored security strategy that addresses your specific risks and compliance requirements." },
                  { step: "03", title: "Implementation", description: "We implement security controls, encryption, access management, and monitoring systems to protect your assets." },
                  { step: "04", title: "Monitoring & Maintenance", description: "Continuous monitoring and regular security updates to protect against emerging threats and vulnerabilities." },
                  { step: "05", title: "Incident Response", description: "Rapid incident response and recovery procedures to minimize impact and restore operations quickly." },
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
              Ready to Secure Your Infrastructure?
            </h2>
            <p className="text-xl text-accent-foreground/90 max-w-2xl mx-auto mb-8">
              Let's protect your digital assets with enterprise-grade security solutions.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-background text-accent font-semibold px-8 py-4 rounded-lg hover:bg-background/90 transition-colors group">
              Get a Security Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SecuritySolutions;

