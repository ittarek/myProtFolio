// hooks/useGSAP.js - Deferred GSAP Loading Hook
import { useEffect, useRef } from 'react';

/**
 * Custom hook for deferred GSAP animations
 * Loads GSAP only when browser is idle
 * Reduces Total Blocking Time significantly
 */
export const useGSAP = (animationCallback, dependencies = []) => {
  const animationRef = useRef(null);
  const cleanupRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    let idleCallbackId;

    const loadAndAnimate = async () => {
      if (!mounted) return;

      try {
        // ✅ Dynamic import - only load when needed
        const [gsapModule, scrollTriggerModule] = await Promise.all([
          import('gsap'),
          import('gsap/ScrollTrigger'),
        ]);

        const { gsap } = gsapModule;
        const { ScrollTrigger } = scrollTriggerModule;

        if (!mounted) return;

        gsap.registerPlugin(ScrollTrigger);

        // Run user's animation
        const ctx = gsap.context(() => {
          cleanupRef.current = animationCallback(gsap, ScrollTrigger);
        });

        animationRef.current = ctx;
      } catch (error) {
        console.error('GSAP loading error:', error);
      }
    };

    // ✅ Use requestIdleCallback for non-blocking load
    if ('requestIdleCallback' in window) {
      idleCallbackId = requestIdleCallback(
        () => loadAndAnimate(),
        { timeout: 1000 } // Fallback after 1s
      );
    } else {
      // Fallback for Safari
      setTimeout(() => loadAndAnimate(), 100);
    }

    return () => {
      mounted = false;

      if (idleCallbackId) {
        cancelIdleCallback(idleCallbackId);
      }

      if (animationRef.current) {
        animationRef.current.revert();
      }

      if (cleanupRef.current?.kill) {
        cleanupRef.current.kill();
      }
    };
  }, dependencies);

  return animationRef;
};

// ==================== USAGE EXAMPLES ====================

// Example 1: Simple Animation
import { useGSAP } from '../hooks/useGSAP';

const MyComponent = () => {
  useGSAP(gsap => {
    gsap.to('.box', { x: 100, duration: 1 });
  }, []);

  return <div className="box">Animated Box</div>;
};

// Example 2: ScrollTrigger
const ScrollComponent = () => {
  useGSAP((gsap, ScrollTrigger) => {
    return gsap.to('.fade-in', {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '.fade-in',
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <div className="fade-in" style={{ opacity: 0, transform: 'translateY(20px)' }}>
      Fades in on scroll
    </div>
  );
};

// Example 3: Timeline with Cleanup
const TimelineComponent = () => {
  useGSAP(gsap => {
    const tl = gsap.timeline();

    tl.to('.item1', { x: 100 }).to('.item2', { x: 100 }).to('.item3', { x: 100 });

    return tl; // Automatically cleaned up
  }, []);

  return (
    <div>
      <div className="item1">Item 1</div>
      <div className="item2">Item 2</div>
      <div className="item3">Item 3</div>
    </div>
  );
};
