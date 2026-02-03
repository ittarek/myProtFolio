import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../NavigationBar/NavBar';
import { Footer } from '../Components/Footer/Footer';
import { ScrollToTop } from '../Components/Shared/ScrollToTop';
import { useEffect } from 'react';

const MainLayOut = () => {

  return (
    <>
      <ScrollToTop />
      <NavBar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayOut;
