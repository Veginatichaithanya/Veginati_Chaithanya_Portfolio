
import { Calendar, MapPin } from 'lucide-react';
import { AnimatedSection } from './ui/animated-section';
import { SectionArrow } from './ui/section-arrow';
import { useSectionNavigation } from '../hooks/use-section-navigation';

const Experience = () => {
  const { scrollToNext } = useSectionNavigation();

  return (
    <section id="experience" className="portfolio-section bg-portfolio-surface">
      <AnimatedSection>
        <h2 className="portfolio-heading text-center mb-16">Experience</h2>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto mb-16">
        <AnimatedSection animation="fadeInUp" delay={200}>
          <div className="portfolio-card group">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="portfolio-subheading text-2xl">Freelance Full Stack Developer</h3>
                <p className="text-primary font-medium text-lg">Independent</p>
              </div>
              <div className="text-portfolio-text-secondary text-sm space-y-1">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>2024 - Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Remote</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="portfolio-text">
                Leading end-to-end development of modern web applications with a focus on 
                AI integration and seamless user experiences.
              </p>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-portfolio-text-primary">Key Projects & Achievements:</h4>
                <ul className="space-y-3 text-portfolio-text-secondary">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Developed a comprehensive <strong>Course Management Platform</strong> with integrated Razorpay payment gateway, handling user authentication, course enrollment, and payment processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Built and deployed <strong>IBM Complaint Management System</strong> using Supabase, React, and AI-powered features for automated complaint categorization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Implemented responsive UI/UX designs with modern frameworks and ensured cross-platform compatibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Integrated cloud services (GCP) for scalable deployments and database management</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Supabase</span>
                <span className="skill-tag">Razorpay</span>
                <span className="skill-tag">GCP</span>
                <span className="skill-tag">AI Integration</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <SectionArrow 
        currentSection="experience" 
        onNext={() => scrollToNext('experience')} 
      />
    </section>
  );
};

export default Experience;
