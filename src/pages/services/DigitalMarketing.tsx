import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, Check, ArrowRight, Search, Share2, BarChart3, Mail, Target } from "lucide-react";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
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
                <TrendingUp className="w-6 h-6 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Digital Marketing
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
                Data-Driven Growth Strategies
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                A great product needs a great audience. Our data-driven digital marketing strategies are designed to amplify your brand's voice and accelerate growth. We create targeted campaigns, optimize your online presence for search engines, and engage your community on social media.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Comprehensive Marketing Solutions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12">
                We build a loyal customer base and drive measurable results through strategic marketing campaigns and optimization. Our expertise spans SEO, social media, content marketing, and more.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <Search className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">SEO & SEM</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Optimize your website for search engines and run targeted paid advertising campaigns to increase visibility and drive qualified traffic.
                  </p>
                </div>
                
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <Share2 className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Social Media Marketing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Build and engage your community on social media platforms. Create compelling content and run targeted campaigns to grow your audience.
                  </p>
                </div>
                
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <BarChart3 className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Analytics & Reporting</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Track and measure your marketing performance with comprehensive analytics. Get actionable insights to optimize your campaigns.
                  </p>
                </div>
                
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <Mail className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Email Marketing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Build and nurture relationships with automated email campaigns. Drive engagement and conversions with personalized messaging.
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
                  "SEO & SEM Strategies",
                  "Social Media Marketing Campaigns",
                  "Content Marketing & Strategy",
                  "Email Marketing & Automation",
                  "Analytics & Performance Reporting",
                  "Conversion Rate Optimization (CRO)",
                  "Pay-Per-Click (PPC) Advertising",
                  "Social Media Management",
                  "Content Creation",
                  "Brand Strategy",
                  "Marketing Automation",
                  "Lead Generation",
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Marketing Tools & Platforms</h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                We use industry-leading marketing tools and platforms to drive results
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {["Google Analytics", "SEMrush", "HubSpot", "Mailchimp", "Meta Ads", "CRM Integration", "Google Ads", "LinkedIn Ads", "Twitter Ads", "Hootsuite", "Buffer", "Canva", "Ahrefs", "Moz", "Sprout Social", "Marketo"].map((tech, idx) => (
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
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Marketing Process</h2>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Strategy & Planning", description: "We analyze your market, competitors, and target audience to develop a comprehensive marketing strategy." },
                  { step: "02", title: "Campaign Development", description: "We create compelling campaigns across multiple channels, tailored to your brand and objectives." },
                  { step: "03", title: "Execution & Optimization", description: "We launch campaigns and continuously optimize based on performance data and insights." },
                  { step: "04", title: "Analytics & Reporting", description: "We track key metrics and provide detailed reports to measure ROI and campaign effectiveness." },
                  { step: "05", title: "Growth & Scaling", description: "We scale successful campaigns and refine strategies to drive continuous growth and engagement." },
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
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-accent-foreground/90 max-w-2xl mx-auto mb-8">
              Let's create a marketing strategy that amplifies your brand and drives measurable results.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-background text-accent font-semibold px-8 py-4 rounded-lg hover:bg-background/90 transition-colors group">
              Get a Marketing Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;

