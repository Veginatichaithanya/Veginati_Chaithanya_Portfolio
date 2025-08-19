
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { AnimatedSection } from './animated-section';

interface SectionArrowProps {
  currentSection: string;
  onNext: () => void;
  className?: string;
}

export const SectionArrow: React.FC<SectionArrowProps> = ({ 
  currentSection, 
  onNext, 
  className = '' 
}) => {
  return (
    <AnimatedSection animation="fadeInUp" delay={800} className={className}>
      <div className="flex justify-center">
        <button 
          onClick={onNext}
          className="animate-bounce text-portfolio-text-secondary hover:text-primary transition-colors p-3 rounded-full hover:bg-primary/10 group"
          aria-label={`Scroll to next section from ${currentSection}`}
        >
          <ArrowDown size={24} className="md:w-7 md:h-7 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </AnimatedSection>
  );
};
