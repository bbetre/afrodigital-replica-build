import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, TrendingUp, Users, Heart, Rocket, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Competitive Salary",
    description: "Above-market compensation packages with performance bonuses",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
  },
  {
    icon: Rocket,
    title: "Growth Opportunities",
    description: "Career development programs and learning budgets",
  },
  {
    icon: Award,
    title: "Work-Life Balance",
    description: "Flexible hours, remote work, and unlimited PTO",
  },
];

const openings = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    description: "Build scalable applications using React, Node.js, and cloud technologies.",
    requirements: ["5+ years experience", "React & Node.js", "Cloud platforms", "Team leadership"],
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / New York",
    type: "Full-time",
    description: "Create beautiful, intuitive interfaces that delight users.",
    requirements: ["3+ years experience", "Figma expert", "Design systems", "User research"],
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    description: "Build and maintain our cloud infrastructure and CI/CD pipelines.",
    requirements: ["4+ years experience", "AWS/Azure", "Kubernetes", "Automation"],
  },
  {
    title: "Data Scientist",
    department: "AI/ML",
    location: "San Francisco",
    type: "Full-time",
    description: "Develop machine learning models and data-driven solutions.",
    requirements: ["3+ years experience", "Python/R", "ML frameworks", "Statistics"],
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote / San Francisco",
    type: "Full-time",
    description: "Lead product strategy and drive innovation across our product suite.",
    requirements: ["5+ years experience", "Tech products", "Agile/Scrum", "Leadership"],
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Drive growth through strategic marketing campaigns and SEO.",
    requirements: ["3+ years experience", "SEO/SEM", "Analytics", "Content strategy"],
  },
];

const Careers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block glass-card px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Join Our Team
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Build Your Career
            <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              With AfroDigital
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Join a team of innovators, creators, and problem-solvers who are shaping the future of technology
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={sectionRef} className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Why Join AfroDigital?
            </h2>
            <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
              We invest in our people because they're our greatest asset
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={`glass-card p-8 rounded-2xl hover-lift transition-all duration-500 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary p-0.5 mb-6">
                    <div className="w-full h-full bg-background rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Open Positions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find your perfect role and start making an impact
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openings.map((job, index) => (
              <div
                key={index}
                className="glass-card p-6 md:p-8 rounded-2xl hover-lift transition-all duration-500 border border-border/50 hover:border-accent/50"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-accent to-primary text-white hover:shadow-glow whitespace-nowrap">
                    Apply Now
                  </Button>
                </div>

                <p className="text-muted-foreground mb-4">{job.description}</p>

                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req, idx) => (
                    <span
                      key={idx}
                      className="glass-card px-3 py-1 rounded-full text-sm"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-card p-12 rounded-2xl max-w-3xl mx-auto">
            <Users className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button className="bg-gradient-to-r from-accent to-primary text-white hover:shadow-glow">
              Send Your Resume
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
