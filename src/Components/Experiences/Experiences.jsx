import { Link, ExternalLink } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import salaTech from '../../assets/protfolio-image/saralTech.png';
import travent from '../../assets/protfolio-image/travent.png';
import './Experience.css';

// Register GSAP plugin at module level
gsap.registerPlugin(ScrollTrigger);

const prof_experience = [
  {
    id: 1,
    title: 'Web Developer Internship (Part Time)',
    company: 'SaralTech',
    location: 'Remote, India',
    duration: 'Dec 2024 - Jun 2025',
    description:
      'Led a team of developers in creating scalable web applications using Next.js. Implemented RESTful APIs and integrated third-party services, resulting in a 30% reduction in development time. Focused on front-end development, ensuring data integrity and security. Mainly worked on the front-end, ensuring responsive design and cross-browser compatibility. Collaborate with others team members to design and implement new features, resulting in a 20% increase in user engagement.',
    technologies: ['Next.js', 'TailwindCSS', 'SwiperJS', 'JavaScript'],
    certificate_link:
      'https://drive.google.com/file/d/1-zB7JRFzsK2BVssNwqooOJBgrNhnSZfQ/view?usp=sharing',
    image: salaTech,
    websiteLink: 'https://incubation.saralgroups.com/userTypeSelection',
  },
  {
    id: 2,
    title: 'Software Developer (Full Time)',
    location: 'Remote, UAE',
    company: 'Travent',
    duration: 'Jan 2025 - Jun 2025',
    description:
      'Developed and maintained web applications using React, improving user experience and performance using TailwindCSS. Collaborated with cross-functional teams to design and implement new features, resulting in a 20% increase in user engagement. Mainly focused on front-end development, ensuring responsive design and cross-browser compatibility.',
    technologies: ['React', 'TailwindCSS', 'JavaScript', 'CSS'],
    image: travent,
    websiteLink: 'https://travent.me/',
    old_websiteLink: 'https://www.travent.ae/',
  },
];

export const Experiences = () => {
  const containerRef = useRef(null);

  // Add scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.exp_card_wrapper');

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="text-white flex flex-col items-center justify-center  py-16"
      ref={containerRef}>
      {/* Section Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent mb-4">
          Professional Experience
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
      </div>

      {/* Experience Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center  lg:gap-12 max-w-7xl w-full ">
        {prof_experience.map(exp => (
          <div className="exp_card_wrapper relative min-h-[450px] " key={exp.id}>
            <div className="exp_card md:h-[vh]  group relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-6 rounded-xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-blue-500/50 cursor-pointer overflow-visible">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-500"></div>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Header Section */}
                <div className="mb-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {exp.title}
                  </h2>
                  <div className="flex items-center gap-2 text-blue-400 font-semibold mb-1">
                    <span>{exp.company}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-300 font-normal">{exp.location}</span>
                  </div>
                  <p className="text-gray-400 text-sm font-medium">{exp.duration}</p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-base leading-relaxed mb-6 font-sans">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm rounded-full font-medium hover:bg-blue-500/20 transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links Section */}
                <div className="space-y-2 pt-4 border-t border-gray-700">
                  {exp.certificate_link && (
                    <a
                      href={exp.certificate_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link">
                      <ExternalLink
                        size={16}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                      <span className="font-medium">View Certificate</span>
                    </a>
                  )}

                  {exp.company === 'SaralTech' ? (
                    exp.websiteLink && (
                      <a
                        href={exp.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link">
                        <ExternalLink
                          size={16}
                          className="group-hover/link:translate-x-1 transition-transform"
                        />
                        <span className="font-medium">Live Project</span>
                      </a>
                    )
                  ) : (
                    <div className="space-y-2">
                      <a
                        href={exp.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link">
                        <ExternalLink
                          size={16}
                          className="group-hover/link:translate-x-1 transition-transform"
                        />
                        <span className="font-medium">Live Project (New Version)</span>
                      </a>

                      <a
                        href={exp.old_websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors group/link">
                        <ExternalLink
                          size={16}
                          className="group-hover/link:translate-x-1 transition-transform"
                        />
                        <span className="font-medium">Old Version</span>
                      </a>

                      <p className="text-md text-gray-500 italic pl-6 ">
                        *New version may not be accessible due to project hold
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Hover Image - Only shows when hovering the card */}
              <div className="hanging_image">
                <div className="image_container">
                  {/* Connection Line */}
                  <div className="connection_line"></div>

                  {/* Image Card */}
                  <div className="image_card ">
                    <img
                      src={exp.image}
                      alt={`${exp.company} project screenshot`}
                      className="w-full h-full object-cover rounded-lg "
                      loading="lazy"
                    />
                    <div className="image_overlay">
                      <p className="text-white font-semibold text-lg">{exp.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
