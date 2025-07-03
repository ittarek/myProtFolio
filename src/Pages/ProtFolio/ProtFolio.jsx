import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Eye, ArrowRight, Sparkles } from 'lucide-react';
import Container from '../../Components/Container';

// Import your images
import ProtFolio1 from '../../../src/assets/protfolio-image/1assignment-1.png';
import protFolio2 from '../../assets/protfolio-image/2assignment-2.png';
import protFolio3 from '../../assets/protfolio-image/3assignment-3.png';
import protFolioNews from '../../assets/protfolio-image/nextJs.jpg';

gsap.registerPlugin(ScrollTrigger);

const projectData = [
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
  {
    id: 3,
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
    id: 4,
    title: 'Tech Toy Store',
    subtitle: 'E-commerce Platform',
    description:
      'An engaging e-commerce platform for tech toys and gadgets, featuring product catalogs, user authentication, and seamless shopping experience with modern UI/UX.',
    image: protFolio2,
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    live_link: 'https://effortless-brioche-b5db7c.netlify.app/',
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
      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl focus:ring-blue-500',
    secondary: disabled
      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
      : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30 focus:ring-white/50',
    accent: disabled
      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
      : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl focus:ring-emerald-500',
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

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl ${
        project.featured ? 'lg:col-span-2 lg:row-span-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${project.image})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-semibold text-gray-900">
            <Sparkles size={14} />
            Featured
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-8 min-h-[400px]">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/10">
                {tag}
              </span>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-blue-300 font-medium">{project.subtitle}</p>
          </div>
        </div>

        {/* Description - Shows on hover */}
        <div
          className={`transition-all duration-500 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          <p className="text-gray-200 text-sm leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <ActionButton href={project.live_link} icon={ExternalLink} variant="primary">
            Live Demo
          </ActionButton>

          <ActionButton
            href={project.github_client}
            icon={Github}
            variant="secondary"
            disabled={!project.github_client}>
            Client Code
          </ActionButton>

          {project.github_server && (
            <ActionButton href={project.github_server} icon={Github} variant="accent">
              Server Code
            </ActionButton>
          )}
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/50 rounded-3xl transition-all duration-300" />
    </div>
  );
};

const ModernPortfolio = () => {
  useEffect(() => {
    ScrollTrigger.refresh();

    // Animate cards on scroll
    gsap.fromTo(
      '.portfolio-card',
      {
        y: 100,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.portfolio-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Floating animation for featured projects
    gsap.to('.featured-float', {
      y: -10,
      duration: 2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <Container>
      <main className="py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full border border-blue-500/20 mb-6">
            <Eye size={16} className="text-blue-400" />
            <span className="text-blue-400 font-medium">Featured Work</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent mb-6">
            My Project
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explore my latest projects showcasing modern web development, innovative
            solutions, and creative problem-solving.
          </p>

          <div className="flex items-center justify-center gap-2 mt-8">
            <ArrowRight size={20} className="text-blue-400 animate-bounce" />
            <span className="text-gray-300">Scroll to discover</span>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {projectData.map((project, index) => (
            <div
              key={project.id}
              className={`portfolio-card ${project.featured ? 'featured-float' : ''}`}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 pt-16 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">{projectData.length}+</div>
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
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl border border-blue-500/20 p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Let's create something amazing together. Get in touch to discuss your next
              project.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span>Get In Touch</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default ModernPortfolio;