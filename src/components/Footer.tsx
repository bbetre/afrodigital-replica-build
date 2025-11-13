import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { 
  Linkedin, 
  Github, 
  Instagram, 
  Send, 
  Globe, 
  Shield, 
  Award,
  TrendingUp,
  CheckCircle2,
  Mail,
  MessageSquare,
  Phone, MapPin
} from "lucide-react";
import { Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [projectsCount, setProjectsCount] = useState(0);
  const [uptime, setUptime] = useState(0);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // Animate counters
    const projectInterval = setInterval(() => {
      setProjectsCount(prev => prev < 247 ? prev + 3 : 247);
    }, 30);
    
    const uptimeInterval = setInterval(() => {
      setUptime(prev => prev < 99.9 ? prev + 0.1 : 99.9);
    }, 50);

    return () => {
      clearInterval(projectInterval);
      clearInterval(uptimeInterval);
    };
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail("");
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/afro-digitalet", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/afrodigital.et/", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/AfroDigita", label: "X (Twitter)" },
    { icon: Send, href: "https://t.me/Afro_Digital", label: "Telegram" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Strip */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Got a challenge?</h3>
              <p className="text-primary-foreground/70">Let's build the solution together.</p>
            </div>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/contact">
                <MessageSquare className="mr-2 h-5 w-5" />
                Let's Talk
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Centered Logo with Tagline */}
        <div className="text-center mb-16">
          <img 
            src={logo} 
            alt="AfroDigital Logo" 
            className="h-16 w-auto mx-auto mb-6 filter invert brightness-0"
          />
          <p className="text-lg font-semibold text-primary-foreground/80">
            Clarity. Security. Breakthroughs.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          <a href="tel:+251912207180" className="text-center p-6 rounded-lg bg-primary-foreground/5 backdrop-blur hover:bg-primary-foreground/10 transition-colors group">
            <Phone className="h-8 w-8 mx-auto mb-3 text-accent group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold mb-1">Call Us</h4>
            <p className="text-sm text-primary-foreground/70">+251 912 207 180</p>
          </a>
          <a href="mailto:info@afrodigital.et" className="text-center p-6 rounded-lg bg-primary-foreground/5 backdrop-blur hover:bg-primary-foreground/10 transition-colors group">
            <Mail className="h-8 w-8 mx-auto mb-3 text-accent group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold mb-1">Email Us</h4>
            <p className="text-sm text-primary-foreground/70">info@afrodigital.et</p>
          </a>
          <div className="text-center p-6 rounded-lg bg-primary-foreground/5 backdrop-blur group">
            <MapPin className="h-8 w-8 mx-auto mb-3 text-accent" />
            <h4 className="font-semibold mb-1">Location</h4>
            <p className="text-sm text-primary-foreground/70">Addis Ababa, Ethiopia</p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="text-center mb-4">
            <Mail className="h-8 w-8 mx-auto mb-2 text-accent" />
            <h4 className="font-semibold mb-2">Get AfroDigital Insights</h4>
            <p className="text-sm text-primary-foreground/70">
              Monthly updates on AI, security, and branding innovations
            </p>
          </div>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              required
            />
            <Button type="submit" className="bg-accent hover:bg-accent/90">
              Subscribe
            </Button>
          </form>
        </div>

        {/* Columned Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* AfroDigital */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">AfroDigital</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/careers" className="text-primary-foreground/70 hover:text-accent transition-colors">Careers</Link></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">What Sets Us Apart</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/solutions" className="text-primary-foreground/70 hover:text-accent transition-colors">AI Integration</Link></li>
              <li><Link to="/solutions" className="text-primary-foreground/70 hover:text-accent transition-colors">SOC Lab</Link></li>
              <li><Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">Branding</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/case-studies" className="text-primary-foreground/70 hover:text-accent transition-colors">Case Studies</Link></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Glossary</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Contributor Docs</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-primary-foreground/70 hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-primary-foreground/70 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="text-primary-foreground/70 hover:text-accent transition-colors">Cookie Policy</Link></li>
              <li><Link to="/compliance" className="text-primary-foreground/70 hover:text-accent transition-colors">Compliance</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent transition-all hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h5 className="font-semibold mb-3 text-sm">Open Source</h5>
              <a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2">
                <Github className="h-4 w-4" />
                View Repositories
              </a>
            </div>
          </div>
        </div>

        {/* Language Toggle & Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-primary-foreground/70">
              &copy; 2025 AfroDigital. All rights reserved.
            </div>
            
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary-foreground/70" />
              <select
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-primary-foreground/10 border border-primary-foreground/20 rounded px-3 py-1 text-sm text-primary-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="en">English</option>
                <option value="am">አማርኛ (Amharic)</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
