import React from 'react';
// import myImg from "../../assets/myImage/ph.jpg";
import myImg from '../../assets/myImage/myImageAI1.jpg';

const About = () => {
  return (
    <div className="lg:mx-[200px] pt-24  lg:flex gap-6 ">
      {/* image */}
      <div className="mx-auto ">
        <img
          src={myImg}
          className="outline  mx-auto rounded-full"
          alt="image"
          width="400"
          height="400"
          loading="lazy"
        />
      </div>

      {/* About me */}
      <div className=" mx-auto">
        <h1 className="h1 text-center text-4xl uppercase font-bold mx-auto ">
          {' '}
          I'm Md Tarequl Islam
        </h1>
        <h2 className="h2 text-center text-2xl my-4 uppercase mx-auto">
          Front-end developer with react.js and next.js
        </h2>
        <p className=" lg:w-[500px] leading-10 mx-4">
          Frontend-focused Software Developer with 1 year of experience across India and
          the UAE. Skilled in building responsive, high-performance web applications using
          React.js, Next.js, and the MERN stack. Strong in component-based architecture,
          API integration, Redux state management, and modern UI/UX practices. Proven
          ability to collaborate in cross-functional teams and deliver clean, maintainable
          code. I completed a course in programming Hero. The name of this course is
          Complete Web Development with Jhankar Mahabob. I also like programming, although
          I am a commerce background student, but I very, very much love Tech. I am a
          positive, qualified web developer, often for 2 years, with different skills. I
          have developed qualities and attributes that guarantee I will perform highly in
          this role. I have recently completed a course and have extensive experience
          working as part of a team on often time-sensitive, challenging web development
          projects requiring outstanding creative and technical skills and the ability to
          ensure all work is optimized across a wide range of platforms. I took my job as
          a web developer seriously. And I always make sure to keep my skills up to date
          in this fast-changing industry. Working as a professional full-stack web
          developer expert since 2022, and have completed over 20+ projects for 25+
          clients at various marketplaces.
          <br /> ================== <br />
          Skill set (Web development/Front-end/back-end/MERN-stack/React.js expertise)
          <br /> ==================
          <br />
           Business website creation  Personal React website (front-end/back-end) 
          Custom JavaScript designed  Figma to HTML AND React.js  Figma to Tailwind 
          Figma to Bootstrap5  Landing page  Product service-based landing page  PSD to
          HTML  Responsive website  Html5, Css3, Bootstarp5 , Tailwind, javascritpt(es6)
          Bug/Error Fixing  CSS framework UI (DaisyUi, MUI, Ant design)  Login form,
          sign-in, and sign-up page creation  Contact Us form/social button and social
          sharing  Maintain your site for 6 months, follow up on malware, speed, and
          content edit issues  React signup page  Firebase authentication  Database add
          MongoDB  Create a responsive business website using Bootstrap 5 grid, Tailwind
          grid, and CSS media query system  Swiper.js carousel and slider  Web expertise
          to create and website and web applications <br />
          ===============Language================= <br />
          Javascript(es6), HTML5,CSS3, Bootsrap5, Tailwind, React.js, Next.js Express.js
          node.js
        </p>
      </div>
    </div>
  );
};

export default About;
