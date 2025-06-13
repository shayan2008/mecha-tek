import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Shayan Doroudiani. All rights reserved.
      </footer>
    </div>
  );
}