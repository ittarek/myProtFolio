import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full max-w-[900px] mx-auto min-h-[400px] my-8 p-6 md:p-10 lg:p-12 rounded-3xl md:rounded-[40px] shadow-2xl box-border origin-top ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d',
      WebkitFontSmoothing: 'antialiased',
      WebkitBackfaceVisibility: 'hidden',
    }}>
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}) => {
  const scrollerRef = useRef(null);
  const cardsRef = useRef([]);
  const scrollTriggersRef = useRef([]);

  useLayoutEffect(() => {
    // Kill existing ScrollTriggers first
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.trigger?.classList?.contains('scroll-stack-card')) {
        trigger.kill();
      }
    });

    const ctx = gsap.context(() => {
      const cards = Array.from(
        useWindowScroll
          ? document.querySelectorAll('.scroll-stack-card')
          : scrollerRef.current?.querySelectorAll('.scroll-stack-card') || []
      );

      if (cards.length === 0) {
        console.warn('No scroll-stack-card elements found');
        return;
      }

      cardsRef.current = cards;

      // Set margin bottom for spacing
      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          card.style.marginBottom = `${itemDistance}px`;
        }
      });

      // Create scroll animations for each card
      cards.forEach((card, i) => {
        const targetScale = baseScale + i * itemScale;

        // Pin animation
        const pinTrigger = ScrollTrigger.create({
          trigger: card,
          start: `top-=${itemStackDistance * i} ${stackPosition}`,
          end: () => {
            const endElement = useWindowScroll
              ? document.querySelector('.scroll-stack-end')
              : scrollerRef.current?.querySelector('.scroll-stack-end');
            if (endElement) {
              const endRect = endElement.getBoundingClientRect();
              const endTop =
                endRect.top +
                (useWindowScroll ? window.scrollY : scrollerRef.current?.scrollTop || 0);
              return `${endTop}px top`;
            }
            return '+=5000';
          },
          pin: true,
          pinSpacing: false,
          scrub: 0.5,
          scroller: useWindowScroll ? undefined : scrollerRef.current,
          invalidateOnRefresh: true,
          markers: false, // Set to true for debugging
        });

        // Scale animation
        const scaleTrigger = ScrollTrigger.create({
          trigger: card,
          start: `top-=${itemStackDistance * i} ${stackPosition}`,
          end: `top ${scaleEndPosition}`,
          scrub: 0.5,
          scroller: useWindowScroll ? undefined : scrollerRef.current,
          onUpdate: self => {
            const progress = self.progress;
            const scale = 1 - progress * (1 - targetScale);
            const rotation = rotationAmount ? i * rotationAmount * progress : 0;

            gsap.set(card, {
              scale: scale,
              rotation: rotation,
              transformOrigin: 'top center',
              force3D: true,
            });
          },
          invalidateOnRefresh: true,
        });

        // Blur animation (if enabled)
        if (blurAmount > 0) {
          const blurTrigger = ScrollTrigger.create({
            trigger: card,
            start: `top-=${itemStackDistance * (i + 1)} ${stackPosition}`,
            end: 'bottom top',
            scrub: 0.5,
            scroller: useWindowScroll ? undefined : scrollerRef.current,
            onUpdate: () => {
              let blur = 0;
              let topCardIndex = 0;

              // Find which card is currently on top
              cards.forEach((c, j) => {
                const rect = c.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                const stackPos = (parseFloat(stackPosition) / 100) * viewportHeight;

                if (rect.top <= stackPos + itemStackDistance * j) {
                  topCardIndex = j;
                }
              });

              if (i < topCardIndex) {
                const depthInStack = topCardIndex - i;
                blur = Math.max(0, depthInStack * blurAmount);
              }

              gsap.set(card, {
                filter: blur > 0 ? `blur(${blur}px)` : 'none',
              });
            },
            invalidateOnRefresh: true,
          });
          scrollTriggersRef.current.push(blurTrigger);
        }

        scrollTriggersRef.current.push(pinTrigger, scaleTrigger);

        // Stack complete callback
        if (i === cards.length - 1 && onStackComplete) {
          const completeTrigger = ScrollTrigger.create({
            trigger: card,
            start: `top-=${itemStackDistance * i} ${stackPosition}`,
            end: () => {
              const endElement = useWindowScroll
                ? document.querySelector('.scroll-stack-end')
                : scrollerRef.current?.querySelector('.scroll-stack-end');
              if (endElement) {
                const endRect = endElement.getBoundingClientRect();
                const endTop =
                  endRect.top +
                  (useWindowScroll
                    ? window.scrollY
                    : scrollerRef.current?.scrollTop || 0);
                return `${endTop}px top`;
              }
              return '+=5000';
            },
            scroller: useWindowScroll ? undefined : scrollerRef.current,
            onEnter: () => onStackComplete(),
            onLeaveBack: () => {},
          });
          scrollTriggersRef.current.push(completeTrigger);
        }
      });

      // Refresh ScrollTrigger after setup
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }, scrollerRef);

    return () => {
      ctx.revert();
      scrollTriggersRef.current.forEach(st => st.kill());
      scrollTriggersRef.current = [];
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
  ]);

  const containerStyles = {
    overscrollBehavior: 'contain',
    WebkitOverflowScrolling: 'touch',
  };

  const containerClassName = useWindowScroll
    ? `relative w-full ${className}`.trim()
    : `relative w-full h-full overflow-y-auto overflow-x-visible ${className}`.trim();

  return (
    <div className={containerClassName} ref={scrollerRef} style={containerStyles}>
      <div className="scroll-stack-inner pt-[10vh] px-4 md:px-8 lg:px-20 pb-[100vh]">
        {children}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;
