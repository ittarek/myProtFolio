import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: 'First Card',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: 'https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=1200&q=100',
  },
  {
    title: 'Second Card',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: 'https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=1200&q=100',
  },
  {
    title: 'Third Card',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: 'https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=1200&q=100',
  },
];

export default function StickyStackSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cardElements = gsap.utils.toArray('.stack-card');

      cardElements.forEach((card, index) => {
        if (index === cardElements.length - 1) return;

        const inner = card.querySelector('.card-inner');
        const scaleTarget = 1 - (cardElements.length - 1 - index) * 0.1;

        ScrollTrigger.create({
          trigger: cardElements[index + 1],
          start: 'top bottom',
          end: 'top center',
          scrub: true,
          onUpdate: self => {
            const p = self.progress;

            gsap.set(inner, {
              scale: gsap.utils.interpolate(1, scaleTarget, p),
              filter: `brightness(${gsap.utils.interpolate(1, 0.6, p)})`,
            });
          },
        });
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-neutral-200">
      {/* Top Spacer */}
      <div className="h-[40vh]" />

      {/* Cards Container */}
      <div className="max-w-[900px] mx-auto relative z-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="stack-card sticky top-0"
            style={{ paddingTop: `${20 + index * 20}px` }}>
            <div className="card-inner bg-white rounded-2xl shadow-2xl overflow-hidden flex max-md:flex-col origin-top will-change-transform">
              {/* Image */}
              <div className="w-[40%] max-md:w-full flex-shrink-0">
                <img
                  src={card.img}
                  alt=""
                  className="w-full h-full object-cover aspect-square max-md:aspect-video"
                />
              </div>

              {/* Content */}
              <div className="p-10 max-md:p-6 flex flex-col justify-center">
                <h2 className="text-5xl max-md:text-2xl font-semibold text-slate-800 mb-4">
                  {card.title}
                </h2>
                <p className="text-xl max-md:text-base text-slate-700 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Spacer (IMPORTANT) */}
      <div className="h-[100vh]" />
    </section>
  );
}
