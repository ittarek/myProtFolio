import { useEffect, useRef } from 'react';
import './certificate.css';
import Container from '../../Components/Container';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Award, GraduationCap, Code, Briefcase, Zap, ChevronRight } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'Higher Secondary Certificate',
    institution: 'LSD College',
    hoverText: 'Science Background • 2018-2020',
    icon: GraduationCap,
    color: 'from-blue-400 to-cyan-400',
  },
  {
    id: 2,
    title: 'Web Development',
    institution: 'Programming Hero',
    hoverText: 'Complete Web Development Course • MERN Stack',
    icon: Code,
    color: 'from-purple-400 to-pink-400',
  },
  {
    id: 3,
    title: 'Office Management',
    institution: 'IT Park',
    hoverText: 'Professional Office Management Skills',
    icon: Briefcase,
    color: 'from-green-400 to-emerald-400',
  },
  {
    id: 4,
    title: 'Electrical & Electronics',
    institution: 'BKTTC & USEF',
    hoverText: 'Technical Certification • Hands-on Training',
    link: '#',
    icon: Zap,
    color: 'from-orange-400 to-red-400',
  },
  {
    id: 5,
    title: 'Team Lead',
    institution: "LET'S CONNECT",
    hoverText: 'Leadership & Team Management Certification',
    link: '#',
    icon: Award,
    color: 'from-yellow-400 to-amber-400',
  },
];

const Certificate = () => {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);

  useEffect(() => {
    const textElements = gsap.utils.toArray('.text');

    textElements.forEach(text => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'center 80%',
          end: 'center 20%',
          scrub: true,
        },
      });
    });

    // Animate certificate items on scroll
    gsap.fromTo(
      '.certificate-item',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.certificate',
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <Container>
      <div className="certificate my-16 py-16" ref={containerRef}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full border border-blue-500/20 mb-6">
            <Award size={16} className="text-blue-400" />
            <span className="text-blue-400 font-medium">Certifications & Education</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent mb-6">
            All Credentials
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            My educational background and professional certifications that drive
            excellence
          </p>
        </div>

        {/* Certificate Items */}
        <div className="space-y-0">
          {certificates.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={cert.id}
                className="certificate-item text group"
                data-index={index}>
                {/* Main Content */}
                <div className="main-content">
                  <div className="flex items-center gap-4">
                    <div className="icon-wrapper">
                      <IconComponent size={40} className="cert-icon" />
                    </div>
                    <div className="flex-1">
                      <h2 className="cert-title">{cert.title}</h2>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="institution-name">{cert.institution}</span>
                        <ChevronRight size={16} className="chevron-icon" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <span className={`hover-overlay bg-gradient-to-r ${cert.color}`}>
                  <div className="hover-content">
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent size={32} className="text-gray-900" />
                      <h3 className="text-2xl lg:text-4xl font-bold text-gray-900">
                        {cert.title}
                      </h3>
                    </div>
                    <p className="hover-description">{cert.hoverText}</p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                        <span>View Certificate</span>
                        <ChevronRight size={16} />
                      </a>
                    )}
                  </div>
                </span>

                {/* Animated Border */}
                <div className="animated-border"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {certificates.length}+
              </div>
              <div className="text-gray-400">Certifications</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                2+
              </div>
              <div className="text-gray-400">Years Learning</div>
            </div>
            <div className="space-y-2 col-span-2 md:col-span-1">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-gray-400">Commitment</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Certificate;
