import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Listen to scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/solutions" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 transition-all duration-300">
      <div
        className={`flex items-center justify-between gap-8 transition-all duration-500 ${
          scrolled
            ? "w-auto bg-background/80 backdrop-blur-xl border border-border shadow-lg rounded-full px-4 py-2"
            : "w-full container mx-auto px-6 py-4"
        }`}
      >
        <Link to="/" className="flex items-center group cursor-pointer">
          <img src={logo} alt="AfroDigital Logo" className="h-8 w-auto group-hover:scale-105 transition-transform flex-shrink-0" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group whitespace-nowrap px-4 py-2 rounded-full hover:bg-accent/10"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact">
            <Button
              className={`hidden md:flex bg-gradient-to-r from-accent to-primary text-white hover:shadow-glow font-medium text-sm transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                scrolled ? "px-4 py-1.5" : "px-5 py-2"
              }`}
            >
              Let's Talk
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
