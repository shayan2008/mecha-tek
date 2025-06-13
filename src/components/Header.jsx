import React from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../assets/profile-placeholder.png'; // Assuming profile image is in src/assets

const Header = ({ dark, setDark }) => {
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

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 flex justify-between items-center px-6 py-3">
      <div className="flex items-center gap-2 sm:gap-3">
        <img src={profile} alt="Profile" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-blue-600" />
        <span className="font-semibold sm:font-bold text-lg sm:text-xl">Shayan Doroudiani</span>
      </div>
      {/* Navigation Links - hidden on small screens, visible on medium and up */}
      <div className="hidden md:flex items-center gap-1 md:gap-2 lg:gap-4 text-sm lg:text-base">
        {navLinks.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-150 ease-in-out ${
                isActive
                ? 'text-blue-700 dark:text-blue-400'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      {/* Mobile Menu Button Placeholder - visible only on small screens */}
      <div className="md:hidden flex items-center">
        {/* Dark Mode Toggle is always visible, but we need a menu button too */}
        <button
          onClick={() => alert("Mobile menu not implemented yet")} // Placeholder action
          className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 mr-2"
          aria-label="Open main menu"
        >
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <button
        onClick={() => setDark(d => !d)}
        className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900"
        aria-label="Toggle dark mode"
      >
        {dark ? '🌞' : '🌙'}
      </button>
    </nav>
  );
};

export default Header;
