import ProtFolio1 from "../../../src/assets/protfolio-image/1assignment-1.png";
import protFolio2 from "../../assets/protfolio-image/2assignment-2.png";
import protFolio3 from "../../assets/protfolio-image/3assignment-3.png";
import protFolioNews from "../../assets/protfolio-image/nextJs.jpg";
import assignment3ss from "../../assets/protfolio-image/assignment3SS.jpg"
import assignmetn1ss from "../../assets/protfolio-image/assignment1SS.jpg";
import assignmetn2ss from "../../assets/protfolio-image/assignment2SS.jpg";
import "./ProtFolio.css";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Swiper from "swiper";
// import 'swiper/swiper-bundle.min.css';

gsap.registerPlugin(ScrollTrigger);
import Container from "../../Components/Container";

const data = [
  {
    id: 1,
    title: "    Language Learner",
    details:
      "'Language Learne' seems to be a fragment or a typo. If you're referring to language learning, it generally involves the process of acquiring proficiency in a new language. This can be achieved through various methods, such as formal education, language courses, apps, immersion, or self-study. The goal is to develop skills in listening, speaking, reading, and writing to effectively communicate in the chosen language.",
    image: `${protFolio3}`,
    live_link: "https://language-center-bedfd.web.app/",
    github_client: "https://github.com/ittarek/language-lerning-site",
    github_server: "https://github.com/ittarek/language-lerning-site-server",
  },

  {
    id: 2,
    title: "News Website",
    details:
      "A 'tech toy' typically refers to a gadget or electronic device designed for entertainment, education, or experimentation within the realm of technology. It can encompass a wide range of products, from educational coding toys for children to quirky electronic gadgets for adults. Tech toys often aim to combine fun and learning, fostering creativity and exploration in the world of technology.",
    image: `${protFolioNews}`,
    live_link: "https://news-app-one-fawn.vercel.app/",
    github_client: "https://github.com/ittarek/boot-camp-next.js-task",
    github_server: "",
  },
  {
    id: 3,
    title: "   Chef Recipe Hunter",
    details:
      "Good food is the foundation of genuine happiness. Every            ingredient, every technique, every ounce of passion makes a                  dish sing. A well-crafted recipe is a symphony of flavors that                brings joy to the table and nourishes the soul. Cook with                  love, and your culinary creations will leave a lasting                  impression.",
    image: `${ProtFolio1}`,
    live_link: "https://chef-recipe-hunter-f7cd2.web.app/",
    github_client: "https://github.com/ittarek/Chef-recipe-hunter-client-side",
    github_server: "https://github.com/ittarek/Chef-recipe-hunter-seerver-side",
  },
  {
    id: 4,
    title: "Tech Toy",
    details:
      "A 'tech toy' typically refers to a gadget or electronic device designed for entertainment, education, or experimentation within the realm of technology. It can encompass a wide range of products, from educational coding toys for children to quirky electronic gadgets for adults. Tech toys often aim to combine fun and learning, fostering creativity and exploration in the world of technology.",
    image: `${protFolio2}`,
    live_link: "https://effortless-brioche-b5db7c.netlify.app/",
    github_client: "https://github.com/ittarek/teach-toy-client",
    github_server: "https://github.com/ittarek/teach-toy-client-server",
  },
];

