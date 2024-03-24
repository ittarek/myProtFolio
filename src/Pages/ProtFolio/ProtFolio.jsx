import ProtFolio1 from "../../../src/assets/protfolio-image/assignment-1.png";
import protFolio2 from "../../assets/protfolio-image/assignment-2.png";
import protFolio3 from "../../assets/protfolio-image/assignment-3.png";

import "./ProtFolio.css";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

import Container from "../../Components/Container";

const data = [
  {
    id: 1,
    title: "   Chef Recipe Hunter",
    details:
      "Good food is the foundation of genuine happiness. Every            ingredient, every technique, every ounce of passion makes a                  dish sing. A well-crafted recipe is a symphony of flavors that                brings joy to the table and nourishes the soul. Cook with                  love, and your culinary creations will leave a lasting                  impression.",
    image: `${ProtFolio1}`,
    live_link: "https://chef-recipe-hunter-f7cd2.web.app/",
    github_client: "https://github.com/ittarek/Chef-recipe-hunter-client-side",
    github_server: "https://github.com/ittarek/Chef-recipe-hunter-seerver-side",
  },
  {
    id: 2,
    title: "Tech Toy",
    details: "A 'tech toy' typically refers to a gadget or electronic device designed for entertainment, education, or experimentation within the realm of technology. It can encompass a wide range of products, from educational coding toys for children to quirky electronic gadgets for adults. Tech toys often aim to combine fun and learning, fostering creativity and exploration in the world of technology.",
    image: `${protFolio2}`,
    live_link: "https://effortless-brioche-b5db7c.netlify.app/",
    github_client: "https://github.com/ittarek/teach-toy-client",
    github_server: "https://github.com/ittarek/teach-toy-client-server",
  },
  {
    id: 3,
    title: "    Language Learner",
    details:"'Language Learne' seems to be a fragment or a typo. If you're referring to language learning, it generally involves the process of acquiring proficiency in a new language. This can be achieved through various methods, such as formal education, language courses, apps, immersion, or self-study. The goal is to develop skills in listening, speaking, reading, and writing to effectively communicate in the chosen language.",
    image: `${protFolio3}`,
    live_link: "https://language-center-bedfd.web.app/",
    github_client: "https://github.com/ittarek/language-lerning-site",
    github_server: "https://github.com/ittarek/language-lerning-site-server",
  },
];


const ProtFolio = () => {



  return (
    <Container>
      <main className="mx-11">
        <h2 className="h2 my-6 text-white  text-4xl w-100 text-center uppercase font-bold">
          My ProtFolio
        </h2>

        <section>
          {data.map(d => (
            <Tilt
              key={d.id}
              className="parallax-effect-glare-scale transition duration-500 "
              perspective={3000}
              glareEnable={true}
              glareMaxOpacity={0.4}
              scale={1.0}
              gyroscope={true}
            >
              <div className="lg:flex w-full rounded-lg p-3 my-6 gap-11 justify-evenly mx-auto items-center ">
                <div className="mx-auto">
                  <h1 className="text-5xl text-white  font-bold">{d.title}</h1>
                  <p className="py-6 text-slate-500 ">{d.details}</p>
                  <div className="flex gap-4">
                    <Link
                      onClick={() => window.open(`${d.live_link}`)}
                      className="relative items-center justify-start inline-block px-5
                py-3 overflow-hidden font-medium transition-all shadow
                bg-[#10681fcc] rounded-full hover:bg-white group"
                    >
                      <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                        Live Site
                      </span>
                    </Link>

                    <Link
                      onClick={() => window.open(`${d.github_client}`)}
                      className="relative items-center justify-start inline-block px-5
                py-3 overflow-hidden font-medium transition-all shadow
                bg-[#10681fcc] rounded-full hover:bg-white group"
                    >
                      <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                        GitHub Client
                      </span>
                    </Link>

                    <Link
                      onClick={() => window.open(`${d.github_server}`)}
                      className="relative bg-[#10681fcc] items-center justify-start inline-block px-5
                py-3 overflow-hidden font-medium transition-all shadow
                 rounded-full hover:bg-white group"
                    >
                      <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                        GitHub Server
                      </span>
                    </Link>
                  </div>
                </div>{" "}
                <div
                  className="w-full mt-5 prot-image-1 h-[250px] transition duration-500 ease-in-out transform hover:scale-110   rounded-lg shadow-2xl "
                  style={{ backgroundImage: `url(${d.image})` }}
                 
                  onClick={() => window.open(`${d.live_link}`)}
                ></div>
              </div>
            </Tilt>
          ))}
        </section>
      </main>
    </Container>
  );
};

export default ProtFolio;
