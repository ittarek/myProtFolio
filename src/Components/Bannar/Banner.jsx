import React from "react";
import myImg from "../../assets/my-image.png";
import "./Banner.css";
import { Link } from "react-router-dom";
import { useMotionValue, useTransform, motion } from "framer-motion";

const Banner = () => {
  // var fileDownload = require("react-file-download");
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1bOG60totm7g_zDT8IXdzI2pPf9W24QeH",
      "_parent"
    );
  };

  // farmar motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const colors = [
    { value: "#185bca" },
    { value: "#272425" },
    { value: "#617453" },
    { value: "#f2c758" },
    { value: "#ffffff" },
  ];

  return (
    <div className="mt-24">
      {" "}
      <div className="lg:mx-[200px] my-11 lg:flex gap-6 ">
        {/* About me */}
        <div className=" mx-auto">
          <h1 className="h1 text-center text-4xl uppercase font-bold mx-auto text-stone-200">
            {" "}
            I'm Md Tarequl Islam
          </h1>
          <h2 className="h2 text-center text-2xl my-4 uppercase mx-auto text-stone-300">
            Mern stack developer
          </h2>
          <p className=" lg:w-[500px] leading-10 mx-4 text-stone-400">
            I am a positive, qualified web developer, often for 2 years, with
            different skills. , have developed qualities and attributes that
            guarantee I will perform highly in this role. I have recently
            completed a course and have extensive experience working as part of
            a team on often time-sensitive, challenging web development projects
            requiring outstanding creative and technical skills and Requires the
            ability to ensure all work is optimized across a wide range of
            platforms. Take work seriously as a web developer. And that means I
            always make sure my skills are kept up-to-date in this fast-changing
            industry.{" "}
          </p>
          <Link to="https://github.com/ittarek">
            <button className="btn btn-sm">GitHub</button>
          </Link>
          <Link className="https://www.linkedin.com/in/it-tarek-ab42b61a1/">
            <button className="btn btn-sm mx-4">LinkedIn</button>
          </Link>
          <Link to="https://www.facebook.com/ITTarekul/">
            <button className="btn btn-sm">FaceBook</button>
          </Link>

          <button className="btn btn-sm ml-4" onClick={handleDownload}>
            Download resume{" "}
          </button>
        </div>
        {/* image */}
        <div style={{ perspective: 2000 }} className="sm-max-w-[100px]">
          {/* <img
            src={myImg}
            className="mx-auto rounded-full"
            alt="image"
          /> */}
          <motion.div
            style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragElastic={0.18}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: "grabbing" }}
            className="w-[426px] min-h-[500px] mt-11 rounded-[30px] border-[1px] border-red-400 px-[40px] py-[24px] cursor-grab relative"
          >
            <img src={myImg} alt="" draggable="false" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
