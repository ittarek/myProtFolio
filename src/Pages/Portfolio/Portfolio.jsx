import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async'; // For SEO
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import Container from '../../Components/Container';
import './Portfolio.css';

// Import your images
import ProtFolio1 from '../../../src/assets/protfolio-image/1assignment-1.png';
import protFolio2 from '../../assets/protfolio-image/2assignment-2.png';
import protFolio3 from '../../assets/protfolio-image/3assignment-3.png';
import protFolioNews from '../../assets/protfolio-image/nextJs.jpg';
import { BestProjectCard } from './BestProjectCard';
import { SectionHeader } from '../../Components/Shared/SectionHeader';
import { ProjectCard } from './ProjectCard';
import { StatsSection } from './StatsSection';
import { CTASection } from './CTASection';

gsap.registerPlugin(ScrollTrigger);

const bestProjects = [
  {
    id: 1,
    title: 'Language Learner',
    subtitle: 'Interactive Learning Platform',
    description:
      'A comprehensive language learning platform with interactive lessons, progress tracking, and gamified learning experiences. Built with modern web technologies for optimal user engagement.',
    image: protFolio3,
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Node.js'],
    live_link: 'https://language-center-bedfd.web.app/',
    github_client: 'https://github.com/ittarek/language-lerning-site',
    github_server: 'https://github.com/ittarek/language-lerning-site-server',
    featured: true,
  },
  {
    id: 2,
    title: 'News Website',
    subtitle: 'Real-time News Portal',
    description:
      'A modern news aggregation platform built with Next.js, featuring real-time updates, responsive design, and optimized performance for seamless news consumption.',
    image: protFolioNews,
    tags: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    live_link: 'https://news-app-one-fawn.vercel.app/',
    github_client: 'https://github.com/ittarek/boot-camp-next.js-task',
    github_server: '',
    featured: false,
  },
];

const projectData = [
  {
    id: 1,
    title: 'Chef Recipe Hunter',
    subtitle: 'Culinary Discovery Platform',
    description:
      'Discover amazing recipes from world-class chefs. Features recipe search, detailed cooking instructions, and chef profiles with beautiful imagery and intuitive navigation.',
    image: ProtFolio1,
    tags: ['React', 'Firebase', 'Express.js', 'MongoDB'],
    live_link: 'https://chef-recipe-hunter-f7cd2.web.app/',
    github_client: 'https://github.com/ittarek/Chef-recipe-hunter-client-side',
    github_server: 'https://github.com/ittarek/Chef-recipe-hunter-seerver-side',
    featured: true,
  },
  {
    id: 2,
    title: 'Tech Toy Store',
    subtitle: 'E-commerce Platform',
    description:
      'An engaging e-commerce platform for tech toys and gadgets, featuring product catalogs, user authentication, and seamless shopping experience with modern UI/UX.',
    image: protFolio2,
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    live_link: 'https://tech-toy.netlify.app/',
    github_client: 'https://github.com/ittarek/teach-toy-client',
    github_server: 'https://github.com/ittarek/teach-toy-client-server',
    featured: false,
  },
];

const ActionButton = ({
  href,
  icon: Icon,
  children,
  variant = 'primary',
  disabled = false,
}) => {
  const handleClick = e => {
    e.stopPropagation();
    if (!disabled && href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  const baseClasses =
    'inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: disabled
      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
      : 'bg-gradient-to-r from-blue-600 to-slate-800 hover:from-blue-700 hover:to-slate-700 text-white shadow-lg hover:shadow-xl focus:ring-blue-500',
    secondary: disabled
      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
      : 'bg-gradient-to-r from-slate-800 to-slate-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl focus:ring-emerald-500',
    accent: disabled
      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
      : 'bg-gradient-to-r from-slate-800 to-blue-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl focus:ring-emerald-500',
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || !href}
      className={`${baseClasses} ${variants[variant]}`}
      aria-label={`${children}${!href ? ' (unavailable)' : ''}`}>
      <Icon size={16} />
      {children}
    </button>
  );
};

// Regular Project Card Component

const Portfolio = () => {
  const bestProjectsRef = useRef(null);
  const projectsGridRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Create GSAP context for cleanup
    const ctx = gsap.context(() => {
      // Animate best projects on scroll
      if (bestProjectsRef.current) {
        gsap.fromTo(
          '.best_project_wrapper',
          {
            y: 100,
            opacity: 0,
            scale: 0.95,
          },
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

      // Animate regular projects
      if (projectsGridRef.current) {
        gsap.fromTo(
          '.project_card_wrapper',
          {
            y: 80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: projectsGridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Animate stats section
      if (statsRef.current) {
        gsap.from(statsRef.current.children, {
          opacity: 0,
          y: 30,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
          },
        });
      }

      // Animate CTA section
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
          },
        });
      }
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Portfolio - Md Tariqul Islam | React & Next.js Developer</title>
        <meta
          name="description"
          content="Explore my portfolio of web development projects including React.js, Next.js, and full-stack applications. View live demos and source code."
        />
        <meta
          name="keywords"
          content="React developer portfolio, Next.js projects, web development, frontend developer, MERN stack, Md Tariqul Islam"
        />
        <meta property="og:title" content="Portfolio - Md Tariqul Islam" />
        <meta
          property="og:description"
          content="Explore my portfolio of web development projects including React.js, Next.js, and full-stack applications."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://tareq.netlify.app/myProtFolio" />
      </Helmet>

      <Container>
        <main className="py-20 bg-black min-h-screen">
          {/* Header Section */}
          <SectionHeader
            section="myProjects"
            header="My Projects"
            subTitle="Explore my latest projects showcasing modern web development, innovative solutions, and creative problem-solving."
            shortTitle="Portfolio Showcase"
          />

          {/* Best Projects Section */}
          <section ref={bestProjectsRef} className="best_projects_section mb-24">
            <SectionHeader
              section="bestProjects"
              header="Best Projects"
              subTitle="These are my most impactful and professionally developed projects, showcasing cutting-edge technology and exceptional user experiences."
            />

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

          {/* Other Projects Section */}
          <section ref={projectsGridRef} className="mb-20">
            <SectionHeader
              header="Other Projects"
              subTitle="Explore more of my work demonstrating various skills and technologies."
            />

            <div className="projects_grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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

          {/* Stats Section */}
          <StatsSection
            projectData={projectData}
            statsRef={statsRef}
            bestProjects={bestProjects}
          />

          {/* CTA Section */}
          <CTASection ctaRef={ctaRef} />
        </main>
      </Container>
    </>
  );
};

export default Portfolio;
