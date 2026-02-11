import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette, Zap, Users, Shield, TrendingUp } from 'lucide-react';
import Container from '../../Components/Container';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    icon: Code,
    title: 'Full Stack Development',
    description:
      'End-to-end web application development using modern technologies like React, Next.js, Node.js, and MongoDB. Building scalable, maintainable solutions.',
    highlights: ['React/Next.js', 'Node.js/Express', 'MongoDB', 'PostgreSQL'],
  },
  {
    id: 2,
    icon: Palette,
    title: 'UI/UX Design Implementation',
    description:
      'Converting design mockups into pixel-perfect, responsive web interfaces. Focus on user experience and modern design principles.',
    highlights: ['Responsive Design', 'TailwindCSS', 'UI Components', 'Animations'],
  },
  {
    id: 3,
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'Optimizing web applications for speed and performance. Reducing load times and improving Core Web Vitals metrics.',
    highlights: ['Image Optimization', 'Code Splitting', 'Caching', 'SEO'],
  },
  {
    id: 4,
    icon: Users,
    title: 'Collaborative Development',
    description:
      'Working closely with your team using agile methodologies. Regular communication and transparent progress updates.',
    highlights: ['Agile/Scrum', 'Git Workflow', 'Code Review', 'Documentation'],
  },
  {
    id: 5,
    icon: Shield,
    title: 'Security & Best Practices',
    description:
      'Implementing security best practices and following industry standards. Secure authentication and data protection.',
    highlights: ['Authentication', 'CORS', 'Input Validation', 'HTTPS'],
  },
  {
    id: 6,
    icon: TrendingUp,
    title: 'Scalable Architecture',
    description:
      'Designing and building systems that can grow with your business. Microservices, cloud deployment, and DevOps integration.',
    highlights: ['Microservices', 'Docker', 'AWS/Vercel', 'CI/CD'],
  },
];

const Services = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Animate service cards with stagger
      const cards = gsap.utils.toArray('.service-card');
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Container>
      <div ref={containerRef} className="py-16 md:py-24">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive web development and design solutions tailored to your needs.
            From concept to deployment, I handle every aspect of your project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="service-card group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-block p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300">
                      <IconComponent
                        size={32}
                        className="text-blue-400 group-hover:text-blue-300 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm rounded-full hover:bg-blue-500/20 transition-colors duration-300">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/20 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl -z-10" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA hint */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg">
            Have a specific project in mind? Let's discuss your requirements and create
            something amazing together.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Services;
