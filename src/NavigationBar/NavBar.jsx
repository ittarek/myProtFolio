import { Link } from "react-router-dom";
import "./NabVar.css";
import logo from "../assets/logo3.jpg";
import { bubble as Menu } from "react-burger-menu";
import { Spin as Hamburger } from "hamburger-react";

import { useState } from "react";
const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const showSettings = event => {
    event.preventDefault();
  };

  return (
    <div className="  w-full bg-base-200 ">
      <div className="navbar ">
        {" "}
        <div className="navbar-start">
          <div className="dropdown">
          <label
            htmlFor=""
            className="btn lg:hidden"
          >
           <Hamburger toggled={isOpen} toggle={setOpen} />
          </label>
            <Menu  className="  menu menu-sm  mt-3 z-[1] p-2 dropdown-content shadow bg-white box w-52">
              <ul className="">
                <li>
                  <Link className="text-xl text-white my-3" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-xl  text-white my-3" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-xl  text-white my-3" to="/myProtFolio">
                    My ProtFolio
                  </Link>
                </li>
                <li>
                  <a className="text-xl my-3  text-white">Blog</a>
                </li>
              </ul>
            </Menu>
          </div>
          <div className="flex logo-box">
            <Link to="/"> <img src={logo} className="w-16 rounded-full mr-4" alt="" />
        </Link>
           
            <p className="font-bold text-2xl">Md Tareq</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/myProtFolio">My ProtFolio</Link>
            </li>

            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Next</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
