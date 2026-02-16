import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '../../Components/Container';
import './SocialProof.css';
import traventCEO from '../../assets/ClientImage/ceo at travent.png';
import assadalauddin from '../../assets/ClientImage/assadAlauddin.png';
import jubaerImage from '../../assets/ClientImage/jubaer Ibn Zahir.png';
gsap.registerPlugin(ScrollTrigger);

const companies = [
  { id: 1, name: 'Google', color: 'from-blue-400 to-red-400' },
  { id: 2, name: 'Microsoft', color: 'from-blue-500 to-green-500' },
  { id: 3, name: 'Apple', color: 'from-gray-400 to-black' },
  { id: 4, name: 'Meta', color: 'from-blue-600 to-purple-600' },
  { id: 5, name: 'Amazon', color: 'from-yellow-400 to-orange-500' },
  { id: 6, name: 'Startup Co', color: 'from-green-400 to-teal-500' },
];

const testimonials = [
  {
    id: 1,
    name: 'Jubaer Ibn Zahir',
    role: 'Project Manager',
    company: 'Programming Hero',
    image: jubaerImage,
    text: 'Excellent developer! Completed our project on time with amazing quality. Highly recommend!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Faisal Alhosani',
    role: 'CEO at Travent',
    company: 'Tourism Platform',
    image: traventCEO,
    text: 'Great communication and technical skills. Made our complex requirements seem simple.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Assadaldin Osman',
    role: 'Founder at Nilvion',
    company: 'Design Agency',
    image: assadalauddin,
    text: 'Perfect collaboration! Turned our designs into reality flawlessly. 10/10 experience.',
    rating: 5,
  },
];

const SocialProof = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
          },
        });
      }

      // Animate company logos
      const logos = gsap.utils.toArray('.company-logo');
      if (logos.length > 0) {
        gsap.fromTo(
          logos,
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: 'back.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Animate testimonials
      const testimonialCards = gsap.utils.toArray('.testimonial-card');
      if (testimonialCards.length > 0) {
        gsap.fromTo(
          testimonialCards,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 65%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Trusted Clients - Md Tariqul Islam | Client Testimonials</title>
        <meta name="description" content="Work with trusted companies and satisfied clients. Professional testimonials and client reviews for web development projects." />
        <meta name="keywords" content="client testimonials, trusted developer, client reviews, professional portfolio" />
        <meta property="og:title" content="Trusted By Industry Leaders" />
        <meta property="og:description" content="Excellent feedback from clients and successful project deliveries." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://tareq.netlify.app/clients" />
      </Helmet>
      <Container>
        <div ref={containerRef} className="py-16 md:py-24">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent mb-4">
            Trusted By
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I've had the privilege to work with talented teams and individuals from
            various industries.
          </p>
        </div>

        {/* Companies Section */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Companies & Organizations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {companies.map(company => (
              <div
                key={company.id}
                className="company-logo p-6 rounded-xl bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 flex items-center justify-center group cursor-pointer">
                <div
                  className={`text-2xl font-bold bg-gradient-to-r ${company.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {company.name.charAt(0)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Client Testimonials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(testimonial => (
              <div
                key={testimonial.id}
                className="testimonial-card p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-6 text-lg italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
    </>
  );
};

export default SocialProof;
