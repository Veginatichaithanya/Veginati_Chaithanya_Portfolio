
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-surface/80 border-t border-border/50 py-12 backdrop-blur-sm relative overflow-hidden">
      <div className="portfolio-section py-0">
        <div className="text-center relative z-10">
          <div className="font-bold text-3xl portfolio-gradient bg-clip-text text-transparent mb-4">
            Veginati Chaithanya
          </div>
          <p className="portfolio-text mb-8 text-xl">
            Full Stack Developer | AI & Cloud Enthusiast
          </p>
          
          <div className="flex justify-center flex-wrap gap-8 mb-8">
            <a href="#hero" className="text-portfolio-text-secondary hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200">
              Home
            </a>
            <a href="#about" className="text-portfolio-text-secondary hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200">
              About
            </a>
            <a href="#projects" className="text-portfolio-text-secondary hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200">
              Projects
            </a>
            <a href="#contact" className="text-portfolio-text-secondary hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200">
              Contact
            </a>
          </div>
          
          <div className="border-t border-border/30 pt-8">
            <p className="text-portfolio-text-secondary">
              © {currentYear} Veginati Venkata Naga Chaithanya. All rights reserved.
            </p>
            <p className="text-sm text-portfolio-text-secondary/70 mt-2">
              Built with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 portfolio-gradient rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-portfolio-accent rounded-full opacity-5 blur-3xl" />
    </footer>
  );
};

export default Footer;
