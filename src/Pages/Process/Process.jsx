import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  MessageSquare,
  Lightbulb,
  Code,
  TestTube,
  Rocket,
  BarChart3,
} from 'lucide-react';
import Container from '../../Components/Container';
import './Process.css';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    id: 1,
    icon: MessageSquare,
    title: 'Discovery & Planning',
    description:
      'We start by understanding your business goals, target audience, and project requirements. I create a detailed plan and timeline.',
    duration: '1-2 weeks',
  },
  {
    id: 2,
    icon: Lightbulb,
    title: 'Strategy & Design',
    description:
      'Develop a comprehensive strategy and create wireframes/mockups. Focus on user experience and visual design principles.',
    duration: '2-3 weeks',
  },
  {
    id: 3,
    icon: Code,
    title: 'Development',
    description:
      'Build your application using best practices and clean, maintainable code. Regular updates and progress reports.',
    duration: '4-8 weeks',
  },
  {
    id: 4,
    icon: TestTube,
    title: 'Testing & QA',
    description:
      'Comprehensive testing including unit tests, integration tests, and user acceptance testing to ensure quality.',
    duration: '1-2 weeks',
  },
  {
    id: 5,
    icon: Rocket,
    title: 'Deployment',
    description:
      'Deploy your application to production with zero downtime. Setup monitoring and continuous integration/deployment.',
    duration: '1 week',
  },
  {
    id: 6,
    icon: BarChart3,
    title: 'Maintenance & Support',
    description:
      'Ongoing support, bug fixes, and performance monitoring. Regular updates and optimizations based on user feedback.',
    duration: 'Ongoing',
  },
];

const Process = () => {
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

      // Animate steps
      const steps = gsap.utils.toArray('.process-step');
      if (steps.length > 0) {
        gsap.fromTo(
          steps,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Animate connecting line
      const line = document.querySelector('.process-line');
      if (line) {
        gsap.from(line, {
          width: '0%',
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Container>
      <div ref={containerRef} className="py-16 md:py-24">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent mb-4">
            My Development Process
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A structured, transparent approach to building your project. I believe in
            clear communication and regular updates at every stage.
          </p>
        </div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div
              className="process-line absolute top-20 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              style={{ width: '0%' }}
            />

            {/* Steps grid */}
            <div className="grid grid-cols-6 gap-4">
              {processSteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.id} className="process-step">
                    {/* Step number circle */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-lg" />
                      <div className="relative w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center border-4 border-slate-900">
                        <span className="text-xl font-bold text-white">{idx + 1}</span>
                      </div>
                    </div>

                    {/* Card */}
                    <div className="p-6 rounded-xl bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                      <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg w-fit mx-auto">
                        <IconComponent size={24} className="text-blue-400" />
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2 text-center">
                        {step.title}
                      </h3>

                      <p className="text-sm text-gray-400 mb-4 text-center">
                        {step.description}
                      </p>

                      <div className="text-center">
                        <span className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs rounded-full">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="lg:hidden">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500" />

            {/* Steps */}
            <div className="space-y-12">
              {processSteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.id} className="process-step relative">
                    {/* Circle on timeline */}
                    <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 border-4 border-slate-900 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{idx + 1}</span>
                    </div>

                    {/* Card */}
                    <div className="p-6 rounded-xl bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 border border-slate-700/50">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg flex-shrink-0">
                          <IconComponent size={20} className="text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{step.title}</h3>
                          <span className="text-xs text-purple-400">{step.duration}</span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-400">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Process;
