
import { Mail, Phone, Github, Linkedin, Code, ExternalLink, Download } from 'lucide-react';
import { Button } from './ui/button';
import { AnimatedSection } from './ui/animated-section';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "veginatichaithanya@gmail.com",
      href: "mailto:veginatichaithanya@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9182260869",
      href: "tel:+919182260869"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Veginatichaithanya",
      description: "View my code repositories"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chaithanyaveginati/",
      description: "Professional network"
    },
    {
      icon: Code,
      label: "CodeChef",
      href: "https://www.codechef.com/users/kl_99220041911",
      description: "Competitive programming profile"
    },
    {
      icon: ExternalLink,
      label: "Live Projects",
      href: "https://kikislearninghub.in/",
      description: "See my deployed applications"
    }
  ];

  return (
    <section id="contact" className="portfolio-section bg-portfolio-surface/50 backdrop-blur-sm">
      <AnimatedSection>
        <h2 className="portfolio-heading text-center mb-4">Let's Work Together</h2>
        <p className="text-center portfolio-text mb-16 max-w-2xl mx-auto">
          Ready to build something amazing? Let's discuss your next project and bring your ideas to life.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <AnimatedSection animation="fadeInLeft" delay={200}>
          <h3 className="portfolio-subheading text-2xl mb-8 flex items-center">
            <span className="portfolio-gradient bg-clip-text text-transparent">Get In Touch</span>
          </h3>
          
          <div className="space-y-6 mb-8">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <AnimatedSection key={contact.label} animation="fadeInUp" delay={300 + index * 100}>
                  <a 
                    href={contact.href}
                    className="portfolio-card flex items-center gap-4 hover:ring-2 hover:ring-primary/20 transition-all duration-500 group backdrop-blur-sm border-primary/10 hover:border-primary/30 hover:scale-105 hover:-translate-y-1"
                  >
                    <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:scale-110">
                      <IconComponent className="h-5 w-5 transition-transform duration-300" />
                    </div>
                    <div>
                      <p className="text-sm text-portfolio-text-secondary font-medium">{contact.label}</p>
                      <p className="font-semibold text-portfolio-text-primary text-lg">{contact.value}</p>
                    </div>
                  </a>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection animation="scaleIn" delay={600}>
            <Button className="portfolio-button-primary w-full group shadow-xl hover:shadow-2xl transition-all duration-500">
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1 duration-300" />
              Download Resume
            </Button>
          </AnimatedSection>
        </AnimatedSection>

        <AnimatedSection animation="fadeInRight" delay={400}>
          <h3 className="portfolio-subheading text-2xl mb-8 flex items-center">
            <span className="portfolio-gradient bg-clip-text text-transparent">Find Me Online</span>
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <AnimatedSection key={link.label} animation="scaleIn" delay={500 + index * 100}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-card text-center group hover:ring-2 hover:ring-primary/20 transition-all duration-500 backdrop-blur-sm border-primary/10 hover:border-primary/30 hover:scale-105 hover:-translate-y-2"
                  >
                    <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 mx-auto w-fit mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3">
                      <IconComponent className="h-6 w-6 transition-transform duration-300" />
                    </div>
                    <h4 className="font-semibold text-portfolio-text-primary mb-2 text-lg group-hover:text-primary transition-colors duration-300">{link.label}</h4>
                    <p className="text-sm text-portfolio-text-secondary transition-colors duration-300">{link.description}</p>
                  </a>
                </AnimatedSection>
              );
            })}
          </div>
        </AnimatedSection>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 portfolio-gradient rounded-full opacity-5 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-portfolio-accent rounded-full opacity-5 blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
    </section>
  );
};

export default Contact;
