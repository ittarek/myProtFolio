import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
const LazyHome = React.lazy(() => import("../Pages/Home/Home"));
import About from "../Pages/About/About";
import ProtFolio from "../Pages/ProtFolio/ProtFolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: (
          <React.Suspense fallback="Loading...">
            <LazyHome></LazyHome>
          </React.Suspense>
        ),
      },
      {
        path: "/myProtFolio",
        element: <ProtFolio></ProtFolio>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);
