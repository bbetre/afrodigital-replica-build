import { Button } from "@/components/ui/button";
import { Menu, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-medium" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div className="text-2xl font-bold">
            <span className="text-foreground">Afro</span>
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Digital</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Solutions", path: "/solutions" },
            { name: "Case Studies", path: "/case-studies" },
            { name: "Careers", path: "/careers" },
          ].map((item) => (
            <a 
              key={item.name}
              href={item.path}
              className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <a href="/contact">
            <Button className="hidden md:flex bg-gradient-to-r from-accent to-primary text-white hover:shadow-glow font-medium px-6 transition-all duration-300 hover:scale-105">
              Let's Talk
            </Button>
          </a>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
