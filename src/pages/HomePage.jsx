import React from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaProjectDiagram, FaTrophy, FaLaptopCode, FaUsers, FaGlobeAmericas } from 'react-icons/fa';

const highlightsData = [
  { id: 1, icon: FaTrophy, text: "15+ Awards in Robotics & Science" },
  { id: 2, icon: FaLaptopCode, text: "10+ Major Technical Projects" },
  { id: 3, icon: FaUsers, text: "Led Teams in AI & Embedded Systems" },
  { id: 4, icon: FaGlobeAmericas, text: "Competed Internationally" },
];

const HomePage = () => {
  return (
    <> {/* Using React Fragment to wrap multiple sections */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-black-jet"
      >
        {/* TODO: Replace with video background component */}
        {/* Optional: <div className="absolute inset-0 bg-gradient-to-b from-black-jet via-transparent to-black-jet opacity-50"></div> */}

        <div className="relative z-10 py-12"> {/* Ensure content is above any potential video/overlay */}
        {/* TODO: Animate h1 with <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}> */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-electric to-green-neon"
        >
          Shayan Doroudiani
        </h1>
        {/* TODO: Animate subtitle p with <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}> */}
        <p className="mt-6 text-xl sm:text-2xl md:text-3xl text-text-light-secondary opacity-90 max-w-3xl mx-auto">
          Inventor. Builder. Team Captain. Visionary.
        </p>
        {/* TODO: Wrap button container with <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}> for staggered button appearance. */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
          <a
            href="/resume.pdf"
            download="ShayanDoroudiani_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 border border-transparent text-base sm:text-lg font-semibold rounded-lg shadow-lg text-white bg-blue-electric hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black-jet focus:ring-blue-electric transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <FaDownload className="mr-2 sm:mr-3" /> View Resume
          </a>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 border-2 border-green-neon text-green-neon text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:bg-green-neon hover:text-black-jet focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black-jet focus:ring-green-neon transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <FaProjectDiagram className="mr-2 sm:mr-3" /> Explore My Projects
          </Link>
        </div>
      </div>
    </section>

    <section id="quick-highlights" className="py-16 sm:py-20 lg:py-24 bg-black-jet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TODO: Wrap this grid with <motion.div variants={staggerContainerVariants}> for staggered animation of highlight cards. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {highlightsData.map((highlight, index) => {
            const IconComponent = highlight.icon; // Assign component to a variable starting with uppercase
            return (
              // TODO: Wrap this card div with <motion.div variants={itemVariants} custom={index}> for individual animation.
              <div key={highlight.id} className="bg-dark-card p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-green-neon/20">
                <IconComponent className="text-6xl mb-5 text-green-neon mx-auto" />
                <p className="text-lg font-semibold text-text-light-primary">{highlight.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
};

export default HomePage;
