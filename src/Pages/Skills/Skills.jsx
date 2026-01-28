import React, { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import Container from '../../Components/Container';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TOOLS_SKILLS } from './SkillsData';
import { DEVELOPMENT_SKILLS } from './DEVELOPMENT_SKILLS';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const [perspective, setPerspective] = useState(getPerspective());
  const [isMobile, setIsMobile] = useState(false);

  function getPerspective() {
    const width = window.innerWidth;
    if (width >= 1280) return 3000;
    if (width >= 768) return 2500;
    return 18000;
  }

  // Check if device is mobile
  function checkIsMobile() {
    return window.innerWidth < 768; // Mobile breakpoint
  }

  useEffect(() => {
    // Initial check
    setIsMobile(checkIsMobile());

    const handleResize = () => {
      setPerspective(getPerspective());
      setIsMobile(checkIsMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animate skill bars on scroll
  useEffect(() => {
    const skills = document.querySelectorAll('.skill-bar');

    skills.forEach((skill, index) => {
      gsap.fromTo(
        skill,
        { width: '0%' },
        {
          width: skill.dataset.value + '%',
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: skill,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.1,
        }
      );
    });
  }, []);

  const SkillCard = ({ skill, showIcon = false }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
      <div
        className="skill-item group"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {showIcon && (
              <span className="text-xl transform group-hover:scale-125 transition-transform duration-300">
                {skill.icon}
              </span>
            )}
            <p className="text-sm md:text-base font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400">
              {skill.name}
            </p>
          </div>
          <span className="text-xs md:text-sm text-blue-300 font-medium px-2 py-1 bg-blue-500/10 rounded-md">
            {skill.value}%
          </span>
        </div>

        {/* Custom Progress Bar Container */}
        <div className="relative">
          {/* Background Track */}
          <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
            {/* Animated Progress Bar */}
            <div
              className="skill-bar h-full bg-gradient-to-r from-[#10681fcc] via-[#e4a9fe] to-[#580957] rounded-full relative
                         group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300"
              data-value={skill.value}
              style={{ width: '0%' }}>
              {/* Pulse Indicator */}
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></span>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>

          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
              <div className="bg-gray-900/95 backdrop-blur-md text-white text-xs px-3 py-2 rounded-lg shadow-xl border border-white/10 whitespace-nowrap">
                {skill.message}
                {/* Arrow */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/95 border-r border-b border-white/10 rotate-45"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Skills Card Content
  const SkillsContent = () => (
    <div className="relative border border-white/10 rounded-2xl bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-sm p-6 md:p-8 lg:p-10 shadow-2xl">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-2xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Tools & Design Skills */}
        <div className="w-full lg:w-1/2">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🛠️</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Tools & Design
              </h2>
            </div>
            <p className="text-sm text-gray-400 ml-12">
              Design and development tools I use daily
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {TOOLS_SKILLS.map(skill => (
              <SkillCard key={skill.id} skill={skill} showIcon={true} />
            ))}
          </div>
        </div>

        {/* Development & Coding Skills */}
        <div className="w-full lg:w-1/2">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">💻</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Development & Coding
              </h2>
            </div>
            <p className="text-sm text-gray-400 ml-12">
              Languages and frameworks I specialize in
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {DEVELOPMENT_SKILLS.map(skill => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
    </div>
  );

  return (
    <Container>
      <main className="mx-auto flex flex-col w-full lg:max-w-[70rem] py-12 md:py-20">
        {/* Header Section */}
        <div className="flex space-x-3 md:space-x-10 mb-12">
          <div className="flex flex-col items-center">
            {/* Icon */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 p-3 rounded-full">
                <svg
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  fill="white"
                  className="animate-pulse">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4.41 0-8-3.59-8-8V8.5l8-4.5 8 4.5V12c0 4.41-3.59 8-8 8z" />
                  <path d="M10.5 13.5l-2.25-2.25L7 12.5l3.5 3.5 6-6L15.25 8.75z" />
                </svg>
              </div>
            </div>

            {/* Vertical Line */}
            <div className="h-full w-[3px] mt-7 rounded-full bg-gradient-to-b from-[#abb4ff] via-[#797ef9] to-transparent"></div>
          </div>

          <div className="md:w-11/12">
            <h2 className="text-xl md:text-2xl font-medium text-blue-400 mb-4">
              Technical Expertise
            </h2>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Professional MERN Stack
              </span>
              <br />
              <span className="text-white/90">Development Services</span>
            </h3>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl">
              With expertise in building robust, scalable web applications using modern
              technologies and best practices
            </p>
          </div>
        </div>

        {/* Skills Cards - Conditional Tilt */}
        {isMobile ? (
          // Mobile: No Tilt Effect
          <div className="transition-all duration-500">
            <SkillsContent />
          </div>
        ) : (
          // Desktop & Tablet: With Tilt Effect
          <Tilt
            className="parallax-effect transition-all duration-500 hover:scale-[1.01]"
            perspective={perspective}
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#ffffff"
            glareBorderRadius="12px"
            scale={1.0}
            gyroscope={true}>
            <SkillsContent />
          </Tilt>
        )}

        {/* Bottom Divider */}
        <div className="h-[100px] mt-12">
          <div className="ml-3 h-full w-[3px] rounded-full bg-gradient-to-b from-transparent via-[#ea6045] to-[#ffa28b]"></div>
        </div>
      </main>
    </Container>
  );
};

export default Skills;
