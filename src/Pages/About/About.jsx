import React, { useEffect, useRef } from 'react';
import myImg from '../../assets/myImage/myImageAI1.jpg';
import Container from '../../Components/Container';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        },
      });

      // Content animation
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
      });

      // Stats animation
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
    });

    return () => ctx.revert();
  }, []);

  const stats = [
    { label: 'Years Experience', value: '1+', icon: '💼' },
    { label: 'Projects Completed', value: '20+', icon: '🚀' },
    { label: 'Happy Clients', value: '25+', icon: '😊' },
    { label: 'Countries Worked', value: '2', icon: '🌍' },
  ];

  const expertise = [
    {
      category: 'Frontend Development',
      icon: '🎨',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
    },
    {
      category: 'Backend Development',
      icon: '⚙️',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'REST APIs'],
    },
    {
      category: 'UI/UX & Design',
      icon: '🖌️',
      skills: ['Figma to Code', 'Responsive Design', 'Material-UI', 'DaisyUI'],
    },
    {
      category: 'Tools & Technologies',
      icon: '🛠️',
      skills: ['Git', 'VS Code', 'Postman', 'Vercel', 'Netlify'],
    },
  ];

  const highlights = [
    '1 year of professional experience in India & UAE',
    'Specialized in React.js & Next.js ecosystem',
    'Strong focus on clean, maintainable code',
    'Proven track record with 20+ successful projects',
    'Experience in cross-functional team collaboration',
  ];

  return (
    <Container>
      <div className="py-16 md:py-24 lg:py-32">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Me
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Image Section */}
          <div ref={imageRef} className="lg:col-span-4">
            <div className="relative group">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

              {/* Image Container */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border-4 border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-2">
                  <img
                    src={myImg}
                    className="w-full h-auto rounded-2xl object-cover transform group-hover:scale-105 transition-transform duration-500"
                    alt="Tariqul Islam - Frontend Developer"
                    width={150}
                    height={150}
                    loading="lazy"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl shadow-2xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">1+</div>
                    <div className="text-xs uppercase tracking-wider">Years Exp</div>
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub Stats Card */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>📊</span> GitHub Activity
              </h3>

              {/* GitHub Stats */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=ittarek&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1e293b&title_color=60a5fa&icon_color=a78bfa&text_color=e2e8f0"
                  alt="GitHub Stats"
                  className="w-full"
                  loading="lazy"
                />
              </div>

              {/* GitHub Streak */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=ittarek&theme=tokyonight&hide_border=true&background=1e293b&stroke=60a5fa&ring=a78bfa&fire=f472b6&currStreakLabel=e2e8f0"
                  alt="GitHub Streak"
                  className="w-full"
                  loading="lazy"
                />
              </div>

              {/* Most Used Languages */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=ittarek&layout=compact&theme=tokyonight&hide_border=true&bg_color=1e293b&title_color=60a5fa&text_color=e2e8f0"
                  alt="Most Used Languages"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="lg:col-span-8 space-y-8">
            {/* Introduction */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Md Tariqul Islam
                </span>
              </h2>
              <h3 className="text-xl md:text-2xl text-blue-300 mb-6 font-medium">
                Frontend Developer | React.js & Next.js Specialist
              </h3>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-6">
                Frontend-focused Software Developer with{' '}
                <span className="text-blue-400 font-semibold">
                  1+ year of professional experience
                </span>{' '}
                across India and the UAE. Specialized in building responsive,
                high-performance web applications using{' '}
                <span className="text-purple-400 font-semibold">
                  React.js, Next.js, and the MERN stack
                </span>
                .
              </p>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                Strong expertise in component-based architecture, API integration, Redux
                state management, and modern UI/UX practices. Proven ability to
                collaborate in cross-functional teams and deliver clean, maintainable code
                that scales.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span>✨</span> Key Highlights
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-150 transition-transform duration-300"></div>
                    <p className="text-gray-300 text-base md:text-lg group-hover:text-white transition-colors duration-300">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center hover:scale-105 transition-transform duration-300 group">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mt-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Expertise
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{item.category}</h4>
                <div className="space-y-2">
                  {item.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/ittarek"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-1">
                View GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/md-tariqul-islam-ab42b61a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-slate-800 border border-white/10 text-white rounded-lg font-semibold hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
