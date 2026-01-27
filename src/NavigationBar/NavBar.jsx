import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';
import { Divide as Hamburger } from 'hamburger-react';
import './NavBar.css';
import Container from './../Components/Container';

const RESUME_LINK =
  'https://drive.google.com/file/d/1-fKpAA8b0LoLpb05KTwZaHEVC2ZfECop/view?usp=sharing';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStateChange = useCallback(state => {
    setOpen(state.isOpen);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const handleDownload = useCallback(() => {
    window.open(RESUME_LINK, '_blank', 'noopener,noreferrer');
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/myProtFolio', label: 'My Portfolio' },
  ];

  const isActiveLink = path => location.pathname === path;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      aria-label="Main navigation">
      <Container>
        <div className="flex justify-between items-center relative z-10 font-bold md:py-5 py-3">
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="text-white focus:outline-none focus:ring-2 focus:ring-purple-400 rounded">
              <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
            </button>

            {/* Mobile Menu */}
            <Menu
              isOpen={isOpen}
              onStateChange={handleStateChange}
              customBurgerIcon={false}
              className="bg-slate-800/95 backdrop-blur-md"
              overlayClassName="fixed inset-0 bg-black/50">
              <nav className="text-white p-4" aria-label="Mobile navigation">
                <ul className="space-y-4">
                  {navLinks.map(({ to, label }) => (
                    <li key={to}>
                      <Link
                        className={`text-xl block py-2 px-4 rounded transition-colors ${
                          isActiveLink(to)
                            ? 'bg-purple-600 text-white'
                            : 'hover:bg-slate-700'
                        }`}
                        to={to}
                        onClick={closeMenu}>
                        {label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => {
                        handleDownload();
                        closeMenu();
                      }}
                      className="text-xl w-full text-left py-2 px-4 rounded hover:bg-slate-700 transition-colors">
                      Resume
                    </button>
                  </li>
                </ul>
              </nav>
            </Menu>
          </div>

          {/* Logo/Brand */}
          <div>
            <Link
              to="/"
              className="font-bold text-2xl my_name hover:text-purple-400 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 rounded px-2"
              aria-label="Home">
              Tareq
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block w-full md:w-auto">
            <ul
              className="flex justify-center items-center gap-6 text-blue-200 text-lg"
              role="menubar">
              {navLinks.map(({ to, label }) => (
                <li key={to} role="none">
                  <Link
                    to={to}
                    role="menuitem"
                    className={`px-4 py-2 rounded transition-all duration-200 ${
                      isActiveLink(to)
                        ? 'text-purple-300 bg-purple-900/30'
                        : 'hover:text-purple-300 hover:bg-slate-800/50'
                    } focus:outline-none focus:ring-2 focus:ring-purple-400`}>
                    {label}
                  </Link>
                </li>
              ))}
              <li role="none">
                <button
                  onClick={handleDownload}
                  role="menuitem"
                  className="px-4 py-2 rounded bg-purple-600 hover:bg-purple-700 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900">
                  Resume
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
