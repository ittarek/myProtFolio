import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Quote } from 'lucide-react';
import { recommendationsData } from './recommendationsData';

gsap.registerPlugin(ScrollTrigger);

export const LinkedInRecommendations = React.memo(() => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    if (!isReady) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.recommendation-card');
      if (cards.length === 0) return;

      cardsRef.current = cards;

      // Stack effect parameters
      const stackPosition = 100; // px from top
      const itemStackDistance = 30; // px between cards
      const scaleAmount = 0.05;
      const baseScale = 0.85;

      cards.forEach((card, i) => {
        const targetScale = baseScale + i * scaleAmount;

        // Pin each card
        ScrollTrigger.create({
          trigger: card,
          start: `top-=${itemStackDistance * i} ${stackPosition}px`,
          // end: `top 50px`,
          end: () => {
            // .scroll-stack-end element খুঁজবে
            const endElement = document.querySelector('.scroll-stack-end');

            if (endElement) {
              const endRect = endElement.getBoundingClientRect();

              const endTop = endRect.top + window.scrollY;

              // Cards এর last card unpin হওয়ার আগে একটু space
              return `${endTop - window.innerHeight * 1}px top`;
            }

            // যদি element না পাওয়া যায়
            return '+=3000';
          },
          pin: true,
          pinSpacing: false,
          scrub: 0.5,
          invalidateOnRefresh: true,
        });

        // Scale animation
        ScrollTrigger.create({
          trigger: card,
          start: `top-=${itemStackDistance * i} ${stackPosition}px`,
          end: () => {
            // .scroll-stack-end element খুঁজবে
            const endElement = document.querySelector('.scroll-stack-end');

            if (endElement) {
              const endRect = endElement.getBoundingClientRect();

              const endTop = endRect.top + window.scrollY;

              // Cards এর last card unpin হওয়ার আগে একটু space
              return `${endTop - window.innerHeight * 1}px top`;
            }

            // যদি element না পাওয়া যায়
            return '+=3000';
          },
          // markers: true,
          scrub: 0.5,
          onUpdate: self => {
            const progress = self.progress;
            const scale = 1 - progress * (1 - targetScale);

            gsap.set(card, {
              scale: scale,
              transformOrigin: 'top center',
              force3D: true,
            });
          },
          invalidateOnRefresh: true,
        });
      });

      ScrollTrigger.refresh();
    }, containerRef);

    // Resize handler
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, [isReady]);

  return (
    <div className=" ">
      {/* Header Section */}
      <div className="text-center px-4 pt-32 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
          <Linkedin size={16} className="text-blue-400" />
          <span className="text-blue-400 font-medium">LinkedIn Recommendations</span>
        </div>

        <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent mb-6">
          What People Say
        </h2>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Scroll down to see all recommendations
        </p>
      </div>

      {/* Cards Container */}
      <div ref={containerRef} className="relative px-4 md:px-8 lg:px-20 pb-[10vh]">
        {recommendationsData.map((rec, index) => (
          <div
            key={rec.id}
            className="recommendation-card relative w-full max-w-[900px] mx-auto bg-white min-h-[400px] h-[25vh] mb-[200px] p-6 md:p-10 lg:p-12 rounded-3xl md:rounded-[40px] shadow-2xl"
            style={{
              backfaceVisibility: 'hidden',
              transformStyle: 'preserve-3d',
              WebkitFontSmoothing: 'antialiased',
            }}>
            <div className="flex flex-col md:flex-row gap-6 h-full w-full">
              {/* Left: Image */}
              <div className="w-full md:w-2/5 flex-shrink-0 h-48 md:h-full">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={rec.image}
                  alt={rec.name}
                  loading="lazy"
                />
              </div>

              {/* Right: Content */}
              <div className="flex-1 flex flex-col relative overflow-hidden min-w-0">
                {/* Quote Icon */}
                <Quote
                  size={60}
                  className="absolute top-0 right-0 opacity-10 text-blue-400 hidden md:block"
                />

                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-blue-500/30 flex-shrink-0">
                    <img
                      src={rec.image}
                      alt={rec.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 truncate">
                      {rec.name}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm md:text-base truncate">
                      {rec.position} at {rec.company}
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm">{rec.date}</p>
                  </div>

                  <a
                    href={rec.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 md:p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors flex-shrink-0"
                    aria-label={`View ${rec.name}'s LinkedIn profile`}>
                    <Linkedin size={16} className="md:w-5 md:h-5" />
                  </a>
                </div>

                {/* Recommendation Text */}
                <div className="flex-1 overflow-y-auto pr-2">
                  <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed eclipse-5">
                    "{rec.recommendation}"
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <p className="text-xs md:text-sm text-gray-500 italic truncate">
                    {rec.relationship}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Scroll Stack End Marker */}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
});
