import { useEffect, useRef, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import Container from '../../Components/Container';
import './Portfolio.css';

// ✅ Lazy load components
const BestProjectCard = lazy(() =>
  import('./BestProjectCard').then(m => ({ default: m.BestProjectCard }))
);
const ProjectCard = lazy(() =>
  import('./ProjectCard').then(m => ({ default: m.ProjectCard }))
);
const StatsSection = lazy(() =>
  import('./StatsSection').then(m => ({ default: m.StatsSection }))
);
const CTASection = lazy(() =>
  import('./CTASection').then(m => ({ default: m.CTASection }))
);
const SectionHeader = lazy(() =>
  import('../../Components/Shared/SectionHeader').then(m => ({
    default: m.SectionHeader,
  }))
);

// Images
import ProtFolio1 from '../../../src/assets/protfolio-image/1assignment-1.png';
import protFolio2 from '../../assets/protfolio-image/2assignment-2.png';
import protFolio3 from '../../assets/protfolio-image/Capture.jfif';
// import protFolio3 from '../../assets/protfolio-image/3assignment-3.JPG';
import protFolioNews from '../../assets/protfolio-image/nextJs.jpg';

gsap.registerPlugin(ScrollTrigger);

// ✅ Data outside component
const bestProjects = [
  {
    id: 1,
    title: 'Language Learner',
    subtitle: 'Interactive Learning Platform',
    description:
      'A comprehensive language learning platform with interactive lessons, progress tracking, and gamified learning experiences.',
    image: protFolio3,
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Node.js'],
    live_link: 'https://language-center-bedfd.web.app/',
    github_client: 'https://github.com/ittarek/language-lerning-site',
    rating: 5,
    category: 'Education',
  },
  {
    id: 2,
    title: 'News Website',
    subtitle: 'Real-time News Portal',
    description:
      'A modern news aggregation platform built with Next.js, featuring real-time updates and optimized performance.',
    image: protFolioNews,
    tags: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    live_link: 'https://news-app-one-fawn.vercel.app/',
    github_client: 'https://github.com/ittarek/boot-camp-next.js-task',
    rating: 4,
    category: 'Media',
  },
];

const projectData = [
  {
    id: 1,
    title: 'Chef Recipe Hunter',
    subtitle: 'Culinary Discovery Platform',
    description:
      'Discover amazing recipes from world-class chefs with detailed cooking instructions.',
    image: ProtFolio1,
    tags: ['React', 'Firebase', 'Express.js', 'MongoDB'],
    live_link: 'https://chef-recipe-hunter-f7cd2.web.app/',
    github_client: 'https://github.com/ittarek/Chef-recipe-hunter-client-side',
  },
  {
    id: 2,
    title: 'Tech Toy Store',
    subtitle: 'E-commerce Platform',
    description:
      'An engaging e-commerce platform for tech toys featuring seamless shopping experience.',
    image: protFolio2,
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    live_link: 'https://tech-toy.netlify.app/',
    github_client: 'https://github.com/ittarek/teach-toy-client',
  },
];

const ActionButton = ({ href, icon: Icon, children, variant = 'primary' }) => {
  const baseClasses =
    'inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105';

  const variants = {
    primary:
      'bg-gradient-to-r from-blue-600 to-slate-800 hover:from-blue-700 hover:to-slate-700 text-white',
    secondary:
      'bg-gradient-to-r from-slate-800 to-slate-600 hover:from-blue-700 hover:to-teal-700 text-white',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]}`}>
      <Icon size={16} />
      {children}
    </a>
  );
};

// ✅ Simple loading component
const LoadingSkeleton = () => (
  <div className="animate-pulse space-y-8 max-w-7xl mx-auto">
    <div className="h-48 bg-gray-800 rounded-2xl"></div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="h-96 bg-gray-800 rounded-2xl"></div>
      <div className="h-96 bg-gray-800 rounded-2xl"></div>
    </div>
  </div>
);

const Portfolio = () => {
  const bestProjectsRef = useRef(null);
  const projectsGridRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // ✅ Wait for DOM to be ready
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Best projects animation
        if (bestProjectsRef.current) {
          gsap.fromTo(
            '.best_project_wrapper',
            { y: 100, opacity: 0, scale: 0.95 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: bestProjectsRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          );
        }

        // Regular projects
        if (projectsGridRef.current) {
          gsap.fromTo(
            '.project_card_wrapper',
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.08,
              scrollTrigger: {
                trigger: projectsGridRef.current,
                start: 'top 80%',
              },
            }
          );
        }

        // Stats
        if (statsRef.current && statsRef.current.children) {
          gsap.from(statsRef.current.children, {
            opacity: 0,
            y: 30,
            duration: 0.5,
            stagger: 0.08,
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
            },
          });
        }

        // CTA
        if (ctaRef.current) {
          gsap.from(ctaRef.current, {
            opacity: 0,
            y: 50,
            duration: 0.6,
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 85%',
            },
          });
        }
      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Portfolio - Md Tariqul Islam</title>
        <meta name="description" content="Explore my web development portfolio" />
      </Helmet>

      <Container>
        <main className="py-20 bg-black min-h-screen">
          <Suspense fallback={<LoadingSkeleton />}>
            <SectionHeader header="My Projects" subTitle="Explore my latest projects" />

            <section ref={bestProjectsRef} className="mb-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {bestProjects.map(project => (
                  <BestProjectCard
                    key={project.id}
                    project={project}
                    ActionButton={ActionButton}
                    ExternalLink={ExternalLink}
                  />
                ))}
              </div>
            </section>

            <section ref={projectsGridRef} className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {projectData.map(project => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    ActionButton={ActionButton}
                    ExternalLink={ExternalLink}
                  />
                ))}
              </div>
            </section>

            <StatsSection
              projectData={projectData}
              statsRef={statsRef}
              bestProjects={bestProjects}
            />

            <CTASection ctaRef={ctaRef} />
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default Portfolio;
