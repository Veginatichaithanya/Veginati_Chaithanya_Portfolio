
import { AnimatedSection } from './ui/animated-section';
import { SectionArrow } from './ui/section-arrow';
import { useSectionNavigation } from '../hooks/use-section-navigation';

const Skills = () => {
  const { scrollToNext } = useSectionNavigation();
  
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Backend Development", 
      skills: ["Python", "Node.js", "MongoDB", "SQL", "Supabase", "GCP"]
    },
    {
      title: "AI & Automation",
      skills: ["Machine Learning", "AI Integration", "Vapi AI Calls", "n8n", "Prompt Engineering"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "Docker", "Razorpay", "DSA", "Computer Networks"]
    }
  ];

  return (
    <section id="skills" className="portfolio-section">
      <AnimatedSection>
        <h2 className="portfolio-heading text-center mb-16">Skills & Technologies</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
        {skillCategories.map((category, index) => (
          <AnimatedSection 
            key={category.title} 
            animation="scaleIn" 
            delay={index * 200}
          >
            <div className="portfolio-card h-full group hover:scale-105 transition-all duration-500">
              <h3 className="portfolio-subheading text-xl mb-6 group-hover:text-primary transition-colors duration-300">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skill} 
                    className="skill-tag hover:animate-pulse"
                    style={{ animationDelay: `${skillIndex * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <SectionArrow 
        currentSection="skills" 
        onNext={() => scrollToNext('skills')} 
      />
    </section>
  );
};

export default Skills;
