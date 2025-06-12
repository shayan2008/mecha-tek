// Import images from src/assets
import { lazy, Suspense, useState, useEffect } from 'react';
import profile from './assets/profile-placeholder.png'
import fira from './assets/fira-cup.jpg'
import swimming from './assets/Swimming.jpg'
import lineFollower from './assets/line-following-robot.jpg'
import medport from './assets/medport-science-fair.jpg'
import robocup from './assets/robocup-innovation.jpg'
import ceta from './assets/ceta-robotics-competition.jpg'
import teleSwitch from './assets/tele_switch.jpg'
import teleSwitchCircuit from './assets/tele-switch-circuit.jpg'

// Modern image component with lazy loading, blur-up effect, and error handling
const OptimizedImage = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`image-container ${isLoaded ? 'loaded' : 'loading'}`}>
      <img
        src={error ? profile : src}
        alt={alt}
        loading="lazy"
        className={`transition-all duration-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${className || ''}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        {...props}
      />
      {!isLoaded && !error && (
        <div className="image-placeholder">
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
};

// Dark mode hook
const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
};

// Images object with metadata and modern features
const images = {
  swimming: { 
    src: swimming, 
    alt: 'Swimming competition',
    category: 'sports',
    description: 'Competitive swimming achievement'
  },
  fira: { 
    src: fira, 
    alt: 'FIRA Cup robotics competition',
    category: 'robotics',
    description: 'International robotics competition'
  },
  lineFollower: { 
    src: lineFollower, 
    alt: 'Line following robot project',
    category: 'robotics',
    description: 'Autonomous line following robot'
  },
  medport: { 
    src: medport, 
    alt: 'Medport Science Fair',
    category: 'science',
    description: 'Science fair project presentation'
  },
  robocup: { 
    src: robocup, 
    alt: 'Robocup Innovation',
    category: 'robotics',
    description: 'Robocup competition innovation'
  },
  teleSwitch: { 
    src: teleSwitch, 
    alt: 'Tele Switch project',
    category: 'electronics',
    description: 'Telecommunications switch project'
  },
  teleSwitchCircuit: { 
    src: teleSwitchCircuit, 
    alt: 'Tele Switch Circuit',
    category: 'electronics',
    description: 'Circuit design for tele switch'
  },
  ceta: { 
    src: ceta, 
    alt: 'CETA Robotics Competition',
    category: 'robotics',
    description: 'CETA robotics competition achievement'
  },
  profile: { 
    src: profile, 
    alt: 'Profile picture',
    category: 'profile',
    description: 'Professional profile picture'
  }
};

// Remove the old images object and use the imported variables directly
// const images = {
//   swimming: swimming,
//   fira: fira,
//   lineFollower: lineFollower,
//   medport: medport,
//   robocup: robocup,
//   teleSwitch: teleSwitch,
//   teleSwitchCircuit: teleSwitchCircuit,
//   ceta: ceta,
//   profile: profile
// };

// Remove the imports at the top since we're using public directory
// import profile from './assets/profile-placeholder.png'
// import fira from './assets/Fira_ cup.jpg'
// import swimming from './assets/Swimming.jpg'
// import lineFollower from './assets/Line following robot.jpg'
// import medport from './assets/Medport _ SienceFair.jpg'
// import robocup from './assets/Robocup_ invation.jpg'
// import ceta from './assets/CETA_Robotics Competition.jpg'
// import teleSwitch from './assets/tele_switch.jpg'
// import teleSwitchCircuit from './assets/Tele_Switch_Circuit.jpg'

// const images = {
//   swimming: '/Swimming.jpg',
//   fira: '/Fira_ cup.jpg',
//   lineFollower: '/Line following robot.jpg',
//   medport: '/Medport _ SienceFair.jpg',
//   robocup: '/Robocup_ invation.jpg',
//   teleSwitch: '/tele_switch.jpg',
//   teleSwitchCircuit: '/Tele_Switch_Circuit.jpg',
//   ceta: '/CETA_Robotics Competition.jpg',
//   profile: '/profile-placeholder.png'
// } 

function App() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const [activeTab, setActiveTab] = useState('about');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading your portfolio...</p>
      </div>
    );
  }

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : 'light'}`}>
      <button 
        className="theme-toggle"
        onClick={() => setIsDarkMode(!isDarkMode)}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {isDarkMode ? '🌞' : '🌙'}
      </button>
      
      {/* Rest of your app content */}
      {/* ... existing code ... */}
    </div>
  );
}

export default App; 