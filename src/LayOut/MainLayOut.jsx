import { Outlet } from "react-router-dom";
import NavBar from "../NavigationBar/NavBar";
import { Footer } from "../Components/Footer/Footer";

const MainLayOut = () => {
  return (
    <>
      <NavBar />
          <Outlet />
          <Footer/>
    </>
  );
};

export default MainLayOut;
