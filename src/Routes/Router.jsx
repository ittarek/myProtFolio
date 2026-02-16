import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../LayOut/MainLayOut';

// ✅ Lazy load pages
const LazyHome = React.lazy(() => import('../Pages/Home/Home'));
const LazyPortfolio = React.lazy(() => import('../Pages/Portfolio/Portfolio'));
const LazyAbout = React.lazy(() => import('../Pages/About/About'));

// ✅ Simple loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="flex flex-col items-center gap-4">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-white text-sm">Loading...</p>
    </div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<PageLoader />}>
            <LazyHome />
          </Suspense>
        ),
      },
      {
        path: '/myProtFolio',
        element: (
          <Suspense fallback={<PageLoader />}>
            <LazyPortfolio />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<PageLoader />}>
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        // ✅ Add 404 fallback
        path: '*',
        element: (
          <Suspense fallback={<PageLoader />}>
            <LazyHome />
          </Suspense>
        ),
      },
    ],
  },
]);
