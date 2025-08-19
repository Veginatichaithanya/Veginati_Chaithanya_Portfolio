
import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import TextType from './ui/TextType';
import { AnimatedSection } from './ui/animated-section';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 portfolio-gradient opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-portfolio-surface" />
      
      <div className="portfolio-section text-center relative z-10 max-w-5xl">
        <AnimatedSection>
          {/* Profile Image */}
          <div className="mb-8 md:mb-12 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 portfolio-gradient rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl portfolio-glow relative group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/fa906337-9369-4318-8600-5f110364c89d.png" 
                  alt="Veginati Chaithanya" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-portfolio-success rounded-full border-4 border-background animate-pulse flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight">
              <span className="portfolio-gradient bg-clip-text text-transparent">
                Veginati
              </span>
              <br />
              <span className="text-portfolio-text-primary">Chaithanya</span>
            </h1>
            
            {/* Subtitle with badge */}
            <div className="inline-block px-4 md:px-6 py-2 md:py-3 bg-portfolio-surface-elevated/80 backdrop-blur-sm rounded-full border border-border/50 mb-4 md:mb-6">
              <span className="text-xs md:text-sm text-portfolio-text-secondary font-medium">
                🚀 Available for Freelance Work
              </span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={200}>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-portfolio-text-secondary mb-6 font-light min-h-[40px] md:min-h-[60px] flex items-center justify-center">
            <TextType 
              text={[
                "Python Developer",
                "Full Stack Developer", 
                "AI & Cloud Enthusiast",
                "Competitive Programmer"
              ]}
              typingSpeed={75}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
              className="portfolio-gradient bg-clip-text text-transparent font-semibold"
              loop={true}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={400}>
          <p className="portfolio-text max-w-4xl mx-auto mb-8 md:mb-12 text-base md:text-lg lg:text-xl leading-relaxed px-4">
            Building innovative AI-powered solutions and full-stack applications with modern technologies. 
            Passionate about creating seamless user experiences and solving complex problems through code.
          </p>
        </AnimatedSection>

        {/* Enhanced Action Buttons */}
        <AnimatedSection animation="scaleIn" delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12 px-4">
            <Button 
              onClick={scrollToProjects} 
              className="portfolio-button-primary group shadow-2xl hover:shadow-primary/25 w-full sm:w-auto px-6 md:px-10 py-3 md:py-4 text-base md:text-lg"
            >
              View My Work
              <ExternalLink className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
            
            <Button 
              variant="outline" 
              className="portfolio-button-secondary group backdrop-blur-sm w-full sm:w-auto px-6 md:px-10 py-3 md:py-4 text-base md:text-lg" 
              asChild
            >
              <a href="#contact">
                <Download className="mr-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-y-1" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 md:gap-6 mb-12 md:mb-16">
            <a 
              href="mailto:chaithanyaveginati@gmail.com"
              className="portfolio-card p-3 md:p-4 hover:bg-primary/10 transition-all duration-300 group hover:scale-110"
            >
              <Mail className="h-5 w-5 md:h-6 md:w-6 text-portfolio-text-secondary group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://github.com/chaithanyaveginati"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card p-3 md:p-4 hover:bg-primary/10 transition-all duration-300 group hover:scale-110"
            >
              <Github className="h-5 w-5 md:h-6 md:w-6 text-portfolio-text-secondary group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/chaithanyaveginati"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card p-3 md:p-4 hover:bg-primary/10 transition-all duration-300 group hover:scale-110"
            >
              <Linkedin className="h-5 w-5 md:h-6 md:w-6 text-portfolio-text-secondary group-hover:text-primary transition-colors" />
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={800}>
          <button 
            onClick={scrollToAbout} 
            className="animate-bounce text-portfolio-text-secondary hover:text-primary transition-colors p-3 rounded-full hover:bg-primary/10 group"
          >
            <ArrowDown size={24} className="md:w-7 md:h-7 group-hover:translate-y-1 transition-transform" />
          </button>
        </AnimatedSection>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 portfolio-gradient rounded-full opacity-10 floating-animation blur-2xl" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-portfolio-accent rounded-full opacity-10 floating-animation blur-2xl" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-portfolio-success rounded-full opacity-10 floating-animation blur-xl" style={{animationDelay: '4s'}} />
      <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-primary rounded-full opacity-20 floating-animation" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-portfolio-accent rounded-full opacity-15 floating-animation" style={{animationDelay: '3s'}} />
      <div className="absolute top-3/4 left-1/3 w-6 h-6 bg-portfolio-success rounded-full opacity-25 floating-animation" style={{animationDelay: '5s'}} />
    </section>
  );
};

export default Hero;
