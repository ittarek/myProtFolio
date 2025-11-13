import  { useEffect, useRef } from "react";
import "./certificate.css";
import Container from "../../Components/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Certificate = () => {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);

  useEffect(() => {
    const textElements = gsap.utils.toArray(".text");

    textElements.forEach(text => {
      gsap.to(text, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: text,
          start: "center 80%",
          end: "center 20%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <Container>
      <div className="certificate my-16" ref={containerRef}>
        <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent text-center mb-6">
          All Cradintional
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
