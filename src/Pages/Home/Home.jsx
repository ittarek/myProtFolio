import Banner from "../../Components/Bannar/Banner";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import { useSmoothScroll } from "../../Hooks/useSmoothScroll";
import ProtFolio from "../ProtFolio/ProtFolio";
import "./Home.css";
import Certificate from "../certification/Certificate";
const Home = () => {
  useSmoothScroll();
  return (
    <main className="-mt-[80px] h-full -mb-[30px]">
      <Banner />
      <Skills />
      <ProtFolio />
      <Certificate/>
      <Contact />
    </main>
  );
};

export default Home;
