import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Added Link for CTA
import { FaDownload, FaBars, FaSun, FaMoon, FaTimes } from 'react-icons/fa'; // Added FaTimes for mobile menu close

const Header = ({ dark, setDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About Me' },
    { path: '/projects', name: 'Projects' },
    { path: '/awards', name: 'Awards' },
    { path: '/leadership', name: 'Leadership' },
    { path: '/certificates', name: 'Certificates' },
    { path: '/gallery', name: 'Gallery' },
    { path: '/contact', name: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Trigger after 50px scroll
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Common classes for NavLinks
  const navLinkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-black-jet ${
      isActive
      ? 'text-green-neon font-semibold focus:ring-green-neon'
      : 'text-text-light-secondary hover:text-blue-electric focus:ring-blue-electric'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out
        ${isScrolled || mobileMenuOpen ? 'bg-black-jet shadow-lg border-b border-bg-dark-card' : 'bg-transparent'}
        ${isScrolled && !mobileMenuOpen ? 'py-3' : 'py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Area */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-electric hover:text-green-neon transition-colors duration-300">
              {/* Possible place for <img src="/logo.svg" alt="Logo" /> */}
              Shayan D.
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1 lg:space-x-2">
              {navLinks.map(link => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={navLinkClasses}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right side: CTA, Dark Mode Toggle, Mobile Menu Button */}
          <div className="flex items-center">
            <a
              href="/resume.pdf"
              download="ShayanDoroudiani_Resume.pdf"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-blue-electric text-white text-sm font-semibold shadow-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-electric dark:focus:ring-offset-black-jet transition-all duration-300 ease-in-out mr-3"
            >
              <FaDownload className="mr-2" /> Resume
            </a>
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full text-text-light-secondary hover:text-blue-electric focus:outline-none focus:ring-2 focus:ring-offset-1 dark:focus:ring-offset-black-jet focus:ring-blue-electric transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {dark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            {/* Mobile menu button */}
            <div className="md:hidden ml-2">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-text-light-secondary hover:text-blue-electric focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-electric"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on mobileMenuOpen state */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black-jet border-t border-bg-dark-card" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    isActive
                    ? 'bg-bg-dark-card text-green-neon'
                    : 'text-text-light-secondary hover:bg-bg-dark-card hover:text-blue-electric'
                  }`
                }
                onClick={() => setMobileMenuOpen(false)} // Close menu on link click
              >
                {link.name}
              </NavLink>
            ))}
            {/* CTA in mobile menu */}
            <a
              href="/resume.pdf"
              download="ShayanDoroudiani_Resume.pdf"
              className="block w-full text-center mt-2 px-4 py-2 rounded-lg bg-blue-electric text-white text-base font-semibold shadow-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-electric dark:focus:ring-offset-black-jet transition-all duration-300 ease-in-out"
            >
              <FaDownload className="inline mr-2" /> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
