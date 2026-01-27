import { Outlet } from 'react-router-dom';
import NavBar from '../NavigationBar/NavBar';
import { Footer } from '../Components/Footer/Footer';

const MainLayOut = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayOut;
