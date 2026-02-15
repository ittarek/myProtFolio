import { lazy, Suspense, useState, useEffect } from 'react';
import { useSmoothScroll } from '../../Hooks/useSmoothScroll';
import './Home.css';

// ✅ Only Banner loads immediately
import Banner from '../../Components/Bannar/Banner';

// ✅ Everything else lazy loaded
const Services = lazy(() => import('../Services/Services'));
const Skills = lazy(() => import('../Skills/Skills'));
const Experiences = lazy(() =>
  import('../../Components/Experiences/Experiences').then(m => ({
    default: m.Experiences,
  }))
);
const Portfolio = lazy(() => import('../Portfolio/Portfolio'));
const TechStack = lazy(() => import('../TechStack/TechStack'));
const Certificate = lazy(() => import('../certification/Certificate'));
const Process = lazy(() => import('../Process/Process'));
const SocialProof = lazy(() => import('../../Components/SocialProof/SocialProof'));
const FAQ = lazy(() => import('../../Components/FAQ/FAQ'));
const CTA = lazy(() => import('../../Components/CTA/CTA'));
const Contact = lazy(() => import('../Contact/Contact'));
const LinkedInRecommendations = lazy(() =>
  import('../../Components/LinkedInRecommendations/LinkedInRecommendations').then(m => ({
    default: m.LinkedInRecommendations,
  }))
);

// ✅ Better loading skeleton
const SectionLoader = ({ height = 'h-96' }) => (
  <div
    className={`w-full ${height} bg-gradient-to-br from-gray-900 to-black animate-pulse flex items-center justify-center`}>
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-500/30 rounded-full"></div>
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin absolute top-0"></div>
      </div>
      <div className="text-center">
        <div className="h-2 w-24 bg-gray-700 rounded animate-pulse mb-2"></div>
        <div className="h-2 w-32 bg-gray-800 rounded animate-pulse"></div>
      </div>
    </div>
  </div>
);

const Home = () => {
  useSmoothScroll();

  return (
    <main className="-mt-[80px] h-full -mb-[30px]">
      {/* Immediate Load */}
      <Banner />

      {/* Lazy Load Sections */}
      <Suspense fallback={<SectionLoader height="h-[600px]" />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionLoader height="h-[700px]" />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<SectionLoader height="h-[500px]" />}>
        <Experiences />
      </Suspense>

      <Suspense fallback={<SectionLoader height="h-[800px]" />}>
        <Portfolio />
      </Suspense>

      <Suspense fallback={<SectionLoader height="h-[600px]" />}>
        <TechStack />
      </Suspense>

      <Suspense fallback={<SectionLoader height="h-[700px]" />}>
        <Certificate />
      </Suspense>

      <Suspense fallback={<SectionLoader height="h-[600px]" />}>
        <Process />
      </Suspense>

      <Suspense fallback={<SectionLoader height="h-[400px]" />}>
        <SocialProof />
      </Suspense>

      <Suspense fallback={<SectionLoader height="h-[500px]" />}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<SectionLoader height="h-[300px]" />}>
        <CTA />
      </Suspense>

      <Suspense fallback={<SectionLoader height="h-[600px]" />}>
        <section className="contact-section">
          <Contact />
        </section>
      </Suspense>

      <Suspense fallback={<SectionLoader height="h-[800px]" />}>
        <LinkedInRecommendations />
      </Suspense>
    </main>
  );
};

export default Home;
