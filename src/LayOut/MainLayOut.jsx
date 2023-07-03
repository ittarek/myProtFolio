import { Outlet } from "react-router-dom";
import NavBar from "../NavigationBar/NavBar";
import Footer from "../Footer/Footer";
import "../Pages/Home/Home.css";
const MainLayOut = () => {
  return (
    <div>
    <div className="">
    <NavBar></NavBar>
    </div>
      <div className="min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayOut;
