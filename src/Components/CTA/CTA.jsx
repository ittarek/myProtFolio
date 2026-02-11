import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Zap } from 'lucide-react';
import Container from '../../Components/Container';
import './CTA.css';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const content = document.querySelector('.cta-content');
      const button = document.querySelector('.cta-button');

      if (content) {
        gsap.from(content, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: content,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      if (button) {
        gsap.from(button, {
          opacity: 0,
          scale: 0.95,
          duration: 0.6,
          delay: 0.3,
          ease: 'back.out',
          scrollTrigger: {
            trigger: button,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Animate decorative elements
      const deco1 = document.querySelector('.cta-deco-1');
      const deco2 = document.querySelector('.cta-deco-2');

      if (deco1) {
        gsap.to(deco1, {
          y: -20,
          opacity: 0.3,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (deco2) {
        gsap.to(deco2, {
          y: 20,
          opacity: 0.2,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleContact = () => {
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Start Your Project - Md Tariqul Islam | Let's Build Together</title>
        <meta name="description" content="Ready to transform your idea into reality? Let's collaborate on your next web development project today." />
        <meta name="keywords" content="hire web developer, start a project, web development services, freelance developer" />
        <meta property="og:title" content="Transform Your Ideas into Reality" />
        <meta property="og:description" content="Let's collaborate and build something amazing together." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://tareq.netlify.app/start" />
      </Helmet>
      <Container>
        <div ref={containerRef} className="py-20 md:py-32">
        {/* Main CTA Section */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />

          {/* Decorative elements */}
          <div className="cta-deco-1 absolute top-0 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          <div className="cta-deco-2 absolute bottom-0 left-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl -z-10" />

          {/* Content */}
          <div className="relative z-10 px-8 md:px-16 py-20 md:py-28 text-center">
            <div className="cta-content">
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50" />
                  <div className="relative p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full">
                    <Zap size={32} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Ready to{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Transform Your Ideas?
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Let's collaborate and build something amazing together. I'm excited to
                discuss your project and help bring your vision to life.
              </p>

              {/* Stats before CTA */}
              <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-2xl md:text-3xl font-bold text-blue-400">50+</p>
                  <p className="text-sm text-gray-400">Projects</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-2xl md:text-3xl font-bold text-purple-400">30+</p>
                  <p className="text-sm text-gray-400">Clients</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-2xl md:text-3xl font-bold text-pink-400">4+</p>
                  <p className="text-sm text-gray-400">Years</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleContact}
              className="cta-button group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50">
              <span>Start Your Project</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>

            {/* Additional info */}
            <p className="mt-8 text-gray-400 text-sm">
              Or email me directly at{' '}
              <a
                href="mailto:your@email.com"
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                your@email.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </Container>
    </>
  );
};

export default CTA;
