import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import NavBar from '../NavigationBar/NavBar';
import { Footer } from '../Components/Footer/Footer';
import { ScrollToTop } from '../Components/Shared/ScrollToTop';

// Simple Scroll Progress Component (CSS only)
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 transition-all duration-100"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

// Simple Page Loader
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
      <div className="absolute inset-0 m-auto w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
    </div>
  </div>
);

// Simple Back to Top Button
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Back to top">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  ) : null;
};

const MainLayout = () => {
  const location = useLocation();
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);

  // Handle page transitions
  useEffect(() => {
    setIsPageTransitioning(true);
    const timer = setTimeout(() => {
      setIsPageTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <div className="relative bg-black text-white overflow-x-hidden">
        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Scroll to Top on Route Change */}
        <ScrollToTop />

        {/* Navigation */}
        <NavBar />

        {/* Main Content with Fade Transition */}
        <main className="min-h-screen relative">
          <div
            className={`transition-opacity duration-300 ${
              isPageTransitioning ? 'opacity-0' : 'opacity-100'
            }`}>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </div>
        </main>

        {/* Footer */}
        <Footer />

        {/* Back to Top Button */}
        <BackToTop />

        {/* Ambient Background Effects (Optional) */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
