import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center py-12 sm:py-20 px-4 bg-gradient-to-b from-blue-100 dark:from-gray-800 via-transparent to-transparent">
      {/* Adjusted min-h to align with App.jsx main's pt-20 (5rem). Adjusted py for responsiveness. Enhanced gradient. */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white">
        Shayan Doroudiani
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-8 text-blue-700 dark:text-blue-400">
        Robotics & AI Enthusiast | Inventor. Builder. Competitor. Leader.
      </h2>
      <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
        <a
          href="/resume.pdf"
          download="ShayanDoroudiani_Resume.pdf" // Added download attribute with suggested filename
          target="_blank" // Open in new tab (optional with download, but good fallback)
          rel="noopener noreferrer" // Security best practice
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          View Resume
        </a>
        <Link
          to="/projects"
          className="px-6 py-3 rounded-lg bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-900 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          Explore Projects
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 rounded-lg bg-gray-700 text-white font-semibold shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 dark:focus:ring-offset-gray-900 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
