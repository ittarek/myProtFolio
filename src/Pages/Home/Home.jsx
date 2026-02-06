import Banner from "../../Components/Bannar/Banner";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import { useSmoothScroll } from "../../Hooks/useSmoothScroll";
import Portfolio from '../Portfolio/Portfolio';
import "./Home.css";
import Certificate from "../certification/Certificate";
import { Experiences } from "../../Components/Experiences/Experiences";
import { LinkedInRecommendations } from "../../Components/LinkedInRecommendations/LinkedInRecommendations";
import ScrollStack, { ScrollStackItem } from "../../Components/LinkedInRecommendations/ScrollStack";
import { Recomand } from "../../Components/LinkedInRecommendations/Recomand";
const Home = () => {
  useSmoothScroll();
  return (
    <main className="-mt-[80px] h-full -mb-[30px]">
      <Banner />
      <Skills />
      <Experiences />
      <Portfolio />
      {/* <LinkedInRecommendations /> */}
      <Recomand />

      <Certificate />
      <Contact />
    </main>
  );
};

export default Home;
