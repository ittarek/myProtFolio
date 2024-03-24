import React, { useState } from "react";
import { Link } from "react-router-dom";
import { bubble as Menu } from "react-burger-menu";
import { Divide as Hamburger } from "hamburger-react";
import "./NabVar.css"


import Container from './../Components/Container';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/14-DWcs9X_7NRBi-zJHcyCK_VLC3TadHC/view?usp=sharing"
    );
  };

  return (
    <Container>
      <section className="flex justify-between items-center  relative z-10 bg-opacity-30  font-bold mt-5 ">
        {/* dropdown menu */}
        <div className="lg:hidden dropdown">
          <label className="text-white mt-2 lg:hidden">
            <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
          </label>
          <Menu className="-ml-5  menu menu-sm">
            <ul className="text-white">
              <li>
                <Link className="text-xl  my-3" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-xl  my-3" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-xl  my-3" to="/myProtFolio">
                  My ProtFolio
                </Link>
              </li>
              <li>
                <Link className="text-xl">
                  <button onClick={handleDownload}>Resume</button>
                </Link>
              </li>
            </ul>
          </Menu>
        </div>

        {/* my name */}
        <div className="  ">
          <Link to="/" className="font-bold text-2xl my_name">
            Md Tareq
          </Link>
        </div>

        {/* lg menu */}
        <div className="hidden w-full md:block md:w-auto logo-box">
          <ul className="menu menu-horizontal px-1 text-[#939aff] text-lg lg:flex justify-center items-center gap-5">
            <li>
              <Link
                className="focus:text-purple-100 active:text-red-700"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/myProtFolio">My ProtFolio</Link>
            </li>
            <li>
              <button className="text-xl" onClick={handleDownload}>
                Resume
              </button>
            </li>
          </ul>
        </div>
      </section>

    
    </Container>
  );
};

export default NavBar;
