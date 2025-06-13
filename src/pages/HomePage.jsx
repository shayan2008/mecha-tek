import React from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const HomePage = () => {
  const commonButtonStyles = "px-6 py-3 rounded-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-primary-dark transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 inline-flex items-center justify-center";

  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center py-12 sm:py-20 px-4 bg-gradient-to-b from-blue-100 dark:from-primary-dark via-transparent to-transparent">
      <div className="max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary-light dark:text-text-primary-dark pb-4 mb-8 border-b-2 border-accent-green">
          Shayan Doroudiani
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-10 text-accent-blue dark:text-accent-blue">
          Robotics & AI Enthusiast | Inventor. Builder. Competitor. Leader.
        </h2>
      </div>
      <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mt-2">
        <a
          href="/resume.pdf"
          download="ShayanDoroudiani_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`${commonButtonStyles} bg-accent-green text-primary-dark hover:bg-emerald-400 focus:ring-accent-green`}
        >
          <FaDownload className="mr-2" /> View Resume
        </a>
        <Link
          to="/projects"
          className={`${commonButtonStyles} border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-text-primary-dark focus:ring-accent-blue`}
        >
          <FaProjectDiagram className="mr-2" /> Explore My Projects
        </Link>
        <Link
          to="/contact"
          className={`${commonButtonStyles} border-2 border-text-secondary-dark text-text-secondary-dark hover:bg-text-secondary-dark hover:text-text-primary-dark focus:ring-text-secondary-dark`}
        >
          <FaEnvelope className="mr-2" /> Contact Me
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
