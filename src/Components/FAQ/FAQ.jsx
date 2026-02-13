import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import Container from '../../Components/Container';
import './FAQ.css';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    id: 1,
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. I provide detailed timelines after understanding your requirements.',
  },
  {
    id: 2,
    question: 'What is your development process?',
    answer:
      'I follow a structured approach: Discovery & Planning → Strategy & Design → Development → Testing → Deployment. Regular communication and updates throughout the entire process keep you informed.',
  },
  {
    id: 3,
    question: 'Do you offer ongoing support and maintenance?',
    answer:
      'Yes! I provide ongoing support, bug fixes, and performance optimization. Monthly or hourly maintenance packages are available based on your needs.',
  },
  {
    id: 4,
    question: 'What technologies do you specialize in?',
    answer:
      'I specialize in React, Next.js, Node.js, Express, MongoDB, and more. I stay updated with latest technologies and can work with your preferred tech stack.',
  },
  {
    id: 5,
    question: 'How do you handle revisions and feedback?',
    answer:
      "I welcome feedback and revisions. Multiple rounds of revisions are included in the project scope. I ensure you're satisfied with the final deliverable.",
  },
  {
    id: 6,
    question: 'Can you help with SEO and performance?',
    answer:
      'Absolutely! I optimize websites for search engines and performance. This includes proper meta tags, image optimization, code splitting, and Core Web Vitals optimization.',
  },
  {
    id: 7,
    question: 'What if I need responsive/mobile design?',
    answer:
      'All my projects are fully responsive and mobile-friendly. I test across all devices and browsers to ensure a perfect experience for every user.',
  },
  {
    id: 8,
    question: 'How do you handle security?',
    answer:
      'Security is paramount. I implement industry best practices including secure authentication, input validation, CORS, HTTPS, and regular security audits.',
  },
];

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleFAQ = () => {
    if (!isOpen) {
      gsap.to(contentRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
      <button
        onClick={toggleFAQ}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-800/20 transition-colors">
        <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
        <ChevronDown
          size={20}
          className={`text-blue-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div ref={contentRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
        <p className="px-6 py-4 text-gray-400 border-t border-slate-700/50">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
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

      // Animate FAQ items
      const items = gsap.utils.toArray('.faq-item');
      if (items.length > 0) {
        gsap.fromTo(
          items,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
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
        <title>FAQ - Md Tariqul Islam | Common Questions</title>
        <meta
          name="description"
          content="Frequently asked questions about web development services, pricing, process, timeline, and project requirements."
        />
        <meta
          name="keywords"
          content="FAQ, web development questions, project timeline, development cost, hiring developer"
        />
        <meta property="og:title" content="Frequently Asked Questions" />
        <meta
          property="og:description"
          content="Answers to common questions about web development and project collaboration."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://tareq.netlify.app/faq" />
      </Helmet>
      <Container>
        <div ref={containerRef} className="py-16 md:py-24">
          {/* Header */}
          <div ref={headingRef} className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Got questions? Here are some of the most common ones I get asked about my
              services.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} index={index} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <p className="text-gray-300 mb-4">Didn't find your answer?</p>
            <a
              href="https://www.linkedin.com/in/md-tariqul-islam-ab42b61a1/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
              Get in touch
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default FAQ;
