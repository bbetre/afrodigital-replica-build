import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, TrendingUp, Users, Heart, Rocket, Award } from "lucide-react";
import { useEffect, useRef, useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";

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
    title: "Full Stack Developer",
    location: "Remote",
    type: "Full-time",
    description: "We are looking for a passionate Full Stack Developer to build innovative solutions for our clients' projects. You will be working with a modern tech stack and a talented team to bring diverse web applications to life, not maintaining our internal website.",
    responsibilities: [
      "Design and develop scalable web applications for our clients using React, Node.js, and TypeScript.",
      "Collaborate with cross-functional teams to define and ship new features for various projects.",
      "Write clean, maintainable, and efficient code.",
      "Troubleshoot, debug, and upgrade existing client applications.",
      "Participate in code reviews and contribute to team-wide standards.",
    ],
    qualifications: [
      "Proven experience as a Full Stack Developer or similar role.",
      "Strong proficiency with modern JavaScript frameworks (React, Vue, or Angular).",
      "You are encouraged to leverage AI tools to boost productivity and innovation.",
      "Experience with server-side languages like Node.js, Python, or Go.",
      "Familiarity with databases (e.g., PostgreSQL, MongoDB) and cloud platforms (e.g., AWS, Azure).",
    ],
  },
  {
    title: "Digital Marketing Specialist",
    location: "Remote & On-site (Hybrid)",
    type: "Full-time",
    description: "We are seeking a creative and data-driven Digital Marketing Specialist to lead our clients' online growth strategies. You will be responsible for planning, executing, and optimizing marketing campaigns across various digital channels.",
    responsibilities: [
      "Develop and manage SEO/SEM, social media, and email marketing campaigns.",
      "Analyze campaign performance and provide actionable insights for optimization.",
      "Create engaging content for social media, blogs, and newsletters.",
      "Collaborate with design and development teams to create effective landing pages.",
      "Stay up-to-date with the latest digital marketing trends and best practices.",
    ],
    qualifications: [
      "Proven experience as a Digital Marketing Specialist or similar role.",
      "Expertise in SEO, SEM, social media marketing, and content marketing.",
      "Proficiency with marketing analytics tools (e.g., Google Analytics, SEMrush).",
      "Excellent communication and copywriting skills.",
      "Experience with marketing automation and CRM platforms is a plus.",
    ],
  },
];

