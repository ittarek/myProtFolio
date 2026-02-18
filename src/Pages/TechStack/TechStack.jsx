import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../../Components/Container';
import { useGSAP } from '../../Hooks/useGSAP';
import './TechStack.css';

const techCategories = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 'Expert' },
      { name: 'Next.js', level: 'Expert' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'GSAP', level: 'Advanced' },
      { name: 'Redux', level: 'Advanced' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 'Expert' },
      { name: 'Express.js', level: 'Expert' },
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'Firebase', level: 'Intermediate' },
      { name: 'REST APIs', level: 'Expert' },
    ],
  },
  {
    category: 'Tools & DevOps',
    items: [
      { name: 'Git/GitHub', level: 'Expert' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'Vercel', level: 'Expert' },
      { name: 'AWS', level: 'Intermediate' },
      { name: 'CI/CD', level: 'Intermediate' },
      { name: 'VS Code', level: 'Expert' },
    ],
  },
];

const getLevelColor = level => {
  switch (level) {
    case 'Expert':
      return 'from-green-500 to-emerald-500';
    case 'Advanced':
      return 'from-blue-500 to-cyan-500';
    default:
      return 'from-purple-500 to-pink-500';
  }
};

const TechStack = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);

  // ✅ Use deferred GSAP loading
  useGSAP((gsap, ScrollTrigger) => {
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
          once: true,
        },
      });
    }

    // Animate category sections
    const categories = gsap.utils.toArray('.tech-category');
    if (categories.length > 0) {
      gsap.fromTo(
        categories,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }

    // Animate tech items
    const items = gsap.utils.toArray('.tech-item');
    if (items.length > 0) {
      gsap.fromTo(
        items,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.03,
          ease: 'back.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Tech Stack - Md Tariqul Islam | Technologies & Tools</title>
        <meta
          name="description"
          content="Comprehensive tech stack overview: React, Next.js, Node.js, MongoDB, TypeScript, Tailwind CSS, and modern development tools."
        />
        <meta
          name="keywords"
          content="tech stack, React, Node.js, MongoDB, Next.js, web development technologies"
        />
        <meta property="og:title" content="Tech Stack - Web Development Technologies" />
        <meta
          property="og:description"
          content="Expert knowledge in modern web technologies and frameworks."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://tareq.netlify.app/tech-stack" />
      </Helmet>

      <Container>
        <div ref={containerRef} className="py-16 md:py-24">
          {/* Header */}
          <div ref={headingRef} className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent mb-4">
              Tech Stack
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of technologies and tools I've mastered throughout
              my development journey.
            </p>
          </div>

          {/* Tech Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category, categoryIdx) => (
              <div
                key={categoryIdx}
                className="tech-category p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                {/* Category Title */}
                <h3 className="text-2xl font-bold text-blue-300 mb-6 pb-4 border-b border-slate-700">
                  {category.category}
                </h3>

                {/* Tech Items */}
                <div className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="tech-item">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">{item.name}</span>
                        <span
                          className={`text-xs px-3 py-1 rounded-full font-semibold bg-gradient-to-r ${getLevelColor(
                            item.level
                          )} text-white/90`}>
                          {item.level}
                        </span>
                      </div>

                      {/* Skill bar */}
                      <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${getLevelColor(item.level)} rounded-full transition-all duration-500`}
                          style={{
                            width:
                              item.level === 'Expert'
                                ? '90%'
                                : item.level === 'Advanced'
                                  ? '75%'
                                  : '60%',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="text-center mt-16 p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <p className="text-gray-300">
              Always learning and exploring new technologies to stay at the forefront of
              web development.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TechStack;
