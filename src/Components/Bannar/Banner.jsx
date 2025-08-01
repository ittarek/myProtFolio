import React, { useEffect } from "react";
// import myImg from "../../assets/myImage/my-image-editing.png";
// import myImg from '../../assets/myImage/1.png';
// import myImg from '../../assets/myImage/IMG_20241022_170650_997.jpg';
import myImg from "../../assets/myImage/my-image.png";
// import myImg from "../../assets/myImage/ph.jpg";
// import myImg from "../../assets/myImage/image2.jpg";
import "./Banner.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../Container";



const Banner = () => {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to("#bannerBigimg", {
      duration: 2,
      yPercent: 150,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1,
      repeatRefresh: true,
    });

    gsap.to("#headingBig", {
      duration: 1.5,
      scale: 2,
      delay: 0.8,
      transformOrigin: "top left",
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1,
      repeatRefresh: true,
    });

    gsap.to("#headingSmall", {
      delay: 1.2,
      opacity: 0,
    });
    gsap.to("#headingSmall", {
      delay: 2,
      left: "-100vw",
    });
    gsap.to("#headingSmall", {
      delay: 3.6,
      duration: 1.8,
      left: 0,
      opacity: 1,
    });

    gsap.to("#headingText", {
      delay: 1.2,
      opacity: 0,
    });
    gsap.to("#headingText", {
      delay: 2,
      left: "-100vw",
    });
    gsap.to("#headingText", {
      delay: 3.6,
      duration: 1.8,
      left: 0,
      opacity: 1,
    });
  }, []);




  return (
  
      <Container>
      
          <div className="overflow-hidden banner-box py-6">
            <h1 className="text-4xl lg:text-6xl  uppercase" id="headingBig">
              D
            </h1>
            <div className="banner-text">
              <h2 className="text-sm lg:text-xl text-white " id="headingSmall">
                Design a Space <br /> You Love.
              </h2>
              <h3 className="text-sm lg:text-lg" id="headingText">
                Let’s bring your creative <br /> imagination to reality.
              </h3>
            </div>
            <div
              id="bannerBigimg"
              className="lg:row-start-1 lg:col-start-1 lg:col-span-6 banner-img mx-auto my-auto"
            >
              <img
                      src={myImg}
                      width={500}
                      height={100}
                className="h-full w-full my-image "
                alt="Image"
                loading="lazy"
              />
            </div>
          </div>
       
      </Container>
   
  );
};

export default Banner;
