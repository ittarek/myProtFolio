import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable ScrollTrigger temporarily
    ScrollTrigger.getAll().forEach(st => st.disable());

    // Scroll to top
    window.scrollTo(0, 0);

    // Re-enable after a delay
    setTimeout(() => {
      ScrollTrigger.getAll().forEach(st => st.enable());
      ScrollTrigger.refresh();
    }, 200);
  }, [pathname]);

  return null;
};
