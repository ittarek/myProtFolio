import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Quote, ChevronUp, ChevronDown } from 'lucide-react';
import './Recommendations.css';

const recommendations = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO',
    company: 'SaralTech',
    companyLogo: '/path/to/logo1.png', // Optional
    image: 'https://via.placeholder.com/150', // Recommender's photo
    linkedin: 'https://linkedin.com/in/johndoe',
    date: 'December 2024',
    recommendation:
      'Tariqul is an exceptional developer with outstanding skills in React and Next.js. His ability to solve complex problems and deliver high-quality code consistently impressed our team. He was instrumental in developing our venture builder platform, and his dedication to clean code and best practices made him a valuable asset to our organization.',
    relationship: "John was Tariqul's manager",
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'CTO',
    company: 'Travent',
    companyLogo: '/path/to/logo2.png',
    image: 'https://via.placeholder.com/150',
    linkedin: 'https://linkedin.com/in/janesmith',
    date: 'January 2025',
    recommendation:
      'Working with Tariqul was a fantastic experience. His frontend expertise, particularly with React and Tailwind CSS, helped us deliver our booking platform ahead of schedule. He has excellent communication skills and always brings innovative solutions to the table. I highly recommend him for any web development position.',
    relationship: 'Jane worked directly with Tariqul',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    position: 'Senior Developer',
    company: 'SaralTech',
    companyLogo: '/path/to/logo3.png',
    image: 'https://via.placeholder.com/150',
    linkedin: 'https://linkedin.com/in/mikejohnson',
    date: 'November 2024',
    recommendation:
      "Tariqul is a skilled developer who consistently delivers exceptional work. His knowledge of modern web technologies and his ability to learn quickly made collaboration seamless. He's a team player who always goes the extra mile to ensure project success.",
    relationship: 'Mike worked with Tariqul on the same team',
  },
  {
    id: 4,
    name: 'Sarah Williams',
    position: 'Product Manager',
    company: 'Travent',
    companyLogo: '/path/to/logo4.png',
    image: 'https://via.placeholder.com/150',
    linkedin: 'https://linkedin.com/in/sarahwilliams',
    date: 'February 2025',
    recommendation:
      'Tariqul demonstrated exceptional technical skills and professionalism throughout our project. His attention to detail and commitment to delivering pixel-perfect implementations made him stand out. He was always proactive in suggesting improvements and optimizations.',
    relationship: 'Sarah managed Tariqul directly',
  },
];

export const LinkedInRecommendations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);
  const isScrollingRef = useRef(false);

  // Mouse wheel scroll handler
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = e => {
      if (isScrollingRef.current) return;

      const delta = e.deltaY;

      if (Math.abs(delta) > 10) {
        isScrollingRef.current = true;

        if (delta > 0 && currentIndex < recommendations.length - 1) {
          // Scroll down - next recommendation
          setDirection(1);
          setCurrentIndex(prev => prev + 1);
        } else if (delta < 0 && currentIndex > 0) {
          // Scroll up - previous recommendation
          setDirection(-1);
          setCurrentIndex(prev => prev - 1);
        }

        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [currentIndex]);

  // Navigation handlers
  const goToNext = () => {
    if (currentIndex < recommendations.length - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Page flip animation variants
  const pageVariants = {
    enter: direction => ({
      rotateY: direction > 0 ? -90 : 90,
      opacity: 0,
      scale: 0.8,
      z: -100,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      z: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: direction => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.8,
      z: -100,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <div className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full border border-blue-500/20 mb-6">
            <Linkedin size={16} className="text-blue-400" />
            <span className="text-blue-400 font-medium">LinkedIn Recommendations</span>
          </div>

          <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent mb-6">
            What People Say
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Recommendations from colleagues and managers I've worked with
          </p>

          <p className="text-sm text-gray-500 mt-4">
            Scroll with your mouse wheel to flip through recommendations
          </p>
        </div>

        {/* Recommendation Cards Container */}
        <div
          ref={containerRef}
          className="relative min-h-[600px] flex items-center justify-center perspective-container">
          {/* Background stacked cards effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            {recommendations.slice(currentIndex + 1, currentIndex + 4).map((_, idx) => (
              <div
                key={idx}
                className="absolute w-full max-w-4xl h-[500px] bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-gray-700"
                style={{
                  transform: `translateY(${(idx + 1) * 20}px) scale(${1 - (idx + 1) * 0.05})`,
                  zIndex: -idx - 1,
                  opacity: 1 - (idx + 1) * 0.3,
                }}
              />
            ))}
          </div>

          {/* Active Card with Page Flip Animation */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="recommendation-card w-full max-w-4xl relative"
              style={{ transformStyle: 'preserve-3d' }}>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border-2 border-gray-700 p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />

                {/* Quote Icon */}
                <div className="absolute top-8 right-8 opacity-10">
                  <Quote size={100} className="text-blue-400" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-8">
                    {/* Profile Image */}
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 border-blue-500/30">
                        <img
                          src={recommendations[currentIndex].image}
                          alt={recommendations[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-blue-600 p-2 rounded-full">
                        <Linkedin size={16} className="text-white" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1">
                        {recommendations[currentIndex].name}
                      </h3>
                      <p className="text-blue-400 font-semibold mb-1">
                        {recommendations[currentIndex].position} at{' '}
                        {recommendations[currentIndex].company}
                      </p>
                      <p className="text-gray-500 text-sm mb-2">
                        {recommendations[currentIndex].date}
                      </p>
                      <p className="text-gray-400 text-sm italic">
                        {recommendations[currentIndex].relationship}
                      </p>
                    </div>

                    {/* LinkedIn Link */}
                    <a
                      href={recommendations[currentIndex].linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300">
                      <Linkedin size={20} />
                    </a>
                  </div>

                  {/* Recommendation Text */}
                  <div className="bg-gray-900/50 rounded-2xl p-6 lg:p-8 border border-gray-700">
                    <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
                      "{recommendations[currentIndex].recommendation}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full transition-all duration-300 ${
                currentIndex === 0
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-110'
              }`}
              aria-label="Previous recommendation">
              <ChevronUp size={24} />
            </button>

            <button
              onClick={goToNext}
              disabled={currentIndex === recommendations.length - 1}
              className={`p-3 rounded-full transition-all duration-300 ${
                currentIndex === recommendations.length - 1
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-110'
              }`}
              aria-label="Next recommendation">
              <ChevronDown size={24} />
            </button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {recommendations.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-12 bg-blue-500'
                  : 'w-2 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to recommendation ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            <span className="text-blue-400 font-bold text-xl">{currentIndex + 1}</span>
            <span className="mx-2">/</span>
            <span className="text-gray-500">{recommendations.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
