import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold">
            <span className="text-foreground">Afro</span>
            <span className="text-accent">Digital</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#solutions" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Solutions
          </a>
          <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Case Studies
          </a>
        </nav>
        
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6">
          Let's Talk
        </Button>
      </div>
    </header>
  );
};

export default Header;