const Careers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const quickApplyForm = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isQuickApplyOpen, setIsQuickApplyOpen] = useState(false);
  const [applyingForJob, setApplyingForJob] = useState<string | null>(null);
  const [isQuickApplySending, setIsQuickApplySending] = useState(false);
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CAREERS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast({
            title: "Application Sent!",
            description: "Thank you for your interest. We'll be in touch if there's a good fit.",
          });
          form.current?.reset();
          setIsQuickApplyOpen(false);
        },
        (error) => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem sending your application. Please try again.",
            variant: "destructive",
          });
          console.error("FAILED...", error.text);
        }
      )
      .finally(() => setIsSending(false));
  };

  const handleQuickApply = (e: FormEvent) => {
    e.preventDefault();
    if (!quickApplyForm.current) return;

    setIsQuickApplySending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CAREERS_TEMPLATE_ID,
        quickApplyForm.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast({
            title: "Application Sent!",
            description: "Thank you for applying! We'll review your application and get back to you soon.",
          });
          quickApplyForm.current?.reset();
          setIsQuickApplyOpen(false);
        },
        (error) => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem sending your application. Please try again.",
            variant: "destructive",
          });
          console.error("FAILED...", error.text);
        }
      )
      .finally(() => setIsQuickApplySending(false));
  };

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
            {openings.length > 0 ? (
              <Accordion type="single" collapsible className="w-full space-y-4">
                {openings.map((job, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="glass-card rounded-2xl border-border/50 hover:border-accent/30 transition-all duration-300 animate-fade-in-up shadow-md shadow-accent/10 hover:shadow-lg hover:shadow-accent/20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <AccordionTrigger className="p-6 text-left hover:no-underline">
                      <div className="w-full flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                        <h3 className="text-xl font-bold text-accent">{job.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0">
                      <div className="border-t border-border/50 pt-6">
                        <p className="text-muted-foreground mb-6">{job.description}</p>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold mb-3">Responsibilities</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                              {job.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Qualifications</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                              {job.qualifications.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                          </div>
                        </div>
                        <Button 
                          onClick={() => {
                            setApplyingForJob(job.title);
                            setIsQuickApplyOpen(true);
                          }}
                          className="bg-gradient-to-r from-accent to-primary text-white hover:shadow-glow"
                        >
                          Apply Now
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center glass-card p-8 rounded-2xl">
                <p className="text-muted-foreground text-lg">There are currently no open positions. Please check back later!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply-now" className="py-24 relative scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="glass-card p-8 md:p-12 rounded-2xl max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Users className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Don't See the Right Role?
              </h2>
              <p className="text-lg text-muted-foreground">
                We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
            </div>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input id="name" name="name" required className="bg-background/50" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input id="email" name="email" type="email" required className="bg-background/50" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="resume" className="block text-sm font-medium mb-2">Resume/CV Link *</label>
                <Input 
                  id="resume" 
                  name="resume" 
                  type="url" 
                  required 
                  className="bg-background/50"
                  placeholder="https://docs.google.com/document/d/..."
                />
                <p className="text-xs text-muted-foreground mt-2">Please provide a public link to your resume (e.g., Google Docs).</p>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Cover Letter (Optional)</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="bg-background/50 resize-none"
                  placeholder="Tell us why you'd be a great fit for AfroDigital..."
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-accent to-primary text-white hover:shadow-glow"
                disabled={isSending}
              >
                {isSending ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Apply Modal */}
      <Dialog open={isQuickApplyOpen} onOpenChange={setIsQuickApplyOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Apply for {applyingForJob}
            </DialogTitle>
            <DialogDescription>
              Fill out the form below to submit your application. All fields marked with * are required.
            </DialogDescription>
          </DialogHeader>
          
          <form ref={quickApplyForm} onSubmit={handleQuickApply} className="space-y-6 mt-4">
            {/* Hidden field for job title */}
            <input type="hidden" name="job_title" value={applyingForJob || ""} />
            
            {/* Full Name */}
            <div>
              <label htmlFor="quick_name" className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <Input
                id="quick_name"
                name="name"
                required
                className="bg-background/50"
                placeholder="John Doe"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="quick_email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <Input
                  id="quick_email"
                  name="email"
                  type="email"
                  required
                  className="bg-background/50"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="quick_phone" className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <Input
                  id="quick_phone"
                  name="phone"
                  type="tel"
                  required
                  className="bg-background/50"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Years of Experience and Availability */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="quick_experience" className="block text-sm font-medium mb-2">
                  Years of Experience *
                </label>
                <Select name="experience" required>
                  <SelectTrigger id="quick_experience" className="bg-background/50">
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-7">5-7 years</SelectItem>
                    <SelectItem value="7-10">7-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="quick_availability" className="block text-sm font-medium mb-2">
                  Availability / Notice Period *
                </label>
                <Input
                  id="quick_availability"
                  name="availability"
                  required
                  className="bg-background/50"
                  placeholder="Immediate / 2 weeks / 1 month"
                />
              </div>
            </div>

            {/* Resume/CV Link */}
            <div>
              <label htmlFor="quick_resume" className="block text-sm font-medium mb-2">
                Resume/CV Link *
              </label>
              <Input
                id="quick_resume"
                name="resume"
                type="url"
                required
                className="bg-background/50"
                placeholder="https://docs.google.com/document/d/..."
              />
              <p className="text-xs text-muted-foreground mt-1">
                Provide a public link to your resume (Google Docs, Dropbox, etc.)
              </p>
            </div>

            {/* LinkedIn Profile */}
            <div>
              <label htmlFor="quick_linkedin" className="block text-sm font-medium mb-2">
                LinkedIn Profile *
              </label>
              <Input
                id="quick_linkedin"
                name="linkedin"
                type="url"
                required
                className="bg-background/50"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            {/* GitHub and Portfolio */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="quick_github" className="block text-sm font-medium mb-2">
                  GitHub Profile *
                </label>
                <Input
                  id="quick_github"
                  name="github"
                  type="url"
                  required
                  className="bg-background/50"
                  placeholder="https://github.com/yourusername"
                />
              </div>
              <div>
                <label htmlFor="quick_portfolio" className="block text-sm font-medium mb-2">
                  Portfolio Website
                </label>
                <Input
                  id="quick_portfolio"
                  name="portfolio"
                  type="url"
                  className="bg-background/50"
                  placeholder="https://yourportfolio.com"
                />
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <label htmlFor="quick_cover_letter" className="block text-sm font-medium mb-2">
                Cover Letter *
              </label>
              <Textarea
                id="quick_cover_letter"
                name="message"
                required
                rows={6}
                className="bg-background/50 resize-none"
                placeholder="Tell us why you're the perfect fit for this role. Highlight your relevant experience, skills, and what excites you about joining AfroDigital..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsQuickApplyOpen(false)}
                className="flex-1"
                disabled={isQuickApplySending}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-accent to-primary text-white hover:shadow-glow"
                disabled={isQuickApplySending}
              >
                {isQuickApplySending ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Careers;
