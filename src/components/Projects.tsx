
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { AnimatedSection } from './ui/animated-section';
import { SectionArrow } from './ui/section-arrow';
import { useSectionNavigation } from '../hooks/use-section-navigation';

const Projects = () => {
  const { scrollToNext } = useSectionNavigation();
  
  const projects = [
    {
      title: "IBM Complaint Management System",
      description: "AI-powered complaint management platform built with Supabase, React, and intelligent categorization algorithms. Features real-time dashboard, automated routing, and analytics.",
      tech: ["React", "Supabase", "AI/ML", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Veginatichaithanya",
      live: "https://complaintmanagement-system.netlify.app/",
      featured: true
    },
    {
      title: "EduSphere - MERN Learning Platform",
      description: "Comprehensive educational platform with AI-powered course recommendations, interactive learning modules, progress tracking, and integrated assessment tools.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "AI Integration"],
      github: "https://github.com/Veginatichaithanya",
      live: "https://edu-sphere-kare.netlify.app/",
      featured: true
    },
    {
      title: "Kiki's Learning Hub",
      description: "Full-stack platform with Razorpay integration for course enrollment, payment processing, user authentication, and content delivery management.",
      tech: ["React", "Python", "Razorpay", "MongoDB", "JWT"],
      github: "https://github.com/Veginatichaithanya",
      live: "https://kikislearninghub.in/",
      featured: false
    }
  ];

  return (
    <section id="projects" className="portfolio-section">
      <AnimatedSection>
        <h2 className="portfolio-heading text-center mb-4">Featured Projects</h2>
        <p className="text-center portfolio-text mb-16 max-w-2xl mx-auto">
          A showcase of my latest work in full-stack development, AI integration, and modern web technologies.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {projects.map((project, index) => (
          <AnimatedSection 
            key={project.title} 
            animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
            delay={index * 200}
          >
            <div className={`portfolio-card group relative h-full flex flex-col hover:scale-105 transition-all duration-500 ${project.featured ? 'ring-2 ring-primary/20 hover:ring-primary/40' : ''}`}>
              {project.featured && (
                <div className="absolute -top-3 -right-3 bg-primary text-white p-2 rounded-full animate-pulse">
                  <Sparkles className="h-4 w-4" />
                </div>
              )}
              
              <div className="flex-1">
                <h3 className="portfolio-subheading text-xl mb-4">{project.title}</h3>
                <p className="portfolio-text mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-auto">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 group portfolio-button-secondary"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110 duration-300" />
                    Code
                  </a>
                </Button>
                
                <Button 
                  size="sm" 
                  className="flex-1 portfolio-button-primary group"
                  asChild
                >
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <SectionArrow 
        currentSection="projects" 
        onNext={() => scrollToNext('projects')} 
      />
    </section>
  );
};

export default Projects;
