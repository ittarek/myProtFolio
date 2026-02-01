import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../LayOut/MainLayOut';
const LazyHome = React.lazy(() => import('../Pages/Home/Home'));
// import About from "../Pages/About/About";
import ValueProgress from '../Components/ProgressBar/ValueProgress';
const LazyPortfolio = React.lazy(() => import('../Pages/Portfolio/Portfolio'));
const LazyAbout = React.lazy(() => import('../Pages/About/About'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: '/',
        element: (
          <React.Suspense fallback={<ValueProgress></ValueProgress>}>
            <LazyHome></LazyHome>
          </React.Suspense>
        ),
      },
      {
        path: '/myProtFolio',
        element: (
          <React.Suspense fallback="Loading....">
            <LazyPortfolio></LazyPortfolio>
          </React.Suspense>
        ),
      },
      {
        path: '/about',
        element: (
          <React.Suspense fallback="Loading....">
            <LazyAbout></LazyAbout>
          </React.Suspense>
        ),
      },
    ],
  },
]);
