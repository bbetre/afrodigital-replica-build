const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span>Afro</span>
              <span className="text-accent">Digital</span>
            </div>
            <p className="text-sm opacity-80">
              Transforming businesses through innovative digital solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-accent transition-colors">Software Development</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Website Development</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Security Solutions</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">AI Integration</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Digital Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 AfroDigital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
