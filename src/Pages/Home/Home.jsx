// import bg_site from "../../assets/site-bg.jpg"
import Banner from "../../Components/Bannar/Banner";
import Contact from "../Contact/Contact";
import ProtFolio from "../Protfolio/Protfolio";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div >
 
      {/* <div className="h-[4000px]"></div> */}
     
      <div className="bg-color  bg-no-repeat bg-cover overflow-hidden">
      <Banner />
      <Skills/>
      <ProtFolio/>
      <Contact/>
      </div>
    </div>
  );
};

export default Home;
