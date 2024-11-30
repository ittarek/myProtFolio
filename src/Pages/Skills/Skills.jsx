import Tilt from "react-parallax-tilt";
import React, { useEffect, useRef } from "react";

import LinearProgress from "@mui/material/LinearProgress";
import Tooltip from "@mui/material/Tooltip";

import Container from "../../Components/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const tools = [
  {
    id: 1,
    name: "Figma",
    value: 80,
    message: "Expert",
  },
  {
    id: 2,
    name: "Photoshop",
    value: 50,
    message: "Comfortable",
  },
  {
    id: 3,
    name: "Vercel",
    value: 90,
    message: "Expert",
  },
  {
    id: 4,
    name: "Netlify",
    value: 90,
    message: "Expert",
  },
  {
    id: 5,
    name: "FireBase",
    value: 90,
    message: "Expert",
  },
  {
    id: 6,
    name: "Redux Dev Tool",
    value: 60,
    message: "Comfortable",
  },
  {
    id: 7,
    name: "Chrome Dev Tool",
    value: 90,
    message: "Expert",
  },
  {
    id: 8,
    name: "RapidAPI",
    value: 50,
    message: "Familiar",
  },
];
const data = [
  { id: 1, name: "HTML5", value: 100, message: "Html is my love side" },
  { id: 2, name: "CSS3", value: 100, message: "Css is my love side" },
  {
    id: 3,
    name: "BootStrap",
    value: 100,
    message: "BootsTrap is my love side",
  },
  { id: 4, name: "TailWind", value: 100, message: "TailWind is my love side" },
  {
    id: 5,
    name: "JavaScript",
    value: 90,
    message: "JavaScript is my love side",
  },
  { id: 6, name: "React.js", value: 90, message: "React is my love side" },
  { id: 7, name: "Express.js", value: 50, message: "Express is my love side" },
  { id: 8, name: "MongoDB", value: 50, message: "Express is my love side" },
  {
    id: 9,
    name: "Next.js",
    value: 50,

    message: "Next is my running Learning Things",
  },
  {
    id: 10,
    name: "Redux",
    value: 70,

    message: "Redux is my running Learning Things",
  },
  {
    id: 11,
    name: "Typescript",
    value: 40,

    message: "Typescript is my running Learning Things",
  },
];
const Skills = () => {


  return (
    <Container>
      <main className="mx-auto flex flex-col w-full lg:max-w-[70rem] ">
        <div className="flex space-x-3 md:space-x-10">
          <div className="flex flex-col items-center">
            <div className="relative" style={{ opacity: "0" }}>
              <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                width="24"
                fill="currentColor"
                data-view-component="true"
                className="text-white "
              >
                <path d="M2.828 4.328C5.26 1.896 9.5 1.881 11.935 4.317c.024.024.046.05.067.076 1.391-1.078 2.993-1.886 4.777-1.89a6.22 6.22 0 0 1 4.424 1.825c.559.56 1.023 1.165 1.34 1.922.318.756.47 1.617.468 2.663 0 2.972-2.047 5.808-4.269 8.074-2.098 2.14-4.507 3.924-5.974 5.009l-.311.23a.752.752 0 0 1-.897 0l-.312-.23c-1.466-1.085-3.875-2.869-5.973-5.009-2.22-2.263-4.264-5.095-4.27-8.063a6.216 6.216 0 0 1 1.823-4.596Zm8.033 1.042c-1.846-1.834-5.124-1.823-6.969.022a4.712 4.712 0 0 0-1.382 3.52c0 2.332 1.65 4.79 3.839 7.022 1.947 1.986 4.184 3.66 5.66 4.752a78.214 78.214 0 0 0 2.159-1.645l-2.14-1.974a.752.752 0 0 1 1.02-1.106l2.295 2.118c.616-.52 1.242-1.08 1.85-1.672l-2.16-1.992a.753.753 0 0 1 1.021-1.106l2.188 2.02a18.963 18.963 0 0 0 1.528-1.877l-.585-.586-1.651-1.652c-1.078-1.074-2.837-1.055-3.935.043-.379.38-.76.758-1.132 1.126-1.14 1.124-2.96 1.077-4.07-.043-.489-.495-.98-.988-1.475-1.482a.752.752 0 0 1-.04-1.019c.234-.276.483-.576.745-.893.928-1.12 2.023-2.442 3.234-3.576Zm9.725 6.77c.579-1.08.92-2.167.92-3.228.002-.899-.128-1.552-.35-2.08-.22-.526-.551-.974-1.017-1.44a4.71 4.71 0 0 0-3.356-1.384c-1.66.004-3.25.951-4.77 2.346-1.18 1.084-2.233 2.353-3.188 3.506l-.351.423c.331.332.663.664.993.998a1.375 1.375 0 0 0 1.943.03c.37-.365.748-.74 1.125-1.118 1.662-1.663 4.373-1.726 6.06-.045.56.558 1.12 1.12 1.658 1.658Z"></path>
              </svg>
              <span className="absolute top-0 left-0 w-full h-full home-campaign-glowing-icon-glow-2 z-3"></span>
            </div>
            <div className=" h-full w-[3px] mt-7 rounded-md  bg-gradient-to-b from-[#abb4ff] via-[#797ef9] to-transparent"></div>
          </div>

          <div className=" md:w-11/12">
            <h2 className="text-[20px] md:text-2xl  font-medium text-white js-build-in-item build-in-slideX-left build-in-animate">
              Skills
            </h2>
            <div
              className="text-[28px] md:text-[37px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate w-full"
              style={{ transitionDelay: "300ms" }}
            >
              <span className="text-[#939aff] ">
                I offer professional FRONT-END (MERN) development services.
              </span>

              <span className="">
                With expertise in building robust web applications
              </span>
            </div>
         
          </div>
        </div>

        {/* Skill set */}
        <Tilt
          className="parallax-effect-glare-scale transition duration-500 "
          perspective={3000}
          glareEnable={true}
          glareMaxOpacity={0.4}
          scale={1.0}
          gyroscope={true}
        >
          <div className="z-[1] relative  h-full border-[#30363d] border-[0.5px] rounded-xl shadow-xl md:flex  justify-between p-5">
            <div className=" flex flex-col justify-between w-full gap-10 lg:flex-row">
              {/* Tools Skill */}
              <div className="w-full">
                {" "}
                <div className="py-6 font-titleFont flex flex-col gap-4 text-[#a497b4]">
                  <p className="text-sm text-designColor tracking-[4px] uppercase ">
                    Features
                  </p>
                  <h2 className="text-3xl font-bold md:text-4xl">
                    {" "}
                    Tools &amp; Design Skill
                  </h2>
                </div>
                <div className="flex flex-col gap-6">
                  {tools.map(s => (
                    <div key={s.id} className="overflow-x-hidden">
                      <p className="text-sm uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#e4a9fe] to-[#3d09a5]">
                        {s.name}
                      </p>
                      <LinearProgress
                        variant="buffer"
                        value={s.value}
                        valueBuffer={s.value}
                      ></LinearProgress>
                      <Tooltip title={s.message}>
                        <span className="inline-flex w-full h-2 mt-2 rounded-md ">
                          <span
                            className="h-full progress-bar  bg-gradient-to-r from-[#10681fcc] via-[#e4a9fe] to-[#580957] rounded-md relative "
                            style={{
                              width: `${s.value}%`,
                            }}
                          >
                            <span className="absolute -top-8 right-0 text-[#a497b4] "></span>
                          </span>
                        </span>
                      </Tooltip>
                    </div>
                  ))}
                </div>
              </div>
              {/* end tool */}

              <div className="w-full">
                <div className="py-6 font-titleFont flex flex-col gap-4 text-[#a497b4]">
                  <p className="text-sm text-designColor tracking-[4px] uppercase ">
                    Features
                  </p>
                  <h2 className="text-3xl font-bold md:text-4xl">
                    {" "}
                    Development &amp; Coding Skill
                  </h2>
                </div>

                <div className="flex flex-col gap-6">
                  {data.map(s => (
                    <div key={s.id} className="overflow-x-hidden">
                      <p className="text-sm uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#e4a9fe] to-[#c2abff]">
                        {s.name}
                      </p>
                      <LinearProgress
                        variant="buffer"
                        value={s.value}
                        valueBuffer={s.value}
                      ></LinearProgress>
                      <Tooltip title={s.message}>
                        <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
                          <span
                            className="h-full bg-gradient-to-r from-[#10681fcc] via-[#e4a9fe] to-[#580957] rounded-md relative"
                            style={{
                              width: `${s.value}%`,
                              transition: "width 0.5s ease", // Adding a smooth transition
                            }}
                          >
                            <span className="absolute -top-7 right-0 text-[#a497b4]"></span>
                          </span>
                        </span>
                      </Tooltip>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Tilt>
        {/* Skill set end*/}
        <div className="h-[100px]">
          <div className="ml-3 h-[100px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#ea6045] to-[#ffa28b]"></div>
        </div>
      </main>
    </Container>
  );
};

export default Skills;
