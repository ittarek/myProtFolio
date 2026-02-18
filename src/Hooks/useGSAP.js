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
