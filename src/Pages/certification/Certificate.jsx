import { useEffect, useRef } from 'react';
import './certificate.css';
import Container from '../../Components/Container';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

// Register GSAP plugin at module level (NOT inside component)
gsap.registerPlugin(ScrollTrigger);

const Certificate = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const textElements = gsap.utils.toArray('.text');

    // Create GSAP context for proper cleanup
    const ctx = gsap.context(() => {
      // Animate the main heading
      const heading = document.querySelector('.certificate-heading');
      if (heading) {
        gsap.from(heading, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Animate certificate items with stagger
      textElements.forEach((text, index) => {
        gsap.fromTo(
          text,
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: text,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            delay: index * 0.06,
          }
        );

        // Gradient text animation
        gsap.to(text, {
          backgroundSize: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: text,
            start: 'center 80%',
            end: 'center 20%',
            scrub: 0.5,
          },
        });
      });
    }, containerRef);

    // Cleanup function to prevent memory leaks
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <Container>
      <div className="certificate my-16" ref={containerRef}>
        <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent text-center mb-6 certificate-heading">
          All Credentials
        </h1>
        <h1 className="text">
          higher secondary certificate<span>LSD Collage</span>
        </h1>
        <h1 className="text">
          Web development<span>Programming Hero</span>
        </h1>
        <h1 className="text">
          Office management<span>It Park</span>
        </h1>
        <h1 className="text">
          Electrical & Electronics
          <span>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Bkttc & Usef
            </a>
          </span>
        </h1>
        <h1 className="text">
          Team Lead
          <span>
            <a href="#" target="_blank" rel="noopener noreferrer">
              LET'S CONNECT
            </a>
          </span>
        </h1>
      </div>
    </Container>
  );
};

export default Certificate;