const ProtFolio = () => {
  useEffect(() => {
    ScrollTrigger.refresh();

    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load, resize",
    });

    const marqueeElements = document.querySelectorAll(".marquee");

    marqueeElements.forEach(marquee => {
      const carousels = marquee.querySelectorAll(".marquee-carousel");

      carousels.forEach(carousel => {
        const items = carousel.querySelector(".marquee-items");
        const itemElements = carousel.querySelectorAll(".marquee-item");

        carousel.classList.add("swiper-container");
        items.classList.add("swiper-wrapper");
        itemElements.forEach(item => item.classList.add("swiper-slide"));

        new Swiper(carousel, {
          slidesPerView: "auto",
          loop: true,
          freeMode: true,
          freeModeMomentumBounce: false,
          freeModeMomentumVelocityRatio: 0.3,
        });
      });

      const tl = gsap.timeline();
      tl.set(carousels, { willChange: "transform" });

      if (carousels.length > 0) {
        tl.fromTo(carousels[0], { x: -300 }, { x: 0, ease: "none" }, 0);
      }

      if (carousels.length > 1) {
        tl.fromTo(carousels[1], { x: 300 }, { x: 0, ease: "none" }, 0);
      }

      tl.set(carousels, { willChange: "auto" });

      ScrollTrigger.create({
        trigger: marquee,
        animation: tl,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.3,
        refreshPriority: -14,
      });
    });
  }, []);

  return (
    <Container>
      <main className="">
        <section className="grid grid-cols-2 justify-center items-center gap-11">
          <img className="" src={protFolioNews} alt="news type assignment" />
          <img className="" src={assignment3ss} alt="recipe site" />
          <img className="" src={assignmetn1ss} alt="toy site" />
          <img className="" src={assignmetn2ss} alt="learning platform" />
        </section>
        {/* <!-- smooth wrapper --> */}
        <div id="smooth-wrapper">
          {/* <!-- smooth content --> */}
          <div id="smooth-content">
            {/* <!-- marquee effect --> */}
            <div className="marquee lg:space-y-[200px] space-y-[250px]">
              <div className="marquee-carousel marquee-carousel-1">
                <div className="marquee-items">
                  {data.map(d => (
                    <Tilt
                      key={d.id}
                      className="marquee-item parallax-effect-glare-scale transition duration-500"
                      perspective={3000}
                      glareEnable={true}
                      glareMaxOpacity={0.4}
                      scale={1.0}
                      gyroscope={true}
                    >
                      <div
                        className="w-full h-full   prot-image-1 transition duration-500 ease-in-out transform rounded-lg shadow-2xl cursor-pointer"
                        style={{ backgroundImage: `url(${d.image})` }}
                        onClick={() => window.open(d.live_link)}
                      >
                        <div className="flex justify-between items-center mx-auto flex-col h-full">
                          <div className="my-3">
                            <h1 className="text-4xl text-slate-300 font-bold">
                              {d.title}
                            </h1>
                          </div>
                          {/* <p className="py-6 text-slate-500">{d.details}</p> */}
                          <div className="flex gap-2 my-3">
                            <Link
                              onClick={() => window.open(d.live_link)}
                              className="relative items-center justify-start inline-block px-3 my-auto overflow-hidden font-medium transition-all shadow bg-[#10681fcc] rounded-full hover:bg-white group"
                            >
                              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                                Live Site
                              </span>
                            </Link>

                            <Link
                              onClick={() => window.open(d.github_client)}
                              className="relative items-center justify-start inline-block px-3 my-auto overflow-hidden font-medium transition-all shadow bg-[#10681fcc] rounded-full hover:bg-white group"
                            >
                              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                                GitHub Client
                              </span>
                            </Link>

                            <Link
                              onClick={() => window.open(d.github_server)}
                              className="relative bg-[#10681fcc] items-center justify-start inline-block px-3 my-autooverflow-hidden font-medium transition-all shadow rounded-full hover:bg-white group"
                            >
                              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                                GitHub Server
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Tilt>
                  ))}
                </div>
              </div>
              {/* marquee-carousel-2 */}
              <div className="marquee-carousel marquee-carousel-2">
                <div className="marquee-items">
                  {data.map(d => (
                    <Tilt
                      key={d.id}
                      className="marquee-item parallax-effect-glare-scale transition duration-500"
                      perspective={3000}
                      glareEnable={true}
                      glareMaxOpacity={0.4}
                      scale={1.0}
                      gyroscope={true}
                    >
                      <div
                        className="w-full h-full   prot-image-1 transition duration-500 ease-in-out transform rounded-lg shadow-2xl cursor-pointer"
                        style={{ backgroundImage: `url(${d.image})` }}
                        onClick={() => window.open(d.live_link)}
                      >
                        <div className="flex justify-between items-center mx-auto flex-col h-full">
                          <div className="my-3">
                            <h1 className="text-4xl text-slate-300 font-bold">
                              {d.title}
                            </h1>
                          </div>
                          {/* <p className="py-6 text-slate-500">{d.details}</p> */}
                          <div className="flex gap-2 my-3">
                            <Link
                              onClick={() => window.open(d.live_link)}
                              className="relative items-center justify-start inline-block px-3 my-auto overflow-hidden font-medium transition-all shadow bg-[#10681fcc] rounded-full hover:bg-white group"
                            >
                              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                                Live Site
                              </span>
                            </Link>

                            <Link
                              onClick={() => window.open(d.github_client)}
                              className="relative items-center justify-start inline-block px-3 my-auto overflow-hidden font-medium transition-all shadow bg-[#10681fcc] rounded-full hover:bg-white group"
                            >
                              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                                GitHub Client
                              </span>
                            </Link>

                            <Link
                              onClick={() => window.open(d.github_server)}
                              className="relative bg-[#10681fcc] items-center justify-start inline-block px-3 my-autooverflow-hidden font-medium transition-all shadow rounded-full hover:bg-white group"
                            >
                              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                                GitHub Server
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Tilt>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default ProtFolio;
