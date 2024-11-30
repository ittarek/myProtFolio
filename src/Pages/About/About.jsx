import React from "react";
// import myImg from "../../assets/myImage/ph.jpg";
import myImg from "../../assets/myImage/my-image.png";

const About = () => {
  return (
    <div className="lg:mx-[200px] pt-24  lg:flex gap-6 ">
      
      {/* image */}
      <div className="mx-auto ">
        <img src={myImg} className="outline  mx-auto rounded-full" alt="image" />
      </div>

      {/* About me */}
      <div className=" mx-auto">
   
        <h1 className="h1 text-center text-4xl uppercase font-bold mx-auto "> I'm Md Tarequl Islam</h1>
        <h2 className="h2 text-center text-2xl my-4 uppercase mx-auto">Mern stack developer</h2>
        <p className=" lg:w-[500px] leading-10 mx-4">
          I am a positive, qualified web developer, often for 2 years, with
          different skills. , have developed qualities and attributes that
          guarantee I will perform highly in this role. I have recently
          completed a course and have extensive experience working as part of a
          team on often time-sensitive, challenging web development projects
          requiring outstanding creative and technical skills and Requires the
          ability to ensure all work is optimized across a wide range of
          platforms. Take work seriously as a web developer. And that means I
          always make sure my skills are kept up-to-date in this fast-changing
          industry.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
