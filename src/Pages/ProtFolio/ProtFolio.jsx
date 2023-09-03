import React from "react";
import ProtFolio1 from "../../../src/assets/protfolio-image/chef2.png";
import protFolio2 from "../../assets/protfolio-image/teach3.png";
import protFolio3 from "../../assets/protfolio-image/language3.png";

import "./ProtFolio.css";
import { Link } from "react-router-dom";
const ProtFolio = () => {
  return (
    <section className="mx-11">
      <h2 className="h2 my-6 text-black text-4xl w-100 text-center uppercase font-bold">
        My ProtFolio
      </h2>
      {/* ProtFolio-1 */}
      <section>
     
          <div className="lg:flex  gap-11 justify-evenly mx-auto items-center ">
           

            <div className="mx-auto">
              <h1 className="text-5xl  text-black font-bold">
                Chef Recipe Hunter
              </h1>
              <p className="py-6 text-slate-500 ">
                "Good food is the foundation of genuine happiness. Every
                ingredient, every technique, every ounce of passion makes a dish
                sing. A well-crafted recipe is a symphony of flavors that brings
                joy to the table and nourishes the soul. Cook with love, and
                your culinary creations will leave a lasting impression."
              </p>
              <div className="flex gap-4">
                <Link to="https://chef-recipe-hunter-f7cd2.web.app/">
                  <button className="btn btn-primary">Live Site</button>
                </Link>
                <Link to="https://github.com/ittarek/Chef-recipe-hunter-client-side">
                  <button className="btn btn-primary">GitHub Client</button>
                </Link>
                <Link to="https://github.com/ittarek/Chef-recipe-hunter-seerver-side">
                  <button className="btn btn-primary">GitHub Server</button>
                </Link>
              </div>
            </div>
            <div className="w-full mt-5">
              <Link to="https://chef-recipe-hunter-f7cd2.web.app/">
                {" "}
                <img
                  src={ProtFolio1}
                  className="w-[450px]  transition duration-500 ease-in-out transform hover:scale-110 scrollbar  rounded-lg shadow-2xl image"
                />
              </Link>
            </div>
          </div>
  
      </section>
      {/* ProtFolio-2 */}
      <section>

          <div className="lg:flex  gap-11 justify-evenly mx-auto items-center my-24">
            <div className="">
              <h1 className="text-5xl text-black font-bold">Tech Toy</h1>
              <p className="py-6 text-slate-500">
                "Good food is the foundation of genuine happiness. Every
                ingredient, every technique, every ounce of passion makes a dish
                sing. A well-crafted recipe is a symphony of flavors that brings
                joy to the table and nourishes the soul. Cook with love, and
                your culinary creations will leave a lasting impression."
              </p>
              <div className="flex gap-4">
                <Link to="https://tech-toys-67af5.web.app/">
                  <button className="btn btn-primary">Live Site</button>
                </Link>
                <Link to="https://github.com/ittarek/teach-toy-client">
                  <button className="btn btn-primary">GitHub Client</button>
                </Link>
                <Link to="https://github.com/ittarek/teach-toy-client-server">
                  <button className="btn btn-primary">GitHub Server</button>
                </Link>
              </div>
            </div>
           <div className="w-full mt-5">
           <Link to="https://tech-toys-67af5.web.app/">
              {" "}
              <img
                src={protFolio2}
                className="w-[450px] transition duration-500 ease-in-out transform hover:scale-110 scrollbar  rounded-lg shadow-2xl image"
              />
            </Link>
           </div>
          </div>
 
      </section>
      {/* Language Learner protfolio-3  */}
      <section>

          <div className="lg:flex  gap-11 justify-evenly mx-auto items-center">
          

            <div className="">
              <h1 className="text-5xl text-black font-bold">
                Language Learner
              </h1>
              <p className="py-6 text-slate-500">
                "Good food is the foundation of genuine happiness. Every
                ingredient, every technique, every ounce of passion makes a dish
                sing. A well-crafted recipe is a symphony of flavors that brings
                joy to the table and nourishes the soul. Cook with love, and
                your culinary creations will leave a lasting impression."
              </p>
              <div className="flex gap-4">
                <Link to="https://language-center-bedfd.web.app/">
                  <button className="btn btn-primary">Live Site</button>
                </Link>
                <Link to="https://github.com/ittarek/language-lerning-site">
                  <button className="btn btn-primary">GitHub Client</button>
                </Link>
                <Link to="https://github.com/ittarek/language-lerning-site-server">
                  <button className="btn btn-primary">GitHub Server</button>
                </Link>
              </div>
            </div>
          <div className="w-full mt-5">
          <Link to="https://language-center-bedfd.web.app/">
              {" "}
              <img
                src={protFolio3}
                className="w-[450px] transition duration-500 ease-in-out transform hover:scale-110 scrollbar  rounded-lg shadow-2xl image"
              />
            </Link>
          </div>
          </div>

      </section>
    </section>
  );
};

export default ProtFolio;
