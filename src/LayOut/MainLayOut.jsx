// import { Outlet, useLocation } from 'react-router-dom';
// import NavBar from '../NavigationBar/NavBar';
// import { Footer } from '../Components/Footer/Footer';
// import { ScrollToTop } from '../Components/Shared/ScrollToTop';
// import { useEffect } from 'react';

// const MainLayOut = () => {

//   return (
//     <>
//       <ScrollToTop />
//       <NavBar />
//       <div className="min-h-screen">
//         <Outlet />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default MainLayOut;

import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import NavBar from '../NavigationBar/NavBar';
import { Footer } from '../Components/Footer/Footer';
import { ScrollToTop } from '../Components/Shared/ScrollToTop';
import { ScrollProgress } from '../Components/Shared/ScrollProgress';
import { PageLoader } from '../Components/Shared/PageLoader';
import { BackToTop } from '../Components/Shared/BackToTop';
import { HelmetProvider } from 'react-helmet-async';

const MainLayout = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [prevLocation, setPrevLocation] = useState(location.pathname);

  // Handle route changes
  useEffect(() => {
    if (location.pathname !== prevLocation) {
      setIsLoading(true);
      setPrevLocation(location.pathname);

      // Simulate loading time for smooth transition
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, prevLocation]);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <HelmetProvider>
      <div className="relative bg-black text-white overflow-x-hidden">
        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Scroll to Top on Route Change */}
        <ScrollToTop />

        {/* Navigation */}
        <NavBar />

        {/* Main Content with Page Transitions */}
        <main className="min-h-screen relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              className="relative">
              <Suspense fallback={<PageLoader />}>
                {isLoading ? <PageLoader /> : <Outlet />}
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <Footer />

        {/* Back to Top Button */}
        <BackToTop />

        {/* Ambient Background Effects */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default MainLayout;