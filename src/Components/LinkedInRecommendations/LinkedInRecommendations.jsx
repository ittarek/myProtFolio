import { useEffect, useRef, useState } from 'react';
import { Linkedin, Quote } from 'lucide-react';
import './Recommendations.css';

const recommendations = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO',
    company: 'SaralTech',
    image: 'https://via.placeholder.com/400',
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
    image: 'https://via.placeholder.com/400',
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
    image: 'https://via.placeholder.com/400',
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
    image: 'https://via.placeholder.com/400',
    linkedin: 'https://linkedin.com/in/sarahwilliams',
    date: 'February 2025',
    recommendation:
      'Tariqul demonstrated exceptional technical skills and professionalism throughout our project. His attention to detail and commitment to delivering pixel-perfect implementations made him stand out. He was always proactive in suggesting improvements and optimizations.',
    relationship: 'Sarah managed Tariqul directly',
  },
];

export const LinkedInRecommendations = () => {
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;
    const cards = cardRefs.current;

    if (!cardsContainer || cards.length === 0) return;

    // Set CSS variables
    cardsContainer.style.setProperty('--cards-count', cards.length);
    cardsContainer.style.setProperty('--card-height', `${cards[0].clientHeight}px`);

    // Setup scroll observers
    const observers = [];

    cards.forEach((card, index) => {
      const offsetTop = 20 + index * 20;
      card.style.paddingTop = `${offsetTop}px`;

      if (index === cards.length - 1) {
        return;
      }

      const toScale = 1 - (cards.length - 1 - index) * 0.1;
      const nextCard = cards[index + 1];
      const cardInner = card.querySelector('.card__inner');

      // Create intersection observer for scroll effect
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const scrollProgress = getScrollProgress(nextCard, card, offsetTop);
              updateCardTransform(cardInner, scrollProgress, toScale);
            }
          });
        },
        {
          threshold: Array.from({ length: 100 }, (_, i) => i / 100),
          rootMargin: '0px',
        }
      );

      observer.observe(nextCard);
      observers.push(observer);

      // Add scroll listener for smooth updates
      const handleScroll = () => {
        const scrollProgress = getScrollProgress(nextCard, card, offsetTop);
        updateCardTransform(cardInner, scrollProgress, toScale);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      // Cleanup function
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });

    // Cleanup observers
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // Calculate scroll progress
  const getScrollProgress = (nextCard, currentCard, offsetTop) => {
    const nextCardRect = nextCard.getBoundingClientRect();
    const currentCardRect = currentCard.getBoundingClientRect();

    const offsetBottom = window.innerHeight - currentCard.clientHeight;
    const start = offsetTop;
    const end = window.innerHeight - currentCard.clientHeight;

    const progress = (start - nextCardRect.top) / (start - end);
    return Math.max(0, Math.min(1, progress));
  };

  // Update card transform based on scroll
  const updateCardTransform = (cardInner, percentage, toScale) => {
    const scale = valueAtPercentage(1, toScale, percentage);
    const brightness = valueAtPercentage(1, 0.6, percentage);

    cardInner.style.transform = `scale(${scale})`;
    cardInner.style.filter = `brightness(${brightness})`;
  };

  // Interpolate value at percentage
  const valueAtPercentage = (from, to, percentage) => {
    return from + (to - from) * percentage;
  };

  return (
    <>
 <div className="stacking-recommendations bg-black">
      {/* Top Spacing */}
      <div className="space space--small"></div>

      {/* Header */}
      <div className="text-center mb-16 px-4">
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
          Scroll down to see all recommendations
        </p>
      </div>

      {/* Cards Container */}
      <div ref={cardsContainerRef} className="cards">
        {recommendations.map((rec, index) => (
          <div
            key={rec.id}
            ref={el => (cardRefs.current[index] = el)}
            className="card"
            data-index={index}>
            <div className="card__inner">
              {/* Image Section */}
              <div className="card__image-container">
                <img
                  className="card__image"
                  src={rec.image}
                  alt={rec.name}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
              </div>

              {/* Content Section */}
              <div className="card__content">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote size={60} className="text-blue-400" />
                </div>

                {/* Header Info */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-blue-500/30 flex-shrink-0">
                      <img
                        src={rec.image}
                        alt={rec.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="card__name text-2xl font-bold text-white">
                        {rec.name}
                      </h3>
                      <p className="text-blue-400 font-semibold text-sm">
                        {rec.position} at {rec.company}
                      </p>
                    </div>
                    <a
                      href={rec.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300">
                      <Linkedin size={20} />
                    </a>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{rec.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                    <span className="italic">{rec.relationship}</span>
                  </div>
                </div>

                {/* Recommendation Text */}
                <div className="card__description-wrapper">
                  <p className="card__description text-gray-300 leading-relaxed">
                    "{rec.recommendation}"
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-6 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Recommendation {index + 1} of {recommendations.length}
                    </span>
                    <span className="text-xs text-gray-600">Posted on LinkedIn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Spacing - Prevents scrolling to next section until all cards are viewed */}
      <div className="space"></div>
      </div>

    </>
  );
};
