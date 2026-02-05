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
  //  =================================== another style
  // This was built using aat.js: https://github.com/TahaSh/aat


  return (
    <>
      <div class="space space--small"></div>
      <div class="cards">
        <div class="card" data-index="0">
          <div class="card__inner">
            <div class="card__image-container">
              <img
                class="card__image"
                src="https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100"
                alt=""
              />
            </div>
            <div class="card__content">
              <h1 class="card__title">Card Title</h1>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error
                nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde
                possimus quia at magnam sed cupiditate? Reprehenderit, harum!
              </p>
            </div>
          </div>
        </div>
        <div class="card" data-index="0">
          <div class="card__inner">
            <div class="card__image-container">
              <img
                class="card__image"
                src="https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100"
                alt=""
              />
            </div>
            <div class="card__content">
              <h1 class="card__title">Card Title</h1>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error
                nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde
                possimus quia at magnam sed cupiditate? Reprehenderit, harum!
              </p>
            </div>
          </div>
        </div>
        <div class="card" data-index="0">
          <div class="card__inner">
            <div class="card__image-container">
              <img
                class="card__image"
                src="https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100"
                alt=""
              />
            </div>
            <div class="card__content">
              <h1 class="card__title">Card Title</h1>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error
                nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde
                possimus quia at magnam sed cupiditate? Reprehenderit, harum!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="space"></div>
    </>
  );
};;
