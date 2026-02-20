// Banner.jsx - Optimized with Deferred GSAP
import React, { useRef } from 'react';
import myImg from '../../assets/myImage/myImageAi3.webp';
import './Banner.css';
import Container from '../Container';
import { useGSAP } from '../../Hooks/useGSAP';


const Banner = React.memo(() => {
  const bannerImgRef = useRef(null);
  const headingBigRef = useRef(null);
  const headingSmallRef = useRef(null);
  const headingTextRef = useRef(null);

  // ✅ Deferred GSAP - loads when browser is idle
  useGSAP(gsap => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

    // Set initial state
    gsap.set(headingBigRef.current, {
      scale: 2,
      transformOrigin: 'top left',
    });

    // Image animation
    tl.to(bannerImgRef.current, {
      duration: 2,
      yPercent: 150,
      yoyo: true,
      repeat: 1,
    });

    // D animation
    tl.to(
      headingBigRef.current,
      {
        duration: 1.5,
        scale: 2.8,
        transformOrigin: 'top left',
        yoyo: true,
        repeat: 1,
      },
      0.8
    ).to(headingBigRef.current, {
      scale: 2,
      duration: 0.3,
    });

    // Text animations
    [headingSmallRef.current, headingTextRef.current].forEach(el => {
      tl.to(el, { duration: 0.1, opacity: 0 }, 1.2)
        .to(el, { duration: 0.1, left: '-100vw' }, 2)
        .to(el, { duration: 1.8, left: 0, opacity: 1 }, 3.6);
    });

    return tl; // Cleanup handled automatically
  }, []);

  return (
    <Container>
      <div className="relative overflow-hidden py-12 md:py-20 lg:py-24 z-10 flex justify-between items-center flex-col lg:flex-row gap-12">
        {/* Text Section */}
        <div className="relative ">
          {/* Large D */}
          <h1
            ref={headingBigRef}
            className="banner-mask-text absolute left-0 top-0 -z-10 select-none pointer-events-none
                         text-[100px] md:text-[300px] lg:text-[180px] xl:text-[300px]
                         leading-none font-extrabold uppercase opacity-70"
            style={{
              width: '500px',
              height: '500px',
            }}
            aria-label="Design">
            D
          </h1>

          {/* Main Text */}
          <div className="relative pt-24 sm:pt-32 md:pt-40 lg:pt-48 overflow-hidden text-center lg:text-left">
            <h2
              ref={headingSmallRef}
              className="relative mb-2 select-none text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl
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
      
          <div
            ref={bannerImgRef}
            className="relative w-full md:mt-[5rem] max-w-[300px] sm:max-w-[400px] md:max-w-[500px] 
                         lg:max-w-[600px] xl:max-w-[700px]
                         h-[300px] sm:h-[400px] md:h-[500px] 
                         lg:h-[550px] xl:h-[600px]
                         mx-auto lg:mx-0">
            <img
              src={myImg}
              width="700"
              height="600"
              className="w-full h-full object-cover object-center rounded-lg shadow-2xl"
              alt="Tariqul Islam Portfolio"
              decoding="async"
              fetchpriority="high"
            />
          </div>
 
      </div>
    </Container>
  );
});

export default Banner;
