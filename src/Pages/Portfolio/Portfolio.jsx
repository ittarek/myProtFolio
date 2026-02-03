import { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async'; // For SEO
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, ArrowRight, Sparkles } from 'lucide-react';
import Container from '../../Components/Container';
import './Portfolio.css';

// Import your images
import ProtFolio1 from '../../../src/assets/protfolio-image/1assignment-1.png';
import protFolio2 from '../../assets/protfolio-image/2assignment-2.png';
import protFolio3 from '../../assets/protfolio-image/3assignment-3.png';
import protFolioNews from '../../assets/protfolio-image/nextJs.jpg';
import saralTech from '../../assets/protfolio-image/saralTech.png';
import travent from '../../assets/protfolio-image/travent.png';
import { BestProjectCard } from './BestProjectCard';
import { SectionHeader } from '../../Components/Shared/SectionHeader';

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
const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="project_card_wrapper group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      itemScope
      itemType="https://schema.org/CreativeWork">
      <div className="project_card relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-blue-500/50">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 z-10"></div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 z-20">
            <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold text-white">
              <Sparkles size={12} />
              Featured
            </div>
          </div>
        )}

        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} - ${project.subtitle}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            width="400"
            height="192"
            itemProp="image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          <h3
            className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors"
            itemProp="name">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4" itemProp="description">
            {project.subtitle}
          </p>

          {/* Description - Shows on hover */}
          <div
            className={`transition-all duration-500 mb-4 ${
              isHovered ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
            } overflow-hidden`}>
            <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs rounded-full font-medium"
                itemProp="keywords">
                {tech}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full font-medium">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-2">
            <ActionButton href={project.live_link} icon={ExternalLink} variant="primary">
              Live Demo
            </ActionButton>

            {project.github_client && (
              <ActionButton
                href={project.github_client}
                icon={Github}
                variant="secondary">
                Code
              </ActionButton>
            )}
          </div>
        </div>

        {/* Hover Border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/50 rounded-2xl transition-all duration-500"></div>
      </div>
    </article>
  );
};

const Portfolio = () => {
  const bestProjectsRef = useRef(null);
  const projectsGridRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Kill all existing ScrollTriggers first
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

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
            duration: 1,
            stagger: 0.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bestProjectsRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
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
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: projectsGridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Animate stats section
      if (statsRef.current) {
        gsap.from(statsRef.current.children, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.1,
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
          duration: 0.8,
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
      ScrollTrigger.getAll().forEach(t => t.kill());
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
        <link rel="canonical" href="https://yourwebsite.com/portfolio" />
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
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="mt-24 pt-16 border-t border-gray-800">
            <div
              ref={statsRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">
                  {projectData.length + bestProjects.length}+
                </div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">2+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-gray-400">Technologies Used</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-24 text-center">
            <div
              ref={ctaRef}
              className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl border border-blue-500/20 p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Work With Me?
              </h2>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Let's create something amazing together. Get in touch to discuss your next
                project.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/md-tariqul-islam-ab42b61a1/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span>Get In Touch</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </section>
        </main>
      </Container>
    </>
  );
};

export default Portfolio;
