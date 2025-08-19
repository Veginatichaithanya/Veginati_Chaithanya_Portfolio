
import { GraduationCap, Code, Brain, Award } from 'lucide-react';
import { AnimatedSection } from './ui/animated-section';
import { SectionArrow } from './ui/section-arrow';
import { useSectionNavigation } from '../hooks/use-section-navigation';

const About = () => {
  const { scrollToNext } = useSectionNavigation();

  return (
    <section id="about" className="portfolio-section bg-portfolio-surface">
      <AnimatedSection>
        <h2 className="portfolio-heading text-center mb-16">About Me</h2>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
        {/* Profile Image Section */}
        <AnimatedSection animation="fadeInLeft" delay={200} className="order-2 lg:order-1">
          <div className="relative group">
            <div className="portfolio-card overflow-hidden">
              <div className="aspect-square rounded-2xl overflow-hidden portfolio-glow group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/fa906337-9369-4318-8600-5f110364c89d.png" 
                  alt="Veginati Chaithanya - Full Stack Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Floating decoration elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 portfolio-gradient rounded-full opacity-20 blur-xl floating-animation" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-portfolio-success rounded-full opacity-20 blur-xl floating-animation" style={{animationDelay: '2s'}} />
          </div>
        </AnimatedSection>

        {/* Content Section */}
        <AnimatedSection animation="fadeInRight" delay={400} className="space-y-8 order-1 lg:order-2">
          <div>
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              👋 Hello, I'm Chaithanya
            </div>
            <p className="portfolio-text text-xl leading-relaxed mb-6">
              I'm <span className="text-primary font-semibold portfolio-gradient bg-clip-text text-transparent">Veginati Venkata Naga Chaithanya</span>, 
              a passionate B.Tech Computer Science student and Freelance Full Stack Developer with a deep 
              enthusiasm for building AI-powered solutions and scalable web applications.
            </p>
            <p className="portfolio-text leading-relaxed">
              My expertise lies in creating comprehensive solutions using modern technologies like 
              React, Python, Supabase, and cloud platforms. I'm particularly passionate about 
              integrating AI capabilities into web applications to solve real-world problems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatedSection animation="scaleIn" delay={600}>
              <div className="portfolio-card group hover:bg-primary/5 transition-all duration-500 hover:scale-105">
                <GraduationCap className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-lg mb-2 text-portfolio-text-primary">Education</h3>
                <p className="text-portfolio-text-secondary text-sm">B.Tech Computer Science</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scaleIn" delay={700}>
              <div className="portfolio-card group hover:bg-primary/5 transition-all duration-500 hover:scale-105">
                <Code className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-lg mb-2 text-portfolio-text-primary">Development</h3>
                <p className="text-portfolio-text-secondary text-sm">Full Stack Solutions</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scaleIn" delay={800}>
              <div className="portfolio-card group hover:bg-primary/5 transition-all duration-500 hover:scale-105">
                <Brain className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-lg mb-2 text-portfolio-text-primary">AI & Cloud</h3>
                <p className="text-portfolio-text-secondary text-sm">Modern Technologies</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scaleIn" delay={900}>
              <div className="portfolio-card group hover:bg-primary/5 transition-all duration-500 hover:scale-105">
                <Award className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-lg mb-2 text-portfolio-text-primary">Achievements</h3>
                <p className="text-portfolio-text-secondary text-sm">Hackathon Winner</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Stats Section */}
          <AnimatedSection animation="fadeInUp" delay={1000}>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/30">
              <div className="text-center group">
                <div className="text-2xl md:text-3xl font-bold portfolio-gradient bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-xs md:text-sm text-portfolio-text-secondary">Projects Completed</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl md:text-3xl font-bold portfolio-gradient bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">2+</div>
                <div className="text-xs md:text-sm text-portfolio-text-secondary">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl md:text-3xl font-bold portfolio-gradient bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">15+</div>
                <div className="text-xs md:text-sm text-portfolio-text-secondary">Technologies</div>
              </div>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>

      <SectionArrow 
        currentSection="about" 
        onNext={() => scrollToNext('about')} 
      />
    </section>
  );
};

export default About;
