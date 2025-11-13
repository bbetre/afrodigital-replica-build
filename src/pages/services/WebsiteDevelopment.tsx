import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, Check, ArrowRight, Layout, ShoppingCart, Search, Zap, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const WebsiteDevelopment = () => {
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
                <Globe className="w-6 h-6 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Website Development
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
                Stunning, High-Performance Websites
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Your website is your digital storefront. We craft visually stunning and highly performant websites that provide an exceptional user experience. From corporate sites and e-commerce platforms to dynamic web applications, we focus on responsive design, fast load times, and intuitive navigation.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Comprehensive Web Solutions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12">
                We create websites that captivate audiences and drive conversions. Our focus is on responsive design, fast load times, and intuitive navigation to convert visitors into loyal customers and build a powerful brand presence.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <Layout className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Responsive Web Design</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Create websites that look and perform beautifully on all devices. Mobile-first design ensures optimal user experience across desktops, tablets, and smartphones.
                  </p>
                </div>
                
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <ShoppingCart className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">E-commerce Platforms</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Build powerful online stores with seamless shopping experiences. From product catalogs to checkout processes, we create conversion-optimized e-commerce solutions.
                  </p>
                </div>
                
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <Search className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">SEO Optimization</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Optimize your website for search engines to increase visibility and drive organic traffic. We implement best practices for on-page SEO and technical SEO.
                  </p>
                </div>
                
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <Zap className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Fast Performance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Deliver lightning-fast load times with optimized code, efficient assets, and modern performance techniques. Speed matters for user experience and SEO.
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
                  "Responsive Web Design",
                  "E-commerce Platforms",
                  "Content Management Systems (CMS)",
                  "Progressive Web Apps (PWAs)",
                  "Search Engine Optimization (SEO)",
                  "Website Maintenance & Support",
                  "Custom Web Applications",
                  "Landing Pages",
                  "Corporate Websites",
                  "Portfolio Websites",
                  "Blog Platforms",
                  "Multi-language Support",
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
                We use the latest web technologies and frameworks to build modern, performant websites
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {["WordPress", "Shopify", "Next.js", "Tailwind CSS", "TypeScript", "Gatsby", "React", "Vue.js", "Angular", "Node.js", "PHP", "Laravel", "Drupal", "Magento", "WooCommerce", "Headless CMS", "GraphQL", "REST APIs"].map((tech, idx) => (
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
                  { step: "01", title: "Discovery & Strategy", description: "We understand your goals, target audience, and business requirements to create a comprehensive website strategy." },
                  { step: "02", title: "Design & Prototyping", description: "Our designers create stunning mockups and prototypes that align with your brand and user expectations." },
                  { step: "03", title: "Development & Testing", description: "We build your website using best practices, ensuring responsiveness, performance, and cross-browser compatibility." },
                  { step: "04", title: "Content & SEO", description: "We optimize your content for search engines and ensure proper SEO implementation for maximum visibility." },
                  { step: "05", title: "Launch & Support", description: "We deploy your website and provide ongoing support, maintenance, and updates to keep it running smoothly." },
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
              Ready to Build Your Website?
            </h2>
            <p className="text-xl text-accent-foreground/90 max-w-2xl mx-auto mb-8">
              Let's create a stunning website that captivates your audience and drives results.
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

export default WebsiteDevelopment;

