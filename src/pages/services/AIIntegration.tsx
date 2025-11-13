import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Check, ArrowRight, Brain, Bot, TrendingUp, Database, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const AIIntegration = () => {
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
                <Sparkles className="w-6 h-6 text-accent" />
                <span className="text-sm font-medium text-accent">
                  AI Integration
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
                Intelligent Automation Solutions
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Harness the power of Artificial Intelligence to revolutionize your business. We integrate cutting-edge AI and machine learning models to automate complex processes, derive actionable insights from your data, and create intelligent products.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">AI-Powered Solutions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12">
                From predictive analytics to natural language processing, we help you unlock new levels of efficiency and innovation. Our AI solutions transform operations and drive business growth.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <Brain className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Machine Learning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Develop custom ML models tailored to your business needs. From recommendation systems to predictive analytics, we build intelligent solutions.
                  </p>
                </div>
                
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <Bot className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Chatbots & Virtual Assistants</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Build intelligent chatbots and virtual assistants that enhance customer experience and automate support operations.
                  </p>
                </div>
                
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <TrendingUp className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Predictive Analytics</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Leverage data to predict trends, forecast demand, and make data-driven decisions. Transform your data into actionable insights.
                  </p>
                </div>
                
                <div className="professional-card p-8 rounded-2xl border border-border/50">
                  <Zap className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Process Automation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Automate repetitive tasks and complex workflows with AI-powered robotic process automation (RPA) solutions.
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
                  "Machine Learning Model Development",
                  "Natural Language Processing (NLP)",
                  "Computer Vision Solutions",
                  "Chatbot & Virtual Assistant Development",
                  "Predictive Analytics & Forecasting",
                  "AI-Powered Process Automation (RPA)",
                  "Deep Learning Solutions",
                  "Data Analytics & Insights",
                  "AI Consultation & Strategy",
                  "Model Training & Optimization",
                  "AI Integration with Existing Systems",
                  "Real-time AI Processing",
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">AI Technologies</h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                We use the latest AI and machine learning frameworks and platforms
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {["TensorFlow", "PyTorch", "OpenAI APIs", "Hugging Face", "LangChain", "Azure AI", "AWS SageMaker", "Google Cloud AI", "Scikit-learn", "Keras", "Pandas", "NumPy", "NLTK", "spaCy", "Computer Vision", "NLP"].map((tech, idx) => (
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
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our AI Integration Process</h2>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "AI Strategy & Consultation", description: "We analyze your business needs and develop an AI strategy that aligns with your goals and objectives." },
                  { step: "02", title: "Data Preparation", description: "We prepare and clean your data, ensuring it's ready for AI model training and analysis." },
                  { step: "03", title: "Model Development", description: "We develop and train custom AI models tailored to your specific use cases and requirements." },
                  { step: "04", title: "Integration & Deployment", description: "We integrate AI solutions into your existing systems and deploy them to production." },
                  { step: "05", title: "Monitoring & Optimization", description: "We continuously monitor AI performance and optimize models to ensure accuracy and efficiency." },
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
              Ready to Transform with AI?
            </h2>
            <p className="text-xl text-accent-foreground/90 max-w-2xl mx-auto mb-8">
              Let's discuss how AI can revolutionize your business operations and drive innovation.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-background text-accent font-semibold px-8 py-4 rounded-lg hover:bg-background/90 transition-colors group">
              Get AI Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIIntegration;

