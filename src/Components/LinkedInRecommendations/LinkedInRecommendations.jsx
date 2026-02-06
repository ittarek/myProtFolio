import { useEffect, useRef } from 'react';
import { Linkedin, Quote } from 'lucide-react';
import './Recommendations.css';

// Sample recommendations data
const recommendations = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO',
    company: 'SaralTech',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com/in/johndoe',
    date: 'December 2024',
    recommendation:
      'Tariqul is an exceptional developer with outstanding skills in React and Next.js. His ability to solve complex problems and deliver high-quality code consistently impressed our team. He was instrumental in developing our venture builder platform.',
    relationship: "John was Tariqul's manager",
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'CTO',
    company: 'Travent',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com/in/janesmith',
    date: 'January 2025',
    recommendation:
      'Working with Tariqul was a fantastic experience. His frontend expertise, particularly with React and Tailwind CSS, helped us deliver our booking platform ahead of schedule. He has excellent communication skills.',
    relationship: 'Jane worked directly with Tariqul',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    position: 'Senior Developer',
    company: 'SaralTech',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com/in/mikejohnson',
    date: 'November 2024',
    recommendation:
      "Tariqul is a skilled developer who consistently delivers exceptional work. His knowledge of modern web technologies made collaboration seamless. He's a team player who always goes the extra mile.",
    relationship: 'Mike worked with Tariqul on the same team',
  },
  {
    id: 4,
    name: 'Sarah Williams',
    position: 'Product Manager',
    company: 'Travent',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com/in/sarahwilliams',
    date: 'October 2024',
    recommendation:
      'Tariqul demonstrated exceptional technical skills and professionalism throughout our project. His attention to detail and commitment to delivering pixel-perfect implementations made him stand out.',
    relationship: 'Sarah managed Tariqul directly',
  },
];

export const LinkedInRecommendations = () => {
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;
    const cards = cardRefs.current.filter(Boolean);

    if (!cardsContainer || cards.length === 0) return;

    // Set CSS custom properties
    cardsContainer.style.setProperty('--cards-count', cards.length);

    // Wait for layout to be ready
    setTimeout(() => {
      if (cards[0]) {
        cardsContainer.style.setProperty('--card-height', `${cards[0].clientHeight}px`);
      }
    }, 100);

    // Helper: valueAtPercentage
    const valueAtPercentage = (from, to, percentage) => {
      return from + (to - from) * percentage;
    };

    // Setup scroll animation
    const handleScroll = () => {
      cards.forEach((card, index) => {
        const offsetTop = 20 + index * 20;
        card.style.paddingTop = `${offsetTop}px`;

        if (index === cards.length - 1) return;

        const toScale = 1 - (cards.length - 1 - index) * 0.1;
        const nextCard = cards[index + 1];
        const cardInner = card.querySelector('.card__inner');

        if (!nextCard || !cardInner) return;

        const nextCardRect = nextCard.getBoundingClientRect();

        const offsetBottom = window.innerHeight - card.clientHeight;
        const scrollStart = offsetTop;
        const scrollEnd = window.innerHeight - offsetBottom;

        // Calculate percentage
        let percentageY = 0;
        if (nextCardRect.top <= scrollStart && nextCardRect.top >= scrollEnd) {
          percentageY = (scrollStart - nextCardRect.top) / (scrollStart - scrollEnd);
        } else if (nextCardRect.top < scrollEnd) {
          percentageY = 1;
        }

        // Apply transformations
        const scale = valueAtPercentage(1, toScale, percentageY);
        const brightness = valueAtPercentage(1, 0.6, percentageY);

        cardInner.style.transform = `scale(${scale})`;
        cardInner.style.filter = `brightness(${brightness})`;
      });
    };

    // Initial call
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Top Spacing - prevents jumping from previous section */}
      <div className="space-small"></div>

      {/* Header Section */}
      <div className="text-center mb-16 px-4 pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
          <Linkedin size={16} className="text-blue-400" />
          <span className="text-blue-400 font-medium">LinkedIn Recommendations</span>
        </div>

        <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent mb-6">
          What People Say
        </h2>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
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
              </div>

              {/* Content Section */}
              <div className="card__content">
                {/* Quote Icon */}
                <Quote
                  size={60}
                  className="absolute top-4 right-4 opacity-10 text-blue-400"
                />

                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-blue-500/30 flex-shrink-0">
                    <img
                      src={rec.image}
                      alt={rec.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="card__title">{rec.name}</h3>
                    <p className="text-blue-600 font-semibold text-lg mb-1">
                      {rec.position} at {rec.company}
                    </p>
                    <p className="text-gray-500 text-sm">{rec.date}</p>
                  </div>
                  <a
                    href={rec.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors flex-shrink-0"
                    aria-label={`View ${rec.name}'s LinkedIn profile`}>
                    <Linkedin size={18} />
                  </a>
                </div>

                {/* Recommendation Text */}
                <p className="card__description">"{rec.recommendation}"</p>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 italic">{rec.relationship}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 
        Bottom Spacing - CRITICAL: This prevents scrolling to next section 
        until all cards are fully viewed. Adjust height based on:
        - Number of cards
        - Card height
        - Desired scroll length
        
        Formula: At least (cards.length * 100vh) for smooth experience
      */}
      <div className="space"></div>
    </section>
  );
};
