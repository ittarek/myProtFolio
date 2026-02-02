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

    return () => ctx.revert();
  }, []);

  return (
    <Container>
      <div className="relative overflow-hidden py-12 md:py-20 lg:py-24 ">
        {/* Banner Content Wrapper */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          {/* Text Section */}
          <div className="relative lg:col-span-6 xl:col-span-5">
            {/* Large "D" Background Text with Image Mask */}
            <h1
              ref={headingBigRef}
              className="banner-mask-text absolute left-0 lg:left-0 top-0 -z-10 select-none pointer-events-none
                         text-[160px] sm:text-[200px] md:text-[250px] lg:text-[280px] xl:text-[339px]
                         leading-none font-normal uppercase opacity-60"
              aria-label="Design">
              D
            </h1>

            {/* Main Text Content */}
            <div
              className="relative pt-24 sm:pt-32 md:pt-40 lg:pt-44 
                            overflow-hidden
                            text-center lg:text-left">
              <h2
                ref={headingSmallRef}
                className="relative mb-2 select-none
                           text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl
                           leading-tight font-normal text-white">
                Design a Space <br /> You Love.
              </h2>

              <h3
                ref={headingTextRef}
                className="relative text-sm sm:text-base md:text-lg lg:text-xl
                           leading-relaxed font-normal text-white/70">
                Let's bring your creative <br /> imagination to reality.
              </h3>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end">
            <div
              ref={bannerImgRef}
              className="relative w-full 
                         max-w-[300px] sm:max-w-[400px] md:max-w-[500px] 
                         lg:max-w-[600px] xl:max-w-[700px]
                         h-[300px] sm:h-[400px] md:h-[500px] 
                         lg:h-[550px] xl:h-[600px]
                         mx-auto lg:mx-0">
              <img
                src={myImg}
                width={1200}
                height={800}
                srcSet={`${myImg} 600w, ${myImg} 1200w`}
                sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 700px"
                className="w-full h-full object-cover object-center rounded-lg shadow-2xl
                           transform translate-z-0 will-change-transform"
                alt="Tariqul Islam Portfolio"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
