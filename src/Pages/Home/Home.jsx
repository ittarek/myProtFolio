import Banner from '../../Components/Bannar/Banner';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import { useSmoothScroll } from '../../Hooks/useSmoothScroll';
import Portfolio from '../Portfolio/Portfolio';
import './Home.css';
import Certificate from '../certification/Certificate';
import { Experiences } from '../../Components/Experiences/Experiences';
import { LinkedInRecommendations } from '../../Components/LinkedInRecommendations/LinkedInRecommendations';
import Services from '../Services/Services';
import TechStack from '../TechStack/TechStack';
import Process from '../Process/Process';
import SocialProof from '../../Components/SocialProof/SocialProof';
import FAQ from '../../Components/FAQ/FAQ';
import CTA from '../../Components/CTA/CTA';

const Home = () => {
  useSmoothScroll();
  return (
    <main className="-mt-[80px] h-full -mb-[30px]">
      <Banner />
      <Services />
      <Skills />
      <Experiences />
      <Portfolio />
      <TechStack />
      <Certificate />
      <Process />
      <SocialProof />
      <FAQ />
      <CTA />
      <section className="contact-section">
        {' '}
        <Contact />
      </section>

      <LinkedInRecommendations />
    </main>
  );
};

export default Home;
