import React, { useEffect, useRef } from 'react';
import myImg from '../../assets/myImage/myImageAi3.jpg';
import './Banner.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '../Container';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const bannerImgRef = useRef(null);
  const headingBigRef = useRef(null);
  const headingSmallRef = useRef(null);
  const headingTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for better performance and control
      const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

      // Image animation
      tl.to(bannerImgRef.current, {
        duration: 2,
        yPercent: 150,
        yoyo: true,
        repeat: 1,
      });

      // Heading Big animation
      tl.to(
        headingBigRef.current,
        {
          duration: 1.5,
          scale: 2,
          transformOrigin: 'top left',
          yoyo: true,
          repeat: 1,
        },
        0.8
      );

      // Heading Small and Text animations
      [headingSmallRef.current, headingTextRef.current].forEach(el => {
        tl.to(el, { duration: 0.1, opacity: 0 }, 1.2)
          .to(el, { duration: 0.1, left: '-100vw' }, 2)
          .to(el, { duration: 1.8, left: 0, opacity: 1 }, 3.6);
      });
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <Container>
      <div className="overflow-hidden banner-box py-6">
        {/* banner text  */}
        <div>
          <h1
            ref={headingBigRef}
            className="text-4xl lg:text-6xl uppercase"
            aria-label="Design">
            D
          </h1>
          <div className="banner-text">
            <h2 ref={headingSmallRef} className="text-sm lg:text-xl text-white">
              Design a Space <br /> You Love.
            </h2>
            <h3 ref={headingTextRef} className="text-sm lg:text-lg">
              Let's bring your creative <br /> imagination to reality.
            </h3>
          </div>
        </div>
        {/* banner image */}
        <div
          ref={bannerImgRef}
          className="lg:row-start-1 lg:col-start-1 lg:col-span-6 banner-img h-[450px] mx-auto my-auto">
          <img
            src={myImg}
            width={1200}
            height={800}
            srcSet={`${myImg} 600w, ${myImg} 1200w`}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="h-auto w-full my-image rounded-md"
            alt="Tariqul Islam Portfolio"
            loading="eager"
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
