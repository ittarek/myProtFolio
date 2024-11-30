import { Outlet } from "react-router-dom";
import NavBar from "../NavigationBar/NavBar";

const MainLayOut = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default MainLayOut;
