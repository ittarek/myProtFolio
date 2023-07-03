import { Link } from "react-router-dom";
import "./NabVar.css";
import logo from "../assets/logo3.jpg";

const NavBar = () => {
  return (
    <div className="fixed  w-full bg-base-200 ">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
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
          <div className="flex logo-box">
            <img src={logo} className="w-16 rounded-full mr-4" alt="" />
            {/* <a className="btn btn-ghost normal-case text-xl">Ittarek</a> */}
            <p className="font-bold text-2xl ">Md Tareq</p>
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
