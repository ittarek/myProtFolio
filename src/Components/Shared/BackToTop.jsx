import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-40 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg
        hover:shadow-xl hover:scale-110 active:scale-95 group
        transition-all duration-300
        ${isVisible ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-50 pointer-events-none'}`}>
      <ArrowUp
        size={24}
        className="group-hover:-translate-y-0.5 transition-transform duration-300"
      />
    </button>
  );
};
