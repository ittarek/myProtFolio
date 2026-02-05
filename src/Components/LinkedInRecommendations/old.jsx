import React from 'react'

export const old = () => {
  return (
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
  );
}



// css
/* ==================== Stacking Recommendations Styles ==================== */

.stacking-recommendations {
  width: 100%;
  min-height: 100vh;
  padding: 0;
  background: #000;
  color: white;
}

/* ==================== Cards Container ==================== */

.cards {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-rows: repeat(var(--cards-count), var(--card-height));
  gap: 40px 0;
}

/* ==================== Individual Card ==================== */

.card {
  position: sticky;
  top: 0;
  padding-top: 0; /* Will be set dynamically via JS */
}

/* ==================== Card Inner Container ==================== */

.card__inner {
  will-change: transform, filter;
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  border-radius: 24px;
  display: flex;
  overflow: hidden;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(59, 130, 246, 0.1);
  transform-origin: center top;
  transition: transform 0.1s ease-out, filter 0.1s ease-out;
  border: 2px solid rgba(55, 65, 81, 0.5);
  min-height: 500px;
}

/* ==================== Image Container ==================== */

.card__image-container {
  position: relative;
  display: flex;
  width: 40%;
  flex-shrink: 0;
  overflow: hidden;
}

.card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1;
}

/* ==================== Content Section ==================== */

.card__content {
  position: relative;
  padding: 40px 35px;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%);
}

.card__name {
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
}

.card__description-wrapper {
  flex: 1;
  overflow-y: auto;
  margin: 20px 0;
  padding-right: 10px;
}

.card__description {
  line-height: 1.7;
  font-size: 18px;
  color: #d1d5db;
  margin: 0;
}

/* Custom Scrollbar */
.card__description-wrapper::-webkit-scrollbar {
  width: 6px;
}

.card__description-wrapper::-webkit-scrollbar-track {
  background: rgba(55, 65, 81, 0.3);
  border-radius: 10px;
}

.card__description-wrapper::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.5);
  border-radius: 10px;
}

.card__description-wrapper::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.7);
}

/* ==================== Spacing Sections ==================== */

.space {
  height: 90vh;
}

.space--small {
  height: 40vh;
}

/* ==================== Hover Effects ==================== */

.card__inner:hover {
  border-color: rgba(59, 130, 246, 0.5);
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(59, 130, 246, 0.3),
    0 0 40px rgba(59, 130, 246, 0.1);
}

/* ==================== Responsive Design ==================== */

@media (max-width: 768px) {
  .card__inner {
    flex-direction: column;
    min-height: auto;
  }

  .card__image-container {
    width: 100%;
    height: 250px;
  }

  .card__image {
    aspect-ratio: 16 / 9;
  }

  .card__name {
    font-size: 24px;
  }

  .card__description {
    font-size: 16px;
  }

  .card__content {
    padding: 30px 20px;
  }

  .space {
    height: 60vh;
  }

  .space--small {
    height: 20vh;
  }
}

@media (max-width: 480px) {
  .cards {
    padding: 0 16px;
  }

  .card__inner {
    border-radius: 16px;
  }

  .card__image-container {
    height: 200px;
  }

  .card__name {
    font-size: 20px;
  }

  .card__description {
    font-size: 14px;
    line-height: 1.6;
  }

  .card__content {
    padding: 24px 16px;
  }
}

/* ==================== Animation Performance ==================== */

.card__inner {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

/* ==================== Print Styles ==================== */

@media print {
  .card {
    position: relative !important;
    page-break-inside: avoid;
  }

  .card__inner {
    transform: none !important;
    filter: none !important;
  }

  .space,
  .space--small {
    height: 0 !important;
  }
}

/* ==================== Accessibility ==================== */

@media (prefers-reduced-motion: reduce) {
  .card__inner {
    transition: none;
  }
}

/* ==================== Dark Mode Support ==================== */

@media (prefers-color-scheme: light) {
  .stacking-recommendations {
    background: #f9fafb;
  }

  .card__inner {
    background: linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%);
  }

  .card__content {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(243, 244, 246, 0.95) 100%);
  }

  .card__name {
    color: #111827;
  }

  .card__description {
    color: #374151;
  }
}
