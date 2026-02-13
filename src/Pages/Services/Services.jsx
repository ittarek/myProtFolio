import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '../../Components/Container';
import './Services.css';
import { services } from './ServicesData';

gsap.registerPlugin(ScrollTrigger);

const Services = React.memo(() => {
  console.log('2 service');

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
    <>
      <Helmet>
        <title>Services - Md Tariqul Islam | Web Development & Design</title>
        <meta
          name="description"
          content="Professional web development services including full stack development, UI/UX design, performance optimization, and scalable architecture."
        />
        <meta
          name="keywords"
          content="web development services, React developer, full stack development, UI/UX design, performance optimization"
        />
        <meta property="og:title" content="Services - Web Development & Design" />
        <meta
          property="og:description"
          content="Professional web development and design services tailored to your needs."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://tareq.netlify.app/services" />
      </Helmet>
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
    </>
  );
});

export default Services;
