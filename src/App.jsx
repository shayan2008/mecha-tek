import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Added Link
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Added icon imports

// Import Page Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import AwardsPage from './pages/AwardsPage';
import LeadershipPage from './pages/LeadershipPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import CertificatesPage from './pages/CertificatesPage'; // Import CertificatesPage
import Header from './components/Header'; // Import Header component

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'dark bg-black-jet text-text-light-primary' : 'bg-primary-light text-text-primary-light'}>
      <Header dark={dark} setDark={setDark} />

      {/* Routes */}
      <main className="pt-20"> {/* Increased padding to accommodate sticky header height */}
        {/* TODO: Future Advanced Features:
            - Implement Keyboard Shortcut Navigation (e.g., 'P' for Projects).
            - Add a Command Palette (Ctrl+K) for search/navigation.
            - Consider a Scroll Progress Bar.
            - Potential for an Easter Egg related to robotics.
        */}
        <Routes>
          {/* TODO: Consider wrapping HomePage with <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit"> for page transitions. */}
          <Route path="/" element={<HomePage />} />
          {/* TODO: Consider wrapping AboutPage with <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit"> for page transitions. */}
          <Route path="/about" element={<AboutPage />} />
          {/* TODO: Consider wrapping ProjectsPage with <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit"> for page transitions. */}
          <Route path="/projects" element={<ProjectsPage />} />
          {/* TODO: Consider wrapping AwardsPage with <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit"> for page transitions. */}
          <Route path="/awards" element={<AwardsPage />} />
          {/* TODO: Consider wrapping LeadershipPage with <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit"> for page transitions. */}
          <Route path="/leadership" element={<LeadershipPage />} />
          {/* TODO: Consider wrapping CertificatesPage with <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit"> for page transitions. */}
          <Route path="/certificates" element={<CertificatesPage />} />
          {/* TODO: Consider wrapping GalleryPage with <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit"> for page transitions. */}
          <Route path="/gallery" element={<GalleryPage />} />
          {/* TODO: Consider wrapping ContactPage with <motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit"> for page transitions. */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-dark-card text-text-light-secondary py-8 sm:py-12 px-4 md:px-6 border-t border-text-light-secondary/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Logo & Tagline */}
          <div>
            {/* TODO: Replace with actual logo if available */}
            <Link to="/" className="inline-block text-2xl font-bold text-blue-electric mb-2 hover:text-green-neon transition-colors duration-300">
              Shayan D.
            </Link>
            <p className="text-sm">
              Innovator. Builder. Leader. Crafting the future with code and circuits.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-md font-semibold text-text-light-primary mb-3">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="block hover:text-blue-electric text-sm transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="block hover:text-blue-electric text-sm transition-colors duration-200">About Me</Link></li>
              <li><Link to="/projects" className="block hover:text-blue-electric text-sm transition-colors duration-200">Projects</Link></li>
              <li><Link to="/contact" className="block hover:text-blue-electric text-sm transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Social Media & Copyright */}
          <div>
            <h3 className="text-md font-semibold text-text-light-primary mb-3">Connect</h3>
            <div className="flex justify-center md:justify-start gap-5 mb-4"> {/* Increased gap slightly */}
              <a href="https://github.com/shayanD" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-xl hover:text-blue-electric transition-colors duration-200"><FaGithub /></a>
              <a href="https://linkedin.com/in/shayanD" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-xl hover:text-blue-electric transition-colors duration-200"><FaLinkedin /></a>
              {/* Add more social icons if needed */}
            </div>
            <p className="text-xs">
              &copy; {new Date().getFullYear()} Shayan Doroudiani. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}