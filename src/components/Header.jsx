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
    <nav className="sticky top-0 z-50 bg-primary-light/80 dark:bg-secondary-dark/80 backdrop-blur border-b border-secondary-light dark:border-gray-700 flex justify-between items-center px-6 py-3">
      <div className="flex items-center gap-2 sm:gap-3">
        <img src={profile} alt="Profile" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-accent-blue" /> {/* Used accent-blue for border */}
        <span className="font-semibold sm:font-bold text-lg sm:text-xl text-text-primary-light dark:text-text-primary-dark">Shayan Doroudiani</span>
      </div>
      {/* Navigation Links - hidden on small screens, visible on medium and up */}
      <div className="hidden md:flex items-center gap-1 md:gap-2 lg:gap-4 text-sm lg:text-base">
        {navLinks.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-green dark:focus:ring-offset-secondary-dark transition-colors duration-150 ease-in-out ${
                isActive
                ? 'text-accent-green dark:text-accent-green font-semibold'  // Active link
                : 'text-text-primary-light dark:text-text-primary-dark hover:text-accent-blue dark:hover:text-accent-blue' // Inactive link
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      {/* Mobile Menu Button Placeholder - visible only on small screens */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => alert("Mobile menu not implemented yet")} // Placeholder action
          className="p-2 rounded-md text-text-secondary-light dark:text-text-secondary-dark hover:bg-secondary-light dark:hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-blue mr-2"
          aria-label="Open main menu"
        >
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <button
        onClick={() => setDark(d => !d)}
        className="p-2 rounded-full text-text-secondary-light dark:text-text-secondary-dark hover:bg-secondary-light dark:hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue dark:focus:ring-offset-secondary-dark"
        aria-label="Toggle dark mode"
      >
        {dark ? '🌞' : '🌙'}
      </button>
    </nav>
  );
};

export default Header;
