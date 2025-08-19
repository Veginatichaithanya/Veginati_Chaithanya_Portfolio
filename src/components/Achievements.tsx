
import { Trophy, Medal, Award, Star } from 'lucide-react';
import { AnimatedSection } from './ui/animated-section';
import { SectionArrow } from './ui/section-arrow';
import { useSectionNavigation } from '../hooks/use-section-navigation';

const Achievements = () => {
  const { scrollToNext } = useSectionNavigation();
  
  const achievements = [
    {
      icon: Trophy,
      title: "3rd Place - Prompt Engineering Competition",
      description: "Secured third position in a competitive prompt engineering challenge, demonstrating expertise in AI optimization.",
      category: "Competition"
    },
    {
      icon: Medal,
      title: "6th Place - Project Expo",
      description: "Achieved 6th position in project exhibition showcasing innovative full-stack development solutions.",
      category: "Exhibition"
    },
    {
      icon: Award,
      title: "IEEE COMMBATTLE Certification",
      description: "Completed advanced IEEE communication and battle strategies certification program.",
      category: "Certification"
    },
    {
      icon: Star,
      title: "G2Hackfest Participant",
      description: "Active participant in G2Hackfest, contributing to innovative solutions in collaborative environment.",
      category: "Hackathon"
    },
    {
      icon: Award,
      title: "Python Backend Course - CodeChef",
      description: "Successfully completed comprehensive Python backend development course on CodeChef platform.",
      category: "Course"
    },
    {
      icon: Trophy,
      title: "Competitive Coding Achievements",
      description: "Consistent performance in competitive programming with strong algorithmic problem-solving skills.",
      category: "Programming"
    }
  ];

  return (
    <section id="achievements" className="portfolio-section bg-portfolio-surface">
      <AnimatedSection>
        <h2 className="portfolio-heading text-center mb-4">Achievements & Certifications</h2>
        <p className="text-center portfolio-text mb-16 max-w-2xl mx-auto">
          Recognition and certifications that highlight my commitment to excellence and continuous learning.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {achievements.map((achievement, index) => {
          const IconComponent = achievement.icon;
          return (
            <AnimatedSection 
              key={achievement.title} 
              animation="scaleIn" 
              delay={index * 100}
            >
              <div className="portfolio-card group h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {achievement.category}
                  </span>
                </div>
                
                <h3 className="font-semibold text-lg mb-3 text-portfolio-text-primary">
                  {achievement.title}
                </h3>
                
                <p className="portfolio-text text-sm">
                  {achievement.description}
                </p>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      <SectionArrow 
        currentSection="achievements" 
        onNext={() => scrollToNext('achievements')} 
      />
    </section>
  );
};

export default Achievements;
