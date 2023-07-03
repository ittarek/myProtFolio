import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import ProtFolio from "../Pages/Protfolio/Protfolio";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/myProtFolio",
        element: <ProtFolio></ProtFolio>,
      },
      {
        path: "/about",
        element: <About></About>
      }
    ],
  },
]);
