import Banner from "../../Components/Bannar/Banner";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import ChatBot from "./ChatBot";
import { useSmoothScroll } from "../../Hooks/useSmoothScroll";
import ProtFolio from "../ProtFolio/ProtFolio";
import "./Home.css"
const Home = () => {

 useSmoothScroll();
  return (
    <div


      className="bg-color bg-no-repeat bg-cover  relative -top-[159px] h-full"

    >
      <Banner />

      <Skills />

      <ProtFolio />

      <ChatBot />

      <Contact />
    </div>
  );
};

export default Home;
