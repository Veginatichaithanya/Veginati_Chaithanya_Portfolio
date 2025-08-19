
import { useCallback } from 'react';

export const useSectionNavigation = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  const getNextSection = useCallback((currentSection: string): string | null => {
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact'];
    const currentIndex = sections.indexOf(currentSection);
    return currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;
  }, []);

  const scrollToNext = useCallback((currentSection: string) => {
    const nextSection = getNextSection(currentSection);
    if (nextSection) {
      scrollToSection(nextSection);
    }
  }, [scrollToSection, getNextSection]);

  return {
    scrollToSection,
    scrollToNext,
    getNextSection,
  };
};
